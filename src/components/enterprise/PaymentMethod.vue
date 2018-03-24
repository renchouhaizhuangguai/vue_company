<template>
    <div class="PaymentMethod">
        <div class="Method_head">
            <div class="head">
                <img src="../../assets/img/wetchzhifu.png" alt="">
                <p class="met"><span>线下支付</span> <br/> <span>offline pay</span></p>
                <span class="home">我的收银台</span>
            </div>
        </div>
        <div class="Method_center">
            <div class="inforList">
                <p><span>订单编号</span><span>： 20050510</span></p>
                <p><span>订单类型</span>： 职信网企业充值</p>
                <p><span>收款方</span>： 上海履途网络科技有限公司</p>
                <div class="money">
                    <span class="span">收款金额：<span>3000.00</span>元</span>
                </div>
            </div>

            <div class="center">
                <div v-if="showFlag===1" class="Line">
                    <img class="liucheng" src="../../assets/img/zhifuliucheng.png" alt="">
                    <div class="line_center">
                        <div class="line_head">
                            收款方
                        </div>
                        <p><span>收款人：</span><span>上海履途网络科技有限公司</span></p>
                        <p><span>收款人账号：</span><span>6002 1234 1234 1234 775</span></p>
                        <p><span>收款银行：</span><span>中国工商银行漕河泾支行</span></p>
                    </div>
                    <p class="text">银行汇款后烦请你发短信 14232422345 通知我们。（由于汇款银行不同，我们确认您的汇款大概需要1-3个工作日）</p>
                </div>
                <div v-if="showFlag===2" class="Scan">
                    <h4>扫一扫付款（元）</h4>
                    <p class="money">300.00</p>
                    <div class="image">
                        <img src="../../assets/img/erweima.png" alt="">
                        <div class="bottom">
                            <i class="iconfont icon-saoyisao2"></i>
                            <p>
                                <span>打开手机微信</span>
                                <br>
                                <span>扫一扫继续付款</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
<script>
    export default {
        name:'PaymentMethod',
        data(){
          return{
              showFlag:2
          }
        },
        created(){
            this.$store.commit('changeComIndex', 8);
        },
    }
</script>
<style scoped lang="scss">
    .PaymentMethod{
        width: 100%;
        height:800px;
        background: #f6f6f6;
        .Method_head{
            width: 100%;
            height:60px;
            background: #fbffff;
            border-bottom:1px solid #cccccc;
            box-shadow: 0 -3px 10px 3px rgba(0,0,0,0.2);
            .head{
                width: 1200px;
                height:100%;
                margin:0 auto;
                position: relative;
                padding-left:50px;
                padding-top:10px;
                img{
                    width: 40px;
                    position: absolute;
                    top:0;
                    bottom:0;
                    left:0;
                    margin:auto;
                }
                .met{
                    width: 100px;
                    text-align: center;
                    font-size: 14px;
                    color: #333;
                    float: left;
                }
                .home{
                    display: block;
                    float: left;
                    width: auto;
                    height:100%;
                    padding-top:5px;
                    font-size: 20px;
                    color: #666;
                    margin-left:10px;
                    position: relative;
                    &:after{
                        content:'';
                        width: 1px;
                        height:30px;
                        position: absolute;
                        left:-10px;
                        background: #ccc;
                    }
                }
            }
        }
        .Method_center{
            width: 1200px;
            height:calc(100% - 190px);
            margin:0 auto;
            padding-top:26px;
            .inforList{
                width: 100%;
                height:auto;
                padding-left:50px;
                font-size: 14px;
                color: #666;
                position: relative;

                p{
                    overflow: hidden;
                    margin-top:10px;
                    span{
                        float: left;
                        display: block;
                    }
                    span:nth-child(1){
                        width: 56px;
                        height:14px;
                        text-align: justify;
                        &:after{
                            content: '';
                            width: 100%;
                            display: inline-block;
                            font-size: 0;
                            line-height: 0;
                        }
                    }
                }
                .money{
                    position: absolute;
                    bottom:0;
                    right:0;
                    .span{
                        font-size: 14px;
                        color: #666;
                        span{
                            font-size: 24px;
                            color: #ff6666;
                            margin:0 10px;
                        }
                    }

                }
            }

            .center{
                width: 100%;
                height: 100%;
                border-top:5px solid #c1c1c1;
                margin-top:20px;
                background: #fff;
                padding-top:40px;
                .Line{
                    width: 100%;
                    height:auto;
                    .liucheng{
                        display: block;
                        margin:0 auto;
                        width: 980px;
                        margin-bottom:60px;
                    }
                    .line_center{
                        width: 650px;
                        height:230px;
                        margin:30px auto;
                        border: 1px dotted #ccc;
                        border-top:5px solid #fc725e;
                        .line_head{
                            width:100%;
                            height:60px;
                            text-align: center;
                            line-height: 60px;
                            font-size: 20px;
                            color: #333;
                            border-bottom:1px solid #ccc;
                        }
                        p{
                            margin-top:30px;
                            font-size: 16px;
                            color: #333;
                            span:nth-child(1){
                                display: inline-block;
                                width: 260px;
                                text-align: right;
                            }
                            span:nth-child(2){
                                display: inline-block;
                                width: calc(100% - 260px);
                                padding-left:20px;
                            }
                        }
                    }
                    .text{
                        font-size:14px;
                        color: #ff6666;
                        text-align: center;
                    }
                }
                .Scan{
                    width: 100%;
                    height:100%;
                    padding-top:100px;
                    h4{
                        text-align: center;
                        font-size: 14px;
                        color: #666;
                    }
                    .money{
                        font-size: 24px;
                        color: #fc725e;
                        text-align: center;
                    }
                    .image{
                        width: 230px;
                        height:300px;
                        background: #fff;
                        box-shadow: 0 0 10px 2px rgba(0,0,0,0.2);
                        margin: 20px auto;
                        padding-top:8px;
                        img{
                            width: 210px;
                            display: block;
                            margin:0 auto;
                        }
                    }
                    .bottom{
                        width:100%;
                        height:80px;
                        padding-left:30px;
                        padding-top:20px;
                        i{
                            display: block;
                            font-size:40px;
                            color: #333;
                            float: left;
                            margin-right:20px;
                        }
                        p{
                            float: left;
                            font-size: 16px;
                            color: #666;
                        }
                    }
                }

            }

        }
    }
</style>