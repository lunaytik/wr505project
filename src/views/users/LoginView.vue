<script setup>
import { reactive } from "vue";
import { login } from "@/entities/users/usersProvider";
import {ElNotification} from "element-plus";

const fields = reactive({
  email: '',
  password: ''
})
const onSubmit = () => {
  login(fields).then(r => {
    ElNotification({
      title: 'Login Success',
      message: 'Redirection to the homepage',
      type: 'success',
      position: 'bottom-right',
    });
  });
}

</script>

<template>
  <ElForm :model="fields" :label-position="'top'">
    <ElFormItem label="Username">
      <ElInput label="Username" type="text" v-model="fields.email"/>
    </ElFormItem>
    <ElFormItem label="Password">
      <ElInput type="password" v-model="fields.password"/>
    </ElFormItem>
    <ElFormItem>
      <ElButton type="primary" @click.prevent="onSubmit">Login</ElButton>
    </ElFormItem>
  </ElForm>
</template>
