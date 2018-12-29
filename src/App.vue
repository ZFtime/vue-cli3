<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.layout {
  /* border: 1px solid #d7dde4; */
  /* background: #f5f7f9; */
  position: relative;
  box-shadow: 2px 2px 2px #ebeded;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.layout-logo {
  width: 300px;
  height: 30px;
  border-radius: 3px;
  float: left;
  position: relative;
  /* top: 15px; */
  left: 20px;
}
.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}
.layout-ceiling {
  background: #464c5b;
  padding: 10px 0;
  overflow: hidden;
}
.layout-ceiling-main {
  float: right;
  margin-right: 15px;
}
.layout-ceiling-main a {
  color: #9ba7b5;
}
.layout-nav {
  width: 1000px;
  margin: 0 auto;
}
.ivu-menu-horizontal.ivu-menu-light:after {
  background-color: #fff;
}
.m_logo {
  /* position: absolute; 
    top: 10px; */
  float: left;
  line-height: 81px;
  padding-right: 20px;
}
.m_word {
  float: left;
}
</style>
<template>
  <div id="app">
    <div class="layout">
        <Row type="flex" justify="center" class="code-row-bg">
             <Menu mode="horizontal" active-name="1">
              <div class="header clearfix">
                   <div class="layout-logo"> 
                     <span class="m_logo"> <img src="./assets/m_logo.png" alt=""></span> 
                    <span class="m_word"> <img src="./assets/m_word.png" alt=""></span>
                   </div>
                    <div class="layout-nav">
                      <Dropdown>
                          <a href="javascript:void(0)">
                                公司信息
                                <Icon type="ios-arrow-down"></Icon>
                            </a>
                             <DropdownMenu  slot="list">
                                <DropdownItem>企业信息查询</DropdownItem>
                                <DropdownItem>经营许可证查询</DropdownItem>
                                <DropdownItem>其他查询工具</DropdownItem>
                            </DropdownMenu>
                      </Dropdown>
            </div>
            </div>
        </Menu>
        </Row>
         
    </div>
  </div>

  
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
  components: {
    HelloWorld
  }
};
</script>


