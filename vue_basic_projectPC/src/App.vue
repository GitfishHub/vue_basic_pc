<template>
  <div id="app">
    <el-container style="height: 100vh; border: 1px solid #eee;">
      <el-aside
        width="200px"
        style="
          background-color: rgb(238, 241, 246);
          border-right: 1px soild #000;
        "
      >
        <SideBar />
      </el-aside>
      <el-container>
        <el-header
          style="
            text-align: right;
            font-size: 12px;
            background: rgb(238, 241, 246);
          "
        >
          <MyHeader />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import MyHeader from '@/components/myHeader.vue'
export default {
  name: 'app',
  components: {
    SideBar,
    MyHeader,
  },
  created() {
    5
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem('store')) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(sessionStorage.getItem('store')),
        ),
      )
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener('beforeunload', () => {
      sessionStorage.setItem('store', JSON.stringify(this.$store.state))
    })
  },
}
</script>

<style scoped lang="less">
#app {
}
</style>
