<script setup>
import { ref } from "vue";
import { RouterLink, RouterView } from 'vue-router'

const token = ref();
token.value = localStorage.getItem('access_token');

const logout = () => {
  localStorage.removeItem('access_token');
  token.value = null;
}

</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
        <RouterLink to="/actors">Actors</RouterLink>
        <ElButton v-if="!token">
          <RouterLink class="el-link" to="/login">Login</RouterLink>
        </ElButton>
        <ElButton v-else @click.prevent="logout">Logout</ElButton>
      </nav>
  <RouterView :key="$route.path" />
</template>
