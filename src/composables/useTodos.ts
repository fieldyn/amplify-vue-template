import { generateClient } from 'aws-amplify/data'
import { onMounted, onUnmounted, readonly, ref, shallowRef } from 'vue'

import type { Schema } from '../../amplify/data/resource'

export type TodoItem = Pick<Schema['Todo']['type'], 'id' | 'content'>

const amplifyConfigured =
  (globalThis as typeof globalThis & { __AMPLIFY_CONFIGURED__?: boolean }).__AMPLIFY_CONFIGURED__ === true

const client = amplifyConfigured ? generateClient<Schema>() : null

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'An unexpected error interrupted the todo flow.'
}

export function useTodos() {
  const todos = ref<TodoItem[]>([])
  const isConnected = shallowRef(Boolean(client))
  const isSyncing = shallowRef(Boolean(client))
  const isSubmitting = shallowRef(false)
  const errorMessage = shallowRef<string | null>(null)

  let subscription: { unsubscribe(): void } | null = null

  function startSync() {
    if (!client) {
      isSyncing.value = false
      return
    }

    subscription = client.models.Todo.observeQuery().subscribe({
      next: ({ items }) => {
        todos.value = items
        isSyncing.value = false
        errorMessage.value = null
      },
      error: (error) => {
        errorMessage.value = getErrorMessage(error)
        isSyncing.value = false
      },
    })
  }

  async function createTodo(content: string) {
    const trimmedContent = content.trim()

    if (!trimmedContent) {
      errorMessage.value = 'Write something first, then send it to the board.'
      return false
    }

    errorMessage.value = null
    isSubmitting.value = true

    try {
      if (!client) {
        todos.value = [{ id: window.crypto.randomUUID(), content: trimmedContent }, ...todos.value]
        return true
      }

      await client.models.Todo.create({
        content: trimmedContent,
      })

      return true
    } catch (error) {
      errorMessage.value = getErrorMessage(error)
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  onMounted(() => {
    startSync()
  })

  onUnmounted(() => {
    subscription?.unsubscribe()
  })

  return {
    todos: readonly(todos),
    isConnected: readonly(isConnected),
    isSyncing: readonly(isSyncing),
    isSubmitting: readonly(isSubmitting),
    errorMessage: readonly(errorMessage),
    createTodo,
  }
}
