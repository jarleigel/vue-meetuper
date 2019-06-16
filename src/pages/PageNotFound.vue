<template>
  <div class="container">
    <ErrorView :title="'Ojojoj siden du prøver å nå finnes ikke...'"
               :status="'404'"
               :navigateToPage="'PageHome'"
               :navigateToText="'Navigate back Home'" />
  </div>
</template>

<script>
  import ErrorView from '@/components/ErrorView'
  export default {
    components: {
      ErrorView
    }
  }
</script>

<style scoped>
</style>