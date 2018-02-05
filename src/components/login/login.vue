<template>
    <!--个人登录-->
    <div id="login">
        <div class="login_box">
            <div class="personal_login">
                <div class="login_left float">
                    <div class="admin">
                        <h3>企业登录</h3>
                        <form class="login" action="">
                            <div class="form_con">
                                <i class="iconfont icon-geren"></i>
                                <input ref="acc" type="text" placeholder="手机号/用户名">
                            </div>
                            <div class="form_con">
                                <i class="iconfont icon-suo"></i>
                                <input ref="pas" type="text" placeholder="密码">
                            </div>
                            <p class="login_p">
                                <a class="forget" href="">忘记密码？</a>
                            </p>
                            <button @click="handlelogin" type="button" class="btn h_btn">登录</button>
                            <p class="login_p1">
                                <a href="">还没有账号？<span>立即注册</span></a>
                            </p>
                        </form>
                        <div class="Jump_login">
                            <a href="">
                                切换个人登录
                                <i class="iconfont icon-youjiantou"></i>
                            </a>
                        </div>
                    </div>
                    <div class="text">
                        <p>版权所有：上海履途网路科技有限公司</p>
                        <p>
                            <span>© 2018 www.hrzhixin.com</span><span>沪ICP备17015994号</span><span>沪公网安备 31010402004118号</span>
                            <img class='beian' :src="require('@/assets/img/n_beian.png')" alt="">
                        </p>
                    </div>
                </div>
                <img :src="require('@/assets/img/n_login_beijing1.png')" class="login_right float_right"/>

            </div>

        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name:'login',
        data(){
            return{
                type:{acc:'',pas:''},
                list:[],
            }
        },
        methods:{
            handlelogin(e){
                this.type.acc=this.$refs.acc.value;
                this.type.pas = this.$Encrypt_en(this.$refs.pas.value);
                this.$http.post('/api/ajax/login',{
                     phone:this.type.acc,
                     password:this.type.pas
                })
                    .then(data=>console.log(data))
                    .catch(error=>console.log(error))

            }
        },
    }
</script>
<style scoped lang="scss">
    #login{
        span{
            color: red;
        }
    }
</style>
