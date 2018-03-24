<template>
    <div class="invoice">
        <section class="section">
            <div class="section_box">
                <div class="public_block">
                    <div class="Auth_head">
                        <div class="head_box">
                            <ul class="jump_invoice">
                                <router-link :to="{path:'/comloginhead/invoice'}" :class="{isActive:invoice===1}" tag="li">发票管理</router-link>
                                <router-link :to="{path:'/comloginhead/listInvoice'}" :class="{isActive:invoice===2}" tag="li">发票列表</router-link>
                                <router-link :to="{path:'/comloginhead/informationInvoice'}" :class="{isActive:invoice===3}" tag="li">发票信息</router-link>
                                <router-link :to="{path:'/comloginhead/addressInvoice'}" :class="{isActive:invoice===4}" tag="li" style="padding-right:0;">寄送地址</router-link>
                            </ul>
                        </div>
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import '../../assets/css/invoice.css'
    export default {
        name:'invoice',
        created(){
            this.$store.commit('changeComIndex', 10)
        },
        computed:{
            invoice(){
                return this.$store.state.invoiceIndex
            }
        }
    }
</script>
<style scoped>

</style>