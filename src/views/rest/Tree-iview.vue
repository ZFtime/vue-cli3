<template>
  <div class="tree">
       <!-- <Button type="primary" @click="getSelectedNodes">获取被勾选节点</Button> -->
    <Tree :data="data3" :load-data="loadData" :show-checkbox="true" ref="Tree"></Tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data3: [
        {
          title: "parent",
          loading: false,
          children: []
        }
      ]
    };
  },
  methods: {
    loadData(item, callback) {
      setTimeout(() => {
        const data = [
          {
            title: "children",
            loading: false,
            children: []
          },
          {
            title: "children",
            loading: false,
            children: []
          }
        ];
        callback(data);
      }, 1000);
    }
    // getSelectedNodes() {
    // console.log(this);
    //   console.log(this.$refs.Tree.getSelectedNodes());
    // }
  }
};
</script>