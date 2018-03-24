<template>
  <div class="comstaff">
    <section class="section">
      <div class="section_box">
        <div class="public_block">
          <div class="Auth_head">
            <div class="head_box">
              <h4 class="name">认证员工背景</h4>
              <router-link :to="{path:'/comloginhead/comAdmin'}" class="jump"><span class="add">添加管理员</span><i class="iconfont icon-shuangxianzuojiantou"></i></router-link>
            </div>
          </div>
          <div class="Auth_content">
            <div class="content_head">
              <ul class="ul_option" id="option">
                <li :class="{active:isActive===1}" @click="handleList1">所有记录<span>{{numList.all}}</span></li>
                <li :class="{active:isActive===2}" @click="handleList2">待认证<span>{{numList.wait}}</span></li>
                <li :class="{active:isActive===3}" @click="handleList3">已完成<span>{{numList.complete}}</span></li>
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
                  <th>申请人职位</th>
                  <th>职信报告</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="view in list" :key="view.apply_id">
                  <td>{{view.create_time}}</td>
                  <td>{{view.rename}}</td>
                  <td>{{view.retelephone}}</td>
                  <td>{{view.post}}</td>
                  <td v-if="view.apply_status==='1'"><router-link :to="{path:'/comloginhead/anthentication',query:{id:view.apply_id}}" class="button">去认证</router-link></td>
                  <td v-else><router-link :to="{path:'/comloginhead/anthentication',query:{id:view.apply_id}}" class="a_jump">查看</router-link></td>
                </tr>
                </tbody>
              </table>
              <Pagin total="200"></Pagin>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import Pagin from '../../components/public/pagination'
  export default {
    name: "comstaff",
    components:{Pagin},
    data(){
      return{
          list:[],
          isActive:1,
          numList:{all:0,wait:0,complete:0},
          //保存记录
          Certification_record:{
              Altogether:[],
              Completed:[],
              not:[],
          },
      }
    },
    methods:{
        //获取数据  并且保存
        handleList1(){
            this.isActive=1;
            this.list=this.Certification_record.Altogether;
        },
        handleList2(){
            this.isActive=2;
            this.list=this.Certification_record.Completed;
            if(!this.Certification_record.Completed[0]){
                this.$http.post('credit-certification/accept-background-auth',{status:1,defriendStatus:1})
                    .then(res=>{
                        if(res.data.respCode===1){
                            this.Certification_record.Completed=res.data.data;
                            this.list=res.data.data;
                        }
                    }).catch(err=>console.log(err));
            }
        },
        handleList3(){
            this.isActive=3;
            this.list=this.Certification_record.not;
            if(!this.Certification_record.not[0]){
                this.$http.post('credit-certification/accept-background-auth',{status:2,defriendStatus:1})
                    .then(res=>{
                        if(res.data.respCode===1){
                            this.Certification_record.not=res.data.data;
                            this.list=res.data.data;
                        }
                    }).catch(err=>console.log(err));
            }
        },
    },
    created() {
        this.$http.post('credit-certification/accept-background-auth',{
            status:-1,
            defriendStatus:1,
        }).then(res=>{
            if(res.data.respCode===1){
                this.Altogether=res.data.data
                this.list=res.data.data
            }
        }).catch(err=>console.log(err))

        this.$http.get('credit-certification/accept-background-auth-count').then(res=>{
            if(res.data.respCode===1){
                this.numList.all=res.data.data.allCount,
                    this.numList.wait=res.data.data.uncompletedCount,
                    this.numList.complete=res.data.data.completedCount
            }
        }).catch(err=>console.log(err));
      this.$store.commit('changeComIndex', 4);
    }
  }
</script>

<style scoped>

</style>
