<template>
  <div>
    <h1 class="title3">地图</h1>
    <hr>
    <el-row>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <div class="box left-box">
          <h2 class="title4">属性选择</h2>
          <el-row class="attribute-row">
            <span class="label1">数据集选择</span>
            <el-select v-model="value" placeholder="请选择" class="input1">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">添加节点</span>
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect" class="input2">
              <i
                class="el-icon-edit el-input__icon"
                slot="suffix"
                @click="handleIconClick">
              </i>
              <template slot-scope="props">
                <div class="name block" style="width: 60px;">{{ props.item.name }}</div>
                <div class="log block">{{ props.item.log }}</div>
                <div class="lat block">{{ props.item.lat }}</div><br/>
              </template>
            </el-autocomplete>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">节点半径</span>
            <el-input v-model="input1" placeholder="" class="input1 input2"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">节点颜色</span>
            <el-input v-model="input2" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color1"></el-color-picker>
            </div>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">选中颜色</span>
            <el-input v-model="input3" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color2"></el-color-picker>
            </div>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
        <div class="box right-box">
          <map-graph></map-graph>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import mapGraph from "./graph/mapGraph.vue"
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: '#409EFF',
        input3: '',
        input1: '',
        input2: '',
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
        value: '',
        restaurants: [],
        state1: ''
      }
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
         return [
          { "name": "北京", "log": "116.3", "lat":"39.9" },
          { "name": "上海", "log": "121.4", "lat":"31.2" },
          { "name": "桂林", "log": "110.3", "lat":"25.3" },
          { "name": "乌鲁木齐", "log": "87.6", "lat":"43.8" },
          { "name": "西藏", "log": "91.2", "lat":"29.7" }
        ];
      },
      handleSelect(item) {
        this.state1 = item.name+ " "+item.log+" "+item.lat;
          console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
      if(document.getElementsByClassName("left-box")[0].offsetHeight<document.getElementsByClassName("right-box")[0].offsetHeight){
        document.getElementsByClassName("left-box")[0].style.height=document.getElementsByClassName("right-box")[0].offsetHeight-20+"px";
      }
    },
    components:{
      mapGraph
    }
  };
</script>

<style scoped>
  .title3, .para{
    display: inline-block;
    margin-left:30px;
  }
  .primary{
    float: right;
    margin-right: 20px;
    margin-top: 15px;
  }
  .box{
    width: 90%;
    min-height: 634px;
    height: 100%;
    margin: 10px auto;
    padding: 10px 20px;
    background-color: #ffffff;
    border-radius: 5px;
  }
  .left-box{
    width: 88%;
  }
  .title4{
    font-size: 20px;
    margin-bottom: 20px;
  }
  .attribute-row{
    margin: 5px 0 10px 0;
  }
  .label1, .block{
    display: inline-block;
  }
  .label1{
    height: 30px;
    line-height: 30px;
    vertical-align: top;
  }
  .input1{
    display: inline-block;
    width: 200px;
    margin-left: 10px;
  }
  .el-input__inner{
    height: 30px;
  }
  .el-color-picker__trigger{
    height: 30px;
    width: 30px;
    margin-left: 10px;
    display: inline-block;
  }
  .block, .el-color-picker{
    height: 30px;
    width: 30px;
  }
  .input2{
    margin-left: 26px;
    width: 200px;
    vertical-align: top;
  }
  .option{
    color: #ccc;
    font-size:12px;
    margin-left: 95px;
  }
  .my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

  .name {
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .block{
    display: inline-block;
  }

  .highlighted .addr {
    color: #ddd;
  }
  }
  }
</style>
