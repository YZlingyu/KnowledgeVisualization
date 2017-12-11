<style lang="stylus" type="text/stylus">
  @import "../../common/stylus/menuConfig.styl"
</style>
<template>
  <div>
    <h1 class="title3">图表总览</h1>
    <hr>
    <el-select v-model="value" placeholder="请选择数据集" class="datasetChoose">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select><br/>
    <!--<div id="main1" class="pic"><force-graph></force-graph></div>
    <div id="main2" class="pic"><tree-graph></tree-graph></div>
    <div id="main3" class="pic"><map-graph></map-graph></div>
    <div id="main4" class="pic"><bar-graph></bar-graph></div>
    <div id="main5" class="pic"><heatmap-graph></heatmap-graph></div>
    <div id="main6" class="pic"><line-graph></line-graph></div>
    <div id="main7" class="pic"><pie-graph></pie-graph></div>
    <div id="main8" class="pic"><radar-graph></radar-graph></div>-->
    <div>
      <Bloom-menu
        :iconImgArr="iconImgArr"
        class="menu-center-wrapper"
        :radius="100"
      >
        <!--可配置参数,默认有缺省值-->
        <!--:radius="radius"-->
        <!--:startAngle="startAngle"-->
        <!--:endAngle="endAngle"-->
        <!--:itemNum="itemNum"-->
        <!--:animationDuration="animationDuration"-->
        <!--:itemAnimationDelay="itemAnimationDelay"-->
      </Bloom-menu>
    </div>
  </div>
</template>

<script>
  import barGraph from "../../components/graph/barGraph.vue"
  import forceGraph from "../../components/graph/forceGraph.vue"
  import heatmapGraph from "../../components/graph/heatmapGraph.vue"
  import lineGraph from "../../components/graph/lineGraph.vue"
  import mapGraph from "../../components/graph/mapGraph.vue"
  import pieGraph from "../../components/graph/pieGraph.vue"
  import radarGraph from "../../components/graph/radarGraph.vue"
  import treeGraph from "../../components/graph/treeGraph.vue"
  //import menu from "../../components/Menu//menu.vue"
  import menu from '../../components/Menu/menu.vue'
  // 图片的icon
  import house from '../../common/icon/house.svg'
  import datas from '../../common/icon/data.svg'
  import info from '../../common/icon/info.svg'
  import money from '../../common/icon/money.svg'
  import phone from '../../common/icon/phone.svg'
  import user from '../../common/icon/user.svg'
  import card from '../../common/icon/card.svg'
  import liuyangtiao from '../../common/icon/liuyangtiao.svg'

  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '人工智能领域'
        }, {
          value: '选项2',
          label: '大数据领域'
        }, {
          value: '选项3',
          label: '信号领域'
        }, {
          value: '选项4',
          label: '光电领域'
        }, {
          value: '选项5',
          label: '新能源领域'
        }],
        value: ''
      }
    },
    computed: {
      iconImgArr () {
        let tmp = []
        // 分别指定图标,名称， 以及background-size属性
        tmp.push(this.genarateIconObj(house, 'house', '50'))
        tmp.push(this.genarateIconObj(datas, 'datas', '50'))
        tmp.push(this.genarateIconObj(info, 'info', '50'))
        tmp.push(this.genarateIconObj(money, 'money', '50'))
        tmp.push(this.genarateIconObj(phone, 'phone', '50'))
        tmp.push(this.genarateIconObj(user, 'user', '50'))
        tmp.push(this.genarateIconObj(card, 'card', '50'))
        tmp.push(this.genarateIconObj(liuyangtiao, 'liuyangtiao', '50'))
        return tmp
      }
    },
    methods: {
      // 分别指定图标的url ,名称， 以及background-size属性
      genarateIconObj (url, name, size) {
        let tmp = {}
        tmp.iconUrl = url
        tmp.iconName = name
        tmp.iconSize = size
        return tmp
      }
    },
    components:{
      'Bloom-menu': menu
     }
  }
</script>

<style>

  .title3, .para{
    display: inline-block;
    margin-left:30px;
  }
  .datasetChoose{
    margin-left:30px;
  }
  .pic{
    display: inline-block;
    width: 45%;
    background-color: #ffffff;
  }
</style>
