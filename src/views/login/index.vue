<script setup lang="ts">
import { ref } from "vue";

const loginForm = ref({
  username: "admin",
  password: "123456",
});
const loginRules = ref({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});

// 登录
const handleLogin = () => {
  console.log("登录", loginForm.value);
};
</script>

<template>
  <div class="login-body">
    <div class="login-container">
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="loginForm"
        status-icon
        :rules="loginRules"
        label-width="auto"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password" type="password" autocomplete="off" />
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
