<template>
  <div>
    <h2>Esta é a descrição da pessoa: {{ name }}</h2>
    <Info compEmail="email@email.com" :email="email" :studying="studying"/>
  </div>
</template>

<script>

  import Info from './Info';

  export default {
    name: 'Person',
    data () {
      return {
        name: 'John',
        email: 'email@props.com',
        studying: true,
      }
    },
    components: {
      Info,
    }
  }
</script>