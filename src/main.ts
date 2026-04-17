import "./assets/base.css";
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";

async function bootstrap() {
  try {
    const response = await fetch("/amplify_outputs.json");
    if (!response.ok) {
      throw new Error("amplify_outputs.json not available");
    }

    const outputs = await response.json();
    Amplify.configure(outputs);
    (globalThis as typeof globalThis & { __AMPLIFY_CONFIGURED__?: boolean }).__AMPLIFY_CONFIGURED__ = true;
  } catch {
    (globalThis as typeof globalThis & { __AMPLIFY_CONFIGURED__?: boolean }).__AMPLIFY_CONFIGURED__ = false;
  }

  createApp(App).mount("#app");
}

void bootstrap();
