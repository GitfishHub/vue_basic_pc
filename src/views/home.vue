<template>
  <div class="hello">
    <el-card>
      <el-row>
        <el-col :span="6">
          <span>姓名:</span>
          洛小鱼
        </el-col>
        <el-col :span="6">
          <span>电话:</span>
          {{ '15968838382' | encryption('phone') }}
        </el-col>
        <el-col :span="6">
          <span>简书洛小鱼_大怪兽:</span>
          <a
            href="https://www.jianshu.com/u/648d22b1ecac"
            target="_blank"
            rel="noopener"
          >
            跳转
          </a>
        </el-col>
        <el-col :span="6">
          <span>github私人仓库:</span>
          <a
            href="https://github.com/GitfishHub"
            target="_blank"
            rel="noopener"
          >
            跳转
          </a>
        </el-col>
        <el-col :span="6">
          <span>微信:</span>
          luoxiaoyu_x
        </el-col>
        <el-col :span="6">
          <span>QQ:</span>
          914867344 && 318216007
        </el-col>
        <el-col :span="6">
          <span>私人公众号:</span>
          洛小鱼的小故事
          <a @click="handleShow">查看</a>
        </el-col>
        <el-col :span="6">
          <span>职业:</span>
          前端开发工程师
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import api from '@/api'
import ChartCode from '@/components/chartCode.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {}
  },
  props: {
    msg: String,
  },
  mounted() {
    this.$store.dispatch('test', '洛小溪')
    this.init()
  },
  methods: {
    handleShow() {
      this.$createEleModal({
        modalProps: {
          title: '二维码',
          width: '500px',
        },
        content: {
          template: ChartCode,
        },
      })
    },
    async init() {
      await api.publicAPI.test().then((res) => {
        console.log(res, 'xxx')
      })
    },
  },
}
</script>
<style lang="less" scoped>
h3 {
  margin: 20px 0;
}
a {
  color: #42b983;
}
.el-col {
  margin: 20px 0;
  span {
    margin: 0 5px;
  }
}
</style>
