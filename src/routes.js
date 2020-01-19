import Vue from 'vue';
import Router from 'vue-router';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Contact from './components/Contact.vue';
import Shop from './components/Shop.vue';
import Home from './components/Home.vue';
import ShopItem from './components/ShopItem.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name:"home",
            component:Home
        },
        {
            path:"/register",
            name:"register",
            component:Register
        },
        {
            path:"/login",
            name:"login",
            component:Login
        },
        {
            path:"/shop",
            name:"shop",
            component:Shop
        },
        {
            path:"/shop/:_id",
            name:"shopitem",
            component:ShopItem
        },
        {
            path:"/contact",
            name:"contact",
            component:Contact
        }
    ]
})