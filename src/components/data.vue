<template>
<div>
  <h1 class="title3">数据导入</h1>
  <router-link to="./bulkUpload"><el-button type="primary" class="many-items">批量导入</el-button></router-link>
  <hr>
  <el-row>
    <div id="total-bar">
      <span class="para">共</span>
      <el-input v-model="input1" placeholder="" class="para-input" v-on:blur="changeCount(input1)"></el-input>
      <span class="para para1">条数据</span><br/>
      <span class="para">数据集名称：</span>
      <el-input v-model="input2" placeholder="" class="para-input2"></el-input>
    </div>
  </el-row>
  <el-row>
    <el-row style="padding: 10px; background-color: #ffffff; border-bottom: 1px solid #ccc;">
      <div class="label2">id</div>
      <div class="label1">节点名称</div>
      <div class="label1">属性1</div>
      <div class="label1">属性2</div>
      <div class="label1">关系节点（eg: 2,3）</div>
      <div class="label1">关系类型</div>
    </el-row>
    <div class="addContent" v-html="inner">
    </div>
   <!-- <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        label="日期"
        width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>-->
  </el-row>
</div>
</template>

<script>
  export default {
    data() {
        return {
         /* tableData: [{
            date: '',
            name: '',
            address: ''
          }, {
            date: '',
            name: '',
            address: ''
          }, {
            date: '',
            name: '',
            address: ''
          }, {
            date: '',
            name: '',
            address: ''
          }],*/
          input1:'',
          input2:'',
          input3:'',
          input4:'',
          inner:'',
          innerContent:[],
          numberValidateForm: {
            age: ''
          }
        }
      },
    methods: {
      changeCount(value){
        var reg = /^[0-9]*$/;
        console.log(reg.test(value));
        if(reg.test(value)){
          //if(typeof(value))
          this.inner="";
          for(var i=0; i<value; i++){
            /*this.tableData.push({
              date: '',
              name: '',
              address: ''
            })*/
            this.inner+= '<div class="row1" style="padding: 10px;">\n' +(i+1)+
              '      <input v-model="innerContent.row'+i+'.input'+(i+1)+'" placeholder="" class="para-input3">' +
              '      <input v-model="innerContent.row'+i+'.input'+(i+1)*2+'" placeholder="" class="para-input3">' +
              '      <input v-model="innerContent.row'+i+'.input'+(i+1)*3+'" placeholder="" class="para-input3">' +
              '      <input v-model="innerContent.row'+i+'.input'+(i+1)*4+'" placeholder="" class="para-input3">' +
              '      <input v-model="innerContent.row'+i+'.input'+(i+1)*5+'" placeholder="" class="para-input3">' +
              '    </div>';
          }
          this.inner += '<div style="width:100%;text-align:center;"><button type="submit" class="submit">提交</button></div>';
          console.log(this.innerContent);
        }else{
          alert("请输入正确格式的数字");
          return false;
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
</style>
