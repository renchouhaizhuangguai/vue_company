<template>
    <div class="adminInvoice">
        <div class="adminList" style="padding-left:12px;background: #fff;height:20px;line-height: 20px;">
            <i style="left:0"></i><span>发票筛选</span>
        </div>
        <div class="adminQuire">
            <label for="">发生时间：</label>
            <div class="form_time">
                <el-date-picker
                        style="width: 398px;border: none;"
                        v-model="values1"
                        type="daterange"
                        range-separator="至"
                        @change="handleChange"
                        value-format="yyyy-MM-dd"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                </el-date-picker>
                <!--<button @click="handleSearch">搜索</button>-->
            </div>
        </div>
        <div class="Auth_content">
            <div class="content_table active">
                <table class="list">
                    <thead>
                    <tr>
                        <th>发票金额</th>
                        <th>发生时间</th>
                        <th>发票抬头</th>
                        <th>状态</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="view in list" :key="view.invoice_id">
                        <td>{{view.amount}}</td>
                        <td>{{view.create_time}}</td>
                        <td>{{view.company_name}}</td>
                        <td>{{view.status==='1'?'待审核':'已开发票'}}</td>
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
                list:[],
                start:[],
                values1:''
            }
        },
        components:{Pagin},
        methods:{
            handleChange(){
                if(this.values1!==null){
                    this.$http.post('enterprise-account/invoice',{
                        startTime:this.values1[0],
                        endTime:this.values1[1]
                    })
                        .then(res=>{
                            if(res.data.respCode===1){
                                this.list=res.data.data;
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
                }else{
                    if(this.values1===null){
                        this.list=this.start
                    }
                }

            }
        },
        created(){
            this.$http.get('enterprise-account/invoice')
                .then(res=>{
                    if(res.data.respCode===1){
                        this.list=res.data.data
                        this.start=res.data.data
                    }
                })
                .catch(err=>{
                    console.log(err)
                })
            this.$store.commit('invoiceIndex',2)
        }
    }
</script>