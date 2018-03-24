<template>
  <div>
    <Banner></Banner>
    <!--职信报告-->
    <section class="public_module">
      <div class="garden"></div>
      <div class="Square">
        <div class="Square_box"></div>
      </div>
      <div class="plate_two_module">
        <div class="name">
          <h4 class="title">职信报告</h4>
          <p class="content">随时记录你的职业生涯</p>
        </div>
        <div class="letter_report">
          <ul class="report_list float">
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.2s">
              <div class="li_box">
                <img src="../../assets/img/n_record.png" alt="">
                <div class="content">记录职业生涯</div>
              </div>
            </li>
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.5s">
              <div class="li_box">
                <img src="../../assets/img/n_Administration.png" alt="">
                <div class="content">动态管理</div>
              </div>
            </li>
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.8s">
              <div class="li_box">
                <img src="../../assets/img/n_exchange.png" alt="">
                <div class="content">报告代替简历</div>
              </div>
            </li>
          </ul>
          <div class="Computer float_right">
            <div class="Computer_box">
              <img src="../../assets/img/zhixin_back.png" alt="">
            </div>
          </div>
        </div>
        <div class="btn">
          <a href="">
            <div class="button float">
              <div class="button_box h_btn">
                了解详情
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!--背景图片-->
    <self-back :back="require('../../assets/public_image/background-map1.jpg')" first-mes="企业背书、保证数据权威性" second-mes="全线上操作、流程记录，不存在人为篡改、主观判断"></self-back>
    <!--职趣名片-->
    <section class="public_module">
      <div class="Triangle"></div>
      <div class="Triangles"></div>
      <div class="plate_two_module">
        <div class="name">
          <h4 class="title">职趣名片</h4>
          <p class="content">一扫既存，动态实时更新好友信息</p>
        </div>
        <div class="letter_report">
          <ul class="report_list float">
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.2s">
              <div class="li_box">
                <img src="../../assets/img/n_record.png" alt="">
                <div class="content">一扫即存</div>
              </div>
            </li>
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.5s">
              <div class="li_box">
                <img src="../../assets/img/n_Administration.png" alt="">
                <div class="content">职位认证</div>
              </div>
            </li>
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="0.8s">
              <div class="li_box">
                <img src="../../assets/img/n_exchange.png" alt="">
                <div class="content">动态更新</div>
              </div>
            </li>
            <li class="wow bounceIn animated animated animated animated" data-wow-delay="1.1s">
              <div class="li_box">
                <img src="../../assets/img/n_exchange.png" alt="">
                <div class="content">企业查询</div>
              </div>
            </li>
          </ul>
          <div class="Computer float_right phonehome" :style="{background: 'url('+require('../../assets/img/n_phonehome.png') +')'}"></div>
        </div>
        <div class="btn">
          <a href="">
            <div class="button float">
              <div class="button_box h_btn">
                了解详情
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <!--合作伙伴-->
    <Cooperation></Cooperation>
    <Footer></Footer>
  </div>
</template>

<script>
    import SelfBack from '../public/backImage'
    import Banner from '@/components/public/banner'
    import Footer from '@/components/public/footer'
    import Cooperation from '@/components/public/cooperation'
    export default {
      name: "personal-home",
      components: {
        SelfBack,Banner,Footer,Cooperation
      },
      data() {
        return{
          firstMes: '企业背书、保证数据权威性',
          secondMes: '全线上操作、流程记录，不存在人为篡改、主观判断'
        }
      },
      created() {
        this.$store.commit('changePage', 1);
        this.$store.commit('chanageUser', 2);
      }
    }
</script>

<style scoped>

</style>
