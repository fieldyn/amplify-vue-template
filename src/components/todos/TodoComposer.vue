<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  isSubmitting: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  create: []
}>()

const draft = defineModel<string>({ required: true })

const canSubmit = computed(() => draft.value.trim().length > 0 && !props.isSubmitting)

function submitTodo() {
  if (!canSubmit.value) {
    return
  }

  emit('create')
}
</script>

<template>
  <section class="composer-card">
    <div class="composer-card__copy">
      <p class="composer-card__eyebrow">Capture</p>
      <h2 class="composer-card__title">Add the next move before it disappears.</h2>
      <p class="composer-card__summary">
        The input is deliberately calm: one polished field, one decisive action, and no modal friction.
      </p>
    </div>

    <form
      class="composer-form"
      @submit.prevent="submitTodo">
      <label class="composer-form__field">
        <span class="composer-form__label">New signal</span>
        <textarea
          v-model="draft"
          class="composer-form__textarea"
          rows="4"
          placeholder="Sketch the next task, promise, or sharp idea..." />
      </label>

      <div class="composer-form__footer">
        <span class="composer-form__hint">Plain text, instant sync, zero ceremony.</span>

        <button
          class="composer-form__button"
          type="submit"
          :disabled="!canSubmit">
          {{ props.isSubmitting ? 'Launching…' : 'Add todo' }}
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.composer-card {
  position: sticky;
  top: 1.5rem;
  display: grid;
  gap: 1.5rem;
  padding: 1.6rem;
  border: 1px solid var(--ix-border);
  border-radius: 28px;
  background:
    linear-gradient(180deg, rgba(12, 29, 49, 0.95), rgba(7, 18, 31, 0.92)),
    rgba(7, 18, 31, 0.92);
  box-shadow: var(--ix-shadow-soft);
  backdrop-filter: blur(18px);
}

.composer-card__copy {
  display: grid;
  gap: 0.65rem;
}

.composer-card__eyebrow {
  font-family: var(--font-tech);
  font-size: 0.72rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ix-mint);
}

.composer-card__title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 2.8rem);
  line-height: 0.98;
  letter-spacing: -0.03em;
  color: var(--ix-text);
}

.composer-card__summary {
  color: var(--ix-muted);
  font-size: 1rem;
}

.composer-form {
  display: grid;
  gap: 1rem;
}

.composer-form__field {
  display: grid;
  gap: 0.7rem;
}

.composer-form__label {
  font-family: var(--font-tech);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--ix-sand);
}

.composer-form__textarea {
  width: 100%;
  min-height: 10.5rem;
  resize: vertical;
  padding: 1.1rem 1rem;
  border: 1px solid rgba(140, 224, 255, 0.16);
  border-radius: 20px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.03), transparent),
    rgba(6, 15, 27, 0.86);
  color: var(--ix-text);
  font-size: 1.05rem;
  line-height: 1.5;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
}

.composer-form__textarea::placeholder {
  color: rgba(231, 238, 243, 0.4);
}

.composer-form__textarea:focus {
  outline: none;
  border-color: rgba(140, 224, 255, 0.5);
  box-shadow:
    0 0 0 1px rgba(140, 224, 255, 0.2),
    0 0 0 8px rgba(140, 224, 255, 0.06);
}

.composer-form__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.composer-form__hint {
  max-width: 16rem;
  color: var(--ix-muted);
  font-size: 0.92rem;
}

.composer-form__button {
  min-width: 10rem;
  padding: 0.92rem 1.3rem;
  border: 1px solid rgba(255, 201, 133, 0.22);
  border-radius: 999px;
  background: linear-gradient(135deg, #82f0d2, #8ce0ff 50%, #ffc985 100%);
  color: #04111f;
  font-family: var(--font-tech);
  font-size: 0.88rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  box-shadow: 0 18px 45px rgba(130, 240, 210, 0.18);
}

.composer-form__button:hover:enabled {
  transform: translateY(-1px);
  box-shadow: 0 22px 55px rgba(140, 224, 255, 0.25);
}

.composer-form__button:disabled {
  cursor: not-allowed;
  opacity: 0.45;
  box-shadow: none;
}

@media (max-width: 920px) {
  .composer-card {
    position: static;
  }
}
</style>
