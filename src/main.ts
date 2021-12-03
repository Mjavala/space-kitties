import { createApp } from "vue";
import App from "./App.vue";
// @ts-ignore
import AOS from "aos";
import "aos/dist/aos.css";

createApp(App)
  .use(AOS.init({ duration: 1500 }))
  .mount("#app");
