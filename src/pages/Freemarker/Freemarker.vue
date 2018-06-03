<template>
  <div class="dashboard">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  :inline="true"   label-width="100" class="demo-ruleForm">
          <h1>查询栏（queryBar）</h1>
          <div style="text-align: center">
              <!--<el-transfer style="text-align: left; display: inline-block" v-model="value4"-->
                           <!--:left-default-checked="[0,1,2,3]"  :titles="['请选择控件类型', '结果集']" :button-texts="['到左边', '到右边']"-->
                           <!--:format="{  noChecked: '${total}',hasChecked: '${checked}/${total}' }" @change="handleChange" :data="mydata">-->
                  <!--<span slot-scope="{ option }">{{ option.key + 1 }} ： {{ option.label }}</span>-->
              <!--</el-transfer>-->
              <!--myPage queryBar input-->
              <el-row>
                  <el-col :span="4">
                      <el-form-item prop="name" label="" >
                          <el-checkbox v-model="myPage.queryBar.input.checked" >文本框</el-checkbox>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_prop"  >
                          <el-input v-model="myPage.queryBar.input.form_prop"  placeholder="请输入 form_prop"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_label" >
                          <el-input  v-model="myPage.queryBar.input.form_label"  placeholder="请输入 form_label"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_placeholder"  >
                          <el-input  v-model="myPage.queryBar.input.form_placeholder" placeholder="请输入 form_placeholder"></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>


              <el-row>
                  <el-col :span="4">
                      <el-form-item prop="name" label="" >
                          <el-checkbox v-model="myPage.queryBar.datepick.checked">下拉框</el-checkbox>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_prop"  >
                          <el-input v-model="myPage.queryBar.datepick.form_prop"  placeholder="请输入 form_prop"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_label" >
                          <el-input  v-model="myPage.queryBar.datepick.form_label"  placeholder="请输入 form_label"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_placeholder"  >
                          <el-input  v-model="myPage.queryBar.datepick.form_placeholder" placeholder="请输入 form_placeholder"></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>


              <el-row>
                  <el-col :span="4">
                      <el-form-item prop="name" label="" >
                          <el-checkbox v-model="myPage.queryBar.select.checked">日期框</el-checkbox>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_prop"  >
                          <el-input v-model="myPage.queryBar.select.form_prop"  placeholder="请输入 form_prop"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_label" >
                          <el-input  v-model="myPage.queryBar.select.form_label"  placeholder="请输入 form_label"></el-input>
                      </el-form-item>
                  </el-col>
                  <el-col :span="4">
                      <el-form-item prop="form_placeholder"  >
                          <el-input  v-model="myPage.queryBar.select.form_placeholder" placeholder="请输入 form_placeholder"></el-input>
                      </el-form-item>
                  </el-col>
              </el-row>

          </div>
          <div style="text-align: center">
              <el-button  type="danger" @click="getResult()">生成测试</el-button>
          </div>

          <hr  color="blue">


          <h1>按钮栏（buttonBar）</h1>
          <hr  color="blue"/>

          <h1>表格栏（tableBar）</h1>
          <hr  color="blue"/>

          <h1>分页栏（paginationBar）</h1>
          <hr  color="blue"/>

          <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <!--<el-button type="danger" @click="resetForm('ruleForm')">重置</el-button>-->
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        data(){
            const generateData = _ => {
                const data = [];
                data.push({ key: 0, label: `el-input`});
                data.push({ key: 1, label: `el-select`});
                data.push({ key: 2, label: `el-date-picker`});
                return data;
            };

            return {
                dynamicValidateForm: {
                    domains: [{ value: ''}],
                },

                mydata: generateData(),
                control_info:[ 'form_prop','form_label','form_placeholder'],
                value4: [], // 绑定 选择结果集 下标
                myPage:{
                    queryBar:{
                        input:   { checked:true, form_prop:'username', form_label:'账号', form_placeholder:'请输入 账号'},
                        datepick:{ checked:true, form_prop:'dob', form_label:'出生日期', form_placeholder:'请输入出生日期'},
                        select:  { checked:true, form_prop:'sex', form_label:'性别',  form_placeholder:'请输入 性别'},
                    },
                    buttonBar:{

                    },
                    tableBar:{

                    },
                    paginationBar:{

                    },
                },
                ruleForm:{},
                rules: {
                }
            }
        },
        methods:{
            handleChange(value, direction, movedKeys) {
                console.log(value, direction, movedKeys);
            },
            submitForm() {
                this.$axios.post('freemarker/test1', {}).then(function (res) {
                    console.log(res);
                }).catch(function (error) { console.log(error);});

            },
            getResult() {
//                var temp = this.myPage.queryBar;
                this.$axios.post('/freemarker/test2',this.myPage).then(  // sos 全局引用 方法 在main.js中 加入import axios from 'axios' 和 Vue.prototype.$ajax = axios
                    (res) => { console.log(res,111111111); }, //                res.data.data
                    (err)=>  { console.log(err,222222222);});
//                console.log(temp.length,'333333333');
//                console.log(this.myPage.queryBar.input.form_prop,'111111111');


//                console.log(this.value4);
//                for(var i= 0;i<this.value4.length;i++){
//                    if(this.value4[i] === this.mydata[i].key) {
//                        console.log(this.mydata[i],'111111111');
//                        Vue.set(this.myPage.queryBar, this.mydata[i].label, this.control_info);// sos 给 data中的属性/对象  动态添加属性/对象
//                    }
//                }
            }
        }
    }

</script>
