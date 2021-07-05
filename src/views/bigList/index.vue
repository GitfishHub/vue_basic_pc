<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%;">
      <el-table-column prop="prcs_id" label="id"></el-table-column>
      <el-table-column
        prop="rl_element_vendor_name"
        label="对外公司"
      ></el-table-column>
      <el-table-column
        prop="rl_element_finc_receiver_stf_name"
        label="名字"
      ></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="400"
        @current-change="handleChangeCurrent"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import objJson from './json.js'
export default {
  data() {
    return {
      tableDataList: {}, //所有数据的集合
      tableData: [], //当前展示的table
      current: 1, //传给后端的页码
      currenteNow: 1, //当前页码
      pageSize: 10, //每页展示几条
      number: 200, //后端每次给的总条数
    }
  },
  methods: {
    async init() {
      const res = await new Promise((resolve) => {
        console.log('模拟初始化请求')
        setTimeout(() => {
          resolve(objJson.list1)
        }, 1000)
      })
      this.tableDataList[this.current] = res
      this.tableData = this.tableDataList[this.current].slice(
        this.pageSize * this.currenteNow -
          (this.current - 1) * this.number -
          this.pageSize,
        this.pageSize * this.currenteNow - (this.current - 1) * this.number,
      )
    },
    async handleChangeCurrent(current) {
      this.currenteNow = current
      const page = Math.ceil(current / (this.number / this.pageSize))
      this.current = page
      let keyList = []
      for (let i in this.tableDataList) {
        keyList.push(i)
      }
      if (keyList.indexOf(`${page}`) != -1) {
        this.tableData = this.tableDataList[this.current].slice(
          this.pageSize * this.currenteNow -
            (this.current - 1) * this.number -
            this.pageSize,
          this.pageSize * this.currenteNow - (this.current - 1) * this.number,
        )
        console.log('未发起请求')
      } else {
        //模拟请求,实际上要把this.current传给后端拿到数据
        const res = await new Promise((resolve) => {
          console.log('发起请求')
          setTimeout(() => {
            resolve(objJson.list2)
          }, 1000)
        })
        this.tableDataList[this.current] = res
        this.tableData = this.tableDataList[this.current].slice(
          this.pageSize * this.currenteNow -
            (this.current - 1) * this.number -
            this.pageSize,
          this.pageSize * this.currenteNow - (this.current - 1) * this.number,
        )
      }
    },
  },
  mounted() {
    this.init()
  },
}
</script>
