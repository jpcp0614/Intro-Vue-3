<template>
  <main>
    <h2>Meu formulário</h2>

    <form action="">
      <div>
        <InputText />
      </div>
      <div>
        <InputText />
      </div>
      <div>
        <Submit />
      </div>
    </form>
  </main>
</template>

<script>

  import InputText from './Form/InputText';
  import Submit from './Form/Submit';

  export default {
    name: 'Form',
    components: {
      InputText,
      Submit
    },
    methods: {
      enviarForm() {
        console.log('Enviou o formulário');
      }
    }
  }
</script>