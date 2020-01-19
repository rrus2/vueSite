<template>
    <div class="jumbotron">
        <li class="rounded-pill bg-light" v-bind:key="product._id" v-for="product in products">{{ product.name }}<br>{{product.price}} $<br><router-link class="btn btn-primary" v-bind:to="'/shop/' + product.id">View</router-link></li><br>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Shop",
    data() {
        return{
            products: null
        }
    },
    mounted(){
        axios.get("http://127.0.0.1:5000/products").then((data) => (this.products = data.data))
    }
}
</script>

<style scoped>
li{
    list-style-type: none;
}
</style>