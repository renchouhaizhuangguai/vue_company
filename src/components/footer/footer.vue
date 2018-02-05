<template>
    <!--底部-->
    <footer class="public_foot">
        <div class="foot_center">
            <div class="plate_center">
                <img class="logo float" :src="require('@/assets/img/n_logo_white.png')" alt="">
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
                        <td><a href="javascript:void(0);">关于职信网</a></td>
                        <td><a href="javascript:void(0);">职信认证</a></td>
                        <td><a href="javascript:void(0);">国家企业信用信息公示系统</a></td>
                    </tr>
                    <tr>
                        <td><a href="javascript:void(0);">招聘英才</a></td>
                        <td><a href="javascript:void(0);">职信认证</a></td>
                        <td><a href="javascript:void(0);">中国人民银行征信中心</a></td>
                    </tr>
                    <tr>
                        <td><a href="javascript:void(0);">联系我们</a></td>
                        <td><a href="javascript:void(0);"></a></td>
                        <td><a href="javascript:void(0);">最高人民法院</a></td>
                    </tr>
                    <tr>
                        <td><a href="javascript:void(0);">帮助</a></td>
                        <td><a href="javascript:void(0);"></a></td>
                        <td><a href="javascript:void(0);">人社局</a></td>
                    </tr>
                    <tr>
                        <td><a href="javascript:void(0);"></a></td>
                        <td><a href="javascript:void(0);"></a></td>
                        <td><a href="javascript:void(0);">学信网</a></td>
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
                                    <img :src="require('@/assets/img/n_qwm.png')" alt="">
                                </span>
                                <div class="li">
                                    <i class="iconfont icon-weixin tt-gplus"></i>
                                </div>
                                <span class="name">微信</span>
                            </a>
                        </li>
                        <li>
                            <a class="tt-gplus" href="javascript:void(0)">
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
                <span> <img :src="require('@/assets/img/n_beian.png')" alt=""> 沪公网安备 31010402004118号</span>
                <span>沪ICP备17015994号</span>
            </p>
        </div>
    </footer>
</template>
<script>
    export default {
        name:'Footer',
    }
</script>