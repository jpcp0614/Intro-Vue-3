<template>
  <div>
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
  </div>
</template>

<script>

  import InputText from './Form/InputText';
  import Submit from './Form/Submit';

  export default {
    name: 'Form',
    components: {
      InputText,
      Submit
    }
  }
</script>