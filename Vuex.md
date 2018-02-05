##VUEX起步

————————————————————————————————————————————————

###核心概念

####1：state 在vuex中存储的数据都是响应式的，从store实列中读取状态最简单的方式就在计算属性里（computed）返回某个状态

#####例如

**// 创建一个 Counter 组件
  const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
      count () {
        return store.state.count
      }
    }
  }**
  
***mapState辅助函数**

####2：getter 有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：(比作store中的计算属性)

***mapGetter辅助函数**


