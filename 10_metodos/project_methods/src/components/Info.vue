<template>
  <div>
    <!-- v-else tem que ficar sempre abaixo do v-if -->
    <p v-if="studying">Estou estudando no momento.</p>
    <p v-else>Não estou estudando mais</p>
    <p>Utilizo as seguinte tecnologias:</p>
    <ul>
      <li>JavaScript</li>
      <li>VueJS</li>
    </ul>
    <!-- v-show simplifica o v-if/v-else -->

    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
    </div>

    <p v-show="show_email">Mande um mensagem para: {{ email }}</p>
    <br>
    <p>Para acessar o meu portfolio, <a v-bind:href="my_portfolio" target="_blank">clique aqui</a> </p>
    <br>
    <Picture />
  </div>
</template>

<script>

import Picture from './Picture';

export default {
  name: 'Info',
  data () {
    return {
      studying: true,
      show_email: false,
      email: 'info@email.com',
      my_portfolio: 'https://google.com',
      textoBotao: 'Mostrar e-mail',
    }
  },
  components: {
    Picture,
  },
  methods: {
    showEmail () {
      this.show_email = !this.show_email; //* Quando clico, aparece...se clicar novamente, esconde
      if (!this.show_email) {
        this.textoBotao = 'Mostrar e-mail';
      } else {
        this.textoBotao = 'Ocultar e-mail';
      }
    }
  }
}
</script>