<template>
  <div class="comCardSetUser">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">
          <span>名片管理</span>
          <router-link :to="{path: '/comloginhead/comCardManage'}" tag="span" class="goback">返回<i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
        </div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>数据管理员介绍</span>
        </div>
        <div class="comExplain">
          <div class="explain">1、企业认证过的所有员工的名片使用数据都只会在数据管理员账号显示。（数据管理员个人登录后“企业名片管理”模块）</div>
          <div class="explain">2、更换管理员后，数据会在新管理员账号显示，旧账号管理模块将消失。</div>
        </div>

        <div class="baseMesTitle">
          <span class="red"></span>
          <span>设置数据管理员</span>
        </div>
        <div class="cardAdmin" v-show="hascarduser === 1">
          <div class="cardArea">
            <img src="../../assets/public_image/admin1.png" alt="">
            <span>您还未设置名片数据管理员</span>
          </div>
          <div class="combutton" @click="moduleShow1 = 1;moduleTitle='添加名片管理员';Type=1">现在设置</div>
        </div>
        <div class="cardAdmin" v-show="hascarduser === 2">
          <div class="cardArea">
            <div class="cardAreaTitle">管理员</div>
            <div class="cardUserName">
              <img src="../../assets/public_image/adminUserName.png" alt="">
              <span class="cardName">姓名 :</span>
              <span class="nameText">{{adminInfo.name}}</span>
            </div>
            <div class="cardUserName">
              <img src="../../assets/public_image/adminUserPhone.png" alt="">
              <span class="cardName">手机 :</span>
              <span class="nameText">{{adminInfo.phone}}</span>
            </div>
          </div>
          <div class="combutton" @click="moduleShow1 = 1;moduleTitle='修改名片管理员';Type=2">更换管理员</div>
        </div>
      </div>
    </section>

    <!--单人添加企业认证管理员-->
    <Module :moduleTitle="moduleTitle" isWidth="450" isHeight="350" v-show="moduleShow1===1" @close="handleClose1">
      <div class="zx_Choice" slot="zx_content">
        <div class="authen">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">姓&nbsp;&nbsp; 名 :</span>
          <input class="nameText comNameMes" name="" placeholder="请输入姓名" v-model="admin.name">
        </div>
        <div class="authen authen1">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">手机号 :</span>
          <input class="nameText comNameMes" name="" placeholder="请输入手机号" v-model="admin.phone">
        </div>
        <div class="authen authen1">
          <img src="../../assets/public_image/styleImg.png" alt="">
          <span class="cardName">验证码 :</span>
          <div class="cardborder">
            <input class="nameText comNameMes" name="" placeholder="请输入验证码" v-model="admin.Verification">
            <span class="colLine">|</span>
            <button class="goback" @click="timeDown" :disabled="disFlag" :class="{colorOut:disFlag}">{{checkText}}</button>
          </div>
        </div>
        <div class="combutton" @click="handleAdd">确认</div>
      </div>
    </Module>
  </div>
</template>

<script>
  import Module from '../public/module'
  export default {
    name: "card-card-set-user",
    components: {
      Module,
    },
    data() {
      return{
        hascarduser: 1,   //cardAdmin是否显示
        moduleShow1: 0,   //控制弹框是否显示
        moduleTitle:'',
        checkText: '获取验证码',
        admin:{
            name:'',
            phone:'',
            Verification:''
        },
        adminInfo:{
            name:'',
            phone:'',
            id:0
        },
        Type:1,
        disFlag:false
      }
    },
    methods: {
      handleClose1() {
        this.moduleShow1 = 0;
      },
        //获取验证码
      timeDown() {
        if(this.admin.phone===''){
            this.$message({
                type:'warning',
                message:'手机号不能为空'
            })
        }else{
            this.$http.post('set-up/send-verify-code',{
                platform:1,
                vcode_type:4,
                phone:this.admin.phone
            })
                .then(res=>{
                    if(res.data.respCode===1){
                        this.$message({
                            type:'success',
                            message:'短信已发送，请注意查收'
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
                    }else{
                        this.$message({
                            type:'warning',
                            message:res.data.respMsg
                        })
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        }
      },

      handleAdd(){
        if(this.admin.name!==''&&this.admin.phone!==''&&this.admin.Verification!==''){
            var url=this.Type===1?'vcard/save-card-manage':'vcard/update-card-manage';
            this.$http.post(url,{
                name:this.admin.name,
                phone:this.admin.phone,
                verify_code:this.admin.Verification,
                platform:1,
                vcode_type:4,
                id:this.adminInfo.id
            })
                .then(res=>{
                    if(res.data.respCode===0){
                        this.$message({
                            type:'warning',
                            message:res.data.respMsg
                        })
                    }else if(res.data.respCode===1){
                        this.$message({
                            type:'success',
                            message:this.Type===1?'添加名片管理员成功':'修改名片管理员成功'
                        })
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
        }else{
            this.$message({
                type:'warning',
                message:'姓名，手机号，验证码不能为空'
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
        //获取职趣名片管理员
        this.$http.get('vcard/card-manage')
            .then(res=>{
                if(res.data.respCode===0){
                    this.hascarduser=1
                }else if(res.data.respCode===1){
                    this.hascarduser=2;
                    this.adminInfo=res.data.data
                }
            })
            .catch(err=>{
                console.log(err)
            })

        this.$store.commit('changeComIndex', 7);
    }
  }
</script>

<style scoped>

</style>
