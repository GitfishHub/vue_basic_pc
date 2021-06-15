<template>
  <div class="box">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="转化内容">
        <el-input
          type="textarea"
          placeholder="请输入内容"
          v-model="form.textarea"
          autosize
          maxlength="99999"
          show-word-limit
        ></el-input>
      </el-form-item>
    </el-form>
    <el-divider />
    <el-button @click="handleClick" type="primary">转化</el-button>
    <el-button
      @click="handleCopy"
      class="copybutton"
      data-clipboard-target="#copycode"
      type="primary"
    >
      复制
    </el-button>
    <el-divider />
    <div ref="innerValue" id="copycode">
      {{ this.newValue }}
    </div>
    <div>
      <div style="margin: 10px 0;">设置字体大小为:</div>
      <el-row>
        <el-col :span="4">
          <el-input
            v-model="size"
            placeholder="请设置复制的字体大小"
            @input="handleChange"
          ></el-input>
        </el-col>
      </el-row>
      <!-- <div style="margin: 10px 0;">设置字体颜色为:</div>
      <el-row>
        <el-col :span="4">
          <el-color-picker
            @change="handleChangeCilor"
            v-model="color"
          ></el-color-picker>
        </el-col>
      </el-row> -->
    </div>
  </div>
</template>
<script>
import Clipboard from 'clipboard'
export default {
  data() {
    return {
      form: {
        textarea: '',
      },
      newValue: null,
      size: 12,
      // color: '#000',
    }
  },
  methods: {
    handleCopy() {
      const clipboard = new Clipboard('.copybutton')
      clipboard.on('success', (e) => {
        this.$message.success('复制成功')
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        this.$message.warn('该浏览器不支持自动复制')
        // 释放内存
        clipboard.destroy()
      })
    },
    handleClick() {
      this.newValue = this.form.textarea.replace(/<.*?>/g, '')
    },
    handleChange(val) {
      this.$refs.innerValue.style.fontSize = val + 'px'
    },
    // handleChangeCilor(color) {
    //   this.$refs.innerValue.style.color = color
    // },
  },
}
</script>

<style></style>
