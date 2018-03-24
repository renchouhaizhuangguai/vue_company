<template>
    <div class="forward">
        <section class="section" style="margin:0 auto;margin-top:160px;max-width:1200px;position: relative ">
            <div class="forward_infor">
                <ul>
                    <li><p>姓名：王小二</p><p>手机：15279082134</p></li>
                    <li><p>国籍：中国</p><p>出生日期：1988年4月21号</p></li>
                    <li><p>身份证：323423424242342323</p><p>性别：女</p></li>
                </ul>
            </div>
            <div class="section_box">
                <div class="public_block" style="padding-top:114px;">
                    <div class="Auth_content" id="Authen">
                        <div class="content_table">
                            <table class="list">
                                <thead>
                                <tr>
                                    <th width="200">认证项目</th>
                                    <th>认证内容</th>
                                    <th width="410">操作</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>部门</td>
                                    <td>产品部</td>
                                    <td>
                                        <div class="cli">
                                            <ul>
                                                <li><input type="radio" name="radio1"><div class="li">符合</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">不确定</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">无此职责</div></li>
                                                <li class="big"><input type="radio" name="radio1"><div class="li">与实际不符</div></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>岗位</td>
                                    <td>产品负责人</td>
                                    <td>
                                        <div class="cli">
                                            <ul>
                                                <li><input type="radio" name="radio1"><div class="li">符合</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">不确定</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">无此职责</div></li>
                                                <li class="big"><input type="radio" name="radio1"><div class="li">与实际不符</div></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>入职时间</td>
                                    <td>1993年3月12日</td>
                                    <td>
                                        <div class="cli">
                                            <ul>
                                                <li><input type="radio" name="radio1"><div class="li">符合</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">不确定</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">无此职责</div></li>
                                                <li class="big"><input type="radio" name="radio1"><div class="li">与实际不符</div></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>离职时间</td>
                                    <td>1993年3月12日</td>
                                    <td>
                                        <div class="cli">
                                            <ul>
                                                <li><input type="radio" name="radio1"><div class="li">符合</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">不确定</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">无此职责</div></li>
                                                <li class="big"><input type="radio" name="radio1"><div class="li">与实际不符</div></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>工作类型</td>
                                    <td>全职</td>
                                    <td>
                                        <div class="cli">
                                            <ul>
                                                <li><input type="radio" name="radio1"><div class="li">符合</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">不确定</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">无此职责</div></li>
                                                <li class="big"><input type="radio" name="radio1"><div class="li">与实际不符</div></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>直接上级职位</td>
                                    <td>CEO</td>
                                    <td>
                                        <div class="cli">
                                            <ul>
                                                <li><input type="radio" name="radio1"><div class="li">符合</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">不确定</div></li>
                                                <li><input type="radio" name="radio1"><div class="li">无此职责</div></li>
                                                <li class="big"><input type="radio" name="radio1"><div class="li">与实际不符</div></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="AuthenBtn">
                        <button>保存</button>
                        <button>完成</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    export default {
        name:'forward',
        created(){
            this.$store.commit('changeComIndex', 4);
        },
    }
</script>
<style scoped>

</style>