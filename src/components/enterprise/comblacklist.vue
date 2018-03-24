<template>
  <div class="comblacklist">
    <section class="section">
      <div class="comBaseMes">
        <div class="mesTitle">黑名单</div>
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>添加进黑名单 &nbsp;&nbsp;<span class="mark">(添加进黑名单后您将不会受到对方发起的所有申请，移除黑名单后恢复)</span></span>
        </div>
        <div class="nameRow">
          <span class="comName">姓 &nbsp;&nbsp;&nbsp;&nbsp;名 </span>
          <input class="comNameMes" name="" placeholder="请输入需认证人真实姓名">
        </div>
        <div class="nameRow">
          <span class="comName">手 &nbsp;&nbsp;&nbsp;&nbsp;机 </span>
          <input class="comNameMes" name="" placeholder="请输入需认证人真实姓名">
        </div>
        <div class="combutton" @click="moduleShow2 = 1">确认添加</div>
      </div>
      <div class="comBaseMes" style="padding-top:20px;margin-top:20px;">
        <div class="baseMesTitle">
          <span class="red"></span>
          <span>黑名单</span>
        </div>
        <div class="Auth_content">
          <div class="content_table active">
            <table class="list">
              <thead>
              <tr>
                <th>姓名</th>
                <th>手机号</th>
                <th>操作</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="val in 5">
                <td>2017-10-01 12:30</td>
                <td>李能耐</td>
                <td><a class="a_jump" @click="moduleShow1 = 1">移除</a></td>
              </tr>
              </tbody>
            </table>
            <Pagination :total="100" :display="10" :currentPage="currentPage"></Pagination>
          </div>
        </div>
      </div>
    </section>
    <!--移除弹框-->
    <Module moduleTitle=" " isWidth="300" isHeight="180" v-show="moduleShow1===1" @close="handleClose1">
      <div class="zx_Choice" slot="zx_content">
        <div class="deleteTitle">确认移除黑名单?</div>
        <div class="combuttons">
          <div class="combutton cancel" @click="moduleShow1 = 0">取消</div>
          <div class="combutton" @click="moduleShow1 = 0">确认</div>
        </div>
      </div>
    </Module>

    <!--添加弹框-->
    <Module moduleTitle=" " isWidth="300" isHeight="180" v-show="moduleShow2===1" @close="handleClose2">
      <div class="zx_Choice" slot="zx_content">
        <div class="deleteTitle">确认添加黑名单?</div>
        <div class="combuttons">
          <div class="combutton cancel" @click="moduleShow2 = 0">取消</div>
          <div class="combutton" @click="moduleShow2 = 0">确认</div>
        </div>
      </div>
    </Module>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'

  import Pagination from '../public/pagination'
  import Module from '../public/module'
  export default {
    name: "backlist",
    components: {
      Pagination,
      Module
    },
    data() {
      return{
        currentPage: 1,
        moduleShow1: 0, //移除时弹框是否显示
        moduleShow2: 0, //添加时弹框是否显示

      }
    },
    methods: {
      handleClose1() {
        this.moduleShow1 = 0;
      },
      handleClose2() {
        this.moduleShow2 = 0;
      }
    },
    ...mapMutations['changeComIndex'],
    created() {
      this.$store.commit('changeComIndex', 13);
    }

  }
</script>

<style scoped>

</style>
