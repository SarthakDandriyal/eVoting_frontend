<template>
    <v-app>
      <v-main>
        <v-app-bar elevation="3">
          <v-spacer />
          <v-toolbar-title><h2>ELECTION CREATED </h2></v-toolbar-title>
          <v-spacer />
        </v-app-bar>
    <center><v-toolbar-title><h2>Voters Notified </h2></v-toolbar-title></center>

        <br />
        <br />
       <center> <v-btn @click ="signout()">Sign Out</v-btn></center>

        <br />
        <br />
        <client-only>
          <Nuxt />
        </client-only>
      </v-main>
    </v-app>
</template>

<script>
export default {
 methods:{
   async signout(){
     console.log("Working");
     window.location.href="http://localhost:8083/logout"
   }
 }
};
</script>

<style>
</style>