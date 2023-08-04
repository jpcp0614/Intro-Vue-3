<template>
  <div>
    <!-- : é a mesma coisa que colocar v-bind -->
    <img :src="avatar" :alt="describe">
  </div>
</template>

<script>

export default {
  name: 'Picture',
  data () {
    return {
      avatar: '/img/avatar.png',
      describe: 'John Smith'
    }
  }
}

</script>