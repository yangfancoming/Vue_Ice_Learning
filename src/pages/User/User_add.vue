<template>

  <!--shit  1. ref="ruleForm" 中的 'ruleForm' 需要当String 传入 提交表单函数 -->
  <!--shit  2. prop="_name"  中的 '_name'的命名必须与 v-model="user._name" 中的 _name 名称相同 -->
  <!--shit  3. el-dialog  中的:before-close 为右上角关闭按钮事件 -->
  <el-dialog title="新增" width="50%"   center   :visible.sync="show_state1" :before-close="beforeClose">   <!-- sos 这里不能使用 this.$store.state.dialog_store.show=true; 因为计算属性 需要 引入mapGetters 写成单变量形式 show_state -->
    <el-form  :model="this.user"  ref="ruleForm" :rules="this.rules" class="demo-form-inline" >
      <el-row>
        <el-col :span="12">
          <el-form-item prop="_username" label="账号" :label-width="formLabelWidth">
            <!--<el-input v-model="user._username"  placeholder="请输入 账号"></el-input>-->
            <el-input v-model="user._username"   v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text" placeholder="请输入 账号"></el-input>   {{ errors.first('email') }}
          </el-form-item>
        </el-col>
          <el-col :span="12">
              <el-form-item prop="_name" label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="user._name"  placeholder="请输入 姓名"></el-input>
              </el-form-item>
          </el-col>
      </el-row>
        <!--<input v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" type="text"  placeholder="Email">-->
        <!--<span v-show="errors.has('email')" class="help is-danger">-->
      <!--{{ errors.first('email') }}-->
    <!--</span>-->
      <el-row>
        <el-col :span="12">
          <el-form-item prop="_sid" label="工号" :label-width="formLabelWidth">
            <el-input v-model="user._sid"   placeholder="请输入 工号"></el-input>
          </el-form-item>
        </el-col>
          <el-col :span="12">
              <el-form-item prop="_sex"  label=" 性别" :label-width="formLabelWidth">
                  <el-select  align="center"  v-model="user._sex"  placeholder="请选择 性别"> <!--style="width: 185px;" -->
                      <el-option align="center" label="男" value="1"></el-option>
                      <el-option align="center"  label="女" value="0"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
      </el-row>
        <!--<input v-validate="'required|alpha_num'" name="" type="text" placeholder="能输入字母数字">-->

      <el-row>
          <el-col :span="12"> <!-- fuck value-format="yyyy-MM-dd"  日期选择器 需要 这样进行时间格式化！-->
              <el-form-item  prop="_dob" label="出生日期" :label-width="formLabelWidth" >
                  <el-date-picker v-model="user._dob" type="date" placeholder="选择日期" :editable=false  > </el-date-picker>
              </el-form-item>
          </el-col>
        <el-col :span="12">
          <el-form-item label="是否启用" :label-width="formLabelWidth" align="center" >
            <el-switch v-model="user._isenable" inactive-text="禁用" active-text="启用" active-color="#13ce66" >  </el-switch>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item prop="_remark" label="备注信息" :label-width="formLabelWidth">
        <el-input v-model="user._remark" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="最多输入10个字哦~" maxlength="10">    </el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" icon="el-icon-check" @click="dialog_ok('ruleForm')" >确 定</el-button>
      <el-button type="danger" icon="el-icon-close" @click="$store.state.dialog_store.show=false">取 消</el-button>
    </div>
  </el-dialog>
</template>

<script>
//  import { validateMobile } from '@/utils/validate';
//  import {httpUrl} from '../../utils/http_url';
import { mapGetters } from 'vuex'
  export default {
      computed: mapGetters([ 'show_state1' ]),

    data() {
//        const Myvalidate = (rule, value, callback) => {
//            if (!validateMobile(value)) {
//                callback(new Error('请输入正确手机号码！'))
//            }
//        }
      return {
        sex:'',
          user:{      // sos 这里的 对象名 不能与 edit 组件中的  对象名 相同  否则 点击编辑后  再点击新增 会记录回显的信息
          _isenable:true, //  启用/禁用状态 需要在这里初始化默认值  否则 新增的时候 会默认为空 而不是 true/false
        },
          formLabelWidth: '80px',
        rules: {
            _username: [
                { required: true, message: '请输入 账号', trigger: 'blur' }, //为空时 提示信息
                {  min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' } ],  // 验证不通过时 提示信息
            _name: [
                { required: true, message: '请输入 姓名', trigger: 'blur' }, //为空时 提示信息
                {  min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' } ],  // 验证不通过时 提示信息
            _sid: [
                { required: true, message: '请输入 工号',trigger: 'blur'},
                { type: 'number', message: '年龄必须为数字值'}],
//            _dob: [
//                { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }],
            _sex: [
                { required: true, message: '请选择 性别', trigger: 'change' }       ],
            _remark: [
                { required: true, message: '请输入 备注', trigger: 'blur' },
                {  min: 3, max: 50, message: '长度在 3 到 50 个字符', trigger: 'blur' } ],  //
//            _tel: [
//                { required: true,  trigger: 'blur',validator: Myvalidate  }], // sos  这里指定了 自定义验证 所以不能 使用message: '请选择日期' 属性 否则回调显示的验证信息就无法显示
        },
      }

    },

    watch: {
        show_state1: function (newQuestion, oldQuestion) {
            console.log(newQuestion,oldQuestion);
            if(newQuestion){this.user = {} }// 监视 新增框弹出  如果弹出则 清空弹出框中的所有内容 防止记录上次内容
            else {this.cancelFieldValidate('ruleForm')} // 监视 关闭新增框 时 清除校检信息 防止记录上次的校检信息
        },
    },

    methods: {
        beforeClose() {this.$store.state.dialog_store.show=false},
        cancelFieldValidate (formName) { this.$refs[formName].resetFields();}, // 清除校检信息 防止记录上次的校检信息

      dialog_ok(formName){
          var _this = this;
          this.$refs[formName].validate((valid) => {
              if (valid){
                  let user = {
                      _username:this.user._username,
                      _name:this.user._name,
                      _sid:this.user._sid,
                      _sex:this.user._sex,
                      _dob:this.user._dob,
                      _isenable:this.user._isenable,
                      _remark:this.user._remark, }
                  this.$axios.post('api/sys_user', user)
                      .then(function (response) {
                          _this.$message.success('新增成功！');
                          _this.$store.state.dialog_store.show=false;// 添加成功后 隐藏自身对话框
                          _this.$router.push({path:"/system/goat",info:{haha:"山羊传递的信息"}});// router 跳转！！！
                          console.log(response);
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
