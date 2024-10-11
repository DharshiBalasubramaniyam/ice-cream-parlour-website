import { defineNuxtPlugin } from "#imports";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
export default defineNuxtPlugin((app) => {
  app.vueApp.directive("auto-animate", vAutoAnimate);
});
