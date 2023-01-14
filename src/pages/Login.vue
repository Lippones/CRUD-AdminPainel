<template>
    <div class="containerDiv">
        
        <form action="" class="form">
            <h1 class="title">Login</h1>
            <div id="buttonDiv"></div>
            <div v-if="error != undefined" class="field" v-show="hidden">
                <div class="notification is-danger" >
                    <button class="delete" type="button" @click="deleteErr"></button>
                    <p>{{ error }}</p>
                </div>
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
            <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <input class="input is-rounded is-normal" type="text" placeholder="Password" v-model="password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-eye"></i>
                    </span>
                </p>
            </div>
            <button class="button is-normal" @click="login">Logar</button>
        </form>
    </div>
</template>

<script >
import axios from 'axios'
//import { inject } from 'vue'
async function handleCredentialResponse(response) {
         const sla = jwt_decode(response.credential);
         const res = await axios.post('http://localhost:8686/login',{
                    email:sla.email,
                    password:sla.sub,

                    
                })
                window.location.href = "/admin/users"
                //this.$router.push({name:'Users'})
         
        }
        window.onload = function () {
          google.accounts.id.initialize({
            client_id: "478764655261-dsvrk37g7d0p2nma9no1o93jjkuv2f77.apps.googleusercontent.com",
            callback: handleCredentialResponse
          });
          google.accounts.id.renderButton(
            document.getElementById("buttonDiv"),
            { theme: "outline", size: "large" }  // customization attributes
          );
          google.accounts.id.prompt(); // also display the One Tap dialog
        }
        
export default{
    data(){
        
        return {
            credential:{},
            password:'',
            email:'',
            error:undefined,
            hidden:true
        }
    },
    methods:{
        async login(event){
            event.preventDefault();
            try{
                
                const res = await axios.post('http://localhost:8686/login',{
                    email:this.email,
                    password:this.password
                })
                localStorage.setItem('token',res.data.token)
                console.log(res)
                this.$router.push({name:'Users'})
            }catch(err){
                console.log(err)
                const msg = err.response.data.err
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