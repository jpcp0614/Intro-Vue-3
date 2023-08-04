<template>
  <div>
    <!-- : é a mesma coisa que colocar v-bind -->
    <img :src="avatar" :alt="describe">
    <Reusing />
  </div>
</template>

<script>

import Reusing from './Reusing';

export default {
  name: 'Picture',
  components: {
    Reusing,
  },
  data () {
    return {
      avatar: '/img/avatar.png',
      describe: 'John Smith'
    }
  }
}

</script>