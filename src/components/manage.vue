<template>
  <div>
    <h1 class="title3">数据管理</h1>
    <router-link to="./data"><el-button type="primary" class="many-items">导入新数据</el-button></router-link>
    <hr>
    <el-row>
      <div id="total-bar">
        <span class="para">共</span>
        <span class="para">100</span>
        <span class="para">条数据</span>
      </div>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="ID" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="数据名称" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="导入日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.loaddate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="最后修改日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.editdate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <div class="block">
      <el-pagination
        layout="prev, pager, next" :total="500" style="background-color: #E9EEF3;">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '0001',
          name: 'aaa',
          loaddate: '2016-05-02',
          editdate: '2016-05-02'
        }, {
          id: '0002',
          name: 'bbb',
          loaddate: '2016-05-02',
          editdate: '2016-05-04'
        }, {
          id: '0003',
          name: 'ccc',
          loaddate: '2016-05-02',
          editdate: '2016-05-01'
        }, {
          id: '0004',
          name: 'ddd',
          loaddate: '2016-05-02',
          editdate: '2016-05-03'
        }],
        input:''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

<style scoped>
  .title3, .many-items, .para, .para-input{
    display: inline-block;
  }
  .title3, .para{
    margin-left:10px;
  }
  .many-items{
    float: right;
    margin-right: 30px;
    margin-top: 10px;
  }
  .para-input{
    width: 50px;
  }
  #total-bar{
    margin: 20px auto;
  }
  hr{
    border: 1px solid #c1c1c1;
  }
  .el-paginatio, .el-dialog, .el-pager li, .el-pagination button.disabled, .el-pagination .btn-next{
    background-color:  #E9EEF3;
  }
  .block{
    float: right;
    margin: 20px 30px 20px 0;
  }
</style>
