<template>
    <div class="adminInvoice">
        <div class="adminInvoice_head">
            <ul>
                <li class="claim_li">1、开票订单、月结算选择<i></i></li>
                <li class="claim_hui">2、确定发票信息和地址<i></i></li>
            </ul>
        </div>
        <div class="Auth_content invoiceList">
            <div class="invoiceTitle">
                <i></i><span>你选取了 <span style="color: #fc725e">{{LenList}}</span> 条单据开具发票</span><span class="hui">（若选中多条订单，订单金额将合并开具在一张票据中）</span>
            </div>
            <div class="invoiceLists">
                <ul class="list_ul">
                    <li>
                        <p><span>发票抬头：</span><span>{{comName}}</span></p>
                        <p><span>开具类型：</span><span>企业</span></p>
                        <p><span>发票类型：</span><span>普通增值税发票</span></p>
                    </li>
                </ul>
                <p class="TotalMoney">开票金额合计：<span>￥{{money}}</span></p>
            </div>
        </div>
        <div class="Auth_content invoiceList">
            <div class="invoiceTitle">
                <i></i><span>寄送地址</span><span class="hui">（将以快递（满300元免费）方式寄送给你）</span>
            </div>
            <div class="content_table active">
                <table class="list">
                    <thead>
                    <tr>
                        <th>选择</th>
                        <th>收件人姓名</th>
                        <th>电话号码</th>
                        <th width="330">地址</th>
                        <th>邮编</th>
                        <th width="180" style="text-align: left;padding-left:15px;">操作</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr :class="{active:checkedNames===view.id}" v-for="view in list" :key="view.id">
                        <td>
                            <input type="radio" name="gender"
                                   :value="view.id" v-model="checkedNames"
                                   checked=""
                            >
                            <div class="checkbox"></div>
                        </td>
                        <td>{{view.name}}</td>
                        <td>{{view.phone}}</td>
                        <td :title="view.long_address+view.address">{{view.long_address}}{{view.address}}</td>
                        <td>{{view.province}}</td>
                        <td>
                            <p class="invoiceOperation">
                                <button @click="handleUpdate(view.id)">修改</button>
                                <span>|</span>
                                <button @click="handleDelete(view.id)">删除</button>
                                <span style="display: inline-block;width: 48px" v-text="view.default==='1'?'默认地址':''"></span>
                            </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <p class="addres" @click="handleAdd"><i class="iconfont icon-jia"></i><span>新增地址</span><span class="hui">（最多保存5个地址)</span></p>
            </div>
        </div>
        <button class="Submit" @click="handleSubmit">提交</button>
        <Module :moduleTitle="moduleTitle"  isWidth="600" isHeight="470" v-show="moduleShow===1" @close="handleClose">
            <div class="zx_Choice" slot="zx_content">
                <ul class="addForm">
                    <li>
                        <label for=""><span>*</span>收件人姓名：</label>
                        <div class="addFormInput">
                            <input class="public_input" v-model="UpdataList.name" type="text" placeholder="请输入收件人姓名">
                        </div>
                    </li>
                    <li>
                        <label for=""><span>*</span>所在地区：</label>
                        <div class="addFormInput">
                            <input class="public_input" type="text" placeholder="请选择所在地区">
                        </div>
                    </li>
                    <li>
                        <label for=""><span>*</span>街道地址：</label>
                        <div class="addFormInput">
                            <input class="public_input" v-model="UpdataList.address" type="text"  placeholder="请输入详细地址">
                        </div>
                    </li>
                    <li>
                        <label for=""><span>*</span>邮件编码：</label>
                        <div class="addFormInput">
                            <input class="public_input" v-model="UpdataList.postcode" type="text" placeholder="请输入邮件编码">
                        </div>
                    </li>
                    <li>
                        <label for=""><span>*</span>手机号：</label>
                        <div class="addFormInput">
                            <input class="public_input" v-model="UpdataList.phone" type="text" placeholder="请输入手机号">
                        </div>
                    </li>
                </ul>
                <div class="moren">
                    <input type="checkbox" id="ck" v-model="UpdataList.defaults"><label for="ck">设为默认地址</label>
                </div>
                <div class="Choice">
                    <button class="active" @click="handleComfig(Type)">确认</button>
                    <button @click="moduleShow=0">取消</button>
                </div>
            </div>
        </Module>
    </div>
</template>
<script>
    import Module from '../../components/public/module'
 export default {
     name:'ClaimInvoice',
     data(){
         return{
             moduleShow:0,
             moduleTitle:'',
             checkedNames:'',
             LenList:0,
             money:0,
             comName:'',
             list:[],
             Type:1,
             UpdataId:'',
             UpdataList:[
                 {name:''},{address:''},{postcode:''},{phone:''},{defaults:''}
             ]
         }
     },
     components:{Module},
     methods:{
         //新增发票地址
         handleAdd(){
             this.Type=1;
             if(this.list.length>=5){
                 this.$message({
                     type:'warning',
                     message:'最多可以添加5条地址'
                 });
                 return false;
             }else{
                 this.moduleShow=1;
                 this.moduleTitle='新增发票地址';
             }

         },
         handleComfig(type){
             //type===1为添加
             if(type===1){
                 this.$http.post('enterprise-account/add-invoice-address',{
                     name:this.UpdataList.name,
                     phone:this.UpdataList.phone,
                     province:22,
                     city:33,
                     area:44,
                     address:this.UpdataList.address,
                     postcode:this.UpdataList.postcode,
                     default:this.UpdataList.defaults?'1':'0',
                 })
                     .then(res=>{
                         if(res.data.respCode===1){
                             this.$message({
                                 type:'success',
                                 message:'添加成功',
                             });
                             //获取发票地址
                             this.$http.get('enterprise-account/invoice-address-list')
                                 .then(res=>{
                                     if(res.data.respCode===1){
                                         this.list=res.data.data
                                     }
                                 })
                                 .catch(err=>{
                                     console.log(err)
                                 })
                             this.moduleShow=0;
                         }else{
                             this.$message({
                                 type:'warning',
                                 message:res.data.respMsg
                             });
                         }
                     })
                     .catch(err=>{
                         console.log(err)
                     })
                 //type===2为修改
             }else if(type===2){
                 this.$http.post('enterprise-account/update-invoice-address',{
                     id:this.UpdataId,
                     name:this.UpdataList.name,
                     phone:this.UpdataList.phone,
                     province:22,
                     city:33,
                     area:44,
                     address:this.UpdataList.address,
                     postcode:this.UpdataList.postcode,
                     default:this.UpdataList.defaults?'1':'0',
                 })
                     .then(res=>{
                         if(res.data.respCode===1){
                             this.$message({
                                 type:'success',
                                 message:'修改成功',
                             });
                         }else{
                             this.$message({
                                 type:'warning',
                                 message:res.data.respMsg
                             });
                         }
                         this.moduleShow=0;
                     })
                     .catch(err=>{
                         console.log(err)
                     })
             }

         },
         //修改地址
         handleUpdate(id){
             this.Type=2;
             this.UpdataId=id;
             this.moduleShow=1;
             this.moduleTitle='修改收货地址';
             this.UpdataList=this.list.filter(view=>view.id===id)[0];
         },
         //删除地址
         handleDelete(id){
             this.$confirm('确认删除此地址吗？', '提示', {
                 confirmButtonText: '确定',
                 cancelButtonText: '取消',
                 type: 'warning'
             }).then(() => {
                 this.$http.post('enterprise-account/delete-invoice-address',{
                     id:id
                 })
                     .then(res=>{
                         if(res.data.respCode===1){
                             this.$message({
                                 type: 'success',
                                 message: '删除成功!'
                             });
                             this.list=this.list.filter(view=>view.id!==id)
                         }else{
                             this.$message({
                                 type: 'warning',
                                 message: '删除失败请重新操作!'
                             });
                         }
                     })
             }).catch(() => {
                 this.$message({
                     type: 'info',
                     message: '已取消删除'
                 });
             });
         },
         //关掉模态框
         handleClose(){
             this.moduleShow=0;
         },
         handleSubmit(){
             console.log(this.checkedNames)
             console.log(this.$route.params.Odd_Numbers)
             if(this.checkedNames!==''){
                 this.$http.post('enterprise-account/save-invoice',{
                     orderIds:JSON.stringify(this.$route.params.Odd_Numbers),
                     addressId:this.checkedNames
                 })
                     .then(res=>{
                         if (res.data.respCode===1){
                             this.$message({
                                 type:'success',
                                 message:'提交申请成功'
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
             }else{
                 this.$message({
                     type:'warning',
                     message:'请先选择地址，在进行提交'
                 })
             }
         }
     },
     created(){
         this.LenList=this.$route.params.Odd_Numbers.length;
         this.money=this.$route.params.money;
         this.comName=this.$local.fetch('company_token').company_name;
         //获取发票地址
         this.$http.get('enterprise-account/invoice-address-list')
             .then(res=>{
                 if(res.data.respCode===1){
                     this.list=res.data.data
                 }
             })
             .catch(err=>{
                 console.log(err)
             })
         this.$store.commit('invoiceIndex',1)
     }
 }
</script>
<style scoped>

</style>