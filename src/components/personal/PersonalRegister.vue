<template>
  <!--个人注册-->
  <div id="login">
    <div class="login_box">
      <div class="register">
        <div class="register_body">
          <h3 class="name">个人注册</h3>
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
                <input type="text" placeholder="请输入手机号码">
                <button class="cookie">获取验证码</button>
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">设置密码</label>
                <input type="password" placeholder="请输入密码">
                <i class="iconfont icon-yanjing1 Eye"></i>
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">确认密码</label>
                <input type="password" placeholder="请确认密码">
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">邀请人手机</label>
                <input type="text" placeholder="请输入邀请人手机">
              </div>
            </div>
            <p class="text">点击注册即表示您同意<a href="">《职业信用管理平台管理服务协议》</a></p>
            <div class="submit">
              <button>立即注册</button>
            </div>
            <p class="jump">已有账号！<router-link tag="a" :to="{path: '/personallogin'}">立即登录</router-link></p>
          </form>
          <div class="Jump_login">
            <router-link tag="a" :to="{path: '/comregister'}">
              切换企业注册
              <i class="iconfont icon-youjiantou"></i>
            </router-link>
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
      name: "personal-registry",
      created() {
        this.$store.commit('changePage', 5);
        this.$store.commit('chanageUser', 2);
      }
    }
</script>

<style scoped>

</style>
