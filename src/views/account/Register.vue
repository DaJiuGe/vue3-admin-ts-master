<template>
  <div class="account">
    <div class="form-wrap">
      <a-form ref="formRef" layout="vertical" :model="model" :rules="rules">
        <a-form-item has-feedback label="用户名" name="username">
          <a-input
            v-model:value="model.username"
            type="text"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item has-feedback label="密码" name="password">
          <a-input
            v-model:value="model.password"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item has-feedback label="确认密码" name="confirmPassword">
          <a-input
            v-model:value="model.password"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item has-feedback label="验证码">
          <a-row>
            <a-col span="14">
              <a-input type="text" autocomplete="off" />
            </a-col>
            <a-col span="9" offset="1">
              <a-button type="primary" block>获取验证码</a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>注册</a-button>
        </a-form-item>
      </a-form>
      <div class="link">
        <a href="#">忘记密码</a> |
        <a href="#">注册</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef } from "vue";
import { RuleObject } from "ant-design-vue/es/form/interface";
import {
  validatePhone as checkPhone,
  validatePassword as checkPassword,
} from "@/utils/validate";

interface FormState {
  username: string;
  password: string;
}

export default defineComponent({
  setup() {
    const formRef = ref();

    const layout = reactive({
      layout: { labelCol: { span: 4 }, wrapperCol: { span: 14 } },
    });

    const model: UnwrapRef<FormState> = reactive({
      username: "",
      password: "",
    });

    const validateUsername = async (rule: RuleObject, value: string) => {
      if (!value) {
        return Promise.reject("Please input username");
      }

      if (!checkPhone(value)) {
        return Promise.reject("Please input correct phone number");
      }

      return Promise.resolve();
    };

    const validatePassword = async (rule: RuleObject, value: string) => {
      if (!value) {
        return Promise.reject("Please input password");
      }

      if (!checkPassword(value)) {
        return Promise.reject("Please input correct password");
      }

      return Promise.resolve();
    };

    const validateConfirmPassword = async (rule: RuleObject, value: string) => {
      if (!value) {
        return Promise.reject("Please input confirm password");
      }

      return Promise.resolve();
    };

    const rules = {
      username: [{ validator: validateUsername, trigger: "change" }],
      password: [{ validator: validatePassword, trigger: "change" }],
      confirmPassword: [
        {
          validator: validateConfirmPassword,
          trigger: "change",
        },
      ],
    };

    return {
      formRef,
      layout,
      model,
      rules,
    };
  },
});
</script>

<style lang="sass" scoped>
@import "./style.scss"
</style>
