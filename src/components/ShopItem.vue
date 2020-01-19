<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} $</p>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'ShopItem',
    data(){
        return {
            product: null
        }
    },
    mounted(){
        axios.get("http://127.0.0.1:5000/products/" + this.$route.params._id).then((data) => (this.product = data.data))
    }
}
</script>