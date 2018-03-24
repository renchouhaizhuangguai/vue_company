<template>
    <div class="adminInvoice">
        <div class="adminInvoice_head">
            <ul>
                <li>1、开票订单、月结算选择<i></i></li>
                <li>2、确定发票信息和地址<i></i></li>
            </ul>
        </div>
        <div class="adminInvoice_Prompt">
            <div class="left">温馨提示：</div>
            <div class="right">
                <p>1、月付费结算单的可开票金额为当月实际结算金额。</p>
                <p>2、本月产生的后付费业务结算单开具在下个月二号以后才可以索取发票。</p>
                <p>3、发票基于订单、月结算单开具（单人订单、月结算单不可拆分开票）。</p>
                <p>4、自2017.07.01起，申请普通发票需填写税号信息，否则将无法应税使用，请及时维护您的税号信息。</p>
                <p>5、您设置的企业类发票抬头，将锁定为您资金体现的户名。</p>
            </div>
        </div>
        <div class="adminList">
            <i></i><span>可开发票订单/月账单列表</span>
        </div>
        <div class="adminQuire">
            <div class="form_time">
                <div class="block">
                    <label  class="demonstration" for="">订单成功时间：</label>
                    <el-date-picker
                            style="width: 398px;border: none;"
                            v-model="value6"
                            type="daterange"
                            range-separator="至"
                            value-format="yyyy-MM-dd"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </div>
            </div>
            <label for="">可开票金额：</label>
            <div class="form_time" style="margin-right:20px;">
                <input style="padding-left:10px" type="text" ref="timeS"><span>至</span><input style="padding-left:10px" type="text" ref="timeE">
            </div>
            <button @click="handleSearch">搜索</button>
        </div>
        <div class="adminInvoice_Prompt" style="height: 50px;">
            <div class="invoice_money">
                <p>可开发票总金额 :<span>￥{{Total}}</span></p>
            </div>
            <div class="invoice_money">
                <div class="money_box">
                    <p>已选发票金额 ：<span>￥{{Altogether}}</span></p>
                </div>
                <button @click="handleJump">索取发票</button>
            </div>
        </div>
        <div class="Auth_content invoiceList">
            <div class="content_table active">
                <table class="list">
                    <thead>
                    <tr>
                        <th width="100">选择</th>
                        <th>订单编号</th>
                        <th>产品名称</th>
                        <th>订单实付金额</th>
                        <th>支付时间</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :class="{active:checkedNames[index] == view.order_id}" v-for="(view,index) in list">
                        <td><input type="checkbox" :value="view.order_id" @click="handleChecked(index,view.order_id)"><div class="checkbox"></div></td>
                        <td>{{view.order_no}}</td>
                        <td>服务费充值</td>
                        <td>{{view.order_total_price_real}}</td>
                        <td>{{view.order_pay_time}}</td>
                    </tr>
                    </tbody>
                </table>
                <Pagin total="200"></Pagin>
            </div>
        </div>
    </div>
</template>
<script>
    import Pagin from '../../components/public/pagination'
    import {mapMutations} from 'vuex'
    export default {
        name:'adminInvice',
        data(){
          return{
              checkedNames:[],
              list:null,
              value6:'',
              Total:0,//总金额
              Altogether:0,//已选发票金额
          }
        },
        components:{Pagin},
        methods:{
            //往数组里复制
            handleChecked(index,view){
                let newList=this.list.filter(v=>{
                    return v.order_id===view
                })
                if(this.checkedNames[index]===view){
                    this.checkedNames.splice(index,1,0);
                    this.Altogether-=parseFloat(newList[0].order_total_price_real)
                }else{
                    this.Altogether+=parseFloat(newList[0].order_total_price_real)
                    this.checkedNames.splice(index,1,view);
                }

            },
            handleJump(){
                if(!this.checkedNames.some(view=>view!==0)){
                    this.$message({
                        type:'warning',
                        message:'请先选择发票订单'
                    });
                    return false;
                }else{
                    let newsNames=[];
                    this.checkedNames.forEach(view=>{
                        if(view!==0){
                            newsNames.push(view)
                        }
                    })
                    this.$router.push({
                        name:'claimInvoice',
                        params:{
                            Odd_Numbers:newsNames,
                            money:this.Altogether
                        }
                    })
                }

            },
            //搜索
            handleSearch(){
                if(this.value6===[]&&(this.$refs.timeS.value===''&&this.$refs.timeE.value==='')){
                    this.$message({
                        type:'warning',
                        message:'时间范围和金额范围必写一个'
                    });
                    return false
                }
                this.$http.post('enterprise-account/invoicing-for-enterprise-order',{
                    user_type:2,
                    order_create_time_gt:this.value6?this.value6[0]:'',
                    order_create_time_lt:this.value6?this.value6[1]:'',
                    order_total_price_real_gt:this.$refs.timeS.value,
                    order_total_price_real_lt:this.$refs.timeE.value,
                })
                    .then(res=>{
                        if(res.data.respCode===1){
                            this.checkedNames=[]
                            this.Total=0
                            this.list=res.data.data
                            res.data.data.forEach(view=>{
                                this.Total+=parseFloat(view.order_total_price_real)
                            })
                            for(let i=0;i<this.list.length;i++){
                                this.checkedNames.push(0)
                            }
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
            }
        },
        created(){
            if(!this.list){
                this.$http.post('/enterprise-account/invoicing-for-enterprise-order',{
                    user_type:2
                })
                    .then((res)=>{
                        if(res.data.respCode===1){
                            this.checkedNames=[]
                            this.list=res.data.data
                            res.data.data.forEach(view=>{
                                this.Total+=parseFloat(view.order_total_price_real)
                            })
                            for(let i=0;i<this.list.length;i++){
                                this.checkedNames.push(0)
                            }
                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
            this.$store.commit('invoiceIndex',1)
        }
    }
</script>