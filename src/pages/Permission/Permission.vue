<template>
  <div class="app-container">
      <!--<Role_add  @addSaveTodo="addSaveTodo"></Role_add>-->
      <!--<Role_edit @addSaveTodo="addSaveTodo"></Role_edit>-->

      <br> <br>

      <el-form :model="listQuery" ref="listQuery" :inline="true" class="demo-form-inline" >
          <div align="center" >
              <el-form-item prop="name" label="姓11111111111名：">
                  <el-input  placeholder="请输入姓名" v-model="listQuery.name"></el-input>
              </el-form-item>

              <el-form-item  prop="dob" label="出生日期" >
                  <el-date-picker v-model="listQuery.dob" type="date" placeholder="选择日期" :editable=false value-format="yyyy-MM-dd"> </el-date-picker>
              </el-form-item>
          </div>

          <div align="center" >
              <el-form-item>
                  <el-button type="warning" icon="el-icon-circle-plus-outline" @click="$store.state.dialog_store.add_show=true" >新增</el-button>
                  <el-button type="primary" icon="el-icon-search" >查询</el-button>  <!--@click="queryList"-->
                  <el-button type="danger" icon="el-icon-delete" v-on:click="batchDelete" :disabled="this.multipleSelection.length === 0">批量删除</el-button>
                  <el-button  type="info" @click="resetForm('listQuery')">重置</el-button>
              </el-form-item>
          </div>
      </el-form>

      <el-table ref="multipleTable" tooltip-effect="dark" :data="tableData"  @selection-change="handleSelectionChange" highlight-current-row  fit border  size="mini"  style="width: 100%" max-height="700"
                v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"  element-loading-background="rgba(0, 0, 0, 0.8)">
          <!-- sos parentid name url sort isenable icon createtime-->
          <el-table-column type="selection" width="55" align="center"> </el-table-column>
          <el-table-column prop="id" label="编号" align="center"> </el-table-column>
          <el-table-column prop="name" label="菜单名称" align="center"> </el-table-column>
          <el-table-column prop="sort" label="显示顺序" align="center"> </el-table-column>
          <el-table-column prop="createtime" label="创建时间"  align="center" :formatter="dateFormat"> </el-table-column> <!--Date of Enrollment    -->
          <el-table-column prop="remark" label="角色备注" align="center" show-overflow-tooltip> </el-table-column>
          <el-table-column prop="scope.row.isenable" label="是否启用" align="center">
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                      <el-tag type="success" size="medium" v-if="scope.row.isenable == true">启用</el-tag>
                      <el-tag type="danger" size="medium" v-else>禁用</el-tag>
                  </div>
              </template>
          </el-table-column>
          <el-table-column label="操作" align="center" fixed="right" width="300">     <!--align="center" 列内容居中显示 -->
              <template slot-scope="scope">
                  <el-button size="mini" type="success" icon="el-icon-edit" v-on:click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" icon="el-icon-delete"  v-on:click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  <el-button size="mini" type="info" icon="el-icon-rank"  v-on:click="handleDelete(scope.$index, scope.row)">角色授权</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>

</template>
<script>
//    import Role_add from './Role_add.vue';
//    import Role_edit from './Role_edit.vue';
    import {StrToGMT,GMTToStr} from '../../utils/times.js';
    export default {
//        components:{ Role_add,Role_edit } ,// 注册局部组件
        data() {
            return {
                listQuery: { dob:'',name:'',username:'',pageNum: 1,pageSize: 10,total: null,sort: 'id'},
                loading:false,
                tableData: null,
                multipleSelection: [], // 存储 选中记录的集合
            }
        },
        created(){ this.getuser();},

        methods:{
            resetForm (formName) {  this.$refs[formName].resetFields();},

            getuser(){
                this.$axios.post('/api/sys_role/queryList',this.listQuery).then(  // sos 全局引用 方法 在main.js中 加入import axios from 'axios' 和 Vue.prototype.$ajax = axios
                    (res) => {
                        this.tableData = res.data.data;
                        console.log(this.tableData,'111133333333333');
                        },
                    (err)=>  {});
            },
            dateFormat:function(row, column) {  //时间格式化
                var date = row[column.property];
                if (date === undefined) {  return "";}
                return this.$moment(date).format("YYYY-MM-DD HH:mm:ss");//  "YYYY-MM-DD HH:mm:ss" sos 注意 这种js引入的方法！ 就相当于组件进行引入的
            },
            handleSelectionChange(val) { this.multipleSelection = val;}, //更新 表格中每次选中/取消选中的  集合变化
            addSaveTodo() {  this.getuser();},  // location.reload()// 刷新整个页面
            handleDelete: function (index,row) {
                var _this = this;
                console.log(row);
                this.$confirm('确认删除该记录吗?', '提示', {type: 'warning'}).then(() => {
                    this.$axios.delete('api/sys_user/DELETE/'+row.id).then(function(res){
                        _this.$message({message: '删除成功',type: 'success'}); //
                        _this.getuser();// 删除成功后 刷新当前组件
                    }) }).catch(() => { });// this.tableData.splice(index, 1);// 删除本地元素
            },
            batchDelete(){ // 批量删除
                var _this = this;
                var ids = this.multipleSelection.map(item => item.id).join()//获取所有选中行的id组成的字符串，以逗号分隔
                this.$confirm('确认删除多条记录吗?', '提示', {type: 'warning'}).then(() => {
                    _this.$axios.delete('api/sys_user/batchDelete/'+ids).then(function(res){
                        _this.$message({message: '删除成功',type: 'success'}); //
                        _this.getuser();// 删除成功后 刷新当前组件
                    }) }).catch(() => { });// this.tableData.splice(index, 1);// 删除本地元素
            },
            handleEdit: function (index,row) {
                this.$store.state.dialog_store.edit_show=true;
                this.$store.state.dialog_store.edit_model = JSON.parse( JSON.stringify(this.tableData[index]) ); // 先转换为字符串，然后再转换

            },
        }
    }
</script>


