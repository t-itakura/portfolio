<template>
    <v-container 
    fluid
    dark
    dense
    >
    <v-row
    class="mb-12"
    justify="space-around">
    <v-card-title>Timeline</v-card-title>
    </v-row>

    <v-timeline align-top
    :dense="dense"
    >

    <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
    >
      <v-card
      :color="item.color"
      dark>
      <v-card-title 
      class="item.color"
      >
      {{item.title}}
      </v-card-title>
      <v-card-text class="white text--primary">
              <div class="mt-1 black--text font-weight-bold">
                  <p v-if="item.university">研究内容</p>
                  <p v-else>担当業務</p>
              </div>
              <div>
                  {{item.text}}
              </div>
              <div class="mt-1 black--text font-weight-bold">
                  <p v-if="item.university">研究結果</p>
                  <p v-else>獲得スキル</p>
              </div>
              <div v-if="item.university" >
                  <a href="http://entcog.c.ooco.jp/entcog/contents/symposium/date/2015/2-2-p.pdf" target="_blank" rel="noopener noreferrer">カーリングプレイヤの思考過程に関する認知科学的研究</a>
              </div>
              <div v-else>
                  {{item.skill}}
              </div>
              <div class="mt-2">
                  <v-icon class="black--text text--lighten-4">
                      mdi-calendar-text
                  </v-icon>
                  <span v-if="item.university" class="black--text font-weight-bold"> {{item.year}} graduated</span>
                  <span v-else class="black--text font-weight-bold"> {{item.year}} joined</span>
              </div>
            <v-icon size="10">mdi-calendar-text</v-icon>
      </v-card-text>
      </v-card>
    </v-timeline-item>
    </v-timeline>
    </v-container>
</template>

<script>
export default {
    data: () => ({
    show: false,
    items: [
      {
          university: 'True',
          title: '電気通信大学',
          year: '2015/03',
          color: 'red lighten-2',
          icon: 'mdi-airboallon',
          text: 'カーリングを題材にした認知化学的研究',
          skill: 'http://entcog.c.ooco.jp/entcog/contents/symposium/date/2015/2-2-p.pdf'
      },
      { 
          title: '株式会社ミライト',
          year: '2015/04',
          color: 'green lighten-1',
          icon: 'mdi-airboallon',
          text: '大手携帯会社の基地局データ管理システムの開発を担当。バッチ開発、BIツールの導入、データ基盤の構築、運用など',
          skill: 'C, java, Oracle, WindowsServer, SQLServer, SVN, MSBI, DWHの知識'
      },
      { 
          title: '株式会社セブンアンドアイ・ネットメディア',
          year: '2017/10',
          color: 'green lighten-1',
          icon: 'mdi-airboallon',
          text: 'LOFTアプリCRM対応プロジェクトに参画。主にサブリーダーとしてバッチ開発の設計運用までを担当、他にもAPI開発、分析基盤の構築など',
          skill: 'Spring Batch, PHP, Falcon, BigQuery, サーバーのHA化, Rundeck, GCS, Mysql'
      },
      { 
          title: '株式会社ファンコミュニケーションズ',
          year: '2019/01',
          color: 'green lighten-1',
          icon: 'mdi-airboallon',
          text: '分析基盤エンジニアとして入社、分析基盤の構築、BIツールの導入、レポーティングなどを担当、他にもwebアプリケーションの開発,分析基盤と外部APIの連携業務なども担当,現在は業務用SaaSの開発DWHのGKE移行作業に着手中',
          skill: 'Docker, Python, Digdag, Embulk, AWS, S3, Redshift, Django, Zendesk, Hubspot, CloudRun, Firebase'
      },
    ],
    })
}
</script>