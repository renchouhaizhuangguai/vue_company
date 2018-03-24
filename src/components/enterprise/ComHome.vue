<template>
    <div class="ComHome">
        <!--<div class="public_banner" id="js_banner">-->
            <!--<ul class="banner" id="js_banner_img">-->
                <!--<li>-->
                    <!--<div class="fx_banner_inner fx_grid_c1">-->
                        <!--<div class="child child0" data-z="1" :style="{backgroundImage: 'url(' + img.banner1 + ')' }"></div>-->
                        <!--<a href="#" class="banner3 banner1"><span class="hide">抢先领取</span></a>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<div class="banner_foot">-->
                <!--<div class="garden"></div>-->
            <!--</div>-->
        <!--</div>-->
        <!--<el-carousel trigger="click" class="public_banner">-->
            <!--<el-carousel-item v-for="item in 4" :key="item">-->
                <!--<div class="fx_banner_inner fx_grid_c1">-->
                    <!--<div class="child child0" data-z="1" :style="{backgroundImage: 'url(' + require('@/assets/public_image/banner1.jpg') + ')' }"></div>-->
                    <!--<a href="#" class="banner3 banner1"><span class="hide">抢先领取</span></a>-->
                <!--</div>-->
                <!--&lt;!&ndash;<h3>{{ item }}</h3>&ndash;&gt;-->
            <!--</el-carousel-item>-->
        <!--</el-carousel>-->
        <!--<el-carousel indicator-position="outside" class="public_banner">-->
            <!--<el-carousel-item v-for="item in 4" :key="item" class="fx_banner_inner fx_grid_c1">-->
                <!--<h3>{{ item }}</h3>-->
            <!--</el-carousel-item>-->
        <!--</el-carousel>-->
        <Banner></Banner>
        <!--背景调查-->
        <section class="public_module">
            <div class="plate_two_module">
                <div class="enter_back">
                    <div class="back_left float">
                        <h3>背景调查</h3>
                        <i></i>
                        <p>报告由企业背书，电子化备案；1秒-2天内完成</p>
                        <a href="">立即查看</a>
                    </div>
                    <img class="right float_right" src="../../assets/img/n_enter_back.png" alt="">
                </div>
            </div>
        </section>
        <section class="public_module enter_call">
            <div class="plate_two_module">
                <div class="letter_report">
                    <div class="enter_back">
                        <div class="back_left float_right">
                            <h3 class="enter_call_text">职趣名片</h3>
                            <i class="enter_call_i"></i>
                            <p  class="enter_call_text">统一管理，从此告别客户流失</p>
                            <a  class="enter_call_jump" href="">立即查看</a>
                        </div>
                        <img class="right float" src="../../assets/img/n_enter_call.png" alt="">
                    </div>
                </div>
            </div>
        </section>
        <backImage :back='require("@/assets/public_image/background-map1.jpg")' first-mes='企业背书、保证数据权威性' second-mes='全线上操作、流程记录，不存在人为篡改、主观判断'></backImage>
        <!--职趣名片-->
        <section class="public_module">
            <div class="plate_two_module">
                <div class="name">
                    <h4 class="title">职信网独家ASP认证模型</h4>
                    <p class="content">智能解析、结构化拆分、精准提炼</p>
                </div>
                <div class="enter_asp_body">
                    <div class="asp_content">
                        <ul class="asp_box" >
                            <li v-for="view in name" :key="view.name">
                                <img :src="view.url" alt="">
                                <div class="li_box">{{view.name}}</div>
                            </li>
                        </ul>
                    </div>
                    <p class="asp_introduce">由多位具备多年HR背景及猎头背景的资深人士共同开发设计，并经历了上万人次的的线下验证和不断修正，目前对于简历解析
                        和数据化拆分的精准率达到98%，对于结果提炼的精确度达到99%。</p>
                </div>
            </div>
        </section>
        <cooperation></cooperation>
        <Footer></Footer>
    </div>
</template>
<script>
    import Banner from '@/components/public/banner'
    import Footer from '@/components/public/footer'
    import cooperation from '@/components/public/cooperation'
    import BackImage from '@/components/public/backImage'

    export default {
      name:'EnterHome',
      data(){
          return{
              name:[
                  {name:'职业技能',url:require('@/assets/img/n_asp1.png')}, {name:'个人工商',url:require('@/assets/img/n_asp2.png')},
                  {name:'语言技能',url:require('@/assets/img/n_asp3.png')}, {name:'个人信息',url:require('@/assets/img/n_asp4.png')},
                  {name:'教育信息',url:require('@/assets/img/n_asp5.png')}, {name:'工作履历',url:require('@/assets/img/n_asp6.png')}
                  ],

          }
      },
      components:{
        cooperation, BackImage, Banner, Footer
      },
      created() {
        this.$store.commit('changePage', 1);
        this.$store.commit('chanageUser', 1);
      }
    }
</script>
<style scoped="">
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
