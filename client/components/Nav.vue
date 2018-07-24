<template>
  <nav>
    <div class="container">
      <h1>
        <nuxt-link to="/">meionorte.com</nuxt-link>
      </h1>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/tasks">Tasks</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
  }
</script>

<style scoped>
nav {
  text-align: center;
  padding: .9375rem /* 15/16 */;
  background-color: #222;
  margin: 0 0 1.875rem /* 30/16 */;
}

.container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

h1 {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  padding: 0 .625rem /* 10/16 */;
  font-size: 1.25rem /* 20/16 */;
}

a {
  text-decoration: none;
  color: #fff;
}
</style>
