<template>
  <div>
    //* v-else tem que ficar sempre abaixo do v-if
    <p v-if="studying">Estou estudando no momento.</p>
    <p v-else>Não estou estudando mais</p>
    <p>Utilizo as seguinte tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>VueJS</li>
    </ul>
    //* v-show simplifica o v-if/v-else
    <p v-show="show_email">Mande um mensagem para: {{ email }}</p>
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      studying: true,
      show_email: true,
      email: 'info@email.com'
    }
  }
}
</script>