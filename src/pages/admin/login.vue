<template>
  <div id="login-container">
    <el-row>
      <router-link to="../"><h1 class="title">PCNData</h1></router-link>
      <router-link to="./register"><el-button class="btn" style="margin-right:40px;">注册</el-button></router-link>
    </el-row>
    <div class="card">
      <h2 class="title3">登录</h2>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm2.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        else{
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          userName: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          userName: [
            { validator: checkName, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            //alert('submit!');
            this.login();
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login(){
        console.log(this.ruleForm2.userName,this.ruleForm2.pass)
        if(!this.ruleForm2.pass || !this.ruleForm2.userName){
          alert("请将信息填写完全！");
          return;
        }else{
         /* axios.post("http://localhost:3000/users/login",{
            params:{
              userName:this.ruleForm2.userName,
              userPwd:this.ruleForm2.pass
            },
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }).then(function (res) {
            //成功获取数据
            console.log(res.status);
            if(res.status==200){

              //alert("登录成功");
              //window.location.href="../#/";
            }else{
              alert("用户名或密码错误");
            }
          }).catch(function (err) {
            //请求错误
            console.log(err);
          });*/
        }
      }
    }
  }
</script>

<style>
  #login-container{
    height: 100%;
    width: 100%;
    background: -webkit-linear-gradient(#00B7FF, #006699); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#00B7FF,#006699); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#00B7FF,#006699); /* Firefox 3.6 - 15 */
    background: linear-gradient(#00B7FF,#006699);
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
  .card{
    background-color: #ffffff;
    background-color: rgba(255,255,255,0.5);/* IE9、标准浏览器、IE6和部分IE7内核的浏览器(如QQ浏览器)会读懂 */s
    filter: Alpha(opacity=50);/* 只支持IE6、7、8、9 */
    position:static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
    *zoom:1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
    width: 400px;
    margin: 50px auto;
    padding: 20px;
    text-align: left;
  }
  .demo-ruleForm{
    position: relative;
  }
  .title3{
    text-align: center;
    color: #ffffff;
    margin: 20px auto;
    text-decoration: remove-all;
  }
  .el-form-item__label{
    text-align: left;
  }
</style>
