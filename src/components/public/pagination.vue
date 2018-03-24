<template>
    <div class="zx_Page">
        <div class="pagination">
            <div class="li" :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(current - 1)"><i class="iconfont icon-shuangxianyoujiantou"></i></a></div>
            <div class="li" :class="{'disabled': current == 1}"><a href="javascript:;" @click="setCurrent(1)"> 首页 </a></div>
            <div class="li"  v-for="p in grouplist" :class="{'active': current == p.val}"><a href="javascript:;"
                                                                                @click="setCurrent(p.val)"> {{ p.text }} </a>
            </div>
            <div class="li" :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(page)"> 尾页 </a></div>
            <div class="li" :class="{'disabled': current == page}"><a href="javascript:;" @click="setCurrent(current + 1)"><i class="iconfont icon-shuangxianzuojiantou"></i></a></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                current: this.currentPage
            }
        },
        props: {
            total: {// 数据总条数
                default: 0
            },
            display: {// 每页显示条数
                type: Number,
                default: 20
            },
            currentPage: {// 当前页码
                type: Number,
                default: 1
            },
            pagegroup: {// 分页条数
                type: Number,
                default: 5,
                coerce: function (v) {
                    v = v > 0 ? v : 5;
                    return v % 2 === 1 ? v : v + 1;
                }
            }
        },
        computed: {
            page: function () { // 总页数
                return Math.ceil(this.total / this.display);
            },
            grouplist: function () { // 获取分页页码
                var len = this.page, temp = [], list = [], count = Math.floor(this.pagegroup / 2), center = this.current;
                if (len <= this.pagegroup) {
                    while (len--) {
                        temp.push({text: this.page - len, val: this.page - len});
                    };
                    return temp;
                }
                while (len--) {
                    temp.push(this.page - len);
                }
                ;
                var idx = temp.indexOf(center);
                (idx < count) && ( center = center + count - idx);
                (this.current > this.page - count) && ( center = this.page - count);
                temp = temp.splice(center - count - 1, this.pagegroup);
                do {
                    var t = temp.shift();
                    list.push({
                        text: t,
                        val: t
                    });
                } while (temp.length);
                if (this.page > this.pagegroup) {
                    (this.current > count + 1) && list.unshift({text: '...', val: list[0].val - 1});
                    (this.current < this.page - count) && list.push({text: '...', val: list[list.length - 1].val + 1});
                }
                return list;
            }
        },
        methods: {
            setCurrent: function (idx) {
                console.log(idx)
                if (this.current != idx && idx > 0 && idx < this.page + 1) {
                    this.current = idx;
                    this.$emit('pagechange', this.current);
                }
            }
        }
    }
</script>
<style scoped lang="scss">
.zx_Page{
    width: 100%;
    height:50px;
    position: relative;
}
    .pagination {
        width: auto;
        overflow: hidden;
        display: table;
        height: 30px;
        position: absolute;
        right:0;
        top:20px;
    .li {
        float: left;
        height: 30px;
        width: 30px;
        margin-right: 1px;
        text-align: center;
        line-height: 30px;
        font-size: 12px;
        color: #666666;
        border: 1px solid #ededed;
        box-sizing: border-box;
        &:hover {
            background: #fc725e;
            a{
                color: #fff;
            }
        }
        a{
            width: 100%;
            height:100%;
            display: block;
            color: #666;
        }
        &.active {
            background: #fc725e;
            a {
                background: #fc725e;
                color: #fff;
            }
    }
    }
    }

</style>