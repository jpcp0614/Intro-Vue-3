<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ name }}</h2>
    <Info />
  </div>
</template>

<script>

  import Info from './Info';

  export default {
    name: 'Person',
    data () {
      return {
        name: 'John',
      }
    },
    components: {
      Info,
    }
  }
</script>