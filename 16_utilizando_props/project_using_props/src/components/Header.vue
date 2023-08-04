<template>
  <div>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">Projetos</a></li>
      <li><a href="">Contato</a></li>
      <li v-if="logged"><a href="#">Meu Perfil</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ["logged"]
}
</script>

<style scoped>
  div {
    background-color: darkgray;
    height: 50px;
    width: 500px;
  }

  ul {
    list-style: none;
    display: flex;
    font-size: 25px;
    justify-content: center;
    padding: 10px 0 0 0;
    margin: 0;
  }

  li {
    margin: auto;
  }

  a {
    color: #ddd;
    text-decoration: none;
    transition: .5s;
  }

  a:hover {
    color: turquoise;
  }
</style>