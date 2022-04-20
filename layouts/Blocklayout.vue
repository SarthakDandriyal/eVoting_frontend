<template>
  <div>
    <v-app>
      <v-main>
        <v-app-bar elevation="3">
          <v-spacer />
          <v-toolbar-title><h2>Access Blocked</h2></v-toolbar-title>
          <v-spacer />
        </v-app-bar>

    <v-alert
      text
      prominent
      type="error"
      icon="mdi-cloud-alert"
    >
      Sorry, You Are Not Allowed to Access This Page 
    </v-alert>
        <br />
        <br />
        <client-only>
          <Nuxt />
        </client-only>
      </v-main>
    </v-app>
  </div>
</template>