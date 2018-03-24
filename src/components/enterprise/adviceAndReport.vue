<template>
  <div class="adviceAndReport">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">
          <span :class="{thinShow: thinShow === 1}" @click="thinShow = 1">意见反馈</span>
          <span :style="{'marginLeft': '30px'}" :class="{thinShow: thinShow === 2}" @click="thinShow = 2">投诉举报</span>
        </div>
        <div class="report" v-show="thinShow === 2">
          <div class="nameRow">
            <span class="comName">姓&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;名</span>
            <input class="comNameMes" name="" placeholder="请输入您的姓名" ref="name1">
          </div>
          <div class="nameRow">
            <span class="comName">手&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;机</span>
            <input class="comNameMes" name="" placeholder="请输入您的手机号" ref="contact1">
          </div>
          <div class="nameRow">
            <span class="comName">事件详情</span>
            <textarea class="comNameMes" maxlength="60" rows="4" cols="50" placeholder="请输入内容" ref="detail1"></textarea>
          </div>
          <div class="combutton" style="font-size: 14px;margin-left:80px;" @click="handleSubmit1">确认提交</div>
        </div>
        <div class="advice" v-show="thinShow === 1">
          <div class="adviceborder">
            <textarea @keyup="getRemain" style="padding:10px;" class="comNameMes" maxlength="300" v-model="advice" placeholder="请输入您的宝贵意见"></textarea>
            <div class="computed">
              <span class="remain">{{remian}}</span>
              <span class="line">/</span>
              <span class="total">300</span>
            </div>
          </div>
          <div class="combutton" style="font-size: 14px" @click="handleSubmit">确认提交</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "advice-and-report",
    data(){
      return{
        thinShow: 1,
        remian: 0,
        advice: '', //意见建议
      }
    },
    methods: {
      getRemain() {
        this.remian=this.advice.length
      },
        //意见
        handleSubmit(){
          if(this.advice.trim()!==''){
              this.$http.post('set-up/feedback',{
                  content:this.advice,
                  come_from:1
              })
                  .then(res=>{
                      if(res.data.respCode===1){
                          this.$message({
                              type:'success',
                              message:'您的意见已提交，感谢您的建议和反馈，我们会尽快与您联系'
                          })
                          this.advice='';
                      }else{
                          this.$message({
                              type:'type',
                              message:res.data.respMsg
                          })
                      }
                  })
          }else{
              this.$message({
                  type:'warning',
                  message:'意见内容不能为空'
              })
          }

        },
        //投诉
        handleSubmit1(){
            if(this.$refs.name1.value.trim()!==''&&this.$refs.contact1.value.trim()!==''&&this.$refs.detail1.value.trim()!==''){
                this.$http.post('set-up/complaints-report',{
                    name:this.$refs.name1.value,
                    contact:this.$refs.contact1.value,
                    detail:this.$refs.detail1.value,
                    come_from:1
                })
                    .then(res=>{
                        if(res.data.respCode===1){
                            this.$message({
                                type:'success',
                                message:'您的反馈已提交，感谢您的建议和反馈，我们会尽快与您联系'
                            })
                        }
                    })
                    .catch(err=>{
                        console.log(err)
                    })
            }else{
                this.$message({
                    type:'warning',
                    message:'姓名、手机号、详情不能为空'
                })
            }
        }
    },
    created() {
      this.$store.commit('changeComIndex', 14)
    }
  }
</script>

<style scoped>

</style>
