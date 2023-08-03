<template>
  <div>
    <FirstComponent />
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
