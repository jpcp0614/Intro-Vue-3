<template>
  <div>
    <button @click="primeiro(txt1, $event), segundo(txt2, $event), terceiro()">Ativar Múltiplos Eventos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: 'MultiplyEvents',
  data() {
    return {
      multiplos_eventos: "",
      txt1: "Primeiro Evento",
      txt2: "Segundo Evento",
    }
  },
  methods: {
    primeiro(txt, e) {
      this.multiplos_eventos = `${txt} Ativado!`
      console.log("Clicou")
    },
    segundo(txt, e) {
      setTimeout(() => {
        this.multiplos_eventos = `${txt} Ativado!`;
        console.log("Alterou sozinho 1000ms depois");
      }, 1000);
    },
    terceiro() {
      setTimeout(() => {
        this.multiplos_eventos = "";
        console.log("Apagou sozinho 2000ms depois")
      }, 2000);
    }
  }
}
</script>

<style scoped>
  div {
    margin: 100px;
  }
</style>