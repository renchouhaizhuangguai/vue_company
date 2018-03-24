<template>
  <div class="comMessage">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">企业资料</div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>基本信息</span>
        </div>
        <div class="baseMes">
          <div class="firstCol">
            <div class="nameRow">
              <span class="comName">企业名称 :</span>
              <span class="comNameMes">{{EnterInfor.company_name}}</span>
              <router-link tag="span" :to="{path: '/comloginhead/comChanName',query:{name:'更换公司名字'}}" class="comNameChange">公司名称更换</router-link>
            </div>
            <div class="nameRow">
              <span class="comName">统一信用代码 :</span>
              <span class="comNameMes">{{EnterInfor.cpy_number}}</span>
            </div>
          </div>
          <div class="secondCol">
            <div class="nameRow">
              <span class="comName">联系人 :</span>
              <span class="comNameMes">{{EnterInfor.contact_name}}</span>
              <router-link tag="span" :to="{path: '/comloginhead/comChanCttf',query:{name:EnterInfor.contact_name,phone:EnterInfor.contact_mobile}}" class="comNameChange">更换联系人</router-link>
            </div>
            <div class="nameRow">
              <span class="comName">手机号 :</span>
              <span class="comNameMes">{{EnterInfor.contact_mobile}}</span>
            </div>
          </div>
          <div class="secondCol">
            <div class="licenceBorder">
              <img class="zanLicence" style="width: 100%;height:100%;display: block"
                   :src="EnterInfor.business_licence!==''?'http://ounzc8nuo.bkt.clouddn.com/'+EnterInfor.business_licence+'?imageView2/1/w/240/h/290':''" alt="">
              <router-link :to="{path:'/comloginhead/comChanName',query:{name:'更换营业执照'}}" tag="span" class="goUp" v-show="EnterInfor.business_licence===''?true:false">去上传</router-link>
            </div>
            <img v-show="EnterInfor.business_licence===''?true:false" class="tipsImg" src="../../assets/public_image/upAward.png" alt="">
            <strong style="display:block;margin-top:5px;font-size: 14px;padding-left:13px;color: #333">营业执照</strong>
          </div>
        </div>
      </div>
    </section>
    <section class="section" style="padding-top:0">
      <div class="comBaseMes">
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>详细资料</span>
        </div>
        <div class="actImg" v-show="EnterInfor.is_display!==1?true:false">
          <img v-if="EnterInfor.is_agent_user===1" src="../../assets/img/putongren.jpg" alt="">
          <img v-if="EnterInfor.is_agent_user===2" src="../../assets/img/daili.jpg" alt="">
        </div>
        <div class="baseMes detailMes">
          <div class="firstCol">
            <div class="nameRow" style="margin:0;">
              <span class="comName">企业性质 :</span>
              <span class="comNameMes">{{EnterInfor.cpm_property}}</span>
            </div>
            <div class="nameRow" style="margin:0;">
              <span class="comName">注&nbsp;&nbsp;册&nbsp;地 :</span>
              <span class="comNameMes">{{EnterInfor.regArea}}</span>
            </div>
            <div class="nameRow" style="margin:0;">
              <span class="comName">企业网址 :</span>
              <span class="comNameMes">{{EnterInfor.web}}</span>
            </div>
          </div>
          <div class="firstCol">
            <div class="nameRow" style="margin:0;">
              <span class="comName">所属行业 :</span>
              <span class="comNameMes">{{EnterInfor.profession}}</span>
            </div>
            <div class="nameRow" style="margin:0;">
              <span class="comName">详细地址 :</span>
              <span class="comNameMes">{{EnterInfor.address}}</span>
            </div>
            <div class="nameRow" style="margin:0;">
              <span class="comName">企业邮箱 :</span>
              <span class="comNameMes">{{EnterInfor.contact_email}}</span>
            </div>
          </div>
          <div class="firstCol">
            <div class="nameRow" style="margin:0;">
              <span class="comName">企业规模 :</span>
              <span class="comNameMes">
                {{EnterInfor.cpm_scale}}
              </span>
            </div>
            <div class="nameRow" style="margin:0;">
              <span class="comName">固定电话 :</span>
              <span class="comNameMes">{{EnterInfor.contact_tel}}</span>
            </div>
          </div>
        </div>
        <div class="combutton"><router-link :to="{path: '/comloginhead/comMesChange'}" tag="span" :style="{'display': 'inline-block', 'width': '100%'}">修改</router-link></div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "com-message",
    data() {
      return{
          EnterInfor:[],
      }
    },
    created(){
        this.EnterInfor=this.$local.fetch('company_token')
        this.$store.commit('changeComIndex', 11);
    },
  }
</script>

<style scoped>

</style>
