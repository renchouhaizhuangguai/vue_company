<template>
    <div>
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
                    <img class="right float_right" :src="img.Back" alt="">
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
                        <img class="right float" :src="img.enter" alt="">
                    </div>
                </div>
            </div>
        </section>
        <backImage :back='img.backgroundMap1'></backImage>
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
                            <li v-for="(view,index) in name">
                                <img :src="require('@/assets/img/n_asp1.png')" alt="">
                                <div class="li_box">{{view}}</div>
                            </li>
                        </ul>
                    </div>
                    <p class="asp_introduce">由多位具备多年HR背景及猎头背景的资深人士共同开发设计，并经历了上万人次的的线下验证和不断修正，目前对于简历解析 <br> 和数据化拆分的精准率达到98%，对于结果提炼的精确度达到99%。</p>
                </div>
            </div>
        </section>
        <cooperation></cooperation>
    </div>
</template>
<script>
    import Back from '@/assets/img/n_enter_back.png'
    import enter from '@/assets/img/n_enter_call.png'
    import cooperation from '@/components/public/cooperation'
    import backImage from '@/components/public/backImage'
    import backgroundMap1 from '../../assets/public_image/background-map1.jpg'
    import backgroundMap2 from '../../assets/public_image/background-map2.jpg'
    export default {
        name:'EnterHome',
        data(){
            return{
                img:{
                    Back, enter,backgroundMap1,backgroundMap2
                },
                name:['职业技能','个人工商','语言技能','个人信息','教育信息','工作履历']
            }
        },
        components:{cooperation,backImage}
    }
</script>