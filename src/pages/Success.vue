<template>
    <div class="container">
        <article class="message is-success">
        <div class="message-header">
            <p>Success</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <p>Um link de confirmação foi enviado para o email: {{ $route.params.email }}</p>
            <button type="button" class="button is-link" @click="redi">Login</button>
        </div>
        </article>
    </div>
</template>
<script>
    export default {
        methods:{
            redi(){
                this.$router.push({name:"Login"})
            }
        }
    }
</script>
<style scoped>
    
    .message-body button{
    margin-top: 20px;   
    }
</style>