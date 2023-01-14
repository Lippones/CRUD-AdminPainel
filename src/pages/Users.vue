<template>
    <div class="containerDiv">
        <table class="table">
            <thead>
                <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Cargo</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ role(user.role) }}</td>
                    <td>
                        <router-link :to="{name:'Edit',params:{id:user.id}}"><button class="button is-success">Editar</button></router-link>
                        
                        <button class="button is-danger" @click="showModalUser(user.id)">Deletar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div :class="{modal:true, 'is-active':showModal}">
        <div :class="{modal:true, 'is-active':showModal}">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="card">
                    <div class="card-content">
                        <p class="title">
                        Deseja mesmo exluir o usuario?
                        </p>
                        <p class="subtitle">
                        Não sera possivel recupera-lo.
                        </p>
                    </div>
                    <footer class="card-footer">
                     <p class="card-footer-item">
                    <span class="pmodal" @click="hideModal()">
                        CANCELAR
                    </span>
                    </p>
                    <p class="card-footer-item">
                    <span class="pmodal" @click="deleteUser()">
                        EXCLUIR
                    </span>
                    </p>
                </footer>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="hideModal()"></button>
    </div>
</template>
<script >
import {RouterLink } from 'vue-router';
import axios from 'axios'
export default{
    async created(){
        const req = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        try{
            const res = await axios.get('http://localhost:8686/user',req)
            this.users = res.data
        }catch(err){
            console.log(err)
        }
    },
    data(){
        return {
            users:[],
            showModal:false,
            deleteUserId:-1
        }
    },
    methods:{
        hideModal(){
            
            this.showModal = false;
        },
        showModalUser(id){
            this.deleteUserId = id;
            this.showModal = true
        },
        role(value){
            if(value == 0){
                return 'User'
            }else{
                return 'Admin'
            }
        },
        async deleteUser(){
            try{
                const req = {
                    headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
                await axios.delete('http://localhost:8686/user/'+this.deleteUserId,req)
                this.showModal = false
                const res = await axios.get('http://localhost:8686/user',req)
                this.users = res.data
            }catch(err){
                console.log(err)
                this.showModal = false
            }
        }
    }
}
</script>
<style scoped>
    .pmodal{
        cursor: pointer;
    }
    .modal-content{
        text-align: center;
    }
    .containerDiv{
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #1E1E26;
        
    }
    table{   
        text-align: center;
        border-radius: 20px;
        width: 1200px;
        background-color: rgba(245, 245, 245, 0.897);
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
    button{
        margin-left: 10px;
    }
</style>