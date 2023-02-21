<template>
  <NavBar/>
  <MobileNavBar/>
  <Container/> 
  <MobileContainer/>
  
</template>

<script>
import Container from './components/Container.vue'
import MobileContainer from './components/MobileContainer.vue'
import NavBar from './components/NavBar.vue'
import MobileNavBar from './components/MobileNavBar.vue'

export default {
  name: 'App',
  components: {
    Container,
    NavBar,
    MobileContainer,
    MobileNavBar,
  },
}
</script>

<style> 
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
