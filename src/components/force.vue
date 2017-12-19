<template>
  <div>
    <h1 class="title3">网络图谱</h1>
    <el-button type="primary" class="primary" @click="handleSave();">保存</el-button>
    <hr>
    <el-row>
      <el-col :xs="24" :sm="24" :md="10" :lg="10" :xl="10">
        <div class="box left-box">
          <h2 class="title4">属性选择</h2>
          <el-row class="attribute-row">
            <span class="label1">数据集选择</span>
            <el-select v-model="datatoload.value1" placeholder="请选择" class="input1">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">节点层级数</span>
            <el-input v-model="datatoload.input1" placeholder="" class="input1"></el-input><br/>
            <span class="option">请输入您想查看几跳的知识数据</span>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">节点半径</span>
            <el-input v-model="datatoload.input2" placeholder="" class="input1 input2"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">节点颜色</span>
            <el-input v-model="datatoload.input3" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color1"></el-color-picker>
            </div><br/>
            <span class="option">请按照节点主次顺序填写颜色，中间用","隔开</span>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">选中颜色</span>
            <el-input v-model="datatoload.input4" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color2"></el-color-picker>
            </div>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">选中半径</span>
            <el-input v-model="datatoload.input5" placeholder="" class="input1 input2"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">关系选择</span>
            <el-input v-model="datatoload.input6" placeholder="全部" class="input2"></el-input><br/>
            <span class="option">请填写需要展示的节点关系，中间用","隔开</span>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">连线宽度</span>
            <el-input v-model="datatoload.input7" placeholder="" class="input2"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">连线颜色</span>
            <el-input v-model="datatoload.input8" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color3"></el-color-picker>
            </div>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">文字字体</span>
            <el-select v-model="datatoload.value2" placeholder="请选择" class="input2">
              <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">文字字号</span>
            <el-input v-model="datatoload.input9" placeholder="" class="input2"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">文字颜色</span>
            <el-input v-model="datatoload.input10" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color4"></el-color-picker>
            </div>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
        <div class="box right-box">
          <force-graph :dataset="datatoload.value1" :nodeLevel="datatoload.input1" :nodeRadius="datatoload.input2" :nodeColor="datatoload.input3" :chooseColor="datatoload.input4" :chooseRadius="datatoload.input5" :relationship="datatoload.input6" :linkWidth="datatoload.input7" :linkColor="datatoload.input8" :textFont="datatoload.value2" :textSize="datatoload.input9" :textColor="datatoload.input10"></force-graph>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import axios from 'axios'
  import forceGraph from "./graph/forceGraph.vue"
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: '#409EFF',
        color3: '#409EFF',
        color4: '#409EFF',
        datatoload:{
          input: '',
          input1: '',
          input2: '',
          input3: '',
          input4: '',
          input5: '',
          input6: '',
          input7: '',
          input8: '',
          input9: '',
          input10: '',
          value1: '',
          value2: ''
        },
        options1: [{
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
        options2: [{
          value: '选项1',
          label: 'Microsoft Sans Serif'
        }, {
          value: '选项2',
          label: 'SimHei'
        }, {
          value: '选项3',
          label: 'SimSun'
        }, {
          value: '选项4',
          label: 'KaiTi'
        }, {
          value: '选项5',
          label: 'STXinwei'
        }]
      }
    },
    components:{
        forceGraph
    },
    mounted(){
      if(document.getElementsByClassName("left-box")[0].offsetHeight<document.getElementsByClassName("right-box")[0].offsetHeight){
        document.getElementsByClassName("left-box")[0].style.height=document.getElementsByClassName("right-box")[0].offsetHeight-20+"px";
      }
    },
    watch:{
      color1(){
        this.input2 = this.color1;
      },
      color2(){
        this.input3 = this.color2;
      },
      color3(){
        this.input6 = this.color3;
      }
    },
    methods:{
      handleSave(){
        axios.post("",{
          params:{
            dataset: this.value1,
            objectName: this.input1,
            rectColor: this.color1,
            selectColor: this.color2,
            fontFamily: this.value2,
            fontSize: this.input5,
            fontColor: this.color3
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
        });
      }
    }
  };
</script>

<style>
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
</style>
