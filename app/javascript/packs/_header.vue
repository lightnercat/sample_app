<template lang="slm">
header.navbar.nabvar-fixed-top.navbar-inverse
  .container
    a#logo href="/"  sample app
    nav
      ul.nav.navbar-nav.navbar-right
        li
          router-link to="/" Home
        li
          router-link to="/help" Help
        li
          router-link to="/login" Log in
</template>

<script>
</script>
