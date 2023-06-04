export default defineNuxtConfig({
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('components/ui1/')) {
              return 'ui1';
            }

            if (id.includes('components/ui2/')) {
              return 'ui2';
            }

            return 'entry';
          }
        }
      }
    }
  }
});
