<style lang="less">
.edit {
  .page {
    float: right;
    padding-top: 10px;
  }
}
</style>

<template>
  <div class="edit">
    <Table border :columns="columns12" :data="data1" :loading="loading">
      <template slot-scope="{ row }" slot="name">
        <strong>{{ row.name }}</strong>
      </template>
      <template slot-scope="{ row, index }" slot="action">
        <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">展示</Button>
        <Button type="error" size="small" @click="remove(index)">删除</Button>
      </template>
    </Table>
    <div class="page">
      <Page :total="total" @on-change="togglePage" :page-size="size"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      columns12: [
        {
          title: "名字",
          slot: "name",
          width: 100,
          align: "center"
        },
        {
          title: "歌手",
          key: "singer",
          width: 100,
          align: "center"
        },
        {
          title: "年份",
          key: "year",
          width: 80,
          align: "center"
        },
        {
          title: "描述",
          key: "describe",
          tooltip: "true"
        },
        {
          title: "点赞数",
          key: "praisePoints",
          width: 100,
          align: "center"
        },
        {
          title: "评论数",
          key: "comment",
          width: 100,
          align: "center"
        },
        {
          title: "操作",
          slot: "action",
          width: 150,
          align: "center"
        }
      ],
      data1: [],
      page: 1,
      total: 0,
      size: 5,
      loading: ""
    };
  },
  mounted() {
    this.getData(this.page, this.size);
  },
  methods: {
    show(index) {
      this.$Modal.info({
        title: "具体信息展示",
        content: `名字：${this.data1[index].name}<br>歌手：${
          this.data1[index].singer
        }<br>年份:${this.data1[index].year}<br>描述:${
          this.data1[index].describe
        }<br>点赞数:${this.data1[index].praisePoints}<br>评论数:${
          this.data1[index].comment
        }`
      });
    },
    remove(index) {
      this.data1.splice(index, 1);
    },
    getData(page, size) {
      this.loading = true;
      axios
        .get("http://localhost:9090/" + page + "", {
          data: {
            page: page,
            size: size
          }
        })
        .then(res => {
          if (res.data.code == 1) {
            this.data1 = res.data.result;
            this.total = res.data.total;
            this.size = res.data.size;
          }
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          //   console.log(error);
        });
    },
    togglePage(page, size) {
      // page是切换页码的回调函数
      this.getData(page, this.size);
    }
  }
};
</script>

