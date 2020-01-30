<template>
  <div class="navbar navbar-expand-lg navbar-light bg-dark">
      <router-link to="/" class="btn btn-primary">Home</router-link>
      <router-link v-if="renderProduct" to="/addproduct" class="btn btn-primary">Add product</router-link>
      <router-link v-if="!renderProduct" to="/register" class="btn btn-primary">Register</router-link>
      <router-link v-if="renderLogin" to="/login" class="btn btn-primary">Login</router-link>
      <a href="" v-if="!renderLogin" class="btn btn-primary" @click="logoutUser">Logout</a>
      <router-link to="/shop" class="btn btn-primary">Shop</router-link>
      <router-link to="/contact" class="btn btn-primary">Contact</router-link>
  </div>
</template>

<script>

export default {
  name: 'Header',
  computed: {
    renderProduct(){
      if(this.$store.state.modules.user){
        if(this.$store.state.modules.user.role == "admin"){
          return true;
        }
        else{
          return false;
        }
      }
      else{
        return false;
      }
    },
    renderLogin(){
      if(this.$store.state.modules.user){
        return false;
      }
      else{
        return true;
      }
    }
  },
  methods:{
    logoutUser(){
      this.$store.state.user = null;
    }
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
