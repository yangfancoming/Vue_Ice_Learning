<template>
  <div class="app-container">
      <User_add @addSaveTodo="addSaveTodo"></User_add>
      <User_edit @addSaveTodo="addSaveTodo"></User_edit>
      <!-- fuck 切记： el-form 中 必须要有 :model="" ref=""  两者的内容必须相同 -->
      <!-- fuck 切记： 在每个要想被清除内容的el-form-item 组件上必须写prop="" -->
      <!-- fuck 切记： prop 绑定的是:data数组中每一个元素对应的值 -->
      <!-- fuck 切记： （3）写this.$refs[formName].resetFields(); -->
      <br> <br>

      <el-form :model="listQuery" ref="listQuery" :inline="true" class="demo-form-inline" >
          <div align="center" >
              <el-form-item prop="name" label="姓名：">
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
              </el-form-item>

              <!--<el-form-item >-->
                  <!--<el-upload class="upload-demo" :action="importUrl" :show-file-list="mark" :name ="name" :headers="importHeaders" :on-success="uploadSuccess" >-->
                      <!--<el-button  type="primary" icon="el-icon-download">导入</el-button>-->
                  <!--</el-upload>-->
              <!--</el-form-item>-->

              <!--<el-form-item >-->
                  <!--<el-button  type="primary"  icon="el-icon-upload2"  @click="Export">导出</el-button>-->
              <!--</el-form-item>-->

              <el-form-item >
                  <el-button  type="info" @click="resetForm('listQuery')">重置</el-button>
              </el-form-item>
          </div>
      </el-form>
      <!--@row-click="rowclick" -->
      <!-- fuck 表格中  某一列内容过长 想要省略号和 鼠标提示详细信息  需要设置  ①el-table标签中需要添加tooltip-effect="dark"属性  ②el-table-column标签中需要添加show-overflow-tooltip属性-->
      <el-table ref="multipleTable" tooltip-effect="dark" :data="tableData"  @selection-change="handleSelectionChange" highlight-current-row  fit border  size="mini"  style="width: 100%" max-height="700"
                v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"  element-loading-background="rgba(0, 0, 0, 0.8)">

          <el-table-column type="selection" width="55" align="center"> </el-table-column>
          <el-table-column prop="id" label="编号" align="center"> </el-table-column>
          <el-table-column prop="username" label="账号" align="center"> </el-table-column>
          <el-table-column prop="name" label="姓名" align="center"> </el-table-column>
          <!--<el-table-column prop="sid" label="工号" align="center" sortable show-overflow-tooltip> </el-table-column>-->
          <el-table-column prop="sid" label="工号" align="center" > </el-table-column>

          <el-table-column prop="scope.row.sex" align="center" label="性别" >  <!-- sos 请记住 这里的 状态回显-->
              <template slot-scope="scope">
                  <span>{{scope.row.sex == 1? '男' : '女'}}</span>
              </template>
          </el-table-column>

          <el-table-column prop="dob" label="出生日期"  align="center" :formatter="dateFormat"> </el-table-column> <!--Date of Enrollment    -->
          <el-table-column prop="scope.row.isenable" label="是否启用" align="center">
              <template slot-scope="scope">
                  <div slot="reference" class="name-wrapper">
                      <el-tag type="success" size="medium" v-if="scope.row.isenable == true">启用</el-tag>
                      <el-tag type="danger" size="medium" v-else>禁用</el-tag>
                  </div>
              </template>
          </el-table-column>
          <el-table-column prop="remark" label="备注" align="center" show-overflow-tooltip> </el-table-column>

          <el-table-column label="操作" align="center" fixed="right" width="300">     <!--align="center" 列内容居中显示 -->
              <template slot-scope="scope">
                  <el-button size="mini" type="success" icon="el-icon-edit" v-on:click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" icon="el-icon-delete"  v-on:click="handleDelete(scope.$index, scope.row)">删除</el-button>
                  <el-button size="mini" type="info" icon="el-icon-rank"  v-on:click="handleDelete(scope.$index, scope.row)">分配角色</el-button>
              </template>
          </el-table-column>
      </el-table>
  </div>

</template>
<script>
    import User_add from './User_add.vue';
    import User_edit from './User_edit.vue';
    import {StrToGMT,GMTToStr} from '../../utils/times.js';
    export default {
        components:{ User_add,User_edit } ,// 注册局部组件
        data() {
            return {
                listQuery: { dob:'',name:'',username:'',pageNum: 1,pageSize: 10,total: null,sort: 'id'},
                loading:false,
                tableData: null,
                multipleSelection: [], // 存储 选中记录的集合
            }
        },
        created(){
            this.getuser();
        },
        methods:{
            resetForm (formName) {
//               this.$refs.listQuery.resetFields();// shit 或者这种方法 不带参数也可以
                this.$refs[formName].resetFields();
            },
            getuser(){
                this.$axios.post('/api/sys_user/queryList',this.listQuery).then(  // sos 全局引用 方法 在main.js中 加入import axios from 'axios' 和 Vue.prototype.$ajax = axios
                    (res) => { this.tableData = res.data.data; },
                    (err)=>  {});
            },
            dateFormat:function(row, column) {  //时间格式化
                var date = row[column.property];
                if (date === undefined) {  return "";}
                return this.$moment(date).format("YYYY-MM-DD");//  "YYYY-MM-DD HH:mm:ss" sos 注意 这种js引入的方法！ 就相当于组件进行引入的
            },
//            rowclick(row, event, column){this.$refs.multipleTable.toggleRowSelection(row);},
            handleSelectionChange(val) { this.multipleSelection = val;}, //更新 表格中每次选中/取消选中的  集合变化
            addSaveTodo() {  this.getuser();},  // location.reload()// 刷新整个页面
            //index 是数组索引  row是当前选定对象 console.log(index);console.log(row);
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
//                this.tableData[index].dob =  StrToGMT(this.tableData[index].dob); // 2. sos 转换
//                this.$store.state.dialog_store.edit_model = this.tableData[index];
                this.$store.state.dialog_store.edit_model = JSON.parse( JSON.stringify(this.tableData[index]) ); // 先转换为字符串，然后再转换

            },
        }
    }
</script>

<!--   sos 真棒！！！
有没有发现一个问题，当修改弹层中的信息时，表格中的数据也同步更新了。
可是我们本身是希望当点击保存按钮时，才把弹层中的数据保存到表格里。
问题的根源就出在这里：this.selectedlist = this.list[index];
因为list[index]是个Object类型的数据，若使用=赋值，则赋值操作为浅度拷贝（把数据的地址赋值给对应变量，
 而没有把具体的数据复制给变量，变量会随数据值的变化而变化），
 selectedlist与list[index]使用相同的数据地址，互相引起数据值的变化。因此这里我们需要进行深度拷贝：
 this.selectedlist = JSON.parse( JSON.stringify(this.list[index]) ); // 先转换为字符串，然后再转换
-->