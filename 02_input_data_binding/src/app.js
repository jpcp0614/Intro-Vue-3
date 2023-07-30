const MyAppVue = {
  data() {
    return {
      name: 'Vue 3',
      input_name: "",
    };
  },
  methods: {
    submitForm(e) {
      e.preventDefault();
      console.log(this.input_name)

      this.name = this.input_name;
    }
  }
};

Vue.createApp(MyAppVue).mount("#app");