<template>
    <footer class="public_foot">
        <div id="foot_top" style="position: absolute; bottom: 265px;" v-if="selfOrCom === 2">
            <div class="plate_top">
                <img class="mascot" src="../../assets/img/n_mascot.png" alt="" style="animation: mascot 1.5s ease 0.2s infinite both running;">
                <form>
                    <div class="input">
                        <label for="">姓名：</label>
                        <input type="text" id="user_name" placeholder="请输入姓名">
                    </div>
                    <div class="input">
                        <label for="">手机号：</label>
                        <input type="text" id="user_phone" placeholder="请输入手机号">
                    </div>
                    <button type="button" id="immediate_experience" class="btn h_btn">立即体验</button>
                </form>
            </div>
        </div>
        <div class="foot_center">
            <div class="plate_center">
                <img class="logo float" src="../../assets/img/n_logo_white.png" alt="">
                <table class="float table">
                    <thead>
                    <tr>
                        <th>职信网</th>
                        <th>产品服务</th>
                        <th>友情链接</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><router-link :to="{path:'/copytext/about'}" target="_blank">关于职信网</router-link></td>
                        <td><router-link :to="{path:'/personalauthen'}">职信报告</router-link></td>
                        <td><a target="_blank" href="http://www.gsxt.gov.cn">国家企业信用信息公示系统</a></td>
                    </tr>
                    <tr>
                        <td><router-link target="_blank" :to="{path:'/copytext/recruit'}">招聘英才</router-link></td>
                        <td><router-link :to="{path:'/card'}">职趣名片</router-link></td>
                        <td><a target="_blank" href="http://www.pbccrc.org.cn">中国人民银行征信中心</a></td>
                    </tr>
                    <tr>
                        <td><router-link :to="{path:'/copytext/contact'}" target="_blank">联系我们</router-link></td>
                        <td><a href="javascript:void(0);"></a></td>
                        <td><a target="_blank" href="http://www.court.gov.cn">最高人民法院</a></td>
                    </tr>
                    <tr>
                        <td><router-link :to="{path:'/copytext/company_clause'}" target="_blank">服务协议</router-link></td>
                        <td><a href="javascript:void(0);"></a></td>
                        <td><a target="_blank" href="http://www.mohrss.gov.cn">人社局</a></td>
                    </tr>
                    <tr>
                        <td><a href="javascript:void(0);"></a></td>
                        <td><a href="javascript:void(0);"></a></td>
                        <td><a target="_blank" href="http://www.chsi.com.cn">学信网</a></td>
                    </tr>
                    </tbody>
                </table>
                <div class="float Contact_information">
                    <p>全国统一客服电话</p>
                    <p><strong>4000013129</strong></p>
                    <p>工作时间：09:30-19:00</p>
                    <ul class="party tt-wrapper">
                        <li>
                            <a class="tt-gplus" href="javascript:void(0)">
                                <span class="span">
                                    <img src="../../assets/img/n_qwm.png" alt="">
                                </span>
                                <div class="li">
                                    <i class="iconfont icon-weixin tt-gplus"></i>
                                </div>
                                <span class="name">微信</span>
                            </a>
                        </li>
                        <li>
                            <a class="tt-gplus" href="javascript:void(0);">
                                <span class="span text">
                                    上海履途网络科技有限公司
                                </span>
                                <div class="li">
                                    <i class="iconfont icon-fangzi"></i>
                                </div>
                                <span class="name">公司</span>
                            </a>
                        </li>
                        <li>
                            <a class="tt-gplus" href="javascript:void(0);">
                                <span class="span text texts">
                                    上海市徐汇区钦州北路1199号87号楼7楼
                                </span>
                                <div class="li">
                                    <i class="iconfont icon-dizhi"></i>
                                </div>
                                <span class="name">地址</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="foot_bottom">
            <p>
                <span>Copyright ©2017 hrzhixin.com</span>
                <span><a style="color: #999" target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402004118"><img style="display: block;" src="../../assets/img/n_beian.png" alt="">沪公安网备 31010402004118号</a></span>
                <span><a target="_blank" href="http://www.miibeian.gov.cn" style="color: #999">沪ICP备17015994号</a></span>
            </p>
        </div>
    </footer>
</template>
<script>
    export default {
        name:'Footer',
        computed:{
            selfOrCom() {
                return this.$store.state.userType;
            },
        },
    }
</script>
