<template>
    <div class="comMessage">
        <section class="section">
            <div class="comBaseMes">
                <div class="mesTitle">确认订单</div>
                <div class="baseMesTitle">
                    <span class="red"></span>
                    <span>支付金额</span>
                </div>
                <p class="pay_p1">订单金额：￥<span>3000</span></p>
                <p class="pay_p1">赠送积分：￥<span>3000</span></p>
                <p class="pay_p2">实付金额：<span>￥</span><span>3000</span></p>
                <div class="baseMesTitle">
                    <span class="red"></span>
                    <span>支付方式选择</span>
                </div>
                <ul class="pay_ul">
                    <li><input type="radio" name="radio2"><div class="li"><img src="../../assets/img/zhifubao.png" alt=""><span>支付宝</span></div></li>
                    <li><input type="radio" name="radio2"><div class="li"><img src="../../assets/img/wetchzhifu.png" alt=""><span>微信</span></div></li>
                    <li><input type="radio" name="radio2"><div class="li"><img src="../../assets/img/yanlianzhifu.png" alt=""><span>线下银行转账</span></div></li>
                </ul>
                <button class="pay_Submit" @click="handlePayment">立即支付</button>
            </div>
        </section>

    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    export default {
        name: "payment",
        data() {
            return{
                hadUp: 1,
            }
        },
        methods:{
            handlePayment(){
                this.$router.push({
                    path:'/comloginhead/paymentMethod'
                })
            }
        },
        created(){
            this.$store.commit('changeComIndex', 8);

        }
    }
</script>

<style scoped lang="scss">
    .pay_p1{
        margin-top:10px;
        font-size: 12px;
        color: #666;
        span{
            font-size: 16px;
            color: #333;
        }
    }
    .pay_p2{
        margin-top:15px;
        font-size: 14px;
        color: #333;
        span:nth-child(1){
            color: #ff6666;
        }
        span:nth-child(2){
            font-size: 22px;
            color: #ff6666;
        }
    }

    .pay_ul{
        width: 100%;
        height:60px;
        margin-top:20px;
        &:after{
            display: inline-block;
            content: '';
            font-size: 0;
            line-height: 0;
            clear: both;
        }
        li{
            float: left;
            width: 200px;
            position: relative;
            height:60px;
            margin-right:40px;
            input{
                display: block;
                width: 100%;
                height:100%;
                position: absolute;
                z-index: 10;
                opacity: 0;
            }
            input:checked+.li{
                border: 1px solid #fc725e;
            }

            .li{
                width: 100%;
                height:100%;
                border-radius: 6px;
                border: 1px solid #ccc;
                line-height: 60px;
                span{
                    font-size: 15px;
                    color: #333;
                }
                img{
                    display: block;
                    width: 40px;
                    position: absolute;
                    top:0;
                    bottom:0;
                    margin: auto;
                    left:40px;
                }
                img:nth-child(3){
                    left:20px;
                }
            }
            .li:nth-child(1){
                padding-left:100px;
            }
            .li:nth-child(2){
                padding-left:96px;
            }
            .li:nth-child(3){
                padding-left:70px;
            }
        }
    }

    .pay_Submit{
        width: 200px;
        height:40px;
        background: #fc725e;
        border-radius: 50px;
        font-size: 14px;
        color: #fff;
        display: block;
        margin:60px auto;
        cursor:pointer;
    }
</style>
