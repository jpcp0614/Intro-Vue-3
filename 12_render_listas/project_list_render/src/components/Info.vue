<template>
  <div>
    <!-- v-else tem que ficar sempre abaixo do v-if -->
    <p v-if="studying">Estou estudando no momento.</p>
    <p v-else>Não estou estudando mais</p>
    <p>Utilizo as seguinte tecnologias para back-end:</p>
    <ul>
      <li v-for="(tech, index) in back_tech" v-bind:key="index">{{ tech }}</li>
    </ul>
    <br>
    <p>Utilizo as seguintes tecnologias para front-end:</p>
    <ul>
      <li v-for="tech in front_tech" :key="tech.id">{{ tech.language }}</li>
    </ul>

    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
    </div>

    <p v-show="show_email">Mande um mensagem para: {{ email }}</p>
    <br>
    <p class="portfolio-class">Para acessar o meu portfolio, <a v-bind:href="my_portfolio" target="_blank">clique aqui</a> </p>
    <br>
    <Picture />
  </div>
</template>

<script>

import Picture from './Picture';

const back_tech = ['JavaScript', 'SQL', 'Python'];

const front_tech = [
  { id: 1, language: 'JavaScript' },
  { id: 2, language: 'TypeScript' },
  { id: 3, language: 'Ruby' },
];

export default {
  name: 'Info',
  data () {
    return {
      studying: true,
      show_email: false,
      email: 'info@email.com',
      my_portfolio: 'https://google.com',
      textoBotao: 'Mostrar e-mail',
      back_tech: back_tech,
      front_tech: front_tech,
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

<style>
  .paragrafo-pai-class {
    color: blueviolet;
    font-size: 20px;
  }
</style>