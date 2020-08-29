import Vue from "vue";
import Router from "vue-router"
// 表示するコンポーネントをimport
import Index from '@/components/Index.vue'
import Skill from '@/components/Skill.vue'
import Timeline from '@/components/Timeline.vue'

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
      {
          path: '/',
          name: 'Index',
          component: Index
      },
      {
        path: '/skill',
        name: 'Skill',
        component: Skill
      },
      {
        path: '/timeline',
        name: 'Timeline',
        component: Timeline
      }
  ]
});