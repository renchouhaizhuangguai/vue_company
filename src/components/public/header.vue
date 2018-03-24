<template lang="html">
    <header class="public_head">
      <!--导航-->
      <div class="head_nav">
        <div class="nav_Inside">
          <div class="logo">
            <a class="Jump_logo" href=""></a>
          </div>
          <div class="plate">
            <div class="plate_box" :class="{active:selfOrCom === 1}">
              <router-link :to="{path: '/'}">企业版</router-link>
            </div>
            <div class="plate_box" :class="{active:selfOrCom === 2}">
              <router-link :to="{path: '/personalhome'}">个人版</router-link>
            </div>
          </div>
          <ul class="second_level">
            <li :class="{active: secondLevel === 1 }"><a @click="jumpChild(1)">首页</a></li>
            <li :class="{active: secondLevel === 2 }"><a @click="jumpChild(2)">职信认证</a></li>
            <li :class="{active: secondLevel === 3 }"><a @click="jumpChild(3)">职趣名片</a></li>
          </ul>
          <div class="login">
            <a :class="{active: secondLevel === 4 }" @click="jumpChild(4)">登录</a>
            <a :class="{active: secondLevel === 5 }" @click="jumpChild(5)">免费注册</a>
          </div>
        </div>
      </div>
    </header>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'Header',
    data() {
      return {

      }
    },
    computed: {
      ...mapState['pageState', 'userType'],
      selfOrCom() {
        return this.$store.state.userType;
      },
      secondLevel() {
        return this.$store.state.pageState;
      }
    },
    methods: {
      jumpChild(id) {
        if(this.selfOrCom === 1){
          id === 1 ? this.$router.push({path: '/'}) : (id === 2 ? this.$router.push({path: '/auntent'}) : (id === 3 ? this.$router.push({path: '/card'}) : (id === 4 ? this.$router.push({path: '/comlogin'}) : this.$router.push({path: '/comregister'}))))
        }
        if(this.selfOrCom === 2){
          id === 1 ? this.$router.push({path: '/personalhome'}) : (id === 2 ? this.$router.push({path: '/personalauthen'}) : (id === 3 ? this.$router.push({path: '/personalcall'}) : (id === 4 ? this.$router.push({path: '/personallogin'}) : this.$router.push({path: '/personalregis'}))))
        }
      }
    }
  }
</script>
