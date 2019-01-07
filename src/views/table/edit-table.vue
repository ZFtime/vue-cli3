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
            <!-- <Button type="primary" @click="handleSubmit('formAdd')">Submit</Button> -->
          </Form>
        </div>
        <Row slot="footer">
          <Button type="text" @click="cancel">取消</Button>
          <Button type="primary" @click="handleSubmit('formAdd')">确定</Button>
        </Row>
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
    const validateMobile = (rule, value, callback) => {
      if (!Number.isInteger(+value)) {
        callback(new Error("请输入数字的格式"));
      } else {
        callback();
      }
    };
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
            message: "歌手不能为空",
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
            message: "点赞数不能为空",
            trigger: "blur"
          },
          { validator: validateMobile, trigger: "blur" }
        ],
        comment: [
          {
            required: true,
            message: "评论数不能为空",
            trigger: "blur"
          },
          { validator: validateMobile, trigger: "blur" }
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
      // this.$Message.info("我点击了添加");
      // this.$Message.info("Clicked ok");
    },
    cancel() {
      this.modal1 = false;
      this.$Message.info("取消添加");
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.modal1 = false;
          this.$Message.success("提交成功!");
          // console.log(this.formAdd);
          // 在这里暂时实现一个添加
          this.data1.push(this.formAdd);
        } else {
          this.modal1 = true;
          this.$Message.error("提交失败!");
        }
      });
    }
  }
};
</script>

