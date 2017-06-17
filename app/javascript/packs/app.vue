<template lang="slm">
#app
  app_header
  .container
    router-view
    app_footer
</template>

<script>
var Header = require('./_header.vue')
var Footer = require('./_footer.vue')

export default {
  components: {
    app_header: Header,
    app_footer: Footer
  }
}
</script>
