export default defineNuxtConfig({
  vite: {
    build: {
      cssCodeSplit: false
    }
  },
  experimental: {
    inlineSSRStyles: false
  }
});
