<template>

  <!--shit  1. ref="ruleForm" 中的 'ruleForm' 需要当String 传入 提交表单函数 -->
  <!--shit  2. prop="_name"  中的 '_name'的命名必须与 v-model="new_student._name" 中的 _name 名称相同 -->
  <!--shit  3. el-dialog  中的:before-close 为右上角关闭按钮事件 -->
  <el-dialog title="新增" width="50%"   center   :visible.sync="show_state" :before-close="beforeClose">   <!-- sos 这里不能使用 this.$store.state.dialog_store.show=true; 因为计算属性 需要 引入mapGetters 写成单变量形式 show_state -->
    <el-form  :model="user"  ref="ruleForm" :rules="rules111" class="demo-form-inline" >
      <el-row>
        <el-col :span="12">
          <el-form-item prop="_name" label="账号" :label-width="formLabelWidth">
            <el-input v-model="user._username"  placeholder="请输入 账号"></el-input>
          </el-form-item>
        </el-col>
          <el-col :span="12">
              <el-form-item prop="_name" label="姓名" :label-width="formLabelWidth">
                  <el-input v-model="user._name"  placeholder="请输入 姓名"></el-input>
              </el-form-item>
          </el-col>
      </el-row>

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


      <el-row>
          <el-col :span="12"> <!-- fuck value-format="yyyy-MM-dd"  日期选择器 需要 这样进行时间格式化！-->
              <el-form-item  prop="_doe" label="出生日期" :label-width="formLabelWidth" >
                  <el-date-picker v-model="user._doe" type="date" placeholder="选择日期" :editable=false value-format="yyyy-MM-dd" > </el-date-picker>
              </el-form-item>
          </el-col>
        <el-col :span="12">
          <el-form-item label="是否启用" :label-width="formLabelWidth" align="center" >
            <el-switch v-model="user._isenable" inactive-text="禁用" active-text="启用" active-color="#13ce66" >  </el-switch>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item prop="_mark" label="备注信息" :label-width="formLabelWidth">
        <el-input v-model="user._mark" type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="最多输入10个字哦~" maxlength="10">    </el-input>
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
      computed: mapGetters([ 'show_state' ]),

    data() {
//      const Myvalidate = (rule, value, callback) => {
//        if (!validateMobile(value)) {
//          callback(new Error('请输入正确手机号码！'))
//        }
//      }
      return {
        sex:'',
          user:{      // sos 这里的 对象名 不能与 edit组件中的  对象名 相同  否则 点击编辑后  再点击新增 会记录回显的信息
          _isenable:true, //  启用/禁用状态 需要在这里初始化默认值  否则 新增的时候 会默认为空 而不是 true/false
        },
//          show: this.$store.state.dialog_store.show,
          formLabelWidth: '80px',
        rules111: {
          _name: [
            { required: true, message: '请输入 姓名', trigger: 'blur' }, //为空时 提示信息
            {  min: 2, max: 20, message: '长度在 2 到 5 个字符', trigger: 'blur' } ],  // 验证不通过时 提示信息
          _class: [
            { required: true, message: ' 请输入 班级', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' } ],
          _sid: [
            { required: true, message: ' 请输入 学号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' } ],  // 验证不通过时 提示信息
          _age: [
            { required: true, message: '请输入 年龄'},
            { type: 'number', message: '年龄必须为数字值'}],
          _sex: [
            { required: true, message: '请选择 性别', trigger: 'change' }
          ],
//          _tel: [
//            { required: true,  trigger: 'blur',validator: Myvalidate  }], // sos  这里指定了 自定义验证 所以不能 使用message: '请选择日期' 属性 否则回调显示的验证信息就无法显示
        },
      }

    },

    watch: {
        show_state: function (newQuestion, oldQuestion) {
            console.log(newQuestion,oldQuestion);
            if(newQuestion){this.new_student = {} }// 监视 新增框弹出  如果弹出则 清空弹出框中的所有内容 防止记录上次内容
            else {this.cancelFieldValidate('ruleForm')} // 监视 关闭新增框 时 清除校检信息 防止记录上次的校检信息
        },
    },

    methods: {
        beforeClose() {this.$store.state.dialog_store.show=false},
        cancelFieldValidate (formName) { this.$refs[formName].resetFields();},

      dialog_ok(formName)
      {
        this.$refs[formName].validate((valid) => {
          if (valid)
          {
            let new_user = {
              _name:this.new_student._name,
              _class:this.new_student._class,
              _sid:this.new_student._sid,
              _school:this.new_student._school,
              _sex:this.new_student._sex,
              _age:this.new_student._age,
              _tel:this.new_student._tel,
              _doe:this.new_student._doe,
              _account:this.new_student._account,
              _isenable:this.new_student._isenable,
              _mark:this.new_student._mark,
            }
            this.$http.post(httpUrl.base+'/api/sys_user/POST',new_user).then(function(response)
            {
//              console.log("新增后 服务器返回信息------"+response.code+response.date+ response.message);
              this.$message.success('新增成功！');
              console.log(response);
//              if(response.ok) this.$store.state.dialog_store.show=false; // 添加成功后 隐藏自身对话框
//          this.$router.push({path:"/system/goat",info:{haha:"山羊传递的信息"}});// router 跳转！！！
            })
          } else {
//            console.log('error submit!!');
          }
            this.$store.state.dialog_store.show=false;
        });


      }
    }
  }
</script>

<style scoped>

</style>
