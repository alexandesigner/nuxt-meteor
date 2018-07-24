<template>
  <div class="default-layout">
    <site-nav/>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
  if (process.browser) {
    require('meteor-client')
  }
  export default {
    components: {
      SiteNav: () => import('~/components/Nav')
    }
  }
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: .0625rem /* 1/16 */;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-size: 1rem /* 16/16 */;
  color: rgba(0, 0, 0, .75);
  line-height: 1.6;
  background-color: #f3f4f6;
}

*, *:before, *:after {
  box-sizing: inherit;
  font-family: inherit;
  margin: 0;
}

h1, h2, h3, h4, p {
  margin-bottom: .9375rem /* 15/16 */;
}

.container {
  max-width: 75rem /* 1200/16 */;
  margin-right: auto;
  margin-left: auto;
  padding-right: 1.875rem /* 30/16 */;
  padding-left: 1.875rem /* 30/16 */;
}
</style>
