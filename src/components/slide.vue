<style lang="less">
.slider {
  .ivu-layout-sider {
    min-height: 585px;
  }
}
</style>    

<template>
  <div class="slider">
    <Layout>
      <Menu active-name="1-1" theme="light" width="auto" :open-names="openName" @on-select="goHome">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-navigate"></Icon>表格
          </template>
          <MenuItem name="/Edit-table">可编辑表格</MenuItem>
          <MenuItem name="/Export-table">导出表格</MenuItem>
          <MenuItem name="/drag-table">拖拽列表</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon type="ios-keypad"></Icon>表单
          </template>
          <MenuItem name="/Edit-from">简单的表单验证</MenuItem>
          <MenuItem name="/login">登录</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-analytics"></Icon>待开发
          </template>
          <MenuItem name="/tabs">标签页</MenuItem>
          <MenuItem name="/Transfer">穿梭框</MenuItem>
          <MenuItem name="/Tree-iview">树形控件</MenuItem>
          <MenuItem name="/Grid">栅格系统</MenuItem>
          <MenuItem name="/Collapse">折叠板</MenuItem>
        </Submenu>
      </Menu>
    </Layout>
  </div>
</template>

<script>
import $router from "../router.js";
export default {
  data() {
    return {
      openName: ["1", "2", "3"]
    };
  },
  methods: {
    goHome(name) {
      this.$router.push(name);
    }
  }
};
</script>


