<template>
  <v-app>
    <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app><v-toolbar-title>{{ title }}</v-toolbar-title></v-toolbar>
    <v-content>
      <v-container fluid>
        <v-layout row justify-center>
          <img src="./assets/logo.png"/>
        </v-layout>
        <v-layout row justify-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app>
      <v-spacer></v-spacer>
      <div>© dokechin{{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Ogura',
  data () {
    return {
      title: 'Ogura'
    }
  }
}
</script>

<style>
</style>
