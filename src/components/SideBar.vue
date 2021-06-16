<template>
  <div class="main">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      :router="true"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="rgb(238, 241, 246)"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item :index="'/testone'">
            去除标签
          </el-menu-item>
          <el-menu-item :index="'/testtwo'">测试1</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item :index="'/home'">home</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="father">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="treelist">
        <i class="el-icon-setting"></i>
        <span slot="title">tree</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      routerList: [
        {
          router: '',
          title: '',
          icon: '',
          child: [],
        },
      ],
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="less" scoped="scoped">
/* .el-menu{
		background: rgb(238, 241, 246);

	} */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: calc(100%-100px);
}
</style>
