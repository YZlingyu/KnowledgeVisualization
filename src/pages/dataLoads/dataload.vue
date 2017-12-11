<template>
  <div id="dataload-container">
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active='1'
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <router-link to="../"><h1 class="title">PCNData</h1></router-link>
          <router-link to="/dataload/data">
            <el-menu-item index="1">
              <i class="el-icon-edit"></i>
              <span slot="title" class="nav-left">数据导入</span>
            </el-menu-item>
          </router-link>
<!--
            <el-menu-item index="2">
              <i class="el-icon-edit-outline"></i>
              <span slot="title" class="nav-left">图表选择</span>
            </el-menu-item>-->


          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <router-link to="/dataload/style">
                <span style="color: #fff;">图表选择</span>
              </router-link>
            </template>
            <el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">图谱可视化</template>
                <router-link to="/dataload/force">
                  <el-menu-item index="2-1">网络图谱</el-menu-item>
                </router-link>
                <router-link to="/dataload/tree">
                  <el-menu-item index="2-2">思维导图</el-menu-item>
                </router-link>
                <router-link to="/dataload/map">
                  <el-menu-item index="2-3">思维地图</el-menu-item>
                </router-link>
              </el-menu-item-group>

              <el-menu-item-group>
                <template slot="title">统计分析可视化</template>
                <router-link to="/dataload/bar">
                  <el-menu-item index="2-4">柱状图</el-menu-item>
                </router-link>
                <router-link to="/dataload/line">
                  <el-menu-item index="2-5">折线图</el-menu-item>
                </router-link>
                <router-link to="/dataload/pie">
                  <el-menu-item index="2-6">饼状图</el-menu-item>
                </router-link>
                <router-link to="/dataload/radar">
                  <el-menu-item index="2-7">雷达图</el-menu-item>
                </router-link>
                <router-link to="/dataload/heatmap">
                  <el-menu-item index="2-8">热力图</el-menu-item>
                </router-link>
              </el-menu-item-group>

            </el-menu-item-group>
          </el-submenu>

          <router-link to="/dataload/manage">
            <el-menu-item index="3">
              <i class="el-icon-goods"></i>
              <span slot="title" class="nav-left">数据管理</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <span class="loggout span">退出</span>
          <span class="user span">史迪仔</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        loginFlag: false
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    created(){
     // var activeIndex;
     /* if(window.location.href=="http://localhost:8080/#/dataload/data"){
        this.activeIndex = '1';
      }else if(window.location.href=="http://localhost:8080/#/dataload/manage"){
        this.activeIndex = '3';
      }else{
        this.activeIndex = '2';
      }
      console.log(window.location.href);
      console.log(this.activeIndex);*/
    },
   /* mounted(){
      this.checkLogin();
    },
    methods:{
      checkLogin(){
        axios.get("/users/checkLogin").then((response)=>{
          var res = response.data;
          var path = this.$route.pathname;
          if(res.status=="0"){
            this.$store.commit("updateUserInfo",res.result);
            this.loginModalFlag = false;
          }else{
            if(this.$route.path!="/goods"){
              this.$router.push("/goods");
            }
          }
        });
      }
    }*/
  }
</script>

<style>
  #dataload-container{
    height: 100%;
  }
  .el-header {
    background-color: #545c64;
    color: #cccccc;
    line-height: 60px;
  }

  .el-container{
    height: 100%;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  a{
    text-decoration: none;
  }
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-menu-vertical-demo{
    height: 100%;
  }
  .el-aside{
    line-height: 50px;
  }
  #top-bar{
    background-color: #00B7FF;
  }
  .title{
    color: #ffffff;
    display: inline-block;
    font-size: 24px;
  }
  .span{
    float: right;
    color: #ccc;
    margin: 0px 20px;
  }
  .btn-loggout{
    height: 30px;
    padding: 5px 20px;
    display: inline-block;
    background-color: #00B7FF;
    color: #ffffff;
    border: none;
    float: right;
    margin-top: 20px;
    margin-right:20px;
  }
</style>
