<template>
  <div>
    <h1 class="title3">图表选择</h1>
    <hr>
    <el-row class="row1">
      <span class="para para1">直观图谱</span>
      <el-row class="pic-group">
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./force">
            <img class="imgs" src="../assets/force.png"><br/>
            <span class="img-name">网络图谱</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./tree">
            <img class="imgs" src="../assets/tree.png"><br/>
            <span class="img-name">思维导图</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./map">
            <img class="imgs" src="../assets/map.png"><br/>
            <span class="img-name">认知地图</span>
          </router-link>
        </el-col>
      </el-row>
      <!--<div class="choose-bar">
        <el-checkbox :indeterminate="isIndeterminate1" v-model="checkAll1" @change="handleCheckAllChange1">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities1" @change="handleCheckedCitiesChange1">
          <el-checkbox v-for="city in cities1" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>-->
    </el-row>
    <el-row  class="row1">
      <span class="para para1">统计图表</span>
      <el-row class="pic-group">
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./bar">
            <img class="imgs" src="../assets/bar.png"><br/>
            <span class="img-name">柱形图</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./line">
            <img class="imgs" src="../assets/line.png"><br/>
            <span class="img-name">折线图</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./pie">
            <img class="imgs" src="../assets/pie.png"><br/>
            <span class="img-name">饼状图</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./radar">
            <img class="imgs" src="../assets/radar.png"><br/>
            <span class="img-name">雷达图</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./heatmap">
            <img class="imgs" src="../assets/heatmap.png"><br/>
            <span class="img-name">热力图</span>
          </router-link>
        </el-col>
      </el-row>
      <!--<div class="choose-bar">
        <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">全选</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
          <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>-->
    </el-row>
<!--    <hr>
    <div class="tab">
      <el-tabs type="border-card">
        <el-tab-pane label="网络图谱">
          <el-row class="style-bar">
            <el-col :span="2">节点</el-col>
            <el-col :span="24">
              <span class="para">分类依据</span>
              <div class="radio-bar">
                <el-radio v-model="radio" label="1">备选项</el-radio>
                <el-radio v-model="radio" label="2">备选项</el-radio>
              </div>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="折线图"></el-tab-pane>
        <el-tab-pane label="饼状图"></el-tab-pane>
        <el-tab-pane label="柱形图"></el-tab-pane>
      </el-tabs>
    </div>-->
  </div>
</template>

<script>
  const cityOptions1 = ['网络图谱', '概念图', '思维导图', '认知地图'];
  const cityOptions2 = ['柱形图', '折线图', '饼状图', '雷达图','热力图'];
  export default {
    data() {
      return {
        activeIndex: '2'
        /*checkAll1: false,
        checkAll2: false,
        checkedCities1: [],
        cities1: cityOptions1,
        checkedCities2: [],
        cities2: cityOptions2,
        isIndeterminate1: true,
        isIndeterminate2: true,
        radio: '1'*/
      };
    },
    methods: {
     /* handleCheckAllChange1(val) {
        this.checkedCities1 = val ? cityOptions1 : [];
        this.isIndeterminate1 = false;
      },
      handleCheckedCitiesChange1(value) {
        let checkedCount = value.length;
        this.checkAll1 = checkedCount === this.cities1.length;
        this.isIndeterminate1 = checkedCount > 0 && checkedCount < this.cities1.length;
      },
      handleCheckAllChange2(val) {
        this.checkedCities2 = val ? cityOptions2 : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedCitiesChange2(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.cities2.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cities2.length;
      }*/
    }
  }
</script>

<style>
  .title3, .para{
    display: inline-block;
    margin-left:30px;
  }
  .para1{
    vertical-align: top;
    margin-right: 50px;
  }
  hr{
    border: 1px solid #c1c1c1;
  }
  .choose-bar{
    display: inline-block;
  }
  .row1{
    margin: 20px 0;
  }
  .pic-group{
    text-align: center;
    position: relative;
  }
  .imgs{
    width: 300px;
    height: 250px;
    margin: 30px auto 20px auto;
  }
  .imgs-name{
    position: absolute;
    bottom: 5px;
  }
  a{
    text-decoration: none;
    color: #636363;
  }
</style>
