<template>
  <div class="dashboard">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="页面区块" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox label="template" name="type"></el-checkbox>
                  <el-checkbox label="script" name="type"></el-checkbox>
                  <el-checkbox label="style" name="type"></el-checkbox>
              </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
          </el-form-item>

          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
    export default {
        data(){
            return {
                ruleForm:{},
                rules: {
                }
            }
        },
        methods:{
            submitForm() {
                this.$axios.post('freemarker/test1', {}).then(function (res) {
                    console.log(res);
                })
                    .catch(function (error) { console.log(error);});

            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }

</script>
