<template>
  <div>
    <h1 class="title3">雷达图</h1>
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
            <span class="label1">分析对象</span>
            <el-input v-model="input1" placeholder="" class="input1 input2"></el-input><br/>
            <span class="option">请输入您想查看所有对象的名称</span>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">网格半径</span>
            <el-input v-model="input2" placeholder="" class="input1 input2"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">节点颜色</span>
            <el-input v-model="input3" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color1"></el-color-picker>
            </div>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">区域颜色</span>
            <el-input v-model="input4" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color2"></el-color-picker>
            </div>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">区域透明度</span>
            <el-input v-model="input5" placeholder="请填写0-1的数字" class="input1"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">网格线宽度</span>
            <el-input v-model="input6" placeholder="" class="input1"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">网格颜色</span>
            <el-input v-model="input7" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color3"></el-color-picker>
            </div>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">文字字体</span>
            <el-input v-model="input8" placeholder="" class="input2"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">文字字号</span>
            <el-input v-model="input9" placeholder="" class="input2"></el-input>
          </el-row>
          <el-row class="attribute-row">
            <span class="label1">文字颜色</span>
            <el-input v-model="input10" placeholder="" class="input1 input2"></el-input>
            <div class="block">
              <el-color-picker v-model="color4"></el-color-picker>
            </div>
          </el-row>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
        <div class="box right-box">
          <radar-graph></radar-graph>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import radarGraph from "./graph/radarGraph.vue"

  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: '#409EFF',
        color3: '#409EFF',
        color4: '#409EFF',
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
    mounted(){
      if(document.getElementsByClassName("left-box")[0].offsetHeight<document.getElementsByClassName("right-box")[0].offsetHeight){
        document.getElementsByClassName("left-box")[0].style.height=document.getElementsByClassName("right-box")[0].offsetHeight-20+"px";
      }else{
        document.getElementsByClassName("right-box")[0].style.height=document.getElementsByClassName("left-box")[0].offsetHeight-20+"px";
      }
    },
    components: {
      radarGraph
    }
  }
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
</style>
