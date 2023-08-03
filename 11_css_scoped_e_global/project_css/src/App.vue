<template>
  <div>
    <FirstComponent />
    <p class="paragrafo-pai-class">Parágrafo Pai</p>
    <LifeCycle />
    <Person />
  </div>
</template>

<script>
  import FirstComponent from './components/FirstComponent';
  import LifeCycle from './components/LifeCycle';
  import Person from './components/Person';

  export default {
    name: 'App',
    components: {
      FirstComponent,
      LifeCycle,
      Person,
    }
  }
</script>

<style>
  body {
    background-color: #333;
    color: #fff;
  }

  a {
    color: rgb(0, 162, 255);
  }

  .portfolio-class {
    color: #a6d16a;
    font-size: 18px;
  }
</style>
