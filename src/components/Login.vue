<template>
    <div class="jumbotron">
        <form class="registerform" @submit="loginUser">
            <div class="form-group">
                <input placeholder="User name" class="form-control-small" type="text" name="username" v-model="username" /><br>
            </div>
            <div class="form-group">
                <input placeholder="Password" class="form-control-small" type="password" name="password" v-model="password" /><br>
            </div>
            <input class="btn btn-primary" type="submit" value="Login" />
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data(){
        return{
            user: null,
            username: "",
            password: ""
        }
    },
    methods: {
        async loginUser(e){
            e.preventDefault();
            await axios.post("http://127.0.0.1:5000/login", {username: this.username, password: this.password}).then(data => this.$store.state.modules.user = data.data);
            this.user = this.$store.state.modules.user;
        }
    }
}
</script>