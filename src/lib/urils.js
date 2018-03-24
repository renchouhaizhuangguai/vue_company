
let local={
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value))
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key))||{}
    },
    setSess(key,value){
        sessionStorage.setItem(key,JSON.stringify(value))
    },
    getSess(key){
        return JSON.parse(sessionStorage.getItem(key))||{}
    },
}

export default {
    install:function(vm){
        vm.prototype.$local=local
    }
}