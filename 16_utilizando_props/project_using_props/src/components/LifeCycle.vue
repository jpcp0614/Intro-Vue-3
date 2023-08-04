<template>
  <div>
    <h1>My technology is: {{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data () {
    return {
      name: 'I don\'t know, yet!'
    };
  },
  created () { //* hook
    setTimeout(() => {
      this.name = 'React'
      this.LifeCycle ();
    }, 2000);

  },
  mounted () { //* hook superior ao created
    setTimeout(() => {
      this.name = 'Vue'
      this.LifeCycle ();
    }, 3000);

  },
  methods: {
    LifeCycle () {
      console.log("Executou")
    }
  }
}
</script>