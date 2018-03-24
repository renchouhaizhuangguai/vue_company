<template lang="html">
  <!--个人登录-->
  <div id="login">
    <div class="login_box">
      <div class="register">
        <div class="register_body">
          <h3 class="name">找回密码</h3>
          <form class="form_submit" action="">
            <div class="form_list">
              <div class="list_box">
                <label for="">手机号码</label>
                <input type="text" placeholder="请输入手机号码">
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">验证码</label>
                <input type="text" v-model="userAccount" placeholder="请输入手机号码">
                <button class="cookie">获取验证码</button>
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">设置新密码</label>
                <input type="password" v-model="firstpassword" placeholder="请输入密码">
                <i class="iconfont icon-yanjing1 Eye"></i>
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">确认新密码</label>
                <input type="password" v-model="secondpasword" placeholder="请确认密码">
              </div>
            </div>
            <p class="text">点击注册即表示您同意<a href="">《职业信用管理平台管理服务协议》</a></p>
            <div class="submit">
              <button>立即找回</button>
            </div>
          </form>
          <div class="Jump_login">
            <a @click="changeUserType()">
              切换登录
              <i class="iconfont icon-youjiantou"></i>
            </a>
          </div>
        </div>
        <div class="register_foot">
          <p><i class="iconfont icon-dianhua1"></i> 职信网客户服务电话：<span>400-0013-129</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "personal-password",
    data() {
      return{
        userType: 1,
        userAccount: '',
        firstpassword: '',
        secondpasword: '',
      }
    },
    methods: {
      changeUserType() {
        if(this.userType === 1){
          this.$router.push({path: '/personallogin'});
        }
        if(this.userType === 2){
          this.$router.push({path: '/comlogin'})
        }
      }
    },
    created() {
      this.userType = this.$route.query.userType;

      // console.log(this.userType);
    }

  }
</script>

<style scoped>

</style>
