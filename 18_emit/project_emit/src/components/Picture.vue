<template>
  <div>
    <!-- : é a mesma coisa que colocar v-bind -->
    <img :src="avatar" :alt="describe">

    <ChangeImage @change-img="trocarImagem()"/>
  </div>
</template>

<script>

import ChangeImage from './ChangeImage';

export default {
  name: 'Picture',
  components: {
    ChangeImage,
  },
  data () {
    return {
      avatar: '/img/avatar.png',
      describe: 'John Smith'
    }
  },
  methods: {
    trocarImagem() {
      this.avatar = '/img/avatar2.png'
    }
  }
}

</script>