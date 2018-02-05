import Vue from 'vue'
import VueRouter from 'vue-router'

// import EnterHome from '@/components/enterprise/EnterHome'
// import EnterCard from '@/components/enterprise/EnterCard'
// import EnterAuntent from '@/components/enterprise/EnterAuntent'
// import login from '@/components/login/login'


/*按需加载模块*/
const EnterHome = resolve => require(['@/components/enterprise/EnterHome'],resolve)
const EnterCard = resolve => require(['@/components/enterprise/EnterCard'],resolve)
const EnterAuntent = resolve => require(['@/components/enterprise/EnterAuntent'],resolve)
const login = resolve => require(['@/components/login/login'],resolve)

Vue.use(VueRouter)

var router = new VueRouter({
    mode: 'history',
    linkActiveClass:"active",
    routes:[
        {
            path:'/',
            name:'Home',
            meta:{
              title:'首页'
            },
            component:EnterHome
        },
        {
            path:'/card',
            name:'Card',
            meta:{
              title:'名片'
            },
            component:EnterCard
        },
        {
            path:'/auntent',
            name:'Auntent',
            meta:{
              title:'enter'
            },
            component:EnterAuntent
        },
        {
            path:'/login',
            name:'Login',
            meta:{
              title:'登录'
            },
            component:login
        },
    ],
});
router.afterEach((to,from)=>{
    if(to.name=='Login'){
        document.querySelector('#js_banner').style.display='none';
    }else{
        document.querySelector('#js_banner').style.display='block';
    }
});
export default router;


