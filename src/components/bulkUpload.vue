<template>
  <div>
    <el-row style="text-align:center;margin-top: 20px;">
      <h1 style="display:inline-block;margin-right: 20px;">数据集名称</h1>
      <el-input v-model="input1" placeholder="" class="para-input2" style="width: 200px;display:inline-block;"></el-input>
    </el-row>
   <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-success="handleAvatarSuccess"
      :on-remove="handleRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :before-upload="beforeAvatarUpload">
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
      handleAvatarSuccess(res, file,fileList) {
       /* this.imageUrl = URL.createObjectURL(file.raw);
        console.log(this.imageUrl);
        let content = document.getElementsByClassName("upload-demo")[0].childNodes[0].childNodes[1].files;
        console.log(content);*/
        console.log(file,fileList)
        var reader = new FileReader();
        reader.onload = function()
        {
          console.log(this) ;
        };
        reader.readAsText(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeAvatarUpload(file) {
        const isCSV = file.type === 'text/csv';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isCSV) {
          this.$message.error('上传头像图片只能是 csv 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isCSV && isLt2M;
      }
    },
    mounted(){

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
