<template>
    <!--:inline="true" -->
  <div class="dashboard">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm"   class="demo-dynamic">

          <el-form-item  v-for="(domain, index) in dynamicValidateForm.domains" :label="'域名' + index" :key="domain.key" :prop="'domains.' + index + '.value'" >
              <el-input v-model="domain.value"  placeholder="12312313"></el-input>
                  <el-button @click="removeDomain(domain)">删除</el-button>
          </el-form-item>

          <el-form-item>
              <el-button @click="addDomain">新增域名</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>
<script>

    export default {
        data() {
            return {
                dynamicValidateForm: {
                    domains: [],
                }
            };
        },
        methods: {

            removeDomain(item) {
                var index = this.dynamicValidateForm.domains.indexOf(item)
                if (index !== -1) {
                    this.dynamicValidateForm.domains.splice(index, 1)
                }
            },
            addDomain() {
                this.dynamicValidateForm.domains.push( { value: '',key: Date.now()} );



            }
        }
    }
</script>