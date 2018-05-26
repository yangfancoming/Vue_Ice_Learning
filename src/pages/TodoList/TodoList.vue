<template>
  <div class="todoList">
      <h1>
          {{list}}
      </h1>
  </div>

</template>
<script>

    export default {
        data() {
            return {
                list:['111','222','333'],
            }
        },
//        methods:{
//            handleChange(value) {console.log(value); },
//        }
    }
</script>