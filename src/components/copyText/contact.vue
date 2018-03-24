<template>
    <div class="clause_text">
            <div class="text">
                <h4>联系我们</h4>
                <div class="Authenticationz">
                    <p>公司地址：上海市徐汇区钦州北路1199号87号楼7楼R07</p>
                    <p>联系电话：021-60528308&nbsp;&nbsp;&nbsp;400-0013129</p>
                    <p>微信公众号：职信平台</p>
                    <p>官方客服QQ：2377204376 </p>
                    <p>企业邮箱：zhixin@hrzhixin.com</p>
                    <div class="pl">
                        <p>微信公众号二维码：</p>
                        <img class="n_ewm" src="../../assets/public_image/ewm.jpg" alt="">
                    </div>
                    <div class="pl">
                        <p>位置显示：</p>
                        <img class="map" src="../../assets/public_image/1515923081(1).jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        name:'about',
        created(){
            this.$store.commit('chanageUser', 1);
            this.$store.commit('serviceType',0)
        }
    }
</script>
<style>

</style>