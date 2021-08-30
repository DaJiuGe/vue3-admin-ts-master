<template>
  <div class="account">
    <div class="form-wrap">
      <a-form ref="formRef" :model="formState" layout="vertical">
        <a-form-item has-feedback label="用户名" name="username">
          <a-input
            v-model:value="formState.username"
            type="text"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item has-feedback label="密码" name="password">
          <a-input
            v-model:value="formState.password"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>登录</a-button>
        </a-form-item>
      </a-form>
      <div class="link">
        <a href="#">忘记密码</a> |
        <router-link to="register">注册</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, UnwrapRef } from "vue";

interface FormState {
  username: string;
  password: string;
}

export default defineComponent({
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      username: "",
      password: "",
    });
    const formLayout = reactive({
      layout: { labelCol: { span: 4 }, wrapperCol: { span: 14 } },
    });

    return {
      formRef,
      formState,
      formLayout,
    };
  },
});
</script>

<style lang="sass" scoped>
@import "./style.scss"
</style>
