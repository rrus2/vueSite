<template>
    <div>
        <form class="registerform" @submit="formSubmit" novalidate=true>
            <p v-if="errors.length" class="errorColor">
                <b>Please corrent the following errors</b>
                <ul>
                    <li v-bind:key="error" v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
            <div class="form-group">
                <input placeholder="First name" class="form-control" type="text" name="firstname" v-model="firstName"/>
            </div>
            <div class="form-group">
                <input placeholder="Last name" class="form-control" type="text" name="lastname" v-model="lastName"/>
            </div>
            <div class="form-group">
                <input placeholder="Username" class="form-control" type="text" name="username" v-model="userName"/>
            </div>
            <div class="form-group">
                <input placeholder="Email" class="form-control" type="email" name="email" v-model="email"/>
            </div>
            <div class="form-group">
                <input placeholder="Birth date" class="form-control" type="date" name="birthdate" v-model="birthDate"/>
            </div>
            <div class="form-group">
                <input placeholder="Password" class="form-control" type="password" name="password" v-model="passWord"/>
            </div>
            <div class="form-group">
                <input placeholder="Repeat password" class="form-control" type="password" name="repeatpassword" v-model="repeatPassword"/>
            </div>
            <input class="btn btn-primary" type="submit" value="Register"/>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Register',
    message: '',
    data(){
        return{
            errors: [],
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            birthDate: '',
            passWord: '',
            repeatPassword:''
        }
    },
    methods: {
        formSubmit(e){
            this.errors = [];
            if(!this.firstName){
                this.errors.push('First name is required');
            }
            if(!this.lastName){
                this.errors.push('Last name is required');
            }
            if(!this.userName){
                this.errors.push('Username is required');
            }
            if(!this.email){
                this.errors.push('Email is required');
            }
            if(!this.birthDate){
                this.errors.push('Birthdate is required');
            }
            if(!this.passWord){
                this.errors.push('Password is required');
            }
            if(!this.repeatPassword){
                this.errors.push('Repeat password is required');
            }
            if(this.passWord.length < 5){
                this.errors.push('Password need to be 5 long');
            }
            if(this.repeatPassword.length < 5){
                this.errors.push('Repeat password needs to be 5 long');
            }
            if(this.passWord != this.repeatPassword){
                this.errors.push('Passwords do not match');
            }
            axios.post("http://127.0.0.1:5000/users", {
                firstname: this.firstName,
                lastname: this.lastName,
                username: this.userName,
                email: this.email,
                birthdate: this.birthDate,
                password: this.passWord,
                repeatpassword: this.repeatPassword
        });
        if(this.errors.length == 0){
            this.$router.push('/thankyou');
        }
        e.preventDefault();
        }
    }
}
</script>

<style scoped>
.registerform {
    padding: 100px;
}
.errorColor{
    color: red;
}
</style>