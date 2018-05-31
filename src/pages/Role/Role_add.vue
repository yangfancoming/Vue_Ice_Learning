<template>
    <!-- name  remark  sort  isenable -->
  <el-dialog title="新增" width="30%"   center   :visible.sync="add_show" :before-close="beforeClose">   <!-- sos 这里不能使用 this.$store.state.dialog_store.show=true; 因为计算属性 需要 引入mapGetters 写成单变量形式 show_state -->
    <el-form  :model="role"  ref="ruleForm" :rules="rules" class="demo-form-inline" >
        <el-form-item prop="name" label="角色名称" :label-width="formLabelWidth">
            <el-input v-model="role.name"  placeholder="请输入 角色名称"></el-input>
        </el-form-item>

        <el-form-item prop="sort" label="显示顺序" :label-width="formLabelWidth">
            <el-input v-model.number="role.sort"  placeholder="请输入 显示顺序"></el-input>
        </el-form-item>

        <el-form-item prop="isenable" label="是否启用" :label-width="formLabelWidth" >
            <el-select  align="center"  v-model="role.isenable"  placeholder="请选择 "> <!--style="width: 185px;" -->
                <el-option align="center"  label="启用" value="1"></el-option>
                <el-option align="center"  label="禁用" value="0"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item prop="remark" label="备注信息" :label-width="formLabelWidth">
            <el-input v-model="role.remark" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="最多输入10个字哦~" maxlength="10">    </el-input>
        </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" icon="el-icon-check" @click="dialog_ok('ruleForm')" >确 定</el-button>
      <el-button type="danger" icon="el-icon-close" @click="$store.state.dialog_store.add_show=false">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import { validateMobile } from '@/utils/validate';
//  import {httpUrl} from '../../utils/http_url';
  import {StrToGMT,GMTToStr} from '../../utils/times.js';
import { mapGetters ,mapState} from 'vuex'
  export default {
      computed: {
          ...mapGetters([ 'add_show','edit_show' ]),
      },

      data() {
          return {
              isenable:1,
              role:{      // sos 这里的 对象名 不能与 edit 组件中的  对象名 相同  否则 点击编辑后  再点击新增 会记录回显的信息
                  isenable:'1', //  启用/禁用状态 需要在这里初始化默认值  否则 新增的时候 会默认为空 而不是 true/false
              },
              formLabelWidth: '80px',
              rules: {
                  name: [
                      { required: true, message: '请输入 角色名称', trigger: 'blur' }, //为空时 提示信息
                      {  min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' } ],  // 验证不通过时 提示信息
                  sort: [
                      { required: true, message: '请输入 显示顺序',trigger: 'blur'},
                      { type: 'number', message: '年龄必须为数字值'}],
                  isenable: [
                      { required: true, message: '请选择 是否启用', trigger: 'change' }       ],
                  remark: [
                      { required: true, message: '请输入 备注', trigger: 'blur' },
                      {  min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' } ],  //
              },
          }
      },

    watch: {
        add_show: function (newQuestion, oldQuestion) {
            console.log(newQuestion,oldQuestion);
            if(newQuestion){this.role = {}; }// 监视 新增框弹出  如果弹出则 清空弹出框中的所有内容 防止记录上次内容 fuck 每次都不能正确回显 是因为这里清空了 我日！！！！！！1
            else {this.cancelFieldValidate('ruleForm')} // 监视 关闭新增框 时 清除校检信息 防止记录上次的校检信息
        },
    },

    methods: {
        beforeClose() {this.$store.state.dialog_store.add_show=false},
        cancelFieldValidate (formName) { this.$refs[formName].resetFields();}, // 清除校检信息 防止记录上次的校检信息

        dialog_ok(formName){
            var _this = this;
            this.$refs[formName].validate((valid) => {
                if (valid){
                    console.log(this.role,'role');
//                    this.$axios.post('api/sys_role', this.role).then(function (res) {
                    this.role.dob =  GMTToStr(this.role.dob); // 1. sos 转换
                    this.$axios.post('api/sys_role/POST', this.role).then(function (res) {
                        _this.$message.success('新增成功！');
                        _this.$store.state.dialog_store.add_show=false,
                            _this.$emit('addSaveTodo'); // 添加成功后 隐藏自身对话框
//                          _this.$router.push({path:"/system/goat",info:{haha:"山羊传递的信息"}});// router 跳转！！！
                        console.log(res);
                    })
                        .catch(function (error) { console.log(error);});
                }
            });
        }
    }
  }
</script>

<style scoped>

</style>
