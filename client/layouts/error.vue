<template>
  <div class="container error-page">
    <svg class="icon">
      <use xlink:href="#alert" />
    </svg>
    <h1 v-if="error.statusCode === 404">Not Found</h1>
    <nuxt-link to="/">Back to home</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'default' // you can set a custom layout for the error page
}
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
}
.icon {
  margin-top: 40px;
}
h1 {
  font-size: 22px;
  display: block;
  margin-bottom: 15px;
  font-family: "Kefa", serif;
  font-weight: bold;
}
a {
  color: blue;
  font-family: Georgia, 'Times New Roman', Times, serif;
  &:hover {
    text-decoration: none;
  }
}
</style>