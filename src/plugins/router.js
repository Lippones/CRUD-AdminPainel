import Register from '@/pages/Register.vue'
import Login from '@/pages/Login.vue'
import Success from '@/pages/Success.vue'
import Users from '@/pages/Users.vue'
import Edit from '@/pages/Edit.vue'
import {createRouter, createWebHistory} from 'vue-router';
import axios from 'axios';

async  function AdminAuth(to,from,next){
    if(localStorage.getItem('token') != undefined){
        const req = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
        try{
            await axios.post('http://localhost:8686/validate',{},req)
            next();
        }catch(err){
          console.log(err) 
          next('/login') 
        }
    }else{
        next('/login')
    }
}

const routes = [
    { path: '/',name: 'Register', component: Register },
    { path: '/login',name:"Login", component: Login },
    { path: '/admin/users',name:"Users", component: Users, beforeEnter: AdminAuth },
    { path:'/success/:email',name:"Success", component: Success},
    { path:'/admin/user/edit/:id',name:"Edit", component: Edit},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router