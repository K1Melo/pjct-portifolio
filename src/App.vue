<template>
  <HomeScreen></HomeScreen>
  <HeaderComp></HeaderComp>
  <AboutMe></AboutMe>
  <MyProjects></MyProjects>
  <MyCertificates></MyCertificates>
  <MyStudies></MyStudies>
  <MyContacts></MyContacts>
</template>

<script>
import HomeScreen from './components/HomeScreen.vue'
import HeaderComp from './components/HeaderComp.vue'
import AboutMe from './components/AboutMe.vue'
import MyProjects from './components/MyProjects.vue'
import MyCertificates from './components/MyCertificates.vue'
import MyStudies from './components/MyStudies.vue'
import MyContacts from './components/MyContacts.vue'

export default {
  name: 'App',
  components: {
    HomeScreen,
    HeaderComp,
    AboutMe,
    MyProjects,
    MyCertificates,
    MyStudies,
    MyContacts
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
