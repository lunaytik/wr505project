<script setup>
import { RouterLink, RouterView } from 'vue-router'

localStorage.setItem('access_token', "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTc2MTMyMDksImV4cCI6MTY5NzYxNjgwOSwicm9sZXMiOlsiUk9MRV9VU0VSIiwiUk9MRV9BRE1JTiJdLCJ1c2VybmFtZSI6ImVtYWlsMUB0ZXN0LmNvbSJ9.UDV5GAVyftdCusyJuMMwXEgsXOIIgV7zr6sxIFqbNlAO5vvoouxJtQZY6mDY0HXsMCygq7BUvagxZ7X5aO-2QqDTsCerUow9baKYZkhLeRKBe1IpU6GR7eslFVWllQbzByEw0-P4OkQV5My7HAf6Rmzb5Lia6GWQNcKH4hh5bPWNs-_EDhAu90lZLEnQmlg8i9FdEmbwtlHGW0UTpyYUBjhxJ8twZhZcrf4bS_WlRYKhhcA1i8Va2orItbF7e4A1G4lFxjCa9s696pbhUdUhcnAZo3Y1CqovA7pz1LpV52jsViHwcbm_cB1FCbeWmsEa2slgqtZx3VhLwyGV5FgWIg")
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/movies">Movies</RouterLink>
       <RouterLink to="/actors">Actors</RouterLink>
      </nav>
  <RouterView :key="$route.path" />
</template>

<style scoped>

</style>
