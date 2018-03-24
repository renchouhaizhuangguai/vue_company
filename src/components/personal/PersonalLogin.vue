<template>
  <div id="login">
    <div class="login_box">
      <div class="personal_login">
        <div class="login_left float">
          <div class="admin">
            <h3>个人登录</h3>
            <form class="login" action="">
              <div class="form_con">
                <i class="iconfont icon-geren"></i>
                <input type="text" placeholder="手机号/用户名">
              </div>
              <div class="form_con">
                <i class="iconfont icon-suo"></i>
                <input type="text" placeholder="密码">
              </div>
              <p class="login_p">
                <router-link tag="a" class="forget" :to="{path: '/findpassord', query: {userType: 2}}">忘记密码？</router-link>
              </p>
              <button class="btn h_btn">登录</button>
              <p class="login_p1">
                <router-link tag="a" :to="{path: '/personalregis'}">还没有账号？<span>立即注册</span></router-link>
              </p>
            </form>
            <div class="Jump_login">
              <router-link tag="a" :to="{path: '/comlogin'}">
                切换企业登录
                <i class="iconfont icon-youjiantou"></i>
              </router-link>
            </div>
          </div>
          <div class="text">
            <p>版权所有：上海履途网路科技有限公司</p>
            <p>
              <span>© 2018 www.hrzhixin.com</span><span>沪ICP备17015994号</span><span>沪公网安备 31010402004118号</span>
              <img class='beian' src="../../assets/img/n_beian.png" alt="">
            </p>
          </div>
        </div>
        <img src="../../assets/img/n_login_beijing.png" class="login_right float_right"/>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "personal-login",
      created() {
        this.$store.commit('changePage', 4);
        this.$store.commit('chanageUser', 2);
      }
    }
</script>

<style scoped>

</style>
