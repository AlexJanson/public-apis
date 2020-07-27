<template>
  <div class="home">
    {{ msg }}
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      msg: `Hello World!`
    }
  }
};
</script>
