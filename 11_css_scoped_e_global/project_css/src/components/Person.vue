<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ name }}</h2>
    <Info />
    <Form />
  </div>
</template>

<script>

  import Info from './Info';
    import Form from './Form';

  export default {
    name: 'Person',
    data () {
      return {
        name: 'John',
      }
    },
    components: {
      Info,
      Form,
    }
  }
</script>