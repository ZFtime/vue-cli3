<style lang="less">
.msg-content {
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
    background-color: pink;
}
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
      <Drawer title="消息中心" :closable="false" v-model="value1" width="400">
        <div class="msg-center" v-for="(item, index) in 12" :key="index">
          <p class="clearfix">
            <span class="before">第一条消息</span>
            <span class="after">2019-01-03</span>
            <span class="after">标记已读</span>
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
      seen:""
    };
  },
  mounted() {
    
  },
  methods: {
    // onMousenter(){
    //     this.seen=true;
    // },
    // onMouseleave(){
    //     this.seen=false;
    // }
  }
};
</script>