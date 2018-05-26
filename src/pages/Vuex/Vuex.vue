<template>
  <div class="Vuex">
      <el-row>
          <el-button round @click="$store.commit('switch_dialog')">圆角按钮</el-button>     <!--使用 $store.commit('switch_dialog') 来触发 mutations 中的 switch_dialog 方法。-->
          <el-button type="primary" round @click="$store.state.dialog_store.show = true">新增</el-button>
          <el-button type="success" round @click="$store.dispatch('switch_dialog')">成功按钮</el-button>   <!--使用 $store.dispatch('switch_dialog') 来触发 action 中的 switch_dialog 方法。-->
      </el-row>

  </div>
</template>
