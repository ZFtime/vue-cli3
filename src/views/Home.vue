<style lang="less">
@import "../css/common.css";
.index {
  .nav {
    height: 50px;
    line-height: 50px;
    padding: 0px 12rem;
    box-shadow: 2px 2px 2px #ebeded;
    .layout-logo {
      width: 280px;
      height: 30px;
      border-radius: 3px;
      float: left;
      position: relative;
      top: 8px;
      left: 20px;
      img {
        vertical-align: top;
      }
      .m_word {
        margin-top: 8px;
        margin-left: 10px;
      }
    }
    .layout-menu {
      width: 620px;
      .ivu-dropdown-rel {
        padding: 0px 10px;
        a {
          color: #9d9d9d;
          .ivu-icon {
            color: #f1c11e;
          }
        }
      }
    }
  }
  .content {
    height:auto;
    margin-top: 4px;
    background-image: url("../../src/assets/index/banner.png");
    .min-content {
      max-width: 700px;
      margin: 0 auto;
      padding: 60px 0px;
      h3 {
        font-size: 24px;
        font-weight: 700;
        padding-top: 20px;
        padding-bottom: 50px;
      }
      ul {
        width: 100%;
        li {
          display: inline-block;
          text-align: center;
          width: 33.33%;
          padding-top: 12%;
          p {
            font-weight: 700;
            font-size: 14px;
            color: #000000;
          }
        }
      }
    }
  }
  .ivu-layout-footer {
    background-color: #fff;
    .footer {
      .f-center {
        span {
          padding: 0px 8px;
        }
      }
    }
  }
}
</style>

<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld/> -->
     <div class="index"> 
      <div class="nav clearfix">
        <div class="layout-logo">
           <img src="../../public/common-img/m_logo.png" alt="">
           <img src="../../src/assets/index/m_word.png" alt="" class="m_word">
        </div>
        <div class="layout-menu">
            <Dropdown>
            <a href="javascript:void(0)">
                企业信息
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem>企业信息查询</DropdownItem>
                <DropdownItem>经营许可证查询</DropdownItem>
                <DropdownItem>其他查询</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <Dropdown>
            <a href="javascript:void(0)">
                知识产权
                <Icon type="ios-arrow-down"></Icon>
            </a>
             <DropdownMenu slot="list">
                <DropdownItem>注册商标查询</DropdownItem>
                <DropdownItem>专利信息查询</DropdownItem>
                <DropdownItem>其他信息查询工具</DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <Dropdown>
            <a href="javascript:void(0)">
                其他工具查询
                <Icon type="ios-arrow-down"></Icon>
            </a>
             <DropdownMenu slot="list">
                <DropdownItem>股权信息查询</DropdownItem>
                <DropdownItem>网站备案查询</DropdownItem>
                <DropdownItem>其他查询工具</DropdownItem>
            </DropdownMenu>
            </Dropdown>
           
              <Dropdown>
            <a href="javascript:void(0)" @click="goIndex">
                登录
                <Icon type="ios-arrow-down"></Icon>
            </a>
             <DropdownMenu slot="list">
                <DropdownItem>会员中心</DropdownItem>
                <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
            </Dropdown>
        </div>
    </div>
    <div class="content">
      <div class="min-content">
        <h3>企业信息查询导航</h3>
          <Row>
           <ul class="clearfix">
           <li span="8"><img src="../../src/assets/index/home_01.png" alt=""><p>企业信息查询</p></li>
           <li span="8"><img src="../../src/assets/index/home_02.png" alt=""><p>经营许可证查询</p></li>
           <li span="8"><img src="../../src/assets/index/home_04.png" alt=""><p>专利信息查询</p></li>
           <li span="8"><img src="../../src/assets/index/home_05.png" alt=""><p>注册商标查询</p></li>
           <li span="8"><img src="../../src/assets/index/home_06.png" alt=""><p>追股权查询</p></li>
           <li span="8"><img src="../../src/assets/index/home_07.png" alt=""><p>网站备案查询</p></li>
         </ul>
        </Row>
      </div>
    </div>
    <Footer>
       <div class="footer">
        <p>京ICP备123456789号-6京公安备案00000000000000</p>
        <div class="f-center">
          数据来源：
          <span>企业信用信息公示系统</span><i>|</i> <span>国家知识产权局</span><i>|</i> <span>商标局</span><i>|</i> <span>版权局</span><i>|</i> <span>中国裁判文书网</span><i>|</i> <span>工信部ICP/IP域名备案管理系统</span></div>
          <p>©Copyright 2018 北京未来互联科技有限公司</p>
        </div>
    </Footer>
    </div>
  </div>
</template> 

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";
import $router from "./../router.js";
export default {
  name: "home",
  methods: {
    goIndex() {
      this.$router.push({ path: "/Edit-table" });
    }
    // Login() {
    //   axios({
    //     method: "get",
    //     url: "http://qzt.cn/api.php/index/account/is_login.html",
    //     beforeSend: function (request) {
    //             request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    //         },
    //         xhrFields: {
    //             withCredentials: true
    //         },
    //         crossDomain: true,
    //   })
    //     .then(function(response) {
    //       console.log(response);
    //     })
    //     .catch(function(error) {
    //       console.log(error);
    //     });
    // }
  },
  components: {
    HelloWorld
  }
};
</script>
