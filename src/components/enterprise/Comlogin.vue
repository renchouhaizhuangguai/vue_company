<template>
  <!--个人登录-->
  <div id="login">
    <div class="login_box">
      <div class="personal_login">
        <div class="login_left float">
          <div class="admin">
            <h3>企业登录</h3>
            <form class="login" action="">
              <div class="form_con">
                <i class="iconfont icon-geren"></i>
                <input ref="acc" type="text" v-model="userAccount" placeholder="手机号/用户名">
              </div>
              <div class="form_con">
                <i class="iconfont icon-suo"></i>
                <input ref="pas" type="text" v-model="password" placeholder="密码">
              </div>
              <p class="login_p">
                <router-link tag="a" class="forget" :to="{path: '/findpassord', query: {userType: 1}}">忘记密码？</router-link>
              </p>
              <button @click="handlelogin" type="button" class="btn h_btn">登录</button>
              <p class="login_p1">
                <router-link tag="a" :to="{path: '/comregister'}">还没有账号？<span>立即注册</span></router-link>
              </p>
            </form>
            <div class="Jump_login">
              <router-link tag="a" :to="{path: '/personallogin'}">
                切换个人登录
                <i class="iconfont icon-youjiantou"></i>
              </router-link>
            </div>
          </div>
          <div class="text">
            <p>版权所有：上海履途网路科技有限公司</p>
            <p>
              <span>© 2018 www.hrzhixin.com</span><span>沪ICP备17015994号</span><span>沪公网安备 31010402004118号</span>
              <img class='beian' :src="require('@/assets/img/n_beian.png')" alt="">
            </p>
          </div>
        </div>
        <img :src="require('@/assets/img/n_login_beijing1.png')" class="login_right float_right"/>

      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      return {
        userAccount: '',
        password: '',
        list: [],
      }
    },
    methods: {
        handlelogin(e) {
            this.$http.post('/default/company-login', {username:this.userAccount,password: this.$Encrypt_en(this.password)}).then(data => {
                if(data.data.respCode==1){
                    this.$local.save("company_token",data.data.data);
                    this.$http.defaults.headers.Authorization=data.data.data.token;
                    if(this.$route.query.direction){
                        this.$router.push({
                            path:'/'+this.$route.query.direction
                        });
                    }else{
                        this.$router.push({
                            path:'/comloginhead'
                        });
                    }
                }else{
                    this.$message.error(data.data.respMsg)
                }
            }).catch(error => console.log(error))
        }
    },
    created() {
      this.$store.commit('changePage', 4);
      this.$store.commit('chanageUser', 1);
    }
  }
</script>
