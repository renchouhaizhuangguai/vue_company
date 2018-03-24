<template>
  <div id="comloginhead">
    <header id="head">
      <span class="head_text">欢迎登录职信网平台（企业版）</span>
      <div class="head_right" v-on:mouseover="isActive=true" v-on:mouseout="isActive=false">
        <span>{{comName}}</span><img src="../../assets/img/xia_jiantou.png" alt="">
        <div class="admin" :class="{active:isActive}">
          <div class="admin_s" :class="{active:isActive}">
            <div class="admin_box"><router-link :to="{path:'/comloginhead/ModifyPassword'}">修改密码</router-link></div>
            <div class="admin_box"><router-link :to="{path:'/comloginhead/comMessage'}">企业资料</router-link></div>
            <div class="admin_box" @click="SignOut">退出</div>
            <img src="../../assets/img/shang_jiantou.png" alt="">
          </div>
        </div>
      </div>
    </header>
    <nav id="nav">
      <ul>
        <li class="nav_hv"><span>首页</span></li>
        <li :class="{active: utilsIndex === 1}"><router-link :to="{path: '/comloginhead/'}" tag="a"><i class="iconfont icon-shouye"></i><span>首页</span></router-link></li>
        <li class="nav_hv"><span>职信认证</span></li>
        <li :class="{active: utilsIndex === 2}"><router-link :to="{path: '/comloginhead/startProfAuthen'}"><i class="iconfont icon-renzheng2"></i><span>发起背景调查</span></router-link></li>
        <li :class="{active: utilsIndex === 3}"><router-link :to="{path:'/comloginhead/comrecord'}" tag="a"><i class="iconfont icon-jilu"></i><span>发起认证记录</span></router-link></li>
        <li :class="{active: utilsIndex === 4}"><router-link :to="{path: '/comloginhead/comstaff'}" tag="a"> <i class="iconfont icon-shouquan"></i><span>接受背景认证</span></router-link></li>
        <li :class="{active: utilsIndex === 5}"><router-link :to="{path:'/comloginhead/comTalent'}" tag="a"><i class="iconfont icon-rencai"></i><span>人才档案</span></router-link></li>
        <!--<li class="nav_hv"><span>电子名片</span></li>-->
        <!--<li :class="{active: utilsIndex === 6}"><router-link :to="{path: '/comloginhead/comStaffCard'}"><i class="iconfont icon-mingpian&#45;&#45;copy"></i><span>认证员工名片</span></router-link></li>-->
        <!--<li :class="{active: utilsIndex === 7}"><router-link :to="{path: '/comloginhead/comCardManage'}"><i class="iconfont icon-guanli2"></i><span>名片管理</span></router-link></li>-->
        <li class="nav_hv"><span>企业账户</span></li>
        <li :class="{active: utilsIndex === 8}"><router-link :to="{path: '/comloginhead/servercharge'}" tag="a"><i class="iconfont icon-kuajingzhifuiconqiyezhanghu"></i><span>服务费账户</span></router-link></li>
        <li :class="{active: utilsIndex === 9}"><router-link :to="{path: '/comloginhead/amygdala'}" tag="a"><i class="iconfont icon-xingren"></i><span>杏仁币账户</span></router-link></li>
        <li :class="{active: utilsIndex === 10}"><router-link :to="{path:'/comloginhead/invoice'}" tag="a"><i class="iconfont icon-zhipinhaocai"></i><span>发票管理</span></router-link></li>
        <li class="nav_hv"><span>设置</span></li>
        <li :class="{active: utilsIndex === 11}"><router-link :to="{path: '/comloginhead/comMessage'}"><i class="iconfont icon-qiyeziliao"></i><span>企业资料</span></router-link></li>
        <li :class="{active: utilsIndex === 12}"><router-link :to="{path: '/comloginhead/comAdmin'}"><i class="iconfont icon-guanli1"></i><span>管理员</span></router-link></li>
        <li :class="{active: utilsIndex === 13}"><router-link :to="{path: '/comloginhead/comblacklist'}"><i class="iconfont icon-heimingdan"></i><span>黑名单</span></router-link></li>
        <li :class="{active: utilsIndex === 14}"><router-link :to="{path: '/comloginhead/adviceAndReport'}"><i class="iconfont icon-xiugai"></i><span>意见反馈</span></router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import '../../assets/iconfont/iconfont.css'
  import '../../assets/css/public.css'
  import  '../../assets/css/enterprise_index.css'
  import  '../../assets/css/Authentication_staff.css'
  import '../../assets/css/comMessage.css'
  import '../../assets/css/rofessinAhen.css'

  import {mapState,mapMutations} from 'vuex'
  export default {
    name: "comloginhead",
    data(){
      return{
          isActive:false,
          comName:''
      }
    },
    computed: {
      utilsIndex () {
          return this.$store.state.comUtilsIndex;
      },
    },
    methods:{
        //登出
        SignOut(){
            this.$local.save('company_token',null)
            this.$router.push({
                path:'/'
            })
        }
    },
    created() {
        this.comName=this.$local.fetch('company_token').company_name
        this.$store.commit('changeComIndex', 1);
    },
    updated(){
        if(this.$route.name==='paymentMethod'||this.$route.name==='forward'){
            window.document.querySelector('#nav').style.display='none'
            window.document.querySelector('#head').style.display='none !important'
        }
        if(this.$route.name==='additional'){
            window.document.querySelector('#nav').style.display='none'
            window.document.querySelector('#head').style.display='none'
        }else{
            if(window.document.querySelector('#head')){
                window.document.querySelector('#head').style.display='block'
            }
        }
    }
  }
</script>

<style scoped lang="scss">
</style>
