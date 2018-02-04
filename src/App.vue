<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="mr-5">{{ title }}</v-toolbar-title>
      <v-toolbar-items class="hidden-sm-and-down">
         <v-btn flat exact to="/">読み上げ</v-btn>
         <v-btn flat exact to="/setting">設定</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
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
