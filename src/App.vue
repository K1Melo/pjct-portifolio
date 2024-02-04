<template>
  <HomeScreen></HomeScreen>
</template>

<script>
import HomeScreen from './components/HomeScreen.vue'

export default {
  name: 'App',
  components: {
    HomeScreen
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One:wght@300;400;500;600;700;800;900&display=swap');

#app {
  font-family: 'Rubik', sans-serif;
}
</style>
