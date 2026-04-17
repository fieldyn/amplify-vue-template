import "./assets/base.css";
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import { Amplify } from "aws-amplify";

async function bootstrap() {
  try {
    const response = await fetch("/amplify_outputs.json");
    if (response.ok) {
      const outputs = await response.json();
      Amplify.configure(outputs);
    }
  } catch {
    // Amplify not configured — landing page works without it
  }

  createApp(App).mount("#app");
}

void bootstrap();
