<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%;">
      <el-table-column prop="prcs_id" label="id"></el-table-column>
      <el-table-column
        prop="rl_element_project_name"
        label="对外公司"
      ></el-table-column>
      <el-table-column
        prop="rl_element_depart_name"
        label="名字"
      ></el-table-column>
      <el-table-column prop="approveJointList" label="审批人">
        <template slot-scope="scope">
          <span
            v-for="(item, index) in scope.row.approveJointList"
            :key="index"
          >
            {{ item.jnt_stf_name }}
          </span>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        layout="sizes,prev, pager, next"
        :total="total"
        @current-change="handleChangeCurrent"
        @size-change="handleSizeChange"
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
      total: 400, //所有的总条数,
      //过滤的条件
      rl_element_project_name: ['2017工资福利', '2018守望先锋新篇章'],
      rl_element_depart_name: ['人事部'],
      approveJointList: ['郑夺'],
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
    handleSizeChange(val) {
      this.pageSize = val
      this.init()
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
    //过滤后的总数据
    fliterfn() {
      let filterProject = this.filterProject(objJson.list1)
      let filterDepart = this.filterDepart(objJson.list1)
      let filterJoint = this.filterShenpiren(objJson.list1)
      const data = this.filterShenpiren(
        this.filterDepart(this.filterProject(objJson.list1)),
      )
      console.log(data)
    },
    //部门过滤
    filterDepart(data) {
      return data.filter((res) =>
        this.rl_element_depart_name.length
          ? this.rl_element_depart_name.indexOf(res.rl_element_depart_name) !=
            -1
          : res.rl_element_depart_name,
      )
    },
    //项目过滤
    filterProject(data) {
      return data.filter((res) =>
        this.rl_element_project_name.length
          ? this.rl_element_project_name.indexOf(res.rl_element_project_name) !=
            -1
          : res.rl_element_project_name,
      )
    },
    //审批人过滤
    filterShenpiren(data) {
      let arr = []
      data.forEach((ele, index) => {
        for (let val of ele.approveJointList) {
          if (this.approveJointList.length) {
            if (this.approveJointList.indexOf(val.jnt_stf_name) != -1) {
              arr.push(ele)
            }
          } else {
            arr = data
          }
        }
      })
      return arr
    },
  },
  mounted() {
    this.init()
    this.fliterfn()
  },
}
</script>
