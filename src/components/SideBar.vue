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
      @select="handleSelect"
      :collapse="isCollapse"
      background-color="rgb(238, 241, 246)"
    >
      <el-submenu index="basicInformation">
        <template slot="title">
          <i class="el-icon-s-home"></i>
          <span slot="title">基本信息</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="'/testone'">
            <i class="el-icon-grape"></i>
            <span slot="title">测试</span>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="/home">
            <i class="el-icon-s-check"></i>
            <span slot="title">我的</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="elementUse">
        <template slot="title">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">ElementUse</span>
        </template>
        <el-menu-item index="/ele_tree">ele_tree</el-menu-item>
        <el-menu-item index="/ele_tree_1">选项1</el-menu-item>
      </el-submenu>
      <el-submenu index="vxetableUse">
        <template slot="title">
          <i class="el-icon-s-flag"></i>
          <span slot="title">VxetableUse</span>
        </template>
        <el-menu-item index="/treelist">vxe_tree1</el-menu-item>
        <el-menu-item index="/treelistNext">vxe_tree2</el-menu-item>
      </el-submenu>
      <el-menu-item index="father">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="functionBlock">
        <template slot="title">
          <i class="el-icon-view"></i>
          <span slot="title">功能</span>
        </template>
        <el-menu-item index="/cancelspan">去除标签</el-menu-item>
      </el-submenu>
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
    handleSelect(key, keyPath) {
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
