<template>
  <div>
    <el-row style="text-align:center;margin-top: 20px;">
      <h1 style="display:inline-block;margin-right: 20px;">数据集名称</h1>
      <el-input v-model="input1" placeholder="" class="para-input2" style="width: 200px;display:inline-block;"></el-input>
    </el-row>
   <el-upload
      class="upload-demo"
      drag
      action=""
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip"></div>
    </el-upload>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        input1: '',
        fileList: []
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      }
    }
  }

</script>

<style>
  .upload-demo{
    margin: 50px auto;
    text-align:center;
  }
  .el-upload, .el-upload-dragger{
    width: 400px;
    height: 300px;
  }
  .el-upload-dragger .el-icon-upload{
    margin-top:100px;
  }
  .el-upload-list{
    width: 400px;
    margin: 0 auto;
  }
</style>
