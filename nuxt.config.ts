export default defineNuxtConfig({
  vite: {
    css: {
      modules: {
        generateScopedName: '[hash:hex:5]'
      }
    }
  }
});
