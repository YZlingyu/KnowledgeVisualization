<template>
  <div>
    <h1 class="title3">雷达图</h1>
    <hr>
    <el-row class="row1" style="border:none;">
      <el-row class="pic-group">
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./force">
            <img class="imgs" src="../../assets/radar.png"><br/>
            <span class="img-name">人工智能领域</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./tree">
            <img class="imgs" src="../../assets/radar.png"><br/>
            <span class="img-name">大数据领域</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./map">
            <img class="imgs" src="../../assets/radar.png"><br/>
            <span class="img-name">信号领域</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./map">
            <img class="imgs" src="../../assets/radar.png"><br/>
            <span class="img-name">光电领域</span>
          </router-link>
        </el-col>
        <el-col  :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <router-link to="./map">
            <img class="imgs" src="../../assets/radar.png"><br/>
            <span class="img-name">新能源领域</span>
          </router-link>
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '2'
      };
    },
    methods: {

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
