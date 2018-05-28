

const dialog_store = {
    state: {
        add_show:false,
        edit_show:false,
        count:10,
        edit_model:{},  },

    getters:{
        add_show: state => state.add_show,
        edit_show: state => state.edit_show,
        edit_model: state => state.edit_model,
    } ,   // state的计算属性

    mutations: {
        switch_dialog(state){//这里的state对应着上面这个state
            state.show = state.show?false:true;
            //你还可以在这里执行其他的操作改变state
        }
    },
    actions: {
        switch_dialog(context){//这里的context和我们使用的$store拥有相同的对象和方法
            context.commit('switch_dialog');
            //你还可以在这里触发其他的mutations方法
        },
    }
}

export default dialog_store
