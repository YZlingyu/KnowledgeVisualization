import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
/*-----admin-----*/
import login from '@/pages/admin/login'
import register from '@/pages/admin/register'
/*------data-----*/
import dataload from '@/pages/dataLoads/dataload'
import data from '@/components/data'
import bulkUpload from '@/components/bulkUpload'
import style from '@/components/style'
import manage from '@/components/manage'
import force from '@/components/force'
import tree from '@/components/tree'
import map from '@/components/map'
import bar from '@/components/bar'
import line from '@/components/line'
import pie from '@/components/pie'
import radar from '@/components/radar'
import heatmap from '@/components/heatmap'
/*----visual----*/
import visual from '@/pages/visual/main'
import brief from '@/pages/visual/brief'
import forceShow from '@/pages/visual/forceShow'
import treeShow from '@/pages/visual/treeShow'
import mapShow from '@/pages/visual/mapShow'
import barShow from '@/pages/visual/barShow'
import lineShow from '@/pages/visual/lineShow'
import pieShow from '@/pages/visual/pieShow'
import radarShow from '@/pages/visual/radarShow'
import heatmapShow from '@/pages/visual/heatmapShow'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/admin/login',
      name:'login',
      component: login
    },
    {
      path:'/admin/register',
      name:'register',
      component: register
    },
    {
      path:'/dataload',
      name:'dataload',
      component: dataload,
      children:[
        { path: '/dataload/data', name: 'data', component: data},
        { path: '/dataload/style', name: 'style', component: style },
        { path: '/dataload/manage', name: 'manage', component: manage },
        { path: '/dataload/bulkUpload', name: 'bulkUpload', component: bulkUpload },
        { path: '/dataload/force', name: 'force', component: force},
        { path: '/dataload/tree', name: 'tree', component: tree },
        { path: '/dataload/map', name: 'map', component: map },
        { path: '/dataload/bar', name: 'bar', component: bar },
        { path: '/dataload/line', name: 'line', component: line},
        { path: '/dataload/pie', name: 'pie', component: pie },
        { path: '/dataload/radar', name: 'radar', component: radar },
        { path: '/dataload/heatmap', name: 'heatmap', component: heatmap }
      ]
    },
    {
      path:'/visual',
      name:'visual',
      component: visual,
      children:[
        { path: '/visual/brief', name: 'brief', component: brief},
        { path: '/visual/forceShow', name: 'forceShow', component: forceShow},
        { path: '/visual/treeShow', name: 'treeShow', component: treeShow },
        { path: '/visual/mapShow', name: 'mapShow', component: mapShow },
        { path: '/visual/barShow', name: 'barShow', component: barShow },
        { path: '/visual/lineShow', name: 'lineShow', component: lineShow},
        { path: '/visual/pieShow', name: 'pieShow', component: pieShow },
        { path: '/visual/radarShow', name: 'radarShow', component: radarShow },
        { path: '/visual/heatmapShow', name: 'heatmapShow', component: heatmapShow }
      ]
    }
  ]
})
