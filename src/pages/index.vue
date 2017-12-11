<template>
  <div id="container">
    <div id="slide1" v-bind:style="{height:height1+'px',width:width1+'px'}">
      <el-row>
        <router-link to="../"><h1 class="title">PCNData</h1></router-link>
        <router-link to="./admin/register"><el-button class="btn" style="margin-right:40px;">注册</el-button></router-link>
        <router-link to="./admin/login"><el-button class="btn">登录</el-button></router-link>
      </el-row>
      <el-row>
        <h1 class="title2">PCNData通用知识图谱可视化平台</h1>
      </el-row>
      <el-row style="text-align:center;">
        <el-button class="btn1">Try Demo</el-button>
        <router-link to="./visual/brief"><el-button class="btn1">My Graph</el-button></router-link>
        <router-link to="./dataload/data"><el-button class="btn1">My Data</el-button></router-link>
      </el-row>
      <div class="arrow-bottom arrow-box" >
        <b class="bottom"><i class="bottom-arrow1"></i><i class="bottom-arrow2"></i></b>
      </div>
    </div>
    <div id="slide2" v-bind:style="{height:height1+'px',width:width1+'px'}">
      <h1 style="margin: 0; text-align:center;height: 100px;line-height: 100px;color:#626262;">面向业务场景</h1>
      <el-card class="box-card">
        <div>
          <el-col :span="5" class="type">
            <h2 class="type-name">学术类</h2>
          </el-col>
          <el-col :span="16">
            <p class="aim" style="margin-top: 25px;">找论文</p>
            <p class="aim">找专家</p>
            <p class="aim">找专利</p>
          </el-col>
        </div>
      </el-card>
      <el-card class="box-card">
        <div>
          <el-col :span="5" class="type">
            <h2 class="type-name">创投类</h2>
          </el-col>
          <el-col :span="16">
            <p class="aim" style="margin-top: 25px;">找机构</p>
            <p class="aim">找企业家</p>
            <p class="aim">找投资</p>
          </el-col>
        </div>
      </el-card>
      <el-card class="box-card">
        <div>
          <el-col :span="5" class="type">
            <h2 class="type-name">金融类</h2>
          </el-col>
          <el-col :span="16">
            <p class="aim" style="margin-top: 25px;">找关联</p>
            <p class="aim">看图谱</p>
            <p class="aim">要分析</p>
          </el-col>
        </div>
      </el-card>
      <p style="margin: 0; text-align:center;height: 100px;line-height: 100px;color:#006699;">更多业务场景等待您的使用</p>
    </div>
  </div>
</template>

<script>
  var screenWidth = document.body.clientWidth;
  var screenHeight = document.body.clientHeight;
  export default {
    //name: 'app',
    data() {
      return {
        width1: screenWidth,
        height1: screenHeight
      }
    },
    methods: {

    },
    created(){
    },
    mounted(){
      const that = this
      window.onresize = () => {
        return (() => {
          window.width1 = document.body.clientWidth
          window.height1 = document.body.clientHeight
          that.width1 = window.width1
          that.height1 = window.height1
        })()
      }
    },
   watch: {
     width1 (val) {
       if (!this.timer) {
         this.width1 = val;
         this.timer = true;
         let that = this;
         setTimeout(function () {
           that.timer = false;
         }, 400)
       }
     },
     height1 (val) {
       if (!this.timer) {
         this.height1 = val;
         this.timer = true;
         let that = this;
         setTimeout(function () {
           that.timer = false;
         }, 400)
       }
     }
   }
  }
</script>

<style>
  #slide1{
    height: 100%;
    width: 100%;
    background: -webkit-linear-gradient(#00B7FF, #006699); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#00B7FF,#006699); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#00B7FF,#006699); /* Firefox 3.6 - 15 */
    background: linear-gradient(#00B7FF,#006699); /* 标准 */
  }
  #slide2{
    height: 100%;
    width: 100%;
    background-color: #ffffff;
  }
  .title{
    color: #ffffff;
    display: inline-block;
    margin: 20px 0 0 30px;
  }
  .btn{
    height: 30px;
    padding: 5px 20px;
    display: inline-block;
    float: right;
    margin-top: 20px;
    margin-right:20px;
  }
  .btn1{
    height: 40px;

    display: inline-block;
    margin-top: 20px;
    margin-right:20px;
  }
  .title2{
    color: #ffffff;
    font-size: 42px;
    text-align: center;
    margin: 150px auto;
  }
  .bottom{
    width:200px;
    height:200px;
    position:relative;
    left:630px;
    bottom:-170px;
    z-index: 2;/*兼容ie8-*/
    border:none;
  }
  .bottom-arrow1,.bottom-arrow2{
    width:0px;
    height:0px;
    display:block;
    position:absolute;
    left:0;
    top:0;
    z-index: 5;/*兼容ie8-*/
    border-bottom:100px transparent dashed;
    border-left:100px transparent dashed;
    border-right:100px transparent dashed;
    border-top:100px #337DB3 solid;
    overflow:hidden;
  }
  .bottom-arrow1{
    top:1px;/*重要*/
    border-top: 150px rgba(255,255,255,0.5) solid;
    opacity: 0.5;
  }
  .bottom-arrow2{
    border-top:100px #337DB3 solid;
  }
  /*-----slide2----*/
  #slide2{
    background-color: #eee;
  }
  .box-card {
    width: 80%;
    height: 155px;
    margin: 10px auto;
  }
  .el-card__body{
    padding: 0;
  }
  .type{
    margin-right: 50px;
    text-align:center;
    line-height: 105px;
  }
  .type-name,.aim{
    color:#626262;
  }
</style>
