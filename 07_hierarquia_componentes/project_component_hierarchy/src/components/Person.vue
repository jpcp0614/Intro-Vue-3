<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ name }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Person',
    data () {
      return {
        name: 'John',
      }
    }
  }
</script>