<template>
  <div>
    <h2>父组件</h2>
    <el-button type="primary" @click="sendMsg">传递</el-button>
    <Son></Son>
    <SonO></SonO>
  </div>
</template>
<script>
import Son from './son.vue'
import SonO from './son2.vue'
export default {
  components: {
    Son,
    SonO,
  },
  methods: {
    sendMsg() {
      this.$EventBus.$emit('sendMsg', '这是组件A发送的消息！')
    },
  },
}
</script>
