<template>
    <div class="comTalent">
        <section class="section">
            <div class="section_box">
                <div class="public_block">
                    <div class="Auth_head">
                        <div class="head_box">
                            <h4 class="name">人才档案</h4>
                        </div>
                    </div>
                    <div class="Auth_content">
                        <div class="content_head">
                            <!--<ul class="ul_option" id="option">-->
                                <!--<li v-if="ChoiceFlag===false" @click="handleExport" class="active">导出报告</li>-->
                                <!--<li v-show="ChoiceFlag" @click="handleCancel" class="cancel">取消</li>-->
                                <!--<li v-show="ChoiceFlag" class="confirm">确认</li>-->
                            <!--</ul>-->

                            <div class="search">
                                <input class="search_input" type="text" placeholder="搜索候选人姓名、手机号">
                                <i class="button iconfont icon-sousuo2"></i>
                            </div>
                        </div>
                        <div class="content_table active">
                            <table class="list">
                                <thead>
                                <tr>
                                    <th width="80" v-show="ChoiceFlag">选择</th>
                                    <th>生成时间</th>
                                    <th>人才姓名</th>
                                    <th>手机号</th>
                                    <th>人才职位</th>
                                    <th>线下简历</th>
                                    <th>简历报告</th>
                                    <th>附加报告</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr :class="{active:checkedNames[view.id-1] == view.id}" v-for="view in list" :key="view.id">
                                    <td v-show="ChoiceFlag"><input type="checkbox" :value="view.id" @click="handleChecked(view.id-1,view.id)"><div class="checkbox"></div></td>
                                    <td>{{view.create_time}}</td>
                                    <td>{{view.name}}</td>
                                    <td>{{view.telephone}}</td>
                                    <td>CEO</td>
                                    <td v-if="view.file_path===''"><a class="a_jump" href="javascript:void(0);" @click="handleUpload">上传</a></td>
                                    <td v-else><a class="a_jump" href="javascript:void(0);">查看</a></td>


                                    <td v-if="view.resume_report.trim()==='未生成'"><span class="Not_generated">{{view.resume_report}}</span></td>
                                    <td v-else-if="view.resume_report.trim()==='报告选择'"><button class="Choice" @click="handleChoice1(view.id)">{{view.resume_report}}</button></td>
                                    <td v-else-if="view.resume_report.trim()==='附加版'">
                                        <router-link :to="{path:'/comloginhead/additional',query:{id:view.id}}" class="button button_additional">{{view.resume_report}}</router-link>
                                    </td>
                                    <td v-else-if="view.resume_report.trim()==='基础版'">
                                        <a class="button button_rapidly" href="">{{view.resume_report}}</a>
                                        <img class="Triangle" src="../../assets/img/Triangle.png" alt="" @click="handleChoice(view.id)">
                                    </td>
                                    <td v-else-if="view.resume_report.trim()==='去发起'"><a class="again" @click="handleReinitiating(view.id)">{{view.resume_report}}</a></td>
                                    <td v-else-if="view.resume_report.trim()==='深度版'"><a class="button">{{view.resume_report}}</a></td>

                                    <td v-if="view.add_report==='附加版'"><a class="button button_additional" href="">{{view.add_report}}</a></td>
                                    <td v-else-if="view.add_report==='未生成'"><span class="Not_generated">{{view.add_report}}</span></td>
                                    <td v-else><router-link :to="{path:'/comloginhead/startProfAuthen'}" class="a_jump">{{view.add_report}}</router-link></td>
                                </tr>
                                </tbody>
                            </table>
                            <Pagin total="200"></Pagin>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Module :moduleTitle="isName"  :isWidth="isWidth" :isHeight="isHeight" v-show="moduleShow===1" @close="handleClose">
            <div class="zx_Choice news_Choice" slot="zx_content" :class="{active:zxActive===1}">
                    <ul class="Choice_ul">
                        <li>
                            <input type="radio" disabled name="rodio1">
                            <div class="li">
                                <h3>基础版</h3>
                                <p>个人信息、学历信息、部门、岗位、入 离职时间、工作类型 六个维度</p>
                                <span>已购买</span>
                                <img src="../../assets/img/zx_youxia.png" alt="">
                            </div>
                        </li>
                        <li>
                            <input type="radio" checked name="rodio1">
                            <div class="li">
                                <h3>深度版</h3>
                                <p>基础版维度+离职、竞业、 团队、上 级、绩效、职责、职业风格、获奖、 综合能力等三十多个维度息</p>
                                <span class="text_color">320元<i>/次</i></span>
                                <img src="../../assets/img/zx_youxia.png" alt="">
                            </div>
                        </li>
                    </ul>
                <button class="confirm">确认</button>
            </div>
            <div class="zx_Choice news_Choice" slot="zx_content" :class="{active:zxActive===2}">
                <form class="zx_file" action="">
                    <input class="zx_input" type="text" placeholder="请上传个人电子版简历">
                    <button class="zx_browse">浏览</button>
                    <input class="zx_upload" type="button" value="上传">
                </form>
            </div>
        </Module>
    </div>
</template>
<script>
    import {mapMutations} from 'vuex'

    import Pagin from '../../components/public/pagination'
    import Module from '../../components/public/module'

    export default {
        name:'comTalent',
        data(){
          return{
              moduleShow:0,
              isWidth:0,
              isHeight:0,
              isName:'',
              zxActive:0,
              list:[],
              checkedNames:[],
              ChoiceFlag:false
          }
        },
        components:{Pagin,Module},
        methods:{
            //选择报告类型模态框
            handleChoice(){
                this.isWidth=620;
                this.isHeight=338;
                this.moduleShow=1;
                this.zxActive=1;
                this.isName='选择报告类型'
            },
            //上传简历模态框
            handleUpload(){
                this.isWidth=620;
                this.isHeight=220;
                this.moduleShow=1;
                this.zxActive=2;
                this.isName='上传简历'
            },
            //关闭模态框
            handleClose(){
                this.moduleShow=0;
            },
            //导出报告
            handleExport(){
                this.ChoiceFlag=true
            },
            //取消导出报告
            handleCancel(){
                this.ChoiceFlag=false
            },
            handleChecked(index,view){
                    if(this.checkedNames[index]===view){
                        this.checkedNames.splice(index,1,0);
                    }else{
                        this.checkedNames.splice(index,1,view);
                    }
            }
        },
        created(){
            this.checkedNames=[0,0,0];
            this.$http.get('credit-certification/personel-archives').then(res=>{
                if(res.data.respCode===1){
                    this.list=res.data.data;
                }
            }).catch(err=>console.log(err))
            this.$store.commit('changeComIndex', 5);
        },
    }
</script>
<style scoped>

</style>