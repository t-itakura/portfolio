<template>
  <v-container fluid>
    <div id="aboutme">
    <v-container
    fluid
    >
    <v-card
      class="mt-n12 mx-auto"
    >
    <v-card-title>About me</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-row 
      class="mb-12"
      justify="space-around">
      <v-col
      :cols="8">
          <div class="body-1 mb-1">
            1992年山梨生まれ
            2015年電気通信大学を卒業後,株式会社ミライトにSEとして入社,
            大手携帯会社の基地局データ管理システムの開発を担当
          </div>
          <br>
          <div class="body-1 mb-1">
            2017年株式会社セブン&amp;アイ・ネットメディアに入社
            LOFTアプリの開発を担当
          </div>
          <br>
          <div class="body-1 mb-1">
            2019年株式会社ファンコミュニケーションズにデータ分析基盤エンジニアとして入社
            社内向けにBIツールの導入開発管理,分析基盤の開発を担当
          </div>
          <br>
          <div class="body-1 mb-1">
            得意分野はバッチ開発, データ分析基盤導入構築, データレポーティングなど
          </div>
                    
      </v-col>
      <v-col 
      :cols="4"
      
      >
      <v-avatar
      title
      size="248"
      >
      <v-img
        class="grey lighten-1"
        src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        aspect-ratio="1.7"
        fluid
        max-width="300"
        max-height="300"
      ></v-img>
      </v-avatar>
      </v-col>
      </v-row>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn large rounded><v-icon>mdi-home</v-icon>About me</v-btn>
        <v-btn large rounded><v-icon>mdi-account-circle</v-icon>Time Line</v-btn>
        <v-btn large rounded><v-icon>mdi-folder</v-icon>Skill</v-btn>
        <v-btn large rounded><v-icon>mdi-github</v-icon>Github</v-btn>
      </v-card-actions>
    </v-card-text>
      </v-card>
      </v-container>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
