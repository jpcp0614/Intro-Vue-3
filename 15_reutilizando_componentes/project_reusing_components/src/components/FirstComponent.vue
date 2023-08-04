<template>
  <div>
    <h1>{{ framework }}</h1>
    <h3>The language used is: {{ language }}</h3>

    <MultiplyEvents />
    <Reusing />
    <Reusing />
  </div>
</template>

<script>

  import MultiplyEvents from './MultiplyEvents';
  import Reusing from './Reusing';

  export default {
    name: 'FirstComponent',
    components: {
      MultiplyEvents,
      Reusing,
    },
    data () {
      return {
        language: 'JavaScript',
        framework: 'Vue'
      }
    }
  }
</script>
