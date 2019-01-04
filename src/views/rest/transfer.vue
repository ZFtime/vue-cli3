<template>
  <Transfer
    :data="data4"
    :target-keys="targetKeys4"
    :render-format="render4"
    @on-change="handleChange4"
  ></Transfer>
</template>
<script>
export default {
  data() {
    return {
      data4: this.getMockData(),
      targetKeys4: this.getTargetKeys()
    };
  },
  methods: {
    getMockData() {
      let mockData = [];
      for (let i = 1; i <= 20; i++) {
        mockData.push({
          key: i.toString(),
          label: "Content " + i,
          description: "The desc of content  " + i,
          disabled: Math.random() * 3 < 1
        });
      }
      return mockData;
    },
    getTargetKeys() {
      return this.getMockData()
        .filter(() => Math.random() * 2 > 1)
        .map(item => item.key);
    },
    handleChange4(newTargetKeys) {
      this.targetKeys4 = newTargetKeys;
    },
    render4(item) {
      return item.label + " - " + item.description;
    }
  }
};
</script>