import { createApp } from 'vue'
import router from '@/plugins/router'
import App from '@/App.vue'
import '../node_modules/bulma/css/bulma.css'

//import gAuthPlugin from 'vue3-google-oauth2';
//const gAuthOptions = { clientId: '478764655261-tsuahl5fepudgd7gdiild2tdn4i10cse.apps.googleusercontent.com', scope: 'email', prompt: 'consent', fetch_basic_profile: false }
createApp(App).use(router).mount('#app')
