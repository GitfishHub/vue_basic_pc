<template>
  <div>
    <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      node-key="id"
      ref="tree"
      highlight-current
      :props="defaultProps"
    ></el-tree>

    <div class="buttons">
      <el-button @click="getCheckedNodes">通过 node 获取</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tree(data) {
      // let  newArr=JSON.parse(JSON.stringify(data))
      data.forEach((item) => {
        if (item.parent !== 0) {
          data.forEach((val) => {
            if (val.id == item.parent) {
              //如果内循环的id==外循环的parent  内与外即为父子关系
              if (!val.children) {
                val.children = []
              }
              val.children.push(item) //向父节点的children中添加item.parent == val.id的元素
            }
          })
        }
      })
      data = data.filter((item) => item.parent === 0) //去重  只有parent==0的时候才是最高级父节点
      return data
    },
    getCheckedNodes() {
      this.allList = this.$refs.tree.getCheckedNodes(false, true)
      for (let val of this.allList) {
        delete val.children
      }
      console.log(this.tree(this.allList))
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys())
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: '二级 2-1',
        },
        {
          id: 9,
          label: '三级 1-1-1',
        },
      ])
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3])
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([])
    },
  },

  data() {
    return {
      allList: [],
      data: [
        {
          id: 1,
          label: '一级 1',
          parent: 0,
          children: [
            {
              id: 4,
              label: '二级 1-1',
              parent: 1,
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1',
                  parent: 4,
                },
                {
                  id: 10,
                  label: '三级 1-1-2',
                  parent: 4,
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: '一级 2',
          parent: 0,
          children: [
            {
              id: 5,
              label: '二级 2-1',
              parent: 2,
            },
            {
              id: 6,
              label: '二级 2-2',
              parent: 2,
            },
          ],
        },
        {
          id: 3,
          label: '一级 3',
          parent: 0,
          children: [
            {
              id: 7,
              label: '二级 3-1',
              parent: 3,
            },
            {
              id: 8,
              label: '二级 3-2',
              parent: 3,
            },
          ],
        },
      ],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    }
  },
}
</script>
