<template>
  <div align="center" class="Vuex"> <!-- fuck 在模板 template 中 至少要有一个根元素 div 或是其他容器标签 否则页面报错崩溃-->
      <h1> 全局store的 count 属性：（{{ $store.state.count }}） --------------- show 属性：（{{$store.state.show}}） </h1>

      <!-- sos 直接修改方式 -->
      <el-row>
          <el-button type="success"  @click="$store.state.count++"> 直接增加</el-button>
          <el-button type="info"     @click="$store.state.count--"> 直接减少</el-button>
      </el-row>

      <!-- sos 通过 mutations 方式 带参数 调用的地方不需要显示写出 ，第一参数写的是方法名-->
      <el-row>
          <el-button type="primary"  @click="$store.commit('add',10)">  mutations 增加</el-button>
          <el-button type="success"  @click="$store.commit('reduce',5)">mutations 减少</el-button>
      </el-row>

      <h1> 全局 switch_dialo 的 count 属性：（{{ $store.state.dialog_store.count }}） ---------------  show 属性：（{{$store.state.dialog_store.show}}） </h1>
      <el-row>
          <el-button type="primary" round @click="$store.state.dialog_store.show = true">直接改变show属性</el-button>
          <el-button type="warning" round @click="$store.commit('switch_dialog')">commit改变show属性</el-button>     <!--使用 $store.commit('switch_dialog') 来触发 mutations 中的 switch_dialog 方法。-->
          <el-button type="success" round @click="$store.dispatch('switch_dialog')">dispatch改变show属性</el-button>   <!--使用 $store.dispatch('switch_dialog') 来触发 action 中的 switch_dialog 方法。-->
      </el-row>

      <el-row>
          <el-input-number v-model="$store.state.count" @change="this.handleChange" :min="-10" :max="123" label="描述文字"></el-input-number> <!-- sos 该控件可以限制 store中的属性值的范围 -->
      </el-row>
  </div>
</template>

<script>

    export default {
        data() {
            return {
                list:['111','222','333'],
            }
        },
        methods:{
            handleChange(value) {console.log(value); },
        }
    }
</script>
