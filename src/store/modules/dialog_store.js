

const dialog_store = {
    state: {
        add_show:false, //  新增框 呈现标志
        edit_show:false, //  编辑框 呈现标志
        count:10,  //  暂时没意义
        edit_model:{}, //  编辑框 回显model
    },

    getters:{  // state的计算属性 暴露给外部
        add_show: state => state.add_show,
        edit_show: state => state.edit_show,
        edit_model: state => state.edit_model,
    } ,

    mutations: {
        switch_dialog(state){//这里的state对应着上面这个 state 大对象
            state.show = state.show?false:true;
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
