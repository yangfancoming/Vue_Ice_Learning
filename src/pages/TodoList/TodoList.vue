<template>
  <div class="todoList">
      <!-- fuck 表格中  某一列内容过长 想要省略号和 鼠标提示详细信息  需要设置  ①el-table标签中需要添加tooltip-effect="dark"属性  ②el-table-column标签中需要添加show-overflow-tooltip属性-->
      <el-table ref="multipleTable" tooltip-effect="dark" :data="tableData"  @selection-change="handleSelectionChange" @row-click="rowclick"  highlight-current-row  fit border  size="mini"  style="width: 100%" max-height="700"
                v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"  element-loading-background="rgba(0, 0, 0, 0.8)">

          <el-table-column type="selection" width="55" align="center"> </el-table-column>
          <el-table-column prop="id" label="编号" align="center"> </el-table-column>
          <el-table-column prop="_username" label="账号" align="center"> </el-table-column>
          <el-table-column prop="_name" label="用户名" align="center"> </el-table-column>
          <el-table-column prop="_sid" label="工号" align="center" sortable show-overflow-tooltip> </el-table-column>


          <el-table-column prop="scope.row._sex" align="center" label="性别" >  <!-- sos 请记住 这里的 状态回显-->
              <template slot-scope="scope">
                  <span>{{scope.row._sex == 1? '男' : '女'}}</span>
              </template>
          </el-table-column>

          <el-table-column prop="_dob" label="出生日期"  align="center" :formatter="dateFormat"> </el-table-column> <!--Date of Enrollment    -->
          <el-table-column prop="scope.row._isenable" label="是否启用" align="center">
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                      <el-tag type="success" size="medium" v-if="scope.row._isenable == true">启用</el-tag>
                      <el-tag type="danger" size="medium" v-else>禁用</el-tag>
                  </div>
              </template>
          </el-table-column>
          <el-table-column prop="_remark" label="备注" align="center" show-overflow-tooltip> </el-table-column>

          <el-table-column label="操作" align="center" fixed="right" width="200">     <!--align="center" 列内容居中显示 -->
              <template slot-scope="scope">
                  <el-button size="mini" type="success" icon="el-icon-edit" v-on:click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" icon="el-icon-delete"  v-on:click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
          </el-table-column>
      </el-table>

  </div>

</template>
<script>
    export default {
        data() {
            return {
                loading:false,
                tableData: null,
                multipleSelection: [], // 存储 选中记录的集合
            }
        },
        created(){
            this.getuser();
        },
        methods:{
            getuser(){
                this.$axios.get('api/sys_user').then(  // sos 全局引用 方法 在main.js中 加入import axios from 'axios' 和 Vue.prototype.$ajax = axios
                    (res) => { console.log(res.data,'请求失败');this.tableData = res.data;},
                    (err)=>  { console.log(err,'请求失败');});
            },
            dateFormat:function(row, column) {  //时间格式化
                var date = row[column.property];
                console.log(date,'11111111111111');
                if (date === undefined) {  return "";}
                return this.$moment(date).format("YYYY-MM-DD");//  "YYYY-MM-DD HH:mm:ss" sos 注意 这种js引入的方法！ 就相当于组件进行引入的
            },
            rowclick(row, event, column){this.$refs.multipleTable.toggleRowSelection(row);},
            handleSelectionChange(val) { console.info(val); this.multipleSelection = val;}, //更新 表格中每次选中/取消选中的  集合变化
        }
    }
</script>

<!--this.$http.post(httpUrl.base+'/api/sys_user/queryList', this.listQuery).then(function(response){-->
<!--this.tableData = response.body.data;-->
<!--this.listQuery.total = response.body.total;-->
