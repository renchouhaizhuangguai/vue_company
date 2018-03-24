<template>
  <div>
    <Banner></Banner>
    <!--电子名片-->
    <div class="public_module" :style="{backgroundImage: 'url('+require('../../assets/img/n_back_per1.png')+')'}">
      <div class="Square">
        <div class="Square_box"></div>
      </div>
      <div class="plate_two_module">
        <div class="name">
          <h4 class="title">一扫即存，客户管理一步到位</h4>
          <p class="content">名片解析快速倒入，和名片夹说88</p>
        </div>
        <div class="letter_report">
          <div class="post_call">
            <img class="float call_list" src="../../assets/img/n_call.png" alt="">
            <img class="float_right call_phone" src="../../assets/img/n_callphone.png" alt="">
            <img class="call_import" src="../../assets/img/n_import.png" alt="">
            <img class="scanning" src="../../assets/img/n_scanning.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!--背景图片-->
    <self-back :back="require('../../assets/public_image/background-map3.jpg')" first-mes="名片信息实时更新，告别过期名片" second-mes="随时了解客户动态、发掘潜在商机"></self-back>
    <!--职位认证-->
    <div class="public_module">
      <div class="Triangle"></div>
      <div class="Triangles"></div>
      <div class="plate_two_module">
        <div class="call_colour"></div>
        <div class="call_colour1"></div>
        <div class="name">
          <h4 class="title">职业信息真实认证，杜绝虚假</h4>
          <p class="content">净化职场空间</p>
        </div>
        <div class="letter_report">
          <ul class="report_list float report_call">
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.2s">
              <div class="li_box">
                <img src="../../assets/img/n_shanghai_compory.png" alt="">
                <div class="content">个人发起企业认证</div>
              </div>
            </li>
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.5s">
              <div class="li_box">
                <img src="../../assets/img/n_shanghai_com.png" alt="">
                <div class="content">企业认证个人</div>
              </div>
            </li>
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.8s">
              <div class="li_box">
                <img src="../../assets/img/n_dun_red.png" alt="">
                <div class="content">认证标识</div>
              </div>
            </li>
          </ul>
          <div class="Computer float_right phonehome call_phone1" :style="{backgroundImage: 'url('+require('../../assets/img/n_call_phone1.png')+')'}">
            <div class="call_map">
              <img src="../../assets/img/n_call_map.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--背景图片-->
    <self-back :back="require('../../assets/public_image/background-map4.jpg')" first-mes="多抬头多职位？一张全部搞定！" second-mes="告别繁琐、轻装上阵"></self-back>
    <!--一键查询-->
    <div class="public_module">
      <div class="garden Square_garden"></div>
      <div class="Square Squares">
        <div class="Square_box"></div>
      </div>
      <div class="plate_two_module">
        <div class="name">
          <h4 class="title">企业征信报告一键查询</h4>
          <p class="content">工商、投资、法律、风险、资质</p>
        </div>
        <div class="letter_report">
          <img class="float query_left" src="../../assets/img/n_query_left.png" alt="">
          <img class="float_right query_right" src="../../assets/img/n_call_query.png" alt="">
        </div>
      </div>
    </div>
    <!--背景图片-->
    <self-back :back="require('../../assets/public_image/background-map5.jpg')" first-mes="模板、简介个性化" second-mes="加深社交印象，让客户了解更多的你"></self-back>
    <Footer></Footer>
  </div>
</template>

<script>
  import SelfBack from '@/components/public/backImage'
  import Banner from '@/components/public/banner'
  import Footer from '@/components/public/footer'
    export default {
      name: "penter-auntent",
      components: {
        SelfBack,Banner,Footer
      },
      data() {
        return{
        }
      },
      created() {
        this.$store.commit('changePage', 3);
        this.$store.commit('chanageUser', 2);
      }
    }
</script>

<style scoped>

</style>
