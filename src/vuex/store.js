import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        message:1,
        list:['1','2','3','4','5'],
        JsonList:[
            {
                name:'zhangsan',
                age:13
            },
            {
                name:'lisi',
                age:15
            },
            {
                name:'wangwu',
                age:18
            }
        ]
    },
    mutations:{
        reduce(state,payload){
            state.message-=payload.id;
        },
        add(){
            this.state.message+=1;
        }
    },
    getters:{
        doneTodos:(store)=>(id)=>{
            return store.list.filter(v=>{
                return v>id;
            })
        }
    }
})

