<style lang="less">
.edit {
  .btn {
    text-align: left;
    height: 50px;
  }
  .page {
    float: right;
    padding-top: 10px;
  }
}
</style>

<template>
  <div class="edit">
    <div class="btn">
      <Button type="primary" @click="ok">添加</Button>
      <Modal title="添加数据" v-model="modal1" @on-ok="handleSubmit('formAdd')" @on-cancel="cancel">
        <div class="form">
          <Form :model="formAdd" :label-width="80" :rules="ruleValidate" ref="formAdd">
            <FormItem label="名字" prop="name">
              <Input v-model="formAdd.name" placeholder="请输入名字"></Input>
            </FormItem>
            <FormItem label="歌手" prop="singer">
              <Input v-model="formAdd.singer" placeholder="请输入歌手"></Input>
            </FormItem>
            <FormItem label="年份" prop="year">
              <Input v-model="formAdd.year" placeholder="请输入年份"></Input>
            </FormItem>
            <FormItem label="描述" prop="describe">
              <Input v-model="formAdd.describe" placeholder="请输入描述"></Input>
            </FormItem>
            <FormItem label="点赞数" prop="praisePoints">
              <Input v-model="formAdd.praisePoints" placeholder="请输入点赞数"></Input>
            </FormItem>
            <FormItem label="评论数" prop="comment">
              <Input v-model="formAdd.comment" placeholder="请输入点赞数"></Input>
            </FormItem>
            <Button type="primary" @click="handleSubmit('formAdd')">Submit</Button>
          </Form>
        </div>
        <slot name="footer">
          <div class="ivu-modal-footer">
            <button type="button" class="ivu-btn ivu-btn-text ivu-btn-large">
              <!---->
              <!---->
              <span>取消</span>
            </button>
            <button type="button" class="ivu-btn ivu-btn-primary ivu-btn-large">
              <!---->
              <!---->
              <span>确定</span>
            </button>
          </div>
        </slot>
      </Modal>
    </div>
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
      loading: "",
      modal1: false,
      formAdd: {
        name: "",
        singer: "",
        year: "",
        describe: "",
        praisePoints: "",
        comment: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "名字不能为空",
            trigger: "blur"
          }
        ],
        singer: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          }
        ],
        year: [
          {
            required: true,
            message: "年份不能为空",
            trigger: "blur"
          }
        ],
        describe: [
          { required: true, message: "描述不能为空", trigger: "blur" }
        ],
        praisePoints: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "点赞数不能为空",
            trigger: "blur"
          }
        ],
        comment: [
          {
            required: true,
            type: "string",
            message: "评论数不能为空",
            trigger: "blur"
          }
        ]
      }
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
    },
    ok() {
      this.modal1 = true;
      console.log(111);
      setTimeout(() => {
        this.$Message.info("Clicked ok");
      }, 2000);
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.modal1 = false;
          this.$Message.error("提交失败!");
          console.log(this.modal1);
        }
      });
    }
  }
};
</script>

