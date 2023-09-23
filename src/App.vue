<template>
  <div class="app">
    <!-- navBar -->
    <NavBar />
    <!-- Content -->
    <router-view />
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import NavBar from "@/components/layout/NavBar.vue";

export default defineComponent({
  components: { NavBar },
  setup(props) {
    
  }
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
