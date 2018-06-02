<template>
  <div class="dashboard">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" :inline="true" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="name" label="姓名：">
              <el-input  placeholder="请输入姓名" v-model="ruleForm.name"></el-input>
          </el-form-item>

          <el-form-item prop="sex"  label=" 性别" >
              <el-select  align="center"  v-model="ruleForm.sex"  placeholder="请选择 性别">
                  <el-option align="center"  label="男" value="1"></el-option>
                  <el-option align="center"  label="女" value="0"></el-option>
              </el-select>
          </el-form-item>

          <el-form-item  prop="dob" label="出生日期" >
              <el-date-picker v-model="ruleForm.dob" type="date" placeholder="选择日期" :editable=false value-format="yyyy-MM-dd"> </el-date-picker>
          </el-form-item>

          <h1>查询栏（queryBar）</h1>
          <div style="text-align: center">
              <el-transfer style="text-align: left; display: inline-block" v-model="value4"
                           :left-default-checked="[0,1,2,3]"  :titles="['请选择控件类型', '结果集']" :button-texts="['到左边', '到右边']"
                           :format="{  noChecked: '${total}',hasChecked: '${checked}/${total}' }" @change="handleChange" :data="mydata">
                  <span slot-scope="{ option }">{{ option.key + 1 }} ： {{ option.label }}</span>
              </el-transfer>
          </div>
          <div style="text-align: center">
              <el-button  type="danger" @click="getResult()">生成测试</el-button>
          </div>

          <hr  color="blue">


          <h1>按钮栏（buttonBar）</h1>

          <hr  color="blue">



          <h1>表格栏（tableBar）</h1>

          <hr  color="blue">






          <h1>分页栏（paginationBar）</h1>


          <hr  color="blue">

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
                mydata: generateData(),
                btn:[ 'form_prop','form_label','form_placeholder'],
                value4: [], // 绑定 选择结果集 下标
                myPage:{
                    queryBar:{


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
                console.log(this.value4);
                for(var i= 0;i<this.value4.length;i++){
                    if(this.value4[i] === this.mydata[i].key) {
                        console.log(this.mydata[i],'111111111');
                        Vue.set(this.myPage.queryBar, this.mydata[i].label, this.btn);// sos 给 data中的属性/对象  动态添加属性/对象

                    }

                }
            }
        }
    }

</script>
