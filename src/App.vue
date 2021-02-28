<template>
<div id="app">
  <v-app id="main" dark :style="{background: $vuetify.theme.themes[theme].background}">
    <router-view />
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    theme(){
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
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
