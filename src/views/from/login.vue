<style lang="less">
.login-content {
  padding: 0px 30%;
  .login-progress{
      padding-bottom: 10px;
  }
}
</style>

<template>
  <!-- 登录的上面加一个进度条 -->
  <div class="login-content">
    <div class="login-progress">
      <Steps :current="current">
        <Step title="登录"></Step>
        <Step title="登录成功"></Step>
      </Steps>
    </div>
    <div class="login">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      current: 0,
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入你的用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入你的密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleProgress(val) {},
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          if (this.current == 1) {
            this.current = 0;
          } else {
            this.current += 1;
          }
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>

