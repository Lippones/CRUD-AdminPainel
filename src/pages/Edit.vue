<template>
    <div class="containerDiv">
        
        <form action="" class="form">
            <h1 class="title">Edit</h1>
            <div v-if="error != undefined" class="field" v-show="hidden">
                <div class="notification is-danger" >
                    <button class="delete" type="button" @click="deleteErr"></button>
                    <p>{{ error }}</p>
                </div>
            </div>
            <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input is-rounded is-normal" type="text" placeholder="User Name" v-model="name">
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                </p>
    </div>
    <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input is-rounded is-normal" type="text" placeholder="Email" v-model="email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <button class="button is-normal" @click="update">Editar</button>
        </form>
    </div>
</template>

<script >
import axios from 'axios'
export default{
    async created(){
        const req = {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
        try{
           const res =  await axios.get('http://localhost:8686/user/'+this.$route.params.id,req)
           console.log(res)
           this.name = res.data[0].name,
           this.email = res.data[0].email,
           this.id = res.data[0].id
        }catch(err){
            this.$router.push({name:"Users"})
        }
    },
    data(){
        return {
            name:'',
            email:'',
            id:0,
            error:undefined,
            hidden:true
        }
    },
    methods:{
        async update(event){
            const req = {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            event.preventDefault();
            try{
                const res = await axios.put('http://localhost:8686/user',{
                    email:this.email,
                    name:this.name,
                    id:this.id
                },req)
                this.$router.push({name:'Users'})
            }catch(err){
                const msg = err.response.data.error
                this.hidden = true
                this.error = msg
            }
            
        },
        deleteErr(event){
            event.preventDefault();
            try{
                this.hidden = false;
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<style scoped>
    .containerDiv{
        height: 100vh;
        display: flex;
        align-items: center;;
        justify-content: center;
        background-color:#19181F;
        
    }
    .title{
        text-transform: uppercase;
        color: #67159C;
    }
    .icon{
        font-size: 17px;
    }
    .form{
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: #ffffff;
        padding: 30px 30px;
        text-align: center;
        height: 50vh;
        width: 500px;
    }
    .button{
        margin-top: 10px;
        background-color: #67159C;
        width: 100%;
        color: #FFF;
    }
    @media (max-width: 1200px){
        .form{
            width: 60%;
        }
    }
</style>