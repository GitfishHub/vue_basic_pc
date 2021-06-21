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
  methods: {
    async selectChangeEvent({ records, data }) {
      console.log(records, data)
    },
  },
}
</script>
