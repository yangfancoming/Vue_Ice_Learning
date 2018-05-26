<template>
  <div class="Vuex">
      <h1> 全局store的 count 属性：（{{ $store.state.count }}） --------------- 全局store的 show 属性：（{{$store.state.show}}） </h1>




      <el-row>
          <el-button type="primary" circle @click="$store.commit('add',10)">+</el-button>   <!-- sos 访问mutations中的方法  带参数 调用的地方不需要显示写出 ，第一参数写的是方法名-->
          <h1>{{ $store.state.count }} ----------{{$store.state.show}} </h1>
          <el-button type="success" circle @click="$store.commit('reduce')">-</el-button>   <!-- sos 访问mutations中的方法-->
      </el-row>

      <el-row>
          <el-button round @click="$store.commit('switch_dialog')">圆角按钮</el-button>     <!--使用 $store.commit('switch_dialog') 来触发 mutations 中的 switch_dialog 方法。-->
          <el-button type="primary" round @click="$store.state.dialog_store.show = true">新增</el-button>
          <el-button type="success" round @click="$store.dispatch('switch_dialog')">成功按钮</el-button>   <!--使用 $store.dispatch('switch_dialog') 来触发 action 中的 switch_dialog 方法。-->
      </el-row>



      <el-row>


          <el-input-number v-model="$store.state.count" @change="this.handleChange" :min="1" :max="123" label="描述文字"></el-input-number> <!-- sos 该控件可以限制 store中的属性值的范围 -->
      </el-row>
  </div>
</template>

<script>

    export default {
        methods:{
            handleChange(value) {console.log(value); },
        }
    }
</script>
