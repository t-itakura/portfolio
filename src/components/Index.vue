<template>
  <v-container fluid>
    <div id="aboutme">
    <v-container
    fluid fill-height>

      <v-row>
            <v-card-title>About me</v-card-title>
      </v-row>
    <v-divider class="mx-6"></v-divider>
      <v-row 
      class="mb-12"
      justify="space-around">
      <v-col
      :cols="8">
          <div class="body-1 mb-1">
            はじめまして itakuraと申します.<br>
            2015年電気通信大学を卒業後
            3社でエンジニアとして経験を積んできました.
            これまで業務用システムの構築, ビッグデータ基盤構築, スマホアプリのフロントエンド,<br>
            バックエンド開発,WebAPIの開発などを行ってきました.
          </div>
          <br>
          <div class="body-1 mb-1">
            得意分野はバッチ開発, データ分析基盤の構築, データ活用(レポーティング)です.
          </div>
          <br>
          <div class="body-1 mb-1">
            現在は業務支援SaaSの開発, DWHのGKE化に着手しています.
          <br>
          </div>
                    
      </v-col>
      <v-col 
      :cols="4"      
      >
      <v-img
        src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"
        max-height="248"
        max-width="248"
      ></v-img>
      </v-col>
      </v-row>


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
