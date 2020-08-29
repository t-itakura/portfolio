<template>

  <v-app id="inspire">
    <v-card
      flat
      height="100px"
      tile
    >
    <v-app-bar dark dense fixed>
      <v-toolbar-title>My Portfolio</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-card-actions>
          <v-btn to="/" >
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn  to="/timeline">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
          <v-btn  to="/skill">
            <v-icon>mdi-folder</v-icon>
          </v-btn>
          <v-btn rounded href="https://github.com/t-itakura">
            <v-icon>mdi-github</v-icon>
          </v-btn>
      </v-card-actions>
    </v-app-bar>
    </v-card>
    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-navigation app grow v-model="bottomNav">
      <v-card-actions>
        <v-btn large rounded to="/"><v-icon>mdi-home</v-icon>About me</v-btn>
        <v-btn large rounded to="/timeline"><v-icon>mdi-account-circle</v-icon>Time Line</v-btn>
        <v-btn large rounded to="/skill"><v-icon>mdi-folder</v-icon>Skill</v-btn>
        <v-btn large rounded href="https://github.com/t-itakura"><v-icon>mdi-github</v-icon>Github</v-btn>
      </v-card-actions>
    </v-bottom-navigation>
  </v-app>
  
</template>

<script>
export default {
  name: 'App',


  data: () => ({
    hover: false,
    links: [
    ]
  }),
};
</script>
