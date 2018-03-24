<template>
  <div>
    <Banner></Banner>
    <!--职信报告-->
    <section class="public_module" :style="{backgroundImage: 'url('+require('../../assets/img/n_back_per1.png')+')'}">
      <div class="plate_two_module">
        <div class="name">
          <h4 class="title">职信报告，记录你的职业轨迹</h4>
          <p>掌舵自己的职场方向</p>
        </div>
        <div class="letter_report">
          <div class="letter_Line">
            <img class="line_xiang" src="../../assets/img/n_xiang.png" alt="">
            <ol class="flash">
              <li class="wow fadeInUp animated animated" data-wow-delay="0.1s"></li>
              <li class="wow fadeInUp animated animated" data-wow-delay="0.4s"></li>
              <li class="wow fadeInUp animated animated" data-wow-delay="0.7s"></li>
              <li class="wow fadeInUp animated animated" data-wow-delay="1s"></li>
              <li class="wow fadeInUp animated animated" data-wow-delay="1.3s"></li>
              <li class="wow fadeInUp animated animated" data-wow-delay="1.6s"></li>
            </ol>
            <ul class="line_content">
              <li>
                <div class="li wow bounceIn animated animated animated" data-wow-delay="0.2s">
                  <div class="gardens">
                    <i class="iconfont icon-fangzi"></i>
                  </div>
                  <div class="li_box">
                    <p>2013.09-2014.08</p>
                    <p>北京**广告有限公司(实习)</p>
                    <span>产品营销助理</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="li wow bounceIn animated animated animated" data-wow-delay="0.5s">
                  <div class="gardens">
                    <i class="iconfont icon-fangzi"></i>
                  </div>
                  <div class="li_box">
                    <p>大学毕业</p>
                    <p>2014.07</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="li wow bounceIn animated animated animated" data-wow-delay="0.8s">
                  <div class="gardens">
                    <i class="iconfont icon-fangzi"></i>
                  </div>
                  <div class="li_box">
                    <p>2014.10-2015.07</p>
                    <p>北京****电商有限公司</p>
                    <span>产品营销</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="li wow bounceIn animated animated animated" data-wow-delay="1.1s">
                  <div class="gardens">
                    <i class="iconfont icon-fangzi"></i>
                  </div>
                  <div class="li_box">
                    <p>上海****科技有限公司</p>
                    <span>产品营销</span>
                    <p>2015.08-2016.09</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="li wow bounceIn animated animated animated" data-wow-delay="1.4s">
                  <div class="gardens">
                    <i class="iconfont icon-fangzi"></i>
                  </div>
                  <div class="li_box">
                    <p>2016.10-2017.07</p>
                    <p>上海****科技有限公司</p>
                    <span>产品经理</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="li wow bounceIn animated animated animated" data-wow-delay="1.7s">
                  <div class="gardens">
                    <i class="iconfont icon-fangzi"></i>
                  </div>
                  <div class="li_box">
                    <p>南京****科技有限公司</p>
                    <span>产品经理</span>
                    <p>2017.08-至今</p>
                  </div>
                </div>
              </li>
            </ul>
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
    <self-back :back="require('../../assets/public_image/background-map2.jpg')" second-mes="随时随地，动态管理" first-mes="电脑/手机/pad，随时记录、随时管理"></self-back>
    <!--脱颖而出-->
    <section class="public_module" :style="{background: 'url('+require('../../assets/img/n_back_per2.png')+') no-repeat 50% 10%'}">
      <div class="plate_two_module">
        <div class="name">
          <h4 class="title">简历更胜一筹，面试脱颖而出</h4>
          <p class="content">报告代替简历，轻松碾压竞争者</p>
        </div>
        <div class="letter_report">
          <ul class="nav_li float">
            <li class="active" data-identifier="1">实名认证</li>
            <li data-identifier="2">个人信息</li>
            <li data-identifier="3">教育经历</li>
            <li data-identifier="4">工作经历</li>
            <li data-identifier="5">语言技能</li>
            <li data-identifier="6">自定义问题</li>
            <li data-identifier="7">个人工商</li>
            <li data-identifier="8">不良记录</li>
            <li data-identifier="9">职业技能</li>
          </ul>
          <div class="Computer float_right nav_Computer">
            <div class="Computer_box">
              <img src="../../assets/public_image/n_1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import SelfBack from '../public/backImage';
  import Banner from '@/components/public/banner'
  import Footer from '@/components/public/footer'
  export default {
    name: "personal-authentication",
    components: {
      SelfBack,Banner,Footer
    },
    data() {
      return{
        firstMes: '随时随地，动态管理',
        secondMes: '电脑/手机/pad，随时记录、随时管理'
      }
    },
    created() {
      this.$store.commit('changePage', 2);
      this.$store.commit('chanageUser', 2);
    }
  }
</script>

<style scoped>

</style>
