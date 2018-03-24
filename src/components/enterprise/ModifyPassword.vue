<template>
    <div class="comMesChange">
        <section class="section">
            <div class="comBaseMes">
                <div class="mesTitle">
                    <span>修改企业资料</span>
                </div>
                <div class="baseMes conChangeMes">
                    <div class="thirdCol">
                        <div class="nameRow">
                            <span class="comName" style="display: inline-block;width: 65px;text-align: right">原密码：</span>
                            <input class="comNameMes" name="" v-model="inforList.primary" placeholder="请输入原密码">
                        </div>

                        <div class="nameRow">
                            <span class="comName" style="display: inline-block;width: 65px;text-align: right">新密码：</span>
                            <input type="password" class="comNameMes" name="" v-model="inforList.newspassword" placeholder="请输入新密码">
                        </div>
                        <div class="nameRow">
                            <span class="comName">确认密码：</span>
                            <input type="password" class="comNameMes" name="" v-model="inforList.confirm" placeholder="确认新密码">
                        </div>
                    </div>
                </div>
                <div class="confirm" @click="handleConfirm">确认修改</div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: "com-mes-change",
        data(){
            return{
                inforList:{
                    primary:'',
                    newspassword:'',
                    confirm:''
                }
            }
        },
        methods: {
            handleConfirm(){
                if(this.inforList.primary!==''&&this.inforList.newspassword!==''&&this.inforList.confirm!==''){
                    if(this.inforList.newspassword!==this.inforList.confirm){
                        this.$message({
                            type:'warning',
                            message:'输入的两次新密码不一致'
                        })
                    }else{
                        this.$http.post('set-up/modify-password',{
                            oldPwd:this.inforList.primary,
                            newPwd:this.inforList.newspassword,
                            confirmPwd:this.inforList.confirm,
                        })
                            .then(res=>{
                                if(res.data.respCode===1){
                                    this.$message({
                                        type:'success',
                                        message:'修改密码成功'
                                    })
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
                }else{
                    this.$message({
                        type:'warning',
                        message:'所填项，不能为空'
                    })
                }
            }
        },
        created() {
            this.$store.commit('changeComIndex', 11);
        }
    }
</script>

<style scoped>

</style>
