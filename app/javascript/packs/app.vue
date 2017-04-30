<template lang="slm">
#app
  app_header
  .container
    .center.jumbotron
      h1 Welcome to the Sample App
      h2
        | This is the home page for the
        a href="http://www.railstutorial.org/" Ruby on Rails Tutorial
        | sample application.

      a.btn.btn-lg.btn-primary href="/signup" Sign up now!

    app_footer
</template>

<script>
var Header = require('./_header.vue')
var Footer = require('./_footer.vue')

export default {
  components: {
    app_header: Header,
    app_footer: Footer
  },
  data: function () {
    return {
      message: "Hello Vue.js!"
    }
  }
}
</script>
