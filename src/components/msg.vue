<style lang="less">
.msg-content {
  font-size: 13px;
  .drawer {
    .ivu-drawer-content {
      margin-top: 10%;
      .drawer-btn {
        margin: 10px 0px;
      }
    }
  }
}
 .msg-center:hover{
   background-color: #f2f2f2;
   cursor:pointer;
 }
 .msg-center:hover .Onlymsg{
    display: block;
    color: rgb(64, 158, 255);
}
// .msg-center:hover .span-after{
//     display: none;
// }
// .msg-center:hover .Onlymsg{
//     display: block;
//     color: green;
// }
// .Onlymsg{
//   display: none;
// }
.msg-center {
  height: 60px;
  padding: 5px 5px;
  border-bottom: 1px solid #f2f2f2;
  p {
    line-height: 20px;
    .before {
      float: left;
    }
    .after {
      float: right;
    }
  }
}
</style>
<template>
  <div class="msg-content">
    <Badge :count="88">
      <Icon type="md-notifications" class="demo-badge" size="24" @click="value1 = true"/>
    </Badge>
    <div class="drawer">
      <Drawer title="消息中心" v-model="value1" width="400" :mask="false">
        <div class="msg-center" v-for="(item, index) in 12" :key="index" @mouseenter="onMousenter(index)" @mouseleave="onMouseleave">
          <p class="clearfix">
            <span class="before">第一条消息</span>
            <span class="after Onlymsg" v-if="seen==index" confirm @click="msg">标记已读</span>
            <span class="after span-after" v-else>2019-01-03 10:47:20 </span>
          </p>
          <p>第一条消息内容的展示</p>
        </div>
      </Drawer>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: false,
      seen:-1,
    };
  },
  mounted() {
    
  },
  methods: {
    onMousenter(index){
        this.seen=index;
    },
    onMouseleave(){
        this.seen=-1;
    },
    msg(){
      console.log(111);
      this.$Message.success('读取成功');
    }
  }
};
</script>