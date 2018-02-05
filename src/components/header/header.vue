<template>
    <div>
        <header class="public_head">
            <!--导航-->
            <div class="head_nav">
                <div class="nav_Inside">
                    <div class="logo">
                        <a class="Jump_logo" href=""></a>
                    </div>
                    <div class="plate">
                        <div class="plate_box active">
                            <a href="">企业版</a>
                        </div>
                        <div class="plate_box">
                            <a href="">个人版</a>
                        </div>
                    </div>
                    <ul class="second_level">
                        <router-link to="/" tag='li' exact event="mouseover"><a>首页</a></router-link>
                        <router-link :to="{name:'Auntent',params:{userId:123}}" tag='li'><a>职信认证</a></router-link>
                        <router-link :to="{path:'card',query:{username:'zhixin',password:'123456'}}" tag='li'><a>职趣名片</a></router-link>
                    </ul>
                    <div class="login">
                        <router-link to="/login" tag='a'>登录</router-link>
                        <router-link to="" tag='a'>免费注册</router-link>
                    </div>
                </div>
            </div>
            <Banner></Banner>
        </header>
            <router-view v-wechat-title="$route.meta.title"></router-view>
        <Foot></Foot>
    </div>

</template>
<script>
    import Foot from '@/components/footer/footer'
    import Banner from '@/components/public/banner'
    export default {
        name:'Header',
        components:{Banner,Foot},
    }
</script>
