// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/*导入vue-router，挂载到根实列上*/
import router from './router/index'
/*导入vuex，挂载到根实列上*/
import store from './vuex/index'
/*动态更新每个模块的title*/
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)

Vue.config.productionTip = false
/*导入axios进行网络请求，定义全局的可以使用this.$http进行发起*/
import axios from 'axios';
import vueAxios from 'vue-axios'
import queryString from 'querystring'
axios.defaults.withCredentials = true;
axios.defaults.timeout = 8000;
axios.defaults.baseURL = "/api"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest=[function(data){
    return queryString.stringify(data)
}]
let token=JSON.parse(localStorage.getItem('company_token'));
axios.defaults.headers.Authorization=token===null?'':token.token;
Vue.use(vueAxios,axios)

//导入local作为插件
import local from './lib/urils'
Vue.use(local)

//导入element组件
import {DatePicker , Message ,MessageBox ,Select ,Option ,Cascader,Upload,Dialog,Button,Carousel,CarouselItem} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option);
Vue.use(Cascader);
Vue.use(Upload);
Vue.use(Dialog);
Vue.use(Button)
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.prototype.$message=Message
Vue.prototype.$confirm=MessageBox

import city from './lib/city-data'
Vue.prototype.$city=city

//导入cookie
import vueCookie from 'vue-cookie'
Vue.use(vueCookie)

// //导入编辑器
// import VueHtml5Editor from 'vue-html5-editor'
// Vue.use(VueHtml5Editor, {
//     // 全局组件名称，使用new VueHtml5Editor(options)时该选项无效
//     // global component name
//     name: "vue-html5-editor",
//     // 是否显示模块名称，开启的话会在工具栏的图标后台直接显示名称
//     // if set true,will append module name to toolbar after icon
//     showModuleName: false,
//     // 自定义各个图标的class，默认使用的是font-awesome提供的图标
//     // custom icon class of built-in modules,default using font-awesome
//     icons: {
//         text: "iconfont icon-wenzi",
//         font: "iconfont icon-font",
//         align: "iconfont icon-fuhao-juzhongduiqi",
//         list: "iconfont icon-liebiao",
//         tabulation: "iconfont icon-biaoge",
//         image: "iconfont icon-tupian",
//         hr: "iconfont icon-758bianjiqi_fengexian",
//     },
//     // 配置图片模块
//     // config image module
//     image: {
//         // 文件最大体积，单位字节  max file size
//         sizeLimit: 512 * 1024,
//         // 上传参数,默认把图片转为base64而不上传
//         // upload config,default null and convert image to base64
//         upload: {
//             url: null,
//             headers: {},
//             params: {},
//             fieldName: {}
//         },
//         // 压缩参数,默认使用localResizeIMG进行压缩,设置为null禁止压缩
//         // compression config,default resize image by localResizeIMG (https://github.com/think2011/localResizeIMG)
//         // set null to disable compression
//         compress: {
//             width: 1600,
//             height: 1600,
//             quality: 80
//         },
//         // 响应数据处理,最终返回图片链接
//         // handle response data，return image url
//         uploadHandler(responseText){
//             //default accept json data like  {ok:false,msg:"unexpected"} or {ok:true,data:"image url"}
//             var json = JSON.parse(responseText)
//             if (!json.ok) {
//                 alert(json.msg)
//             } else {
//                 return json.data
//             }
//         }
//     },
//     // 语言，内建的有英文（en-us）和中文（zh-cn）
//     //default en-us, en-us and zh-cn are built-in
//     language: "zh-cn",
//     // 自定义语言
//     i18n: {
//         //specify your language here
//         "zh-cn": {
//             "align": "对齐方式",
//             "image": "图片",
//             "list": "列表",
//             "link": "链接",
//             "unlink": "去除链接",
//             "table": "表格",
//             "font": "文字",
//             "full screen": "全屏",
//             "text": "排版",
//             "eraser": "格式清除",
//             "info": "关于",
//             "color": "颜色",
//             "please enter a url": "请输入地址",
//             "create link": "创建链接",
//             "bold": "加粗",
//             "italic": "倾斜",
//             "underline": "下划线",
//             "strike through": "删除线",
//             "subscript": "上标",
//             "superscript": "下标",
//             "heading": "标题",
//             "font name": "字体",
//             "font size": "文字大小",
//             "left justify": "左对齐",
//             "center justify": "居中",
//             "right justify": "右对齐",
//             "ordered list": "有序列表",
//             "unordered list": "无序列表",
//             "fore color": "前景色",
//             "background color": "背景色",
//             "row count": "行数",
//             "column count": "列数",
//             "save": "确定",
//             "upload": "上传",
//             "progress": "进度",
//             "unknown": "未知",
//             "please wait": "请稍等",
//             "error": "错误",
//             "abort": "中断",
//             "reset": "重置"
//         }
//     },
//     // 隐藏不想要显示出来的模块
//     // the modules you don't want
//     hiddenModules: [],
//     // 自定义要显示的模块，并控制顺序
//     // keep only the modules you want and customize the order.
//     // can be used with hiddenModules together
//     visibleModules: [
//         "text",
//         "font",
//         "align",
//         "list",
//         "tabulation",
//         "image",
//         "hr",
//     ],
// })

//加密方法
import jsencrypt from 'jsencrypt'
//rsa 公钥加密
Vue.prototype.$Encrypt_en=function (text) {
    var jse=new jsencrypt.JSEncrypt();
    jse.setPublicKey(`-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDJ5DwQsiM5Z4yog/23ndzVOLN4
gGITNGr05hscs1H6fTDdQA84Fo0GzweHWJFf0KXoq3YguCSPmowhQakjK8KmYKtK
3cCRAxqbLF5e5ZNCtUnCY6gml1Pj+mdj5axtzSiEcdcexVBPn8lkxSRXBsefyqrO
ICE3fxesqNWKBsuWxQIDAQAB
-----END PUBLIC KEY-----`);
    return jse.encrypt(text);
};
//rsa 私钥解密
Vue.prototype.$Encrypt_de=function (text) {
    var jse=new jsencrypt.JSEncrypt();
    jse.setPrivateKey(`-----BEGIN RSA PRIVATE KEY-----
MIICWwIBAAKBgQDJ5DwQsiM5Z4yog/23ndzVOLN4gGITNGr05hscs1H6fTDdQA84
Fo0GzweHWJFf0KXoq3YguCSPmowhQakjK8KmYKtK3cCRAxqbLF5e5ZNCtUnCY6gm
l1Pj+mdj5axtzSiEcdcexVBPn8lkxSRXBsefyqrOICE3fxesqNWKBsuWxQIDAQAB
AoGAJbytpYlGoEJEvnL9h8bQMmLI2StWKbTQkTo5syGpnyKrcY+5yIgekDk+dQQP
GFPNzzHNgMwquVTwAH9feB2D4nSK0vNh0L31kyrWeAKUsrJOYFIIlOve8wyfXuig
g6m2Vn9nIuB9Rm8kMcrq86LV55VoKMseygDPEssobVuOdgECQQDnQyV+m55bRDI2
J1hLN89k/yDvTGS/UPg3W86ZP7hlHWheGRUnHP9sTTsAPJ3M/+Y5mzAkkd6NuJW0
fRPCoTHBAkEA33zNw1rcrPjI1T7dnvtVvjE/WddJNhjCz5NDNh4gUM4KnKGxr+sy
LtUgjQIrNSaCXl4wc1sUPR/8c3aWCBEeBQJAIKeklboXpD9+75KirwxUZqh32BJr
b3BZfEekZpNO0EhUwmS8TeeUUZCeMixdA+NmeN/m7mMCj/RufyviLGtigQJAUtTM
5pTsqWdj+DVeqqf4tY9HLaMvTU+MFKc+B/bOf2R+ZmM/mjYP2W/AqsKdBQwK0bMT
Pg4JyEXsqVbQcJj3iQJAKYcGReYsiWLRMLb6C5vM2ATc7u5sQmMa2m/U/yCdquDU
Rqh1EWCOZqrn3k5NnrvhhfaTGmBAEIBUATPeyZsciQ==
-----END RSA PRIVATE KEY-----`);
    return jse.decrypt(text);
};

//门户首页样式
import './assets/iconfont/iconfont.css'
import './assets/css/anmiment.css'
import './assets/css/news_public.css'
import './assets/css/login.css'


/* eslint-disable no-new */
new Vue({
    router,
    store,
    el: '#app',
    template: '<App/>',
    components: { App }
})
