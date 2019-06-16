<template>
  <div class="container">
    <ErrorView :title="'Ojojoj du er ikke autentisert for å se denne siden, logg inn...'"
               :status="'401'"
               :navigateToPage="'PageLogin'"
               :navigateToText="'Navigate to loginpage'" />
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