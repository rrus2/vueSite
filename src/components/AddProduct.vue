<template>
    <div>
        <form class="productForm" method=POST novalidate="true" enctype="multipart/form-data" @submit="addProduct">
            <div class="form-group">
                <input class="form-control" placeholder="Product name" type="text" name="name" v-model="name">
            </div>
            <div class="form-group">
                <input class="form-control" placeholder="Price" type="text" name="price" v-model="price">
            </div>
            <div class="form-group">
                <select class="form-control" v-model="category">
                    <option disabled value="">Select a category</option>
                    <option>Car</option>
                    <option>Weapon</option>
                    <option>Computer</option>
                </select>
            </div>
            <div class="form-group">
                <input class="form-control" type="file" name="name" v-on:change="fileUpload">
            </div>
            <input class="btn btn-primary" type="submit" value="Add product">
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "AddProduct",
    data(){
        return{
            errors: [],
            name:"",
            price: "",
            category: "",
            image: null
        }
    },
    methods: {
        addProduct(e){
            if(!this.name){
                this.errors.push('Name required');
            }
            if(!this.price){
                this.errors.push('Price required')
            }
            if(!this.category){
                this.errors.push('Category required')
            }
            axios.post("http://127.0.0.1:5000/products", {
                name: this.name,
                price: this.price,
                category: this.category,
                image: this.image.name
            }).then(response => console.log(response));
            
            e.preventDefault();
        },
        fileUpload(e){
            this.image = e.target.files[0];
        }
    }
}
</script>

<style scoped>
.productForm{
    padding: 100px;
}
</style>