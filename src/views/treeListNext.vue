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
      <vxe-table-column field="size" title="Size"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copytable: undefined,
      tableData: [
        {
          id: 1,
          size: 1,
        },
        {
          id: 2,
          size: 5,
          children: [
            {
              id: 3,
              size: 1,
            },
            {
              id: 4,
              size: 1,
            },
            {
              id: 5,
              size: 3,
              children: [
                {
                  id: 6,
                  size: 1,
                },
                {
                  id: 7,
                  size: 1,
                },
                {
                  id: 8,
                  size: 1,
                },
              ],
            },
          ],
        },
        {
          id: 9,
          size: 1,
        },
        {
          id: 10,
          size: 1,
        },
      ],
    }
  },
  mounted() {
    this.copytable = JSON.parse(JSON.stringify(this.tableData))
  },
  methods: {
    async selectChangeEvent({ records, data }) {
      this.setflagfalse(this.tableData, this.copytable)
      let resarr = []
      let resbasearr = []
      records.map((item, index) => {
        this.tree(data, item, [], resarr)
      })
      for (let i = resarr.length - 1; i >= 0; i--) {
        this.delfather(resarr[i], resbasearr)
      }
      for (let i = 0; i < resbasearr.length; i++) {
        this.setsizeone(this.tableData, resbasearr[i])
      }
    },
    delfather(one, all) {
      //去掉所有父级数组
      let flag = true
      for (let i = 0; i < all.length; i++) {
        if (all[i].join().indexOf(one.join()) > -1) {
          flag = false
          break
        } else if (one.join().indexOf(all[i].join()) > -1) {
          flag = false
          all.splice(i, 1, one)
          break
        }
      }
      if (flag) {
        all.push(one)
      }
    },
    setsizeone(data, arrone) {
      let value = { num: undefined }
      this.getrecursionarr(data, arrone, value)
      this.setrecursionarr(data, arrone, value.num)
    },
    getrecursionarr(data, arrone, value, index = 0) {
      if (index == arrone.length - 1) {
        value.num = data[arrone[index]].size
      } else {
        let nextdata = data[arrone[index]].children
        index++
        this.getrecursionarr(nextdata, arrone, value, index)
      }
    },
    setrecursionarr(data, arrone, value, index = 0) {
      if (index != arrone.length - 1) {
        let nextdata = data[arrone[index]].children
        if (data[arrone[index]].writeflag) {
          data[arrone[index]].size += value
        } else {
          data[arrone[index]].writeflag = true
          data[arrone[index]].size = value
        }
        index++
        this.setrecursionarr(nextdata, arrone, value, index)
      }
    },
    /* setnewtree(resjson, arrone, data, index) {
      if (index < arrone.length) {
        index++;
        if (resjson.length) {
          let flag = false;
          resjson.map((item) => {
            if (item.id == data[arrone[index - 1]].id) {
              flag = true;
              if (index < arrone.length) {
                this.setnewtree(
                  item.children ? item.children : (item.children = []),
                  arrone,
                  data[arrone[index - 1]].children,
                  index
                );
              }
            }
          });
          if (!flag) {
            resjson.push({
              id: data[arrone[index - 1]].id,
              size: data[arrone[index - 1]].size,
            });
            if (index < arrone.length) {
              this.setnewtree(
                (resjson[resjson.length - 1].children = []),
                arrone,
                data[arrone[index - 1]].children,
                index
              );
            }
          }
        } else {
          resjson.push({
            id: data[arrone[index - 1]].id,
            size: data[arrone[index - 1]].size,
          });
          if (index < arrone.length) {
            this.setnewtree(
              (resjson[resjson.length - 1].children = []),
              arrone,
              data[arrone[index - 1]].children,
              index
            );
          }
        }
      }
    }, */
    tree(data, row, arr, resarr) {
      for (let i = 0; i < data.length; i++) {
        let arr2 = [...arr]
        arr2.push(i)
        if (data[i].id == row.id) {
          resarr.push(arr2)
          break
        } else {
          if (data[i].children) {
            this.tree(data[i].children, row, arr2, resarr)
          }
        }
      }
    },
    setflagfalse(data, copydata) {
      data.map((item, index) => {
        item.writeflag = false
        item.size = copydata[index].size
        if (item.children) {
          this.setflagfalse(item.children, copydata[index].children)
        }
      })
    },
  },
}
</script>
