<template>
  <div>
    <vxe-table
      resizable
      :tree-config="{ children: 'children' }"
      :data="tableData"
      :checkbox-config="{ labelField: 'id', highlight: true }"
      @checkbox-change="selectChangeEvent"
    >
      <vxe-table-column
        type="checkbox"
        title="ID"
        width="280"
        tree-node
      ></vxe-table-column>
      <vxe-table-column field="name" title="Name"></vxe-table-column>
      <vxe-table-column field="size" title="Size"></vxe-table-column>
      <vxe-table-column field="type" title="Type"></vxe-table-column>
      <vxe-table-column field="date" title="Date"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // parentNode: {}, //二级数据
      parentNodeNext: {}, //一级数据
      tableData: [
        {
          id: 1000,
          name: 'vxe-table 从入门到放弃1',
          type: 'mp3',
          size: 1024,
          date: '2020-08-01',
        },
        {
          id: 1005,
          name: 'Test2',
          type: 'mp4',
          size: null,
          date: '2021-04-01',
          children: [
            {
              id: 24300,
              name: 'Test3',
              type: 'avi',
              size: 1024,
              date: '2020-03-01',
            },
            {
              id: 20045,
              name: 'vxe-table 从入门到放弃4',
              type: 'html',
              size: 600,
              date: '2021-04-01',
            },
            {
              id: 10053,
              name: 'vxe-table 从入门到放弃96',
              type: 'avi',
              size: null,
              date: '2021-04-01',
              children: [
                {
                  id: 24330,
                  name: 'vxe-table 从入门到放弃5',
                  type: 'txt',
                  size: 25,
                  date: '2021-10-01',
                },
                {
                  id: 21011,
                  name: 'Test6',
                  type: 'pdf',
                  size: 512,
                  date: '2020-01-01',
                },
                {
                  id: 22200,
                  name: 'Test7',
                  type: 'js',
                  size: 1024,
                  date: '2021-06-01',
                },
              ],
            },
          ],
        },
        {
          id: 23666,
          name: 'Test8',
          type: 'xlsx',
          size: 2048,
          date: '2020-11-01',
        },
        {
          id: 24555,
          name: 'vxe-table 从入门到放弃9',
          type: 'avi',
          size: 224,
          date: '2020-10-01',
        },
      ],
    }
  },
  methods: {
    async selectChangeEvent({ records, data }) {
      let resarr = []
      let resjson = []
      records.map((item, index) => {
        this.tree(data, item, [], resarr)
      })
      for (let i = 0; i < resarr.length; i++) {
        this.setnewtree(resjson, resarr[i], data, 0, resarr)
      }
      console.log(resjson)
    },
    /* async selectChangeEvent({ row, checked, level }) {
      this.parentNode = {}
      this.parentNodeNext = {}
      if (checked) {
        await this.tree(this.tableData, row)
        if (level == 2) {
          await this.treeNext(this.tableData, this.parentNode)
        }
        console.log(this.parentNode, this.parentNodeNext)
      }
    }, */
    setnewtree(resjson, arrone, data, index) {
      if (index < arrone.length) {
        index++
        if (resjson.length) {
          let flag = false
          resjson.map((item) => {
            if (item.id == data[arrone[index - 1]].id) {
              flag = true
              if (index < arrone.length) {
                this.setnewtree(
                  item.children,
                  arrone,
                  data[arrone[index - 1]].children,
                  index,
                )
              }
            }
          })
          if (!flag) {
            resjson.push({
              id: data[arrone[index - 1]].id,
              name: data[arrone[index - 1]].name,
              type: data[arrone[index - 1]].type,
              size: data[arrone[index - 1]].size,
              date: data[arrone[index - 1]].date,
            })
            if (index < arrone.length) {
              this.setnewtree(
                (resjson[resjson.length - 1].children = []),
                arrone,
                data[arrone[index - 1]].children,
                index,
              )
            }
          }
        } else {
          /* console.log(arrone)
          console.log(index) */
          resjson.push({
            id: data[arrone[index - 1]].id,
            name: data[arrone[index - 1]].name,
            type: data[arrone[index - 1]].type,
            size: data[arrone[index - 1]].size,
            date: data[arrone[index - 1]].date,
          })
          if (index < arrone.length) {
            // console.log(data[arrone[index-1]].children)
            this.setnewtree(
              (resjson[resjson.length - 1].children = []),
              arrone,
              data[arrone[index - 1]].children,
              index,
            )
          }
        }
      }
    },
    // tree(data, row, arr, resarr) {
    //   for (let i = 0; i < data.length; i++) {
    //     let arr2 = [...arr];
    //     arr2.push(i);
    //     if (data[i].id == row.id) {
    //       resarr.push(arr2);
    //       break;
    //     } else {
    //       if (data[i].children) {
    //         this.tree(data[i].children, row, arr2, resarr);
    //       }
    //     }
    //   }
    // },
    // treeNext(data, row, parent) {
    //   if (row) {
    //     for (var i in data) {
    //       if (data[i].id == row.id) {
    //         this.parentNodeNext = parent;
    //       } else {
    //         if (data[i].children) {
    //           this.treeNext(data[i].children, row, data[i]);
    //         }
    //       }
    //     }
    //   }
    // },
  },
}
</script>
