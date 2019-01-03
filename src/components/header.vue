<style lang="less">
@import "../css/common.css";
.header {
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    .ivu-layout-header {
      padding: 0px;
    }
    .layout-logo {
      width: 100px;
      height: 30px;
      color: #fff;
      border-radius: 3px;
      float: left;
      position: relative;
      left: 20px;
    }
    .layout-nav {
      width: 500px;
      margin: 0 auto;
      margin-right: 20px;
    }
    .msg {
      .ivu-badge {
        display: inline;
        .ivu-icon {
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="layout">
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">我的logo</div>
            <div class="layout-nav">
              <MenuItem name="1">
                <Icon type="ios-navigate"></Icon>Item 1
              </MenuItem>
              <MenuItem name="2">
                <Icon type="ios-keypad"></Icon>Item 2
              </MenuItem>
              <MenuItem name="3">
                <Icon type="ios-analytics"></Icon>Item 3
              </MenuItem>
              <MenuItem name="4">
                <Icon type="ios-paper"></Icon>Item 4
              </MenuItem>
            </div>
            <div class="msg">
                <myMessage/>
            </div>
          </Menu>
        </Header>
      </Layout>
    </div>
  </div>
</template>

<script>
import myMessage from "@/components/msg.vue";
export default {
  data() {
    return {
      count: ""
    };
  },
  components: {
    myMessage
  }
};
</script>

