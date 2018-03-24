<template>
    <div class="comService">
        <section class="section">
            <div class="section_box">
                <div class="detail">
                    <div class="detail_left">
                        <h4 class="company_name">上海履途网络科技有限公司</h4>
                        <div class="money">
                            <p>可用服务费：<span>00000</span></p>
                            <p><button>充值</button></p>
                            <p>冻结服务费：<span>00000</span></p>
                            <p>杏仁币余额：<span>00000</span></p>
                        </div>
                    </div>
                    <div class="detail_right">
                        <div class="prompt">
                            <div class="prompt_li active">
                                <div class="li">
                                    <i class="iconfont icon-yingyezhizhao"></i>
                                </div>
                                <span>营业执照</span>
                                <a class="conme" href="">去上传</a>
                                <div class="Not_essential">
                                    <img src="../../assets/img/prompt.png" alt="">
                                    <p>上传营业执照<br>即得50元服务费</p>
                                </div>
                            </div>
                            <div class="prompt_li">
                                <div class="li">
                                    <i class="iconfont icon-qiyeziliao"></i>
                                </div>
                                <span>企业资料</span>
                                <a class="conme" href="">去完善</a>
                                <div class="Not_essential">
                                    <img src="../../assets/img/prompt.png" alt="">
                                    <p> 完善企业资料<br>即得350元杏仁币</p>
                                </div>
                            </div>
                        </div>
                        <div class="prompt_name">
                            <p>专属客户顾问：<span>单梦莹</span></p>
                            <p>联系电话：<span>13323239999</span></p>
                        </div>
                    </div>
                </div>
                <ul class="function">
                    <li>
                        <div class="li">
                            <p class="p_head"><span class="span">背景认证结果</span><a class="a" href="">历史记录<img src="../../assets/img/you_jiantou.png" alt=""></a></p>
                            <div class="text">
                                <img class="img_first" src="../../assets/img/prompts.png" alt="">
                                <p class="p_first"><span>发起背景认证</span><span>由ta授权</span><span>获得职信报告</span></p>
                                <a href="">发起背景认证</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="li">
                            <p class="p_head"><span class="span">背景认证进展</span><a class="a" href="">查看更多<img src="../../assets/img/you_jiantou.png" alt=""></a></p>
                            <table class="list">
                                <tbody>
                                <!--以下td 加上highlight 类名 变成高亮状态-->
                                <tr><td>王小二</td><td class="highlight">已授权</td><td>未完善简历</td><td class="highlight">已认证</td></tr>
                                <tr><td>王小二</td><td>未授权</td><td class="highlight">已完善简历</td><td>未认证</td></tr>
                                <tr><td>王小二</td><td>未授权</td><td class="highlight">已完善简历</td><td class="highlight">已认证</td></tr>
                                <tr><td>王小二</td><td class="highlight">已授权</td><td>未完善简历</td><td>未认证</td></tr>
                                <tr><td>王小二</td><td>未授权</td><td>未完善简历</td><td>未认证</td></tr>
                                <tr><td>王小二</td><td></td><td></td><td>已过期</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li>
                        <div class="li">
                            <p class="p_head"><span class="span">人才档案——职信报告</span><a class="a" href="">查看更多<img src="../../assets/img/you_jiantou.png" alt=""></a></p>
                            <table class="list">
                                <tbody>
                                <tr><td>王小二</td><td>2017-12-12 12:30</td><td><a href="">查看报告</a></td></tr>
                                <tr><td>王小二</td><td>2017-12-12 12:30</td><td><a href="">查看报告</a></td></tr>
                                <tr><td>王小二</td><td>2017-12-12 12:30</td><td><a href="">查看报告</a></td></tr>
                                <tr><td>王小二</td><td>2017-12-12 12:30</td><td><a href="">查看报告</a></td></tr>
                                <tr><td>王小二</td><td>2017-12-12 12:30</td><td><a href="">查看报告</a></td></tr>
                                <tr><td>王小二</td><td>2017-12-12 12:30</td><td><a href="">查看报告</a></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li>
                        <div class="li">
                            <p class="p_head"><span class="span">认证员工背景</span></p>
                            <div class="text">
                                <span>0</span>
                                <p>暂未有员工需要您认证</p>
                                <p>每认证一个员工即可获得15杏仁币奖励哦！</p>
                                <a href="">查看</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="li">
                            <p class="p_head"><span class="span">认证员工名片</span></p>
                            <div class="text">
                                <span>13</span>
                                <p>有13位员工等待您认证职趣名片</p>
                                <p>每认证一个员工即可获得15杏仁币奖励哦！</p>
                                <a href="">查看</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="li">
                            <p class="p_head"><span class="span">员工名片管理</span></p>
                            <div class="text">
                                <img src="../../assets/img/unknown.png" alt="">
                                <p>您的企业还未使用职趣名片</p>
                                <a href="">了解职趣名片</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
 export default {
     name:'comService',
     created(){

     }
 }
</script>
<style scoped>

</style>