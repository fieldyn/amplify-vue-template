<script setup lang="ts">
import { computed } from 'vue'

import type { TodoItem } from '@/composables/useTodos'

interface Props {
  errorMessage: string | null
  isSyncing: boolean
  items: readonly TodoItem[]
}

const props = defineProps<Props>()

const hasItems = computed(() => props.items.length > 0)
</script>

<template>
  <section class="todo-panel">
    <div class="todo-panel__header">
      <div class="todo-panel__copy">
        <p class="todo-panel__eyebrow">Workspace</p>
        <h2 class="todo-panel__title">Visible tasks, low noise.</h2>
      </div>

      <span class="todo-panel__count">{{ props.items.length }}</span>
    </div>

    <p
      v-if="props.errorMessage"
      class="todo-panel__error">
      {{ props.errorMessage }}
    </p>

    <p
      v-if="props.isSyncing"
      class="todo-panel__status">
      Syncing your board…
    </p>

    <TransitionGroup
      v-if="hasItems"
      name="todo-list"
      tag="ul"
      class="todo-panel__list">
      <li
        v-for="(item, index) in props.items"
        :key="item.id"
        class="todo-card">
        <span class="todo-card__index">{{ `0${index + 1}` }}</span>
        <p class="todo-card__content">{{ item.content }}</p>
      </li>
    </TransitionGroup>

    <div
      v-else-if="!props.isSyncing"
      class="todo-panel__empty">
      <p class="todo-panel__empty-title">No items yet.</p>
      <p class="todo-panel__empty-copy">
        Start with one clear task and let the rest of the page carry the atmosphere.
      </p>
    </div>
  </section>
</template>

<style scoped>
.todo-panel {
  display: grid;
  gap: 1rem;
  min-height: 100%;
  padding: 1.5rem;
  border: 1px solid var(--ix-border);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(10, 24, 41, 0.95), rgba(5, 14, 24, 0.96)),
    rgba(5, 14, 24, 0.96);
  box-shadow: var(--ix-shadow-soft);
  backdrop-filter: blur(16px);
}

.todo-panel__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.todo-panel__copy {
  display: grid;
  gap: 0.45rem;
}

.todo-panel__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ix-cyan);
}

.todo-panel__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.6vw, 2.8rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
}

.todo-panel__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 999px;
  background: rgba(130, 240, 210, 0.08);
  color: var(--ix-sand);
  font-family: var(--font-tech);
  font-size: 0.9rem;
  letter-spacing: 0.12em;
}

.todo-panel__error,
.todo-panel__status {
  padding: 0.85rem 0.95rem;
  border-radius: 18px;
  font-size: 0.96rem;
}

.todo-panel__error {
  border: 1px solid rgba(255, 125, 103, 0.22);
  background: rgba(255, 125, 103, 0.1);
  color: #ffd2cb;
}

.todo-panel__status {
  border: 1px solid rgba(140, 224, 255, 0.12);
  background: rgba(140, 224, 255, 0.06);
  color: var(--ix-muted);
}

.todo-panel__list {
  display: grid;
  gap: 0.85rem;
  list-style: none;
}

.todo-card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  align-items: start;
  padding: 1rem;
  border: 1px solid rgba(140, 224, 255, 0.1);
  border-radius: 22px;
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015)),
    rgba(255, 255, 255, 0.02);
  transition:
    border-color 0.25s ease,
    transform 0.25s ease,
    background-color 0.25s ease;
}

.todo-card:hover {
  transform: translateY(-2px);
  border-color: rgba(140, 224, 255, 0.26);
}

.todo-card__index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 999px;
  background: rgba(255, 201, 133, 0.09);
  color: var(--ix-sand);
  font-family: var(--font-tech);
  font-size: 0.74rem;
  letter-spacing: 0.12em;
}

.todo-card__content {
  color: rgba(245, 242, 234, 0.94);
  font-size: 1.02rem;
  line-height: 1.55;
  white-space: pre-wrap;
}

.todo-panel__empty {
  display: grid;
  place-items: center;
  gap: 0.55rem;
  min-height: 17rem;
  padding: 2rem;
  border: 1px dashed rgba(140, 224, 255, 0.18);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.02);
  text-align: center;
}

.todo-panel__empty-title {
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 0.98;
}

.todo-panel__empty-copy {
  max-width: 24rem;
  color: var(--ix-muted);
}

.todo-list-enter-active,
.todo-list-leave-active,
.todo-list-move {
  transition: all 0.3s ease;
}

.todo-list-enter-from,
.todo-list-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
