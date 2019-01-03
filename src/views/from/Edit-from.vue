<style lang="less" scoped>
.from {
  padding: 0px 10%;
}
</style>

<template>
  <div class="from">
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="80"
      label-position="left"
    >
      <FormItem label="名字" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入名字"></Input>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
      </FormItem>
      <FormItem
        label="添加表格"
        prop="add"
        v-for="(item, index) in formValidate.items"
        v-if="item.status"
        :key="index"
        :label="'Item ' + item.index"
        :prop="'items.' + index + '.value'"
        :rules="{required: true, message: 'Item ' + item.index +' 不能为空', trigger: 'blur'}"
      >
        <!-- 添加表格 -->
        <Row>
          <Col span="14">
            <Input type="text" v-model="item.value" placeholder="请输入内容"></Input>
          </Col>
          <Col span="4" offset="1">
            <Button @click="handleRemove(index)">删除</Button>
          </Col>
          <Col span="4" offset="1">
            <Button @click="handleAdd">添加</Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="城市" prop="city">
        <Select v-model="formValidate.city" placeholder="请选择城市">
          <Option value="beijing">北京</Option>
          <Option value="shanghai">河北</Option>
          <Option value="shenzhen">天津</Option>
        </Select>
      </FormItem>
      <FormItem label="日期">
        <Row>
          <Col span="11">
            <FormItem prop="date">
              <DatePicker type="date" placeholder="请选择日期" v-model="formValidate.date"></DatePicker>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <FormItem prop="time">
              <TimePicker type="time" placeholder="请选择时间" v-model="formValidate.time"></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="0">Male</Radio>
          <Radio label="1">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="爱好" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="描述" prop="desc">
        <Input
          v-model="formValidate.desc"
          type="textarea"
          :autosize="{minRows: 2,maxRows: 5}"
          placeholder="描述"
        ></Input>
      </FormItem>
      <FormItem label="上传文件" prop="desc">
        <Upload multiple type="drag" action="//jsonplaceholder.typicode.com/posts/">
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>Click or drag files here to upload</p>
          </div>
        </Upload>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 1,
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "0",
        interest: [],
        date: "2018-10-2",
        time: "",
        desc: "",
        items: [
          {
            value: "",
            index: 1,
            status: 1
          }
        ]
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "名字不能为空",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "邮箱不能为空",
            trigger: "blur"
          },
          { type: "email", message: "请输入正确的邮箱", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "请选择城市",
            trigger: "change"
          }
        ],
        gender: [{ required: true, message: "请选择性别", trigger: "change" }],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "请选择爱好",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "最多选择两种爱好",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "请选择日期",
            trigger: "change"
          }
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "请选择时间",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "请描述",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "描述的内容不少于20个文字",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功!");
        } else {
          this.$Message.error("提交失败!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    },
    handleAdd() {
      this.index++;
      this.formValidate.items.push({
        value: "",
        index: this.index,
        status: 1
      });
    },
    handleRemove(index) {
      this.formValidate.items[index].status = 0;
    }
  }
};
</script>