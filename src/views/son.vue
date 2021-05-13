<template>
  <div>
    <h2>子组件</h2>
    <el-button @click="handleClickBrother">传递给兄弟组件</el-button>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$EventBus.$on('sendMsg', (msg) => {
      console.log(msg) //这是组件A发送的消息！
    })
  },
  methods: {
    handleClickBrother() {
      this.$EventBus.$emit('handleClickBrother', '我是你兄弟')
    },
  },
}
</script>
