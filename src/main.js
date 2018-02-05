// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/*导入vue-router，挂载到根实列上*/
import router from './router'
/*导入vux，挂载到根实列上*/
import store from './vuex/store'
/*动态更新每个模块的title*/
import VueWechatTitle from 'vue-wechat-title'
/*按需加载模块需引入vue-resource*/
import VueResource from 'vue-resource'

Vue.config.productionTip = false
/*导入axios进行网络请求，定义全局的可以使用this.$http进行发起*/
import axios from 'axios';
Vue.prototype.$http = axios;

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

import './assets/iconfont/iconfont.css'
import './assets/css/anmiment.css'
import './assets/css/news_public.css'
import './assets/css/login.css'




Vue.use(VueWechatTitle)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
    router,
    store,
      el: '#app',
      template: '<App/>',
      components: { App }
})
