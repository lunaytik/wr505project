<script setup>
const props = defineProps({
  movie: Object
})
</script>

<template>
  <ElCard :body-style="{ padding: '0px' }">
    <ElImage
        :src="'http://localhost/wr506' + movie.poster"
        class="image"
        :alt="movie.title"
        fit="cover"
    />
    <div style="padding: 14px">
      <span>{{ movie.title }}</span>
      <div class="bottom">
        <time class="time">{{ movie.releaseDate.split('T')[0] }}</time>
        <el-button text class="button">Operating</el-button>
      </div>
    </div>
  </ElCard>
</template>

<style scoped>
  .image {
    height: 320px;
    width: 200px;
  }
</style>