<template>
  <div>
    <h2>子组件2</h2>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$EventBus.$on('handleClickBrother', (msg) => {
      console.log(msg) //这是兄弟发送的消息！
    })
  },
}
</script>
