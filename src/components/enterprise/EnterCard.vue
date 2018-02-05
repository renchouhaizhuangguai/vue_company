<template>
    <div>
        <!--电子名片-->
        <div class="public_module">
            <div class="Square">
                <div class="Square_box"></div>
            </div>
            <div class="plate_two_module">
                <div class="name">
                    <h4 class="title">统一管理，从此告别客户流失</h4>
                    <p class="content">所有信息，表格化导出</p>
                </div>
                <div class="letter_report">
                    <div class="enter_call">
                        <img class="float call_phone" :src="require('@/assets/img/n_enter_pchone.png')" alt="">
                        <img class="call_import" :src="require('@/assets/img/n_import.png')" alt="">
                        <img :src="require('@/assets/img/n_scanning.png')" class="enter_import" alt="">
                        <img class="scanning float_right" :src="require('@/assets/img/n_enter_compont.png')" alt="">
                    </div>
                </div>
            </div>
        </div>
        <!--背景图片-->
        <Back :back="require('@/assets/public_image/background-map7.jpg')"></Back>
        <!--专业背调-->
        <section class="public_module">
            <div class="plate_two_module">
                <div class="call_colour"></div>
                <div class="call_colour1"></div>
                <div class="name">
                    <h4 class="title">企业深度推广，SHOW下便知</h4>
                    <p class="content">小成本、大营销</p>
                </div>
                <div class="letter_report">
                    <div class="enter_show">
                        <img class="float call_phone" :src="require('@/assets/img/n_enter_show_phone.png')" alt="">
                        <img :src="require('@/assets/img/n_enter_show.png')" class="e_show" alt="">
                        <div class="enter_text float_right">
                            <img :src="require('@/assets/img/n_enter_show_dian.png')" alt="">
                            <h4>公司简介(company profile)</h4>
                            <p>职信网致力于弘扬中华诚信文化，推动社会职业诚信体系建设，为个人和企业创造信 用财富。职信网凭借自身强</p>
                            <p>职信网凭借自身强大的人力资源服务和数据获取能力，能够对个人职业履历进行客观
                                及时、专业、多维的职业信用评估，并形成专业的职业信用评估报告。目前平台涉及职信
                                报告、职信名片、职信档案、职信数据等服务，并广泛应用于企业雇佣、银行征信、商业
                                合作、个人合作等多个领域。目前职信网是国内唯一真正意义上的职业认证平台，不但实
                                现了个人、企业之间信息的实时交互，更具创新性的解决了背景调查中信息权威性和真实
                                性的顽疾！</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--背景图片-->
        <Back :back="require('@/assets/public_image/background-map3.jpg')"></Back>
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
                    <img class="float query_left" :src="require('@/assets/img/n_query_left.png')" alt="">
                    <img class="float_right query_right" :src="require('@/assets/img/n_call_query.png')" alt="">
                </div>
            </div>
        </div>
        <!--背景图片-->
        <Back :back="require('@/assets/public_image/background-map5.jpg')"></Back>
        <!--报告样式-->
        <section class="public_module">
            <div class="plate_two_module">
                <div class="name">
                    <h4 class="title">企业管理界面</h4>
                    <p class="content">整合多家权威数据源为信息准确性保驾护航</p>
                </div>
                <div class="letter_report">
                    <ul class="nav_li float">
                        <li class="active" data-identifier="1">认证员工名片</li>
                        <li data-identifier="2">名片管理</li>
                    </ul>
                    <div class="Computer float_right nav_Computer" style="margin-bottom:80px;">
                        <div class="Computer_box">
                            <img :src="require('@/assets/public_image/n_1.jpg')" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import Back from '@/components/public/backImage'
    export default {
        name:'EnterCacd',
        components:{Back}
    }
</script>