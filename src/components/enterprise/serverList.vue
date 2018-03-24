<template>
    <div class="serverList">
        <section class="section">
            <div class="section_box">
                <div class="Auth_content notes" style="margin-top:0">
                    <div class="Auth_head">
                        <div class="head_box">
                            <h4 class="name">服务费明细</h4>
                            <router-link to="/comloginhead/servercharge" tag="a" class="jump" href=""><span class="add">返回</span><i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
                        </div>
                    </div>
                    <div class="content_head">
                        <ul class="ul_option" id="option">
                            <li :class="{active:isActive===1}" @click="handleObtain">获取明细</li>
                            <li :class="{active:isActive===2}" @click="handleConsume">消耗明细</li>
                        </ul>
                    </div>
                    <div class="content_table">
                        <table class="list">
                            <thead>
                            <tr>
                                <th>获取时间</th>
                                <th>简介</th>
                                <th width="500">内容说明</th>
                                <th>金额</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="view in dataList" :key="view.cbl_id">
                                <td>{{view.cbl_create_time}}</td>
                                <td v-if="view.type_status==='1'">申请扣除</td>
                                <td v-else-if="view.type_status==='2'">奖励</td>
                                <td v-else-if="view.type_status==='3'">购买</td>
                                <td v-else-if="view.type_status==='4'">退回服务费</td>
                                <td v-else-if="view.type_status==='5'">冻结</td>
                                <td v-else-if="view.type_status==='6'">赠送</td>
                                <td v-else-if="view.type_status==='7'">冻结转扣除</td>
                                <td v-else-if="view.type_status==='8'">积分撤销</td>
                                <td v-else="view.type_status==='9'">客服添加积分</td>
                                <td class="ell" :title="view.cbl_detail">{{view.cbl_detail}}</td>
                                <td>{{isActive===1?view.cbl_income:view.cbl_outcome}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export default {
        name:'serverList',
        data(){
            return{
                dataList:[],//最终渲染页面的数据
                ObtainList:[],//获取明细
                ConsumeList:[],//消耗明细
                isActive:1,
            }
        },
        methods:{
            //获取明细
            handleObtain(){
                this.isActive=1;
                this.dataList=this.ObtainList
            },
            //消耗明细
            handleConsume(){
                this.isActive=2;
                this.dataList=this.ConsumeList
                if(!this.ConsumeList[0]){
                    this.$http.post('/enterprise-account/service-charge-and-almond',{
                        actionId:2,
                        cblType:2
                    })
                        .then(response=>{
                            this.ConsumeList=response.data.data
                            this.dataList=response.data.data
                        })
                        .catch(err=>{
                            console.log(err)
                        });
                }
            },
        },
        created() {
            this.$http.post('/enterprise-account/service-charge-and-almond',{
                actionId:2,
                cblType:1
            })
                .then(response=>{
                    this.dataList=response.data.data
                    this.ObtainList=response.data.data
                })
                .catch(err=>{
                    console.log(err)
                });
            this.$store.commit('changeComIndex', 8);
        }
    }
</script>