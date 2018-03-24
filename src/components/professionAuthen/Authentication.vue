<template>
    <div class="enterAuthentication">
        <section class="section">
            <div class="section_box">
                <div class="public_block">
                    <div class="Auth_head">
                        <div class="head_box">
                            <h4 class="name">员工职业背景认证</h4>
                            <a class="jump black" @click="handleReturn"><span class="add">返回</span><i class="iconfont icon-shuangxianzuojiantou"></i></a>
                        </div>
                    </div>
                    <div class="AuthenName">
                        <span>被认证人姓名：</span><strong>陈鹏飞</strong>
                        <span>被认证人手机号码：</span><strong>15270192619</strong>
                    </div>
                    <div class="AuthenInput">
                        <label for="">选择您的身份：</label>
                        <el-select class="select" v-model="comName" placeholder="请选择">
                            <el-option v-for="(item,index) in options" :key="index" :value="item"></el-option>
                        </el-select>
                    </div>
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
                                <tr>
                                    <td>直接上级姓名</td>
                                    <td>王小二</td>
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
                                    <td>离职纠纷</td>
                                    <td>有</td>
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
                                    <td>竞业禁止协议</td>
                                    <td>未签订协议</td>
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
                                    <td>有无重大违纪</td>
                                    <td>有</td>
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

                        <div class="content_table ">
                            <div class="AuthenForward">
                                <button @click="handleForward">转发</button>
                                <label for="">以下内容若不能确认请转发给相关人员</label>
                            </div>
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
                                    <td><div class="ForwardChoice"><input type="checkbox"><span></span></div>部门</td>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="AuthenBtn">
                        <button>保存</button>
                        <button>提交</button>
                    </div>
                </div>
            </div>
        </section>
        <Module moduleTitle="转发"  isWidth="585" isHeight="312" v-show="moduleShow===1" @close="handleClose">
            <div class="zx_Choice" slot="zx_content">
                <div class="Forward">
                    <ul class="ForwardHead">
                        <li :class="{active:AuthenActive===1}" @click="AuthenActive=1">转发到邮箱</li>
                        <li :class="{active:AuthenActive===2}" @click="AuthenActive=2">转发到手机短信</li>
                        <li :class="{active:AuthenActive===3}" @click="AuthenActive=3">复制链接</li>
                    </ul>
                    <div class="ForwardCenter">
                        <div class="box" :class="{active:AuthenActive===1}">
                            <ul class="box_ul">
                                <li><label for="">填写邮箱号：</label><input type="text" placeholder="请输入邮箱号"></li>
                                <li><label for="">选择转发人身份：</label>
                                    <el-select class="ForwardSelect" v-model="comName1" placeholder="请选择">
                                        <el-option v-for="(item,index) in options" :key="index" :value="item"></el-option>
                                    </el-select>
                                </li>
                                <li class="btn"><button>确认</button><button class="hui">取消</button></li>
                            </ul>
                        </div>
                        <div class="box" :class="{active:AuthenActive===2}">
                            <ul class="box_ul">
                                <li><label for="">填写手机号：</label><input type="text" placeholder="请输入手机号"></li>
                                <li>
                                    <label for="">选择转发人身份：</label>
                                    <el-select class="ForwardSelect" v-model="comName1" placeholder="请选择">
                                        <el-option v-for="(item,index) in options" :key="index" :value="item"></el-option>
                                    </el-select>
                                </li>
                                <li class="btn"><button>确认</button><button class="hui">取消</button></li>
                            </ul>
                        </div>
                        <div class="box link" :class="{active:AuthenActive===3}">
                            <ul class="box_ul">
                                <li><label for="">选择转发人身份：</label>
                                    <el-select class="ForwardSelect" v-model="comName1" placeholder="请选择">
                                        <el-option v-for="(item,index) in options" :key="index" :value="item"></el-option>
                                    </el-select>
                                </li>
                                <li><p>点击生成链接，转发给相关人员完成认证</p></li>
                                <p>点击生成链接后默认认为转发此条认证信息</p>
                                <li class="btn">
                                    <button>生成链接</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Module>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'
    import Module from '../../components/public/module'
    export default {
        name:'Authentication',
        data(){
          return{
              list:[{id:1},{id:2},{id:3}],
              moduleShow:0,
              isWidth:0,
              isHeight:0,
              checkedNames:[],
              ChoiceFlag:false,
              AuthenActive:1,
              comName:'',
              comName1:'',
              options:['1','2']
          }
        },
        components:{Module},
        methods:{
            handleReturn(){
                this.$router.push({
                    path:'/comloginhead/comstaff'
                })
            },
            //转发
            handleForward(){
                this.moduleShow=1
            },
            //关闭模态框
            handleClose(){
                this.moduleShow=0
            }
        },
        created(){
            this.$store.commit('changeComIndex',4)
        }
    }
</script>
<style scoped>

</style>