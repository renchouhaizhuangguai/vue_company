import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'comHome',
      meta: {
        title: '企业首页'
      },
      component: resolve => require(['../components/enterprise/ComHome'], resolve),
    },
    {
      path: '/card',
      name: 'Card',
      component: resolve => require(['../components/enterprise/ComCard'], resolve)
    },
    {
      path: '/auntent',
      name: 'Auntent',
      component: resolve => require(['../components/enterprise/ComAuntent'], resolve)
    },
    {
      path: '/comlogin',
      name: 'ComLogin',
      meta:{
        title:'企业登录'
      },
      component: resolve => require(['../components/enterprise/Comlogin'], resolve)
    },
    {
      path: '/comregister',
      name: 'ComRegister',
      meta:{
        title:'企业注册'
      },
      component: resolve => require(['../components/enterprise/ComRegister'], resolve)
    },
    {
      path: '/personalhome',
      name: 'personalHome',
      meta:{
        title:'个人版首页'
      },
      component: resolve => require(['../components/personal/PersonalHome'], resolve)
    },
    {
      path: '/personalauthen',
      name: 'personalAuthen',
      meta: {
        title: '个人职信认证'
      },
      component: resolve => require(['../components/personal/authen'], resolve)
    },
    {
      path: '/personalcall',
      name: 'personalCall',
      meta: {
        title: '个人职趣名片'
      },
      component: resolve => require(['../components/personal/PersonalCall'], resolve)
    },
    {
      path: '/personallogin',
      name: 'personalLogin',
      meta: {
        title: '个人登录'
      },
      component: resolve => require(['../components/personal/PersonalLogin'], resolve)
    },
    {
      path: '/personalregis',
      name: 'personalRegis',
      meta: {
        title: '个人注册'
      },
      component: resolve => require(['../components/personal/PersonalRegister'], resolve)
    },
    {
      path: '/findpassord',
      name: 'findPassord',
      meta: {
        title: '找回密码'
      },
      component: resolve => require(['../components/public/findpassword'], resolve)
    },
      {
        path:'/copytext',
        name:'copytext',
        component:resolve=> require(['../components/public/copyHead'],resolve),
        children:[
            {
              path:'/copytext/about',
              name:'about',
              component:resolve=> require(['../components/copyText/about'],resolve),
            },
            {
                path:'/copytext/company_clause',
                name:'company_clause',
                component:resolve=> require(['../components/copyText/company_clause'],resolve),
            },
            {
                path:'/copytext/contact',
                name:'contact',
                component:resolve=> require(['../components/copyText/contact'],resolve),
            },
            {
                path:'/copytext/recruit',
                name:'recruit',
                component:resolve=> require(['../components/copyText/recruit'],resolve),
            },
            {
                path:'/copytext/PersonalClause',
                name:'PersonalClause',
                component:resolve=> require(['../components/copyText/PersonalClause'],resolve),
            },
        ]
      },
    //企业登录后的路由
     {
      path: '/comloginhead',
      name: 'comloginhead',
      component: resolve => require(['../components/public/comloginhead'], resolve),
      redirect: '/comloginhead/',
      meta:{
          login:true
      },
      children: [
        {
          path: '/comloginhead/',
          name: 'comloginindex',
          meta: {
            title: '企业版',
          },
          component: resolve => require(['../components/enterprise/comloginindex'], resolve),
        },
        {
          path: '/comloginhead/startProfAuthen',
          name: 'startProfAuthen',
          meta: {
            title: '发起背景调查'
          },
          component: resolve => require(['../components/professionAuthen/startProfAuthen'], resolve),
        },
          {
              path: '/comloginhead/batchApplication',
              name: 'batchApplication',
              meta: {
                  title: '发起背景调查'
              },
              component: resolve => require(['../components/professionAuthen/batchApplication'], resolve),
          },
        {
            path: '/comloginhead/comrecord',
            name: 'comrecord',
            meta: {
                title: '接受背景调查'
            },
            component: resolve => require(['../components/enterprise/comrecord'], resolve),
        },
        {
          path: '/comloginhead/comstaff',
          name: 'comstaff',
          meta: {
            title: '接受背景认证'
          },
          component: resolve => require(['../components/enterprise/comstaff'], resolve),
        },
        {
            path:'/comloginhead/anthentication',
            name:'Anthentication',
            meta:{
              title:'认证'
            },
            beforeEnter(to,form,next){
                if(to.query.id){
                    next();
                }else{
                    router.push({
                        path:'/comloginhead/comstaff'
                    })
                }
            },
            component: resolve => require(['../components/professionAuthen/Authentication'], resolve),
        },
          {
              path:'/comloginhead/forward',
              name:'forward',
              meta:{
                  title:'转发认证'
              },
              component: resolve => require(['../components/professionAuthen/forward'], resolve),
          },
        {
            path: '/comloginhead/comTalent',
            name: 'comTalent',
            meta: {
                title: '人才档案'
            },
            component: resolve => require(['../components/enterprise/comTalent'], resolve),
        },
        {
          path: '/comloginhead/servercharge',
          name: 'servercharge',
          meta: {
            title: '服务费账户'
          },
          component: resolve => require(['../components/enterprise/servercharge'], resolve),
        },
          {
              path: '/comloginhead/serverList',
              name: 'serverList',
              meta: {
                  title: '服务费明细'
              },
              component: resolve => require(['../components/enterprise/serverList'], resolve),
          },
        {
          path: '/comloginhead/amygdala',
          name: 'amygdala',
          meta: {
            title: '杏仁币账户'
          },
          component: resolve => require(['../components/enterprise/amygdala'], resolve),
        },
        {
          path: '/comloginhead/comMessage',
          name: 'comMessage',
          meta: {
            title: '企业资料'
          },
          component: resolve => require(['../components/enterprise/comMessage'], resolve),
        },
        {
          path: '/comloginhead/comChanCttf',
          name: 'comChanCttf',
          meta: {
            title: '更换联系人'
          },
          component: resolve => require(['../components/enterprise/comChanCttf'], resolve),
        },
        {
          path: '/comloginhead/comChanCtts',
          name: 'comChanCtts',
          meta: {
            title: '更换联系人'
          },
          component: resolve => require(['../components/enterprise/comChanCtts'], resolve),
        },
        {
          path: '/comloginhead/comChanName',
          name: 'comChanName',
          meta: {
            title: '更换公司名称'
          },
          component: resolve => require(['../components/enterprise/comChanName'], resolve),
        },
        {
          path: '/comloginhead/comUpLicence',
          name: 'comUpLicence',
          meta: {
            title: '上传营业执照'
          },
          component: resolve => require(['../components/enterprise/comUpLicence'], resolve),
        },
        {
          path: '/comloginhead/comUpLogo',
          name: 'comUpLogo',
          meta: {
            title: '上传企业logo'
          },
          component: resolve => require(['../components/enterprise/comUpLogo'], resolve),
        },
        {
          path: '/comloginhead/comMesChange',
          name: 'comMesChange',
          meta: {
            title: '企业资料修改'
          },
          component: resolve => require(['../components/enterprise/comMesChange'], resolve),
        },
        {
          path: '/comloginhead/comAdmin',
          name: 'comAdmin',
          meta: {
            title: '管理员'
          },
          component: resolve => require(['../components/enterprise/comAdmin'], resolve),
        },
        {
          path: '/comloginhead/comblacklist',
          name: 'comblacklist',
          meta: {
            title: '黑名单'
          },
          component: resolve => require(['../components/enterprise/comblacklist'], resolve),
        },
        {
          path: '/comloginhead/comStaffCard',
          name: 'comStaffCard',
          meta: {
            title: '认证员工名片'
          },
          component: resolve => require(['../components/enterprise/comStaffCard'], resolve),
        },
        {
          path: '/comloginhead/comCardManage',
          name: 'comCardManage',
          meta: {
            title: '名片管理'
          },
          component: resolve => require(['../components/enterprise/comCardManage'], resolve),
        },
        {
          path: '/comloginhead/comCardSetUser',
          name: 'comCardSetUser',
          meta: {
            title: '设置名片管理员'
          },
          component: resolve => require(['../components/enterprise/comCardSetUser'], resolve),
        },
        {
          path: '/comloginhead/comUniteImg',
          name: 'comUniteImg',
          meta: {
            title: '统一模板'
          },
          component: resolve => require(['../components/enterprise/comUniteImg'], resolve),
        },
        {
          path: '/comloginhead/comShow',
          name: 'comShow',
          meta: {
            title: '企业秀'
          },
          component: resolve => require(['../components/enterprise/comShow'], resolve),
        },
        {
          path: '/comloginhead/adviceAndReport',
          name: 'adviceAndReport',
          meta: {
            title: '意见反馈'
          },
          component: resolve => require(['../components/enterprise/adviceAndReport'], resolve),
        },
        {
          path:'/comloginhead/invoice',
          name:'invoice',
          meta:{
            title:'发票管理'
          },
          redirect:'/comloginhead/invoice/',
          component: resolve => require(['../components/cominvoice/invoice'], resolve),
          children:[
            {
                path:'/comloginhead/invoice/',
                name:'adminInvoice',
                meta:{
                  title:'发票管理'
                },
                component: resolve => require(['../components/cominvoice/admininvoice'], resolve),
            },
            {
                path:'/comloginhead/claimInvoice',
                name:'claimInvoice',
                meta:{
                    title:'发票管理',
                },
                beforeEnter:(to,from,next)=>{
                    if(to.params.Odd_Numbers){
                        next();
                    }else{
                        router.push({
                            path:'/comloginhead/invoice'
                        })
                    }
                },
                component: resolve => require(['../components/cominvoice/ClaimInvoice'], resolve),
            },
            {
                path:'/comloginhead/listInvoice',
                name:'listInvoice',
                meta:{
                    title:'发票列表'
                },
                component: resolve => require(['../components/cominvoice/listInvoice'], resolve),
            },
            {
                path:'/comloginhead/informationInvoice',
                name:'informationInvoice',
                meta:{
                    title:'发票信息'
                },
                component: resolve => require(['../components/cominvoice/informationInvoice'], resolve),
            },
            {
                path:'/comloginhead/addressInvoice',
                name:'addressInvoice',
                meta:{
                    title:'发票地址'
                },
                component: resolve => require(['../components/cominvoice/addressInvoice'], resolve),
            }
          ]
        },
          {
              path:'/comloginhead/payment',
              name:'payment',
              meta:{
                title:'购买'
              },
              component: resolve => require(['../components/enterprise/payment'], resolve),
          },
          {
              path:'/comloginhead/paymentMethod',
              name:'paymentMethod',
              meta:{
                  title:'支付'
              },
              component: resolve => require(['../components/enterprise/PaymentMethod'], resolve),
          },
          {
              path:'/comloginhead/additional',
              name:'additional',
              meta:{
                  title:'附加报告'
              },
              component: resolve => require(['../components/Presentation/additional'], resolve),
          },
          {
              path: '/comloginhead/ModifyPassword',
              name: 'ModifyPassword',
              meta: {
                  title: '修改密码'
              },
              component: resolve => require(['../components/enterprise/ModifyPassword'], resolve),
          },
      ]
    },
     {
          path:'*',
          redirect:{
            path:'/'
          }
     }
  ]
});

router.beforeEach((to, from, next)=>{
    if(to.matched.some((item)=>item.meta.login)){
        let info=router.app.$local.fetch('company_token')
        if(info.token){
            next()
        }else{
            router.push({
                path:'/comlogin',
                query:{
                    direction:to.path.slice(1)
                }
            })
        }
    }else{
        next()
    }
})

router.afterEach((to, from) => {
  if(/comloginhead/.test(to.path.toString())) {
      document.querySelector('.public_head').style.display = 'none';
  } else {
      document.querySelector('.public_head').style.display = 'block';
  }
  if(to.path === '/comloginhead/paymentMethod'||to.path === '/comloginhead/forward'||to.path === '/comloginhead/additional'){
      if(document.querySelector('#nav')){
          document.querySelector('#nav').style.display='none';
      }
  }else{
      if(document.querySelector('#nav')){
          document.querySelector('#nav').style.display='block';
      }
  }
  if(to.path === '/comloginhead/additional'){
      window.onload=function(){
         document.querySelector('#nav').style.display='none';
         document.querySelector('#head').style.display='none';
      }
  }
});

export default router;


