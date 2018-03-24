<template>
  <div class="comChanCttf">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">
          <span>更换联系人</span>
          <router-link :to="{path: '/comloginhead/comMessage'}" tag="span" class="goback">返回<i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
        </div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>验证原始账号</span>
        </div>
        <div class="baseMes conChangeMes">
          <div class="thirdCol">
            <div class="nameRow">
              <span class="comName">新账号姓名 :</span>
              <input class="comNameMes" name="" placeholder="请输入新账号姓名" v-model="aggregate.name">
            </div>
            <div class="nameRow">
              <span class="comName">新账号手机号 :</span>
              <input class="comNameMes" name="" placeholder="请输入新账号手机号" v-model="aggregate.phone">
            </div>
            <div class="nameRow">
              <span class="comName">输入验证码 :</span>
              <input class="comNameMes" name="" placeholder="请输入验证码" v-model="aggregate.Verification">
              <button type="button" :disabled="disFlag" class="combutton aa" @click="timeDown" :class="{timeOut:disFlag}">{{checkText}}</button>
            </div>
          </div>
        </div>
        <div class="combutton" @click="handleComifg">确认</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "com-change-contact-f",
    data() {
      return{
        checkText: '获取验证码',
          aggregate:{
              name:'',
              phone:'',
              Verification:''
          },
          disFlag:false
      }
    },
    methods: {
      timeDown() {
          if(this.aggregate.phone!==''){
              this.$http.post('set-up/send-verify-code',{
                  phone:this.aggregate.phone,
                  platform:1,
                  vcode_type:3
              })
                  .then(res=>{
                      if(res.data.respCode===1){
                          this.$message({
                              type:'success',
                              message:res.data.respMsg
                          })
                          let timeNumber = 60;
                          let self = this;
                          let time1 = setInterval(function () {
                              timeNumber--;
                              if(timeNumber <= 0){
                                  self.checkText = '获取验证码';
                                  self.disFlag=false
                                  clearInterval(time1);
                              }else{
                                  self.$cookie.set('r-c-phone',timeNumber,{expires:'60s'})
                                  self.disFlag=true;
                                  self.checkText = timeNumber+'秒';
                              }
                          }, 1000);
                      }else if(res.data.respCode===0){
                          this.$message({
                              type:'warning',
                              message:res.data.respMsg
                          })
                      }
                  })
                  .catch(err=>{
                      console.log(err)
                  })
          }else{
              this.$message({
                  type:'warning',
                  message:'手机号不能为空'
              })
          }
      },
        handleComifg(){
            if(this.aggregate.Verification===''&&this.aggregate.name===''&&this.aggregate.phone){
                this.$message({
                    type:'warning',
                    message:'验证码不能为空'
                });
                return false;
            }else{
              this.$http.post('set-up/update-contacts',{
                  contact_mobile:this.aggregate.phone,
                  contact_name:this.aggregate.name,
                  verify_code:this.aggregate.Verification,
                  platform:1,
                  vcode_type:3,
              })
                  .then(res=>{
                      if(res.data.respCode===1){
                          this.$message({
                              type:'success',
                              message:'修改成功'
                          });
                          let token=this.$local.fetch('company_token');
                          token.contact_name=this.aggregate.name;
                          token.contact_mobile=this.aggregate.phone;
                          this.$local.save('company_token',token);
                          setTimeout(()=>{
                              this.$router.push({
                                  path:'/comloginhead/comMessage'
                              })
                          },2000)
                      }else if(res.data.respCode===0){
                          this.$message({
                              type:'warning',
                              message:res.data.respMsg
                          });
                      }
                  })
                  .catch(err=>{
                      console.log(err)
                  })
        }
      }
    },
    created() {
        if(this.$cookie.get('r-c-phone')){
            let that=this;
            let number=this.$cookie.get('r-c-phone');
            var t=setInterval(function () {
                number--;
                if(number>0){
                    that.checkText=number+'秒';
                    that.disFlag=true;
                    that.$cookie.set('r-c-phone',number,{expires:number})
                }else{
                    clearInterval(t);
                    that.disFlag=false;
                    that.checkText='获取验证码'
                }
            },1000)
        }
      this.$store.commit('changeComIndex', 11)
    }

  }
</script>

<style scoped>

</style>
