<template>
    <div class="comrecord">
        <section class="section">
            <div class="section_box">
                <div class="public_block">
                    <div class="Auth_head">
                        <div class="head_box">
                            <h4 class="name">发起认证记录</h4>
                        </div>
                    </div>
                    <div class="Auth_content">
                        <div class="content_head">
                            <ul class="ul_option" id="option">
                                <li :class="{active:isActive===1}" @click="handleTab1">所有记录<span>{{num.Altogether}}</span></li>
                                <li :class="{active:isActive===2}" @click="handleTab2">已完成<span>{{num.Completed}}</span></li>
                                <li :class="{active:isActive===3}" @click="handleTab3">未完成<span>{{num.not}}</span></li>
                                <li :class="{active:isActive===4}" @click="handleTab4">已失效<span>{{num.Invalid}}</span></li>
                            </ul>
                            <div class="search">
                                <input class="search_input" type="text" placeholder="搜索候选人姓名、手机号">
                                <i class="button iconfont icon-sousuo2"></i>
                            </div>
                        </div>
                        <div class="content_table active">
                            <table class="list">
                                <thead>
                                <tr>
                                    <th width="180">发起时间</th>
                                    <th>候选人姓名</th>
                                    <th>手机号</th>
                                    <th width="280">背调内容</th>
                                    <th>授权状态</th>
                                    <th>背调状态</th>
                                    <th width="160">报告</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr v-for="view in list" :key="view.id">
                                    <td>{{view.create_time}}</td>
                                    <td>{{view.name===''?view.user_name:view.name}}</td>
                                    <td>{{view.telephone}}</td>
                                    <td class="content" :title="view.apply_content">{{view.apply_content}}</td>

                                    <td v-if="view.auth_status.trim()==='已授权'" class="text_color">{{view.auth_status}}</td>
                                    <td v-else="view.auth_status.trim()==='未授权'"><span class="Not_generated">{{view.auth_status}}</span></td>

                                    <td v-if="view.auth_status.trim()==='已授权'&&view.beidiao_status.trim()==='已完成'" class="text_color">{{view.beidiao_status}}</td>
                                    <td v-else-if="view.auth_status.trim()==='未授权'"><span class="Not_generated">{{view.beidiao_status}}</span></td>
                                    <td v-else="view.auth_status.trim()==='已授权'&&view.beidiao_status.trim()==='背调中'">{{view.beidiao_status}}</td>

                                    <td v-if="view.show_report.trim()==='未生成'"><span class="Not_generated">{{view.show_report}}</span></td>
                                    <td v-else-if="view.show_report.trim()==='报告选择'"><button class="Choice" @click="handleChoice1(view.id)">{{view.show_report}}</button></td>
                                    <td v-else-if="view.show_report.trim()==='附加版'">
                                        <router-link :to="{path:'/comloginhead/additional',query:{id:view.id}}" class="button button_additional">{{view.show_report}}</router-link>
                                    </td>
                                    <td v-else-if="view.show_report.trim()==='基础版'">
                                        <a class="button button_rapidly" href="">{{view.show_report}}</a>
                                        <img class="Triangle" src="../../assets/img/Triangle.png" alt="" @click="handleChoice(view.id)">
                                    </td>
                                    <td v-else-if="view.show_report.trim()==='重新发起'"><a class="again" @click="handleReinitiating(view.id)">{{view.show_report}}</a></td>
                                    <td v-else-if="view.show_report.trim()==='深度版'"><a class="button">{{view.show_report}}</a></td>
                                </tr>
                                </tbody>
                            </table>
                            <Pagin total="200"></Pagin>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Module moduleTitle="选择报告类型"  :isWidth="isWidth" :isHeight="isHeight" v-show="moduleShow===1" @close="handleClose">
            <div class="zx_Choice" slot="zx_content">
                <ul class="Choice_ul">
                    <li v-for="view in PresentationType" :key="view.id">
                        <input type="radio" name="rodio1" :value="view.id" v-model="MoneyType" :disabled="view.id==='1'&&ChoiceFlag?true:false">
                        <div class="li">
                            <h3>{{view.type==='1'?'基础版':'深度版'}}</h3>
                            <p>{{view.describe}}</p>
                            <span v-if="view.id==='1'&&ChoiceFlag" class="text_color">已购买</span>
                            <span v-else-if="view.id==='1'&&!ChoiceFlag" class="text_color">{{view.price}}<i>/次</i></span>
                            <span v-else="view.id==='2'"  class="text_color">{{view.price}}<i>/次</i></span>
                            <img src="../../assets/img/zx_youxia.png" alt="">
                        </div>
                    </li>
                </ul>
                <button class="confirm" @click="handlePurchase">确认</button>
            </div>
        </Module>
    </div>
</template>
<script>
    import Pagin from '../../components/public/pagination'
    import {mapMutations} from 'vuex'
    import Module from '../../components/public/module'
    export default {
        name:'comrecord',
        data(){
            return{
                moduleShow:0,
                isWidth:0,
                isHeight:0,
                list:[],
                ChoiceFlag:true,
                //保存记录
                Certification_record:{
                    Altogether:[],
                    Completed:[],
                    not:[],
                    Invalid:[],
                },
                //条数
                num:{Altogether:0,Completed:0,not:0,Invalid:0},
                isActive:1,
                PresentationType:[],
                MoneyType:'',//报告类型
                PresentationId:'',//报告的id
            }
        },
        components:{Pagin,Module},
        methods:{
            //获取购买报告类型
            handleChoice(id){
                this.ChoiceFlag=true;
                this.MoneyType=2;
                this.PresentationId=id;
                if(this.PresentationType[0]===undefined){
                    this.$http.get('credit-certification/show-report-type').then(res=>{
                        if(res.data.respCode===1){
                            this.PresentationType=res.data.data;
                            this._data.isWidth=620;
                            this._data.isHeight=338;
                            this._data.moduleShow=1;
                        }else{
                            this.$message({
                                type:'warning',
                                message:res.data.respMsg
                            })
                        }
                    }).catch(err=>console.log(err))
                }else{
                    this._data.isWidth=620;
                    this._data.isHeight=338;
                    this._data.moduleShow=1;
                }
            },
            handleChoice1(id){
                this.ChoiceFlag=false;
                this.MoneyType=1;
                this.PresentationId=id;
                if(this.PresentationType[0]===undefined){
                    this.$http.get('credit-certification/show-report-type').then(res=>{
                        if(res.data.respCode===1){
                            this.PresentationType=res.data.data;
                            this._data.isWidth=620;
                            this._data.isHeight=338;
                            this._data.moduleShow=1;
                        }else{
                            this.$message({
                                type:'warning',
                                message:res.data.respMsg
                            })
                        }
                    }).catch(err=>console.log(err));
                }else{
                    this._data.isWidth=620;
                    this._data.isHeight=338;
                    this._data.moduleShow=1;
                }
            },
            handleClose(){
                this._data.moduleShow=0;
            },

            //获取数据  并且保存
            handleTab1(){
                this.isActive=1;
                this.list=this.Certification_record.Altogether;
            },
            handleTab2(){
                this.isActive=2;
                this.list=this.Certification_record.Completed;
                if(!this.Certification_record.Completed[0]){
                    this.$http.post('credit-certification/certification-record',{status:2})
                        .then(res=>{
                            if(res.data.respCode===1){
                                this.Certification_record.Completed=res.data.data;
                                this.list=res.data.data;
                            }
                        }).catch(err=>console.log(err));
                }
            },
            handleTab3(){
                this.isActive=3;
                this.list=this.Certification_record.not;
                if(!this.Certification_record.not[0]){
                    this.$http.post('credit-certification/certification-record',{status:1})
                        .then(res=>{
                            if(res.data.respCode===1){
                                this.Certification_record.not=res.data.data;
                                this.list=res.data.data;
                            }
                        }).catch(err=>console.log(err));
                }
            },
            handleTab4(){
                this.isActive=4;
                this.list=this.Certification_record.Invalid;
                if(!this.Certification_record.Invalid[0]){
                    this.$http.post('credit-certification/certification-record',{status:3})
                        .then(res=>{
                            if(res.data.respCode===1){
                                this.Certification_record.Invalid=res.data.data;
                                this.list=res.data.data;
                            }
                        }).catch(err=>console.log(err));
                }
            },
            //购买报告
            handlePurchase(){
                this.$http.post('credit-certification/buy-report',{
                    type:this.MoneyType,
                    gzReportId:this.PresentationId
                }).then(res=>{
                    if(res.data.respCode===1){
                        this.$message({
                            type:'success',
                            message:'购买报告成功'
                        });
                        this.$router.push({
                            path:'/comloginhead/comrecord'
                        });
                        this.moduleShow=0;
                    }else{
                        this.$message({
                            type:'warning',
                            message:'购买失败请重新购买'
                        })
                    }
                }).catch(err=>console.log(err))
            },
            //重新发起
            handleReinitiating(id){
                this.$confirm('是否要重新发起背调请求?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$http.post('credit-certification/again-initiate',{gzReportId:id})
                        .then(res=>{
                            if(res.data.respCode===1){
                                this.$message({
                                    type: 'success',
                                    message: '发起成功!'
                                });
                            }else{
                                this.$message({
                                    type: 'success',
                                    message: res.data.respMsg
                                });
                            }
                        }).catch(err=>console.log(err))

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            }
        },
        created(){
            this.$http.post('credit-certification/certification-record',{status:-1})
                .then(res=>{
                    if(res.data.respCode===1){
                        this.Certification_record.Altogether=res.data.data;
                        this.list=res.data.data;
                    }
                }).catch(err=>console.log(err));
            this.$http.get('credit-certification/certification-record-count')
                .then(res=>{
                    if(res.data.respCode===1){
                        this.num.Completed=res.data.data.uncompletedCount;
                        this.num.not=res.data.data.completedCount;
                        this.num.Invalid=res.data.data.invalidCount;
                        this.num.Altogether=res.data.data.allCount
                    }
                }).catch(err=>console.log(err));
            this.$store.commit('changeComIndex', 3);
        }
    }
</script>