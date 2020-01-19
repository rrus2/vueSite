<template>
  <div class="navbar navbar-expand-lg navbar-light bg-dark">
      <router-link to="/" class="btn btn-primary">Home</router-link>
      <router-link to="/register" class="btn btn-primary">Register</router-link>
      <router-link to="/login" class="btn btn-primary">Login</router-link>
      <router-link to="/shop" class="btn btn-primary">Shop</router-link>
      <router-link to="/contact" class="btn btn-primary">Contact</router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #eeeeee;
  margin: 5px;
}
</style>
