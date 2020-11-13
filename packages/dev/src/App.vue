<template>
  <img class="logo" alt="logo" src="./assets/web.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.logo {
  width: 50%
}
</style>