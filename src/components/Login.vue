<template>
    <div class="jumbotron">
        <form class="registerform">
            <div class="form-group">
                <input placeholder="User name" class="form-control-small" type="text" name="username" /><br>
            </div>
            <div class="form-group">
                <input placeholder="Password" class="form-control-small" type="password" name="password" /><br>
            </div>
            <input class="btn btn-primary" type="submit" value="Login" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login'
}
</script>