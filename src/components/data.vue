<template>
<div>
  <h1 class="title3">数据导入</h1>
  <router-link to="./bulkUpload"><el-button type="primary" class="many-items">批量导入</el-button></router-link>
  <hr>
  <el-row>
    <div id="total-bar">
      <span class="para">数据集名称：</span>
      <el-input v-model="input2" placeholder="" class="para-input2"></el-input>
      <span class="para">数据类型：</span>
      <el-select v-model="value" placeholder="请选择"  v-on:change="changeType(value)">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span class="para">共</span>
      <el-input v-model="input1" placeholder="" class="para-input" v-on:blur="changeCount(input1)"></el-input>
      <span class="para para1">条数据</span>
    </div>
  </el-row>
  <el-row>
    <el-row :class="{bar:active1}" style="padding: 10px; background-color: #ffffff; border-bottom: 1px solid #ccc;">
      <div class="label2">id</div>
      <div class="label1">节点名称</div>
      <div class="label1">属性1</div>
      <div class="label1">属性2</div>
      <div class="label1">关系节点（eg: 2,3）</div>
      <div class="label1">关系类型</div>
    </el-row>
    <el-row :class="{bar:active2}" style="padding: 10px; background-color: #ffffff; border-bottom: 1px solid #ccc;">
      <div class="label2">id</div>
      <div class="label1">节点名称</div>
      <div class="label1">子节点</div>
      <div class="label1">子节点名称</div>
      <div class="label1">子节点值</div>
    </el-row>
    <el-row :class="{bar:active3}" style="padding: 10px; background-color: #ffffff; border-bottom: 1px solid #ccc;">
      <div class="label2">id</div>
      <div class="label1">节点名称</div>
      <div class="label1">经度</div>
      <div class="label1">纬度</div>
    </el-row>
    <div class="addContent" v-html="inner">
    </div>
  </el-row>
</div>
</template>

<script>
  export default {
    data() {
        return {
          active1:true,
          active2:true,
          active3:true,
          input1:'',
          input2:'',
          input3:'',
          input4:'',
          inner:'',
          innerContent:[],
          numberValidateForm: {
            age: ''
          },
          uploadData:{
            uploadTime: "",
            datasetId: ""
          },
          options: [{
            value: 'relation',
            label: '关系型数据'
          }, {
            value: 'level',
            label: '层级数据'
          }, {
            value: 'geo',
            label: '地理信息数据'
          }],
          value: ''
        }
      },
    methods: {
      changeType(value){
        console.log(value);
        if(value=="relation"){
          this.active1=false;
          this.active2=true;
          this.active3=true;
          this.inner = "";
          this.input1 = "";
        }else if(value=="level"){
          this.active1=true;
          this.active2=false;
          this.active3=true;
          this.inner = "";
          this.input1 = "";
        }else if(value=="geo"){
          this.active1=true;
          this.active2=true;
          this.active3=false;
          this.inner = "";
          this.input1 = "";
        }
      },
      changeCount(value){
        var reg = /^[0-9]*$/;
        console.log(this.value)
        if(this.value == "relation"){
          if(reg.test(value)){
            this.inner="";
            for(var i=0; i<value; i++){
              this.inner+= '<div class="row1" style="padding: 10px;">\n' +(i+1)+
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*2+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*3+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*4+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*5+'" placeholder="" class="para-input3">' +
                '    </div>';
            }
            this.inner += '<div style="width:100%;text-align:center;"><button type="submit" class="submit">提交</button></div>';
          }else{
            alert("请输入正确格式的数字");
            return false;
          }
        }else if(this.value == "level"){
          if(reg.test(value)){
            this.inner="";
            for(var i=0; i<value; i++){
              this.inner+= '<div class="row1" style="padding: 10px;">\n' +(i+1)+
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*2+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*3+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*4+'" placeholder="" class="para-input3">' +
                '    </div>';
            }
            this.inner += '<div style="width:100%;text-align:center;"><button type="submit" class="submit">提交</button></div>';
          }else{
            alert("请输入正确格式的数字");
            return false;
          }
        }else if(this.value == "geo"){
          if(reg.test(value)){
            this.inner="";
            for(var i=0; i<value; i++){
              this.inner+= '<div class="row1" style="padding: 10px;">\n' +(i+1)+
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*2+'" placeholder="" class="para-input3">' +
                '      <input v-model="innerContent.row'+i+'.input'+(i+1)*3+'" placeholder="" class="para-input3">' +
                '    </div>';
            }
            this.inner += '<div style="width:100%;text-align:center;"><button type="submit" class="submit">提交</button></div>';
            //console.log(this.innerContent);
          }else{
            alert("请输入正确格式的数字");
            return false;
          }
        }


      }
    }
  }
</script>

<style>
  .title3, .many-items, .para, .para-input{
    display: inline-block;
  }
  .title3, .para{
    margin-left:30px;
  }
  .para1{
    margin-left:20px;
  }
  .many-items{
    float: right;
    margin-right: 30px;
    margin-top: 10px;

  }
  .para-input{
    width: 50px;
    margin-left: 20px;
  }
  .para-input2{
    width: 200px;
    margin-left: 20px;
  }
  #total-bar{
    margin: 20px auto;
  }
  hr{
    border: 1px solid #c1c1c1;
  }
  .addContent{
    background-color: #fff;
  }
  .row1{
    border-bottom: 1px solid #ccc;
    padding: 15px auto;
  }
  .para-input3{
    width: 200px;
    margin-left: 20px;
    height: 30px;
  }
  .label2{
    display: inline-block;
  }
  .label1{
    width: 200px;
    margin-left: 20px;
    text-align: center;
    display: inline-block;
  }
  .submit{
    text-align: center;
    margin: 20px auto;
    padding: 5px 10px;
    border: none;
    width: 80px;
    border-radius: 15px;
    background-color: #409EFF;
    color: #ffffff;
  }
  .bar{
    display: none;
  }
</style>
