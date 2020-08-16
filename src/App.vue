<template>

  <v-app id="inspire">
    <v-card
      flat
      height="200px"
      tile
    >
    <v-app-bar dark dense fixed>
      <v-toolbar-title>My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      
          <v-btn icon>
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-folder</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-github</v-icon>
          </v-btn>

    </v-app-bar>
    </v-card>
    <v-content>
      <Index/>
    </v-content>
  </v-app>
  
</template>

<script>
import Index from './components/Index';

export default {
  name: 'App',

  components: {
    Index,
  },

  data: () => ({
    hover: false,
  }),
};
</script>
