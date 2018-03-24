<template>
    <div class="servercharge">
      <section class="section">
        <div class="section_box">
          <div class="detail">
            <div class="detail_left">
              <h4 class="company_name">服务费账户 <span @click="handleSee" class="span"><i class="iconfont icon-shiyongbangzhu"></i>查看服务费说明</span></h4>
              <div class="money">
                <p>服务费账户：<span>{{adminMoney}}</span></p>
                <p><button>充值</button></p>
                <p>冻结服务费：<span>{{outMoney}}</span></p>
                <p class="shopping"><router-link to="/comloginhead/serverList" tag="button">查看明细</router-link></p>
              </div>
            </div>
          </div>
          <div class="Auth_content notes">
            <div class="Auth_head">
              <div class="head_box">
                <h4 class="name">企业订单</h4>
              </div>
            </div>
            <div class="content_head">
              <ul class="ul_option" id="option">
                <li :class="{active:tagActive===1}" @click="handleServer1">所有订单</li>
                <li :class="{active:tagActive===2}" @click="handleServer2">待付款</li>
                <li :class="{active:tagActive===3}" @click="handleServer3">已完成</li>
                <li :class="{active:tagActive===4}" @click="handleServer4">失效作废</li>
              </ul>
            </div>
            <div class="content_table active">
              <table class="list">
                <thead>
                <tr>
                  <th>订单号</th>
                  <th width="160">下单时间</th>
                  <th width="160">支付时间</th>
                  <th>订单状态</th>
                  <th>订单金额</th>
                  <th>实付金额</th>
                  <th width="150" v-show="tagActive===3||tagActive===4?false:true">操作</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="view in dataList" :key="view.order_id">
                  <td>{{view.order_no}}</td>
                  <td class="ell">{{view.order_create_time}}</td>
                  <td class="ell">{{view.order_pay_time!==''?view.order_pay_time:'------'}}</td>
                  <td class="serverWait" v-if="view.status==='1'">待付款</td>
                  <td class="serverComplete" v-else-if="view.status==='3'">已完成</td>
                  <td class="serverInvalid" v-else="view.status==='6'">已失效</td>
                  <td>{{view.order_total_price}}</td>
                  <td>{{view.order_total_price_real}}</td>
                  <td v-if="view.status==='1'" v-show="tagActive===3||tagActive===4?false:true"><button @click="handlePayment" class="button">付款</button></td>
                  <td v-else="view.status!=='1'" v-show="tagActive===3||tagActive===4?false:true">------</td>
                </tr>
                </tbody>
              </table>
              <Pagin total="200"></Pagin>
            </div>
          </div>
        </div>
      </section>
      <Module class="news_white" :moduleTitle="isName" :isWidth="isWidth" :isHeight="isHeight" v-show="moduleShow===1" @close="handleClose">
        <div class="zx_Choice news_Choice white" slot="zx_content" :class="{active:zxActive===1}">
            <table class="see_table">
              <thead>
                  <tr>
                    <th>项目</th>
                    <th>扣除服务费</th>
                    <th width="370">说明</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>申请简历认证</td>
                    <td>2元/人次</td>
                    <td><p>查看职信报告基础版/深度版会减免2元 免费赠送学历认证（国内2001年以后的个人高等教育学历）</p></td>
                  </tr>
                  <tr>
                    <td>实名认证</td>
                    <td>2元/人次</td>
                    <td><p>必选项。任何认证必须先进行个人实名</p></td>
                  </tr>
                  <tr>
                    <td>个人工商查询</td>
                    <td>15元/人次</td>
                    <td><p>企业法定代表人信息，企业股东信息等</p></td>
                  </tr>
                  <tr>
                    <td>职业资格</td>
                    <td>10元/人次</td>
                    <td><p>人力资源和社会保障部认可职业技能的证书（不含法律类、财经类、 医学类）</p></td>
                  </tr>
                  <tr>
                    <td>不良信息查询</td>
                    <td>15元/人次</td>
                    <td><p>前科、在逃、吸毒、涉毒</p></td>
                  </tr>
                  <tr>
                    <td>职信报告-基础版</td>
                    <td>60元/份</td>
                    <td><p>查看时扣除58元（2元已在申请简历认证时扣除） 内容包括：公司、部门、岗位、入离职时间、工作类型、学历等</p></td>
                  </tr>
                  <tr>
                    <td>职信报告-深度版</td>
                    <td>320元/份</td>
                    <td><p>查看时扣除318元（2元已在申请简历认证时扣除） 内容包括但不限于：基础版内容+离职原因、离职纠纷、竞业、 团队、上级信息、绩效、职责、职业风格、获奖情况、综合能力等纬度（具体以个人提供的信息为准）</p></td>
                  </tr>
              </tbody>
            </table>
        </div>
        <div class="zx_Choice news_Choice" slot="zx_content" :class="{active:zxActive===2}">
          <ul class="Payment_ul">
            <li><input type="radio" name="radio1"><div class="li" style="padding-top:45px;"><h4 class="Payment_money">600元</h4></div></li>
            <li><input type="radio" name="radio1"><div class="li"><h4 class="Payment_money">1000元</h4><span><i class="red">赠</i>100杏仁币</span><div class="Pay_name Recommend">推荐</div></div></li>
            <li><input type="radio" name="radio1"><div class="li"><h4 class="Payment_money">2000元</h4><span><i class="red">赠</i>260杏仁币</span><div class="Pay_name Recommend">推荐</div></div></li>
            <li><input type="radio" name="radio1"><div class="li"><h4 class="Payment_money">5000元</h4><span><i class="red">赠</i>800杏仁币</span><div class="Pay_name Hot">热门</div></div></li>
            <li><input type="radio" name="radio1"><div class="li"><h4 class="Payment_money">10000元</h4><span><i class="red">赠</i>1500杏仁币</span><span><i class="yellow">赠</i>专属客服服务</span><div class="Pay_name Recommend">推荐</div></div></li>
            <li><input type="radio" name="radio1"><div class="li"><h4 class="Payment_money">20000元</h4><span><i class="red">赠</i>5000杏仁币</span><span><i class="yellow">赠</i>专属客服服务</span><div class="Pay_name Recommend">推荐</div></div></li>
            <li><input type="radio" name="radio1"><div class="li"><h4 class="Payment_money">50000元</h4><span><i class="red">赠</i>15000杏仁币</span><span><i class="yellow">赠</i>专属客服服务</span><div class="Pay_name province">最省</div></div></li>
          </ul>
          <button class="confirm" @click="JumpPayment">立即购买</button>
        </div>
      </Module>
    </div>
</template>

<script>
  import Pagin from '../../components/public/pagination'
  import Module from '../../components/public/module'
    export default {
        name: "servercharge",
        data(){
            return{
                //企业订单
                dataList:[],
                allList:[], //所有订单
                serverWait:[],//待付款订单
                serverComplete:[],//已完成订单
                serverInvalid:[],//已失效订单
                tagActive:1,
                //模态框
                moduleShow:0,
                isWidth:0,
                isHeight:0,
                isName:'',
                zxActive:0,
                adminMoney:0,//服务费
                outMoney:0//冻结服务费
            }
        },
        components:{Pagin,Module},
        methods:{
            //查看服务费说明
            handleSee(){
                this.isWidth=685;
                this.isHeight=520;
                this.moduleShow=1;
                this.zxActive=1;
                this.isName='服务费说明'
            },
            //购买服务费
            handlePayment(){
                this.isWidth=645;
                this.isHeight=585;
                this.moduleShow=1;
                this.zxActive=2;
                this.isName='购买服务费'
            },
            //关闭模态框
            handleClose(){
                this.moduleShow=0;
            },
            //跳转购买
            JumpPayment(){
                this.$router.push({
                    path:'/comloginhead/payment'
                })
            },
            handleServer1(){
                this.tagActive=1
                this.dataList=this.allList
            },
            handleServer2(){
                this.tagActive=2
                this.dataList=this.serverWait
                if(!this.serverWait[0]){
                    this.$http.post('/enterprise-account/enterprise-order',{
                        userType:2,
                        status:1
                    })
                        .then(response=>{
                            this.serverWait=response.data.data;
                            this.dataList=response.data.data;
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                }
            },
            handleServer3(){
                this.tagActive=3
                this.dataList=this.serverComplete
                if(!this.serverWait[0]){
                    this.$http.post('/enterprise-account/enterprise-order',{
                        userType:2,
                        status:3
                    })
                        .then(response=>{
                            this.serverComplete=response.data.data;
                            this.dataList=response.data.data;
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                }
            },
            handleServer4(){
                this.tagActive=4
                this.dataList=this.serverInvalid
                if(!this.serverWait[0]){
                    this.$http.post('/enterprise-account/enterprise-order',{
                        userType:2,
                        status:6
                    })
                        .then(response=>{
                            this.serverInvalid=response.data.data;
                            this.dataList=response.data.data;
                        })
                        .catch(err=>{
                            console.log(err)
                        })
                }
            }
        },
      created() {
            let info=this.$local.fetch('company_token')
          this.adminMoney=info.balance
          this.outMoney=info.pause_balance
        this.$http.post('/enterprise-account/enterprise-order',{
            userType:2,
            status:0
        })
            .then(response=>{
                this.allList=response.data.data;
                this.dataList=response.data.data;
            })
            .catch(err=>{
                console.log(err)
            })
        this.$store.commit('changeComIndex', 8);
      }
    }
</script>

<style scoped>

</style>
