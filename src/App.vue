<template>
  <div id="app">
    <Head></Head>
      <router-view  v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
  import Head from './components/public/header'
  export default {
    name: 'app',
    components: {
      Head,
    },
  }
</script>
<style scoped="">

</style>
