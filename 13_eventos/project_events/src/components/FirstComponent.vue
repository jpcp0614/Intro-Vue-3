<template>
  <div>
    <h1>{{ framework }}</h1>
    <h3>The language used is: {{ language }}</h3>
  </div>
</template>

<script>
  export default {
    name: 'FirstComponent',
    data () {
      return {
        language: 'JavaScript',
        framework: 'Vue'
      }
    }
  }
</script>
