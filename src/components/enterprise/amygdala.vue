<template>
  <div class="amygdala">
    <section class="section">
      <div class="section_box">
        <div class="detail">
          <div class="detail_left">
            <h4 class="company_name">杏仁币账户 <span class="span" @click="handleSee"><i class="iconfont icon-shiyongbangzhu"></i>查看杏仁币说明</span></h4>
            <div class="money">
              <p>杏仁币余额：<span>{{money}}</span></p>
              <!--<p class="shopping"><button>杏仁商城</button></p>-->
            </div>
          </div>
        </div>
        <div class="Auth_content notes">
          <div class="Auth_head">
            <div class="head_box">
              <h4 class="name">杏仁币明细</h4>
            </div>
          </div>
          <div class="content_head">
            <ul class="ul_option" id="option">
              <li :class="{active:isActive===1}" @click="handleObtain">获取明细</li>
              <li :class="{active:isActive===2}" @click="handleConsume">消耗明细</li>
            </ul>
          </div>
          <div class="content_table active">
            <table class="list">
              <thead>
              <tr>
                <th width="200">获取时间</th>
                <th>说明</th>
                <th width="200">金额</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="view in dataList" :key="view.cbl_id">
                <td>{{view.cbl_create_time}}</td>
                <td class="ell" :title="view.cbl_detail">{{view.cbl_detail}}</td>
                <td>{{isActive===1?view.gold_income:view.gold_outcome}}</td>
              </tr>
              </tbody>
            </table>
            <Pagin total="200"></Pagin>
          </div>
        </div>
      </div>
    </section>
    <Module class="news_white" :moduleTitle="isName" :isWidth="isWidth" :isHeight="isHeight" v-show="moduleShow===1" @close="handleClose">
      <div class="zx_Choice white" slot="zx_content">
          <p class="amygdala_See">
            您在职信网完成杏仁任务后，即可获得相对数量的杏仁，在杏仁商城可随意兑换福利商品，商品一旦兑换可以退换。积分规则由职信网制定，并依据国家相关法律法规予以解释和修改。规则以网站公布为准，职信网保留解释权。
          </p>
      </div>
    </Module>
  </div>
</template>

<script>
  import Module from '../../components/public/module'
  import Pagin from '../../components/public/pagination'
  export default {
    name: "amygdala",
    data(){
        return{
            dataList:[],//最终渲染页面的数据
            ObtainList:[],//获取明细
            ConsumeList:[],//消耗明细
            isActive:1,
            moduleShow:0,
            isWidth:0,
            isHeight:0,
            isName:'',
            money:0,//杏仁币余额
        }
    },
    components:{Module,Pagin},
    methods:{
        //查看服务费说明
        handleSee(){
            this.isWidth=400;
            this.isHeight=170;
            this.moduleShow=1;
            this.isName='杏仁币说明'
        },
        handleClose(){
            this.moduleShow=0;
        },
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
                    cblType:1
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
        this.money=this.$local.fetch('company_token').points
        this.$http.post('/enterprise-account/service-charge-and-almond',{
            actionId:1,
            cblType:1
        })
            .then(response=>{
                this.dataList=response.data.data
                this.ObtainList=response.data.data
            })
            .catch(err=>{
                console.log(err)
            });
      this.$store.commit('changeComIndex', 9);
    }
  }
</script>

<style scoped>

</style>
