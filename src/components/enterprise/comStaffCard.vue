<template>
  <div class="comStaffCard">
    <section class="section">
      <div class="section_box">
        <div class="public_block">
          <div class="Auth_head">
            <div class="head_box">
              <h4 class="name">认证员工名片</h4>
              <router-link :to="{path:'/comloginhead/comCardSetUser'}" class="jump" href=""><span class="add">添加管理员</span><i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
            </div>
          </div>
          <div class="Auth_content">
            <div class="content_head">
              <ul class="ul_option" id="option">
                <li :class="{active: cardStatus === 1}" @click="handleAll">所有记录<span>{{num.all}}</span></li>
                <li :class="{active: cardStatus === 2}" @click="handleWait">待认证<span>{{num.Wait}}</span></li>
                <li :class="{active: cardStatus === 3}" @click="handleComplete">已完成<span>{{num.Complete}}</span></li>
              </ul>
              <div class="search">
                <input class="search_input" type="text" placeholder="搜索人才姓名、手机号">
                <i class="button iconfont icon-sousuo2"></i>
              </div>
            </div>
            <div class="content_table active">
              <table class="list">
                <thead>
                  <tr>
                    <th>申请时间</th>
                    <th>申请人姓名</th>
                    <th>手机号</th>
                    <th>员工职位</th>
                    <th>认证状态</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="view in CallList" :key="view.id">
                    <td>{{view.create_time}}</td>
                    <td>{{view.user_name}}</td>
                    <td>{{view.phone}}</td>
                    <td>{{view.post}}</td>
                    <td v-if="view.status==='1'"><router-link :to="{query:{id:view.id}}" class="a_jump">认证记录</router-link></td>
                    <td v-else="view.status==='0'||view.status==='3'"><button class="button">去认证</button></td>
                  </tr>
                </tbody>
              </table>
              <Pagin :total="allList.length" v-show="allList.length>2?true:false"></Pagin>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import Pagin from '../public/pagination'
  export default {
    name: "com-staff-authen",
    components: {
      Pagin,
    },
    data() {
      return{
        cardStatus: 1,
          CallList:[],
          allList:[], //所有订单
          serverWait:[],//待订单
          serverComplete:[],//已完成订单
          num:{Wait:0,Complete:0,all:0}
      }
    },
     methods:{
         handleAll(){
             this.cardStatus=1;
             this.CallList=this.allList
         },
         handleWait(){
             this.cardStatus=2;
             this.CallList=this.serverWait
             if(!this.serverWait[0]){
             this.$http.post('vcard/certified-card',{
                 status:3
             })
                 .then(res=>{
                     if(res.data.respCode===1){
                         this.CallList=res.data.data;
                         this.serverWait=res.data.data
                     }
                 })
                 .catch(err=>{
                     console.log(err)
                 })
             }
         },
         handleComplete(){
             this.cardStatus=3;
             this.CallList=this.serverComplete
             if(!this.serverComplete[0]){
                 this.$http.post('vcard/certified-card',{
                     status:1
                 })
                     .then(res=>{
                         if(res.data.respCode===1){
                             this.CallList=res.data.data;
                             this.serverComplete=res.data.data
                         }
                     })
                     .catch(err=>{
                         console.log(err)
                     })
             }

         },
     },
    created() {
      this.$http.post('vcard/certified-card',{
          status:-1
      })
          .then(res=>{
              if(res.data.respCode===1){
                  this.CallList=res.data.data;
                  this.allList=res.data.data;
              }
          })
          .catch(err=>{
              console.log(err)
          })
        this.$http.get('vcard/certified-card-count')
            .then(res=>{
                if(res.data.respCode===1){
                    this.num.all=res.data.data.allCount;
                    this.num.Complete=res.data.data.completedCount;
                    this.num.Wait=res.data.data.uncertifiedCount;
                }
            })
            .catch(err=>{
                console.log(err)
            })
      this.$store.commit('changeComIndex', 6);
    }
  }
</script>

<style scoped>

</style>
