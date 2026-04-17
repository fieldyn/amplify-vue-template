<script setup lang="ts">
import { computed, shallowRef } from 'vue'

import { useTodos } from '@/composables/useTodos'

import TodoComposer from './todos/TodoComposer.vue'
import TodoHero from './todos/TodoHero.vue'
import TodoList from './todos/TodoList.vue'

const { todos, isConnected, isSyncing, isSubmitting, errorMessage, createTodo } = useTodos()

const draft = shallowRef('')

const previewItems = computed(() => todos.value.slice(0, 3))
const todoCount = computed(() => todos.value.length)

async function handleCreate() {
  const wasCreated = await createTodo(draft.value)

  if (wasCreated) {
    draft.value = ''
  }
}
</script>

<template>
  <section class="todos-experience">
    <TodoHero
      :is-connected="isConnected"
      :preview-items="previewItems"
      :todo-count="todoCount" />

    <div class="todos-grid">
      <TodoComposer
        v-model="draft"
        :is-submitting="isSubmitting"
        @create="handleCreate" />

      <TodoList
        :error-message="errorMessage"
        :is-syncing="isSyncing"
        :items="todos" />
    </div>

    <footer class="todos-footer">
      <span class="todos-footer__eyebrow">Amplify • Gen 2</span>
      <p class="todos-footer__copy">
        Realtime updates stay in the frame, while the docs stay one click away.
        <a
          class="todos-footer__link"
          href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/">
          Review next steps
        </a>
      </p>
    </footer>
  </section>
</template>

<style scoped>
.todos-experience {
  display: grid;
  gap: 1.5rem;
  width: min(1180px, 100%);
  margin: 0 auto;
}

.todos-grid {
  display: grid;
  grid-template-columns: minmax(0, 360px) minmax(0, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.todos-footer {
  display: grid;
  gap: 0.55rem;
  padding: 0 0.35rem;
}

.todos-footer__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ix-cyan);
}

.todos-footer__copy {
  max-width: 48rem;
  color: var(--ix-muted);
  font-size: 1rem;
}

.todos-footer__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.3rem;
  color: var(--ix-sand);
}

.todos-footer__link:hover {
  color: var(--ix-cyan);
}

@media (max-width: 920px) {
  .todos-grid {
    grid-template-columns: 1fr;
  }
}
</style>
