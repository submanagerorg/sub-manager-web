<template>
<div id="app">
  <v-app id="main" dark :style="{background: $vuetify.theme.themes[theme].background}">
    <sidebar v-if="isLoggedIn"></sidebar>
    <router-view />
  </v-app>
</div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: 'App',
  computed: {
    theme() {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    },
    isLoggedIn() {
      return this.$store.state.auth.user && this.$store.state.auth.token
    }
  },
  components: {
    Sidebar
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: ;
} */
</style>
