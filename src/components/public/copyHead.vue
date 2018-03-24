<template>
    <div class="copyhead">
    <div class="clause_banner">
        <div class="banner_bop" :style="{backgroundImage:'url('+ require('@/assets/public_image/banner_news.png') +')'}"></div>
        <div class="banner_foot">
            <ul>
                <router-link :to="{path:'/copytext/about'}" tag="li"><a href="">关于我们</a></router-link>
                <router-link :to="{path:'/copytext/recruit'}" tag="li"><a href="">招聘英才</a></router-link>
                <router-link :to="{path:'/copytext/contact'}" tag="li"><a href="">联系我们</a></router-link>
                <router-link :to="{path:'/copytext/company_clause'}" tag="li"><a class="clause" :class="{active:isActive===1}">服务协议</a></router-link>
            </ul>
        </div>
    </div>
    <router-view></router-view>
    <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../../components/public/footer'
export default {
    name:'copyhead',
    components:{Footer},
    computed:{
        isActive(){
            return this.$store.state.serviceType
        }
    }
}
</script>
<style scoped>
    .clause.active{
        background: #fc725e;
        color: #fff;
    }
</style>