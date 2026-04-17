<script setup lang="ts">
import '@/assets/main.css';
import { onMounted, ref } from 'vue';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';

type TodoItem = Pick<Schema['Todo']['type'], 'id' | 'content'>;

const amplifyConfigured =
  (globalThis as typeof globalThis & { __AMPLIFY_CONFIGURED__?: boolean }).__AMPLIFY_CONFIGURED__ === true;
const client = amplifyConfigured ? generateClient<Schema>() : null;
const todos = ref<TodoItem[]>([]);

function listTodos() {
  if (!client) {
    return;
  }

  client.models.Todo.observeQuery().subscribe({
    next: ({ items }) => {
      todos.value = items;
    },
  });
}

function createTodo() {
  const content = window.prompt('Todo content')?.trim();
  if (!content) {
    return;
  }

  if (!client) {
    todos.value = [{ id: window.crypto.randomUUID(), content }, ...todos.value];
    return;
  }

  client.models.Todo.create({
    content,
  }).then(() => {
    listTodos();
  });
}

onMounted(() => {
  listTodos();
});
</script>

<template>
  <main>
    <div class="logo-container">
      <img src="/logo.png" alt="InnovatioX" class="logo" />
    </div>
    <h1>My todos</h1>
    <button @click="createTodo">+ new</button>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id">
        {{ todo.content }}
      </li>
    </ul>
    <div class="footer">
      🥳 App successfully hosted. Try creating a new todo.
      <br />
      <a href="https://docs.amplify.aws/gen2/start/quickstart/nextjs-pages-router/">
        Review next steps of this tutorial.
      </a>
    </div>
  </main>
</template>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.logo {
  max-width: 180px;
  height: auto;
  filter: drop-shadow(0 0 24px rgba(94, 206, 240, 0.25));
}

.status {
  margin: 0 0 1rem;
  color: var(--ix-text-muted);
  text-align: center;
  font-size: 0.92em;
}

.footer {
  margin-top: 1.5rem;
  text-align: center;
  color: var(--ix-text-muted);
  font-size: 0.9em;
  line-height: 1.7;
}
</style>
