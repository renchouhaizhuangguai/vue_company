<template>
    <div class="startProfAuthen">
        <section class="section">
            <div class="comBaseMes">
                <div class="mesTitle">发起背景认证</div>
                <div class="baseMesTitles">
                    <div class="baseMesTitle">
                        <span class="red"></span>
                        <span>请输入需认证人信息（批量）</span>
                    </div>
                    <div class="startBatch" @click="handleJump"> <span>单人发起认证</span> <i class="iconfont icon-shuangxianzuojiantou"></i></div>
                </div>
                <div class="authenMes">
                    <div class="betchApp">
                        <input type="file" id="file2"><label class="file1" for="file2">上传文件</label>
                        <div class="noFile">
                            <span>未上传文件</span>
                            <div class="operation">
                                <button>删除</button><span>|</span><button>预览</button>
                            </div>
                        </div>
                        <button class="btn">excel模板下载</button>
                    </div>
                </div>
                <div class="resume">
                    <div class="report-title">附加报告 &nbsp;&nbsp;(1秒出结果，多家权威信息源对比，真是可靠)</div>
                    <div class="resume-border" style="padding:20px 30px;padding-top:10px;">
                        <div class="nameRowBorders" v-for="view in options3" :key="view.id" style="margin-top: 15px;" v-if="view.id!=='9'">
                            <input type="checkbox" class="check" @click="handleAdditional(view.id)">
                            <div class="nameRow">
                                <div class="col-start"><span class="circle"></span><span class="bold">{{view.projectName}}</span></div>
                                <div class="col-center">{{view.projectDes}}</div>
                                <div class="font-color-red">{{view.price}}元</div>
                            </div>
                        </div>

                        <div class="nameRowBorders solid" :class="{doubleCircle: doubleCircley1 === 1}" style="margin-top: 15px;padding-bottom:10px;" v-else="view.id==='9'">
                            <div class="nameRow" @click="handleCircley(view.id) " style="border: 0">
                                <div class="col-start"><span class="circle"></span><span class="bold">{{view.projectName}}</span></div>
                                <div class="col-center">失信被执行、网贷黑名单、税务负面信息中长期实时监控、实时反馈结果</div>
                                <div class="font-color-red">{{view.price}}元/月</div>
                            </div>
                            <div class="nameRow nameRowSpecial" @click="handleCircley(view.id)">
                                <div class="col-start">
                                    <div class="block"  @click.stop="">
                                        <span class="name demonstration">起始月份：</span>
                                        <el-date-picker
                                                class="selectAll"
                                                v-model="value4"
                                                type="month"
                                                placeholder="请选择起始月份">
                                        </el-date-picker>
                                    </div>
                                </div>
                                <div class="col-start  col-center">
                                    <span class="name">有效期：</span>
                                    <el-select  @click.stop="" v-model="comTime" placeholder="请选择有效期">
                                        <el-option v-for="(item,index) in options1" :key="index" :value="item"></el-option>
                                    </el-select>
                                </div>
                                <div class="col-start">
                                    <span class="name">是否自动续费：</span>
                                    <el-select  @click.stop="" v-model="comRenew" placeholder="请选择是否自动续费">
                                        <el-option v-for="(item,index) in options2" :key="index" :value="item"></el-option>
                                    </el-select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="resume">
                    <div class="resume-border resume-borders">
                        <div class="nameRow"><span style="font-size: 13px;">冻结服务费:</span> <span style="color: #fc725e; font-size: 18px;font-weight: bold;">￥300</span><span style="color: #ccc;font-size: 13px;margin-left: 30px;">(申请费用暂时冻结，待背调人成功授权后扣除，否则7天过后返还)</span></div>
                    </div>
                </div>
                <div class="baseMesTitles">
                    <div class="baseMesTitle">
                        <span class="red"></span>
                        <span>被调查人授权方式选择</span>
                        <span style="margin-left: 20px;">(按法律要求、背调涉及私人信息、需经本人授权)</span>
                    </div>
                </div>
                <div class="selects">
                    <div class="nameRows" style="margin-top: 15px;">
                        <div @click="fileLoad=false" class="col-start">
                            <input type="radio" name="fileLoad">
                            <span class="circle"></span>
                            <span class="bolds">短信告知被调查人、登录平台授权</span>
                        </div>
                        <div  @click="double" class="col-start">
                            <input type="radio" name="fileLoad">
                            <span class="circle" ></span>
                            <span class="bolds" >已与被调查人达成一致、上传授权书后直接背调</span>
                        </div>
                    </div>
                    <div class="filePhone" v-show="fileLoad">
                        <p class="phone"><i class="iconfont icon-icon--"></i>上传授权文件照片 <input type="file"></p>
                        <span class="text">支持jpg、png、gif、jpeg等格式</span>
                        <div class="download" >
                            <input type="file" id="file3">
                            <label for="file3">授权文件模板下载</label>
                        </div>
                    </div>
                </div>
                <div class="combutton">发起申请</div>
            </div>
            <Module class="news_white" :moduleTitle="moduleTitle" :isWidth="isWidth" :isHeight="isHeight" v-show="moduleFlag" @close="handleClose">
                <div class="zx_Choice white news_Choice" :class="{active:zxActive===1}" slot="zx_content">
                    <p class="amygdala_See">
                        您在职信网完成杏仁任务后，即可获得相对数量的杏仁，在杏仁商城可随意兑换福利商品，商品一旦兑换可以退换。积分规则由职信网制定，并依据国家相关法律法规予以解释和修改。规则以网站公布为准，职信网保留解释权。
                    </p>
                </div>
            </Module>
        </section>
    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Module from '../../components/public/module'
    export default {
        name: "start-prof-authen",
        data() {
            return{
                doubleCircley1:0,
                moduleTitle:'',
                moduleFlag:false,
                isWidth:'',
                isHeight:'',
                zxActive:1,
                Custom:'',
                remian:0,
                fileLoad:false,
                value4:'',
                comTime:"",//有效期
                comRenew:"",//是否自动续费
                options1: ['1个月', '2个月', '3个月' ,'4个月' ,'5个月' ,'6个月' ,'7个月' ,'8个月' ,'9个月' ,'10个月' ,'11个月' ,'12个月' ,],
                options2: ['是', '否' ],
                options3:null,
                additional:[]//附加版
            }
        },
        components:{Module},
        methods: {
            handleSee(){
                this.moduleTitle='报告说明';
                this. moduleFlag=true;
                this.isWidth=400;
                this.isHeight=170;
                this.zxActive=1;
                let head=window.document.querySelector('.module_head');
                head.style.background='#fff'
                head.querySelector('span').style.color='#333'
                head.querySelector('.iconfont').style.color='#999'
            },
            handleClose(){
                this.moduleFlag=false
            },
            handleJump(){
                this.$router.push({
                    path:'/comloginhead/startProfAuthen'
                })
            },
            double(){
                this.fileLoad=true
            },
            //点击附加信息id添加到数组
            handleAdditional(id){
                if(this.additional.some(view=>view===id)){
                    this.additional=this.additional.filter(view=>view!==id)
                }else{
                    this.additional.push(id)
                }
            },
            handleCircley(id){
                this.doubleCircley1 === 0 ? this.doubleCircley1 = 1 : this.doubleCircley1 = 0;
                if(this.additional.some(view=>view===id)){
                    this.additional=this.additional.filter(view=>view!==id)
                }else{
                    this.additional.push(id)
                }
            }
        },
        created() {
            this.$http.post('credit-certification/add-edition',{source:1})
                .then(res=>{
                    if(res.data.respCode===1){
                        this.options3=res.data.data
                    }else{
                        this.$message({
                            type:'warning',
                            message:res.data.respMsg
                        })
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            this.$store.commit('changeComIndex', 2);
        }

    }
</script>

<style scoped>

</style>
