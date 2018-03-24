<template>
  <!--企业注册-->
  <div id="login" @click="ulFlag=false">
    <div class="login_box">
      <div class="register">
        <div class="register_body">
          <h3 class="name">企业注册</h3>
          <form class="form_submit" action="#">
            <div class="form_list">
              <div class="list_box">
                <label for="">企业名称</label>
                <input style="width: 190px" type="text" v-model="comName" placeholder="请输入企业名称" v-on:input ="getCompany">
                <ul class="enterName" v-show="ulFlag">
                  　 <li @click="handleName(item.entName)" v-for="(item,index) in myData">{{item.entName}}</li>
                </ul>
              </div>
            </div>

            <div class="form_list">
              <div class="list_box">
                <label for="">联系人姓名</label>
                <input type="text" v-model="comConnectPer"  placeholder="请联系人姓名">
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">联系人手机</label>
                <input type="text" v-model="connectPhone"  placeholder="请联系人手机">
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">验证码</label>
                <input type="text" v-model="checkNum" placeholder="请输入验证码">
                <button class="cookie">获取验证码</button>
              </div>
            </div>
            <div class="form_list">
              <div class="list_box">
                <label for="">邀请人手机</label>
                <input type="text" v-model="invatePerson" placeholder="请输入邀请人手机">
              </div>
            </div>
            <p class="text">点击注册即表示您同意<a href="">《职业信用管理平台管理服务协议》</a></p>
            <div class="submit">
              <button :class="{active:comName===''? false : true }" type="button" @click="companyReg">立即注册</button>
            </div>
            <p class="jump">已有账号！
              <router-link tag="a" :to="{path: '/comlogin'}">立即登录</router-link>
            </p>
          </form>
          <div class="Jump_login">
            <router-link tag="a" :to="{path: '/personalregis'}">
              切换个人注册
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
    name: "com-registry",
    data() {
      return{
        comName: '',
        comConnectPer: '',
        connectPhone: '',
        checkNum: '',
        invatePerson:'',
        tl:'',
        myData:[],
        ulFlag:false
      }
    },
    methods: {
      getCompany(){
        this.$http.get('/thirdparty/get-company-name',{params: { 'company_name': this.comName }}).then(res=>{
            if(res.data.data.length>0){
                this.ulFlag=true
            }else{
                this.ulFlag=false
            }
          this.myData=res.data.data;
        }).catch(error=> console.log(error))
      },
      companyReg(){
        this.$http.post('/reg-company',{
            company_name: this.comName,
            contacts: this.comConnectPer,
            contacts_phone: this.connectPhone,
            verify_code: this.checkNum,
            referee: this.invatePerson,

        }).then(data=>{
          if(data.data.respCode==1){
            this.$message({
                type:'success',
                message:'注册成功，请注意查收密码'
            })
              this.$router.push({
                  path:'/comlogin'
              })
          }else{
            this.$message.error(data.data.respMsg)
          }
        }).catch(error=>console.log(error))
      },
        handleName(name){
          this.ulFlag=false
          this.comName=name
        }
    },
    created() {
      this.$store.commit('changePage', 5);
    },
  }


</script>

<style scoped>

</style>
