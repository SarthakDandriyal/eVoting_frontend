<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar elevation="3">
          <v-spacer />
          <v-toolbar-title><h2>Election Page</h2></v-toolbar-title>
          <v-spacer />
        </v-app-bar>
        <br />
        <br />
        <client-only>
          <Nuxt />
        </client-only>
      </v-main>
    </v-app>
  </div>
</template>