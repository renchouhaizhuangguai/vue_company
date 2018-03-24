<template>
    <div class="adminInvoice">
        <div class="adminList" style="padding-left:12px;background: #fff;height:20px;line-height: 20px;">
            <i style="left:0"></i><span>发票信息</span>
        </div>
        <div class="informationCenter">
            <ul>
                <li><span>发票抬头：</span><span>{{comName}}</span></li>
                <li><span>开具类型：</span><span>企业</span></li>
                <li><span>发票类型：</span><span>增值税普通发票</span></li>
                <li><span>税务登记证号：</span><span>{{comS}}</span></li>
            </ul>
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
                comName:'',
                comS:''
            }
        },
        components:{Pagin},
        created(){
            this.comName=this.$local.fetch('company_token').company_name;
            this.comS=this.$local.fetch('enterInfor').cpy_number
            this.$store.commit('invoiceIndex',3)
        }
    }
</script>