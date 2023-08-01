<template>
  <div>
    <FirstComponent />
    <LifeCycle />
  </div>
</template>

<script>
  import FirstComponent from './components/FirstComponent';
  import LifeCycle from './components/LifeCycle';

  export default {
    name: 'App',
    components: {
      FirstComponent,
      LifeCycle
    }
  }
</script>
