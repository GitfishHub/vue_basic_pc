<template>
  <div class="headertop">
    <el-row class="headertop_row" type="flex" align="middle">
      <el-col :span="23">
        {{ title }}
      </el-col>
      <el-col :span="1">
        洛小鱼
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navHeader',
  data() {
    return {
      title: null,
    }
  },
  watch: {
    $route: {
      handler(route) {
        console.log(route.meta.title)
        this.title = route.meta.title ? route.meta.title : '暂无设置'
      },
      immediate: true,
    },
  },
}
</script>

<style scoped="scoped" lang="less">
.headertop {
  height: 100%;
  width: 100%;
  box-shadow: 0px 15px 10px -15px rgb(238, 241, 246);
  .headertop_row {
    height: 100%;
  }
  .el-col {
    text-align: left;
  }
}
</style>
