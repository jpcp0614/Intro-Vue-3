<template>
  <div>
    <h1>{{ framework }}</h1>
    <h3>The language used is: {{ language }}</h3>

    <MultiplyEvents />
  </div>
</template>

<script>

  import MultiplyEvents from './MultiplyEvents';

  export default {
    name: 'FirstComponent',
    components: {
      MultiplyEvents,
    },
    data () {
      return {
        language: 'JavaScript',
        framework: 'Vue'
      }
    }
  }
</script>
