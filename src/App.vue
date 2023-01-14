<script setup>
  import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="columns is-gapless">
    
    <header v-if="this.$route.path !== '/'" class="column is-one-fifth" v-show="this.$route.path !== '/login'">
      <figure class="image is-64x64">
      <img class="is-rounded" src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png">
     </figure>
      <aside class="menu">
      <p class="menu-label">
        General
      </p>
      <ul class="menu-list">
        <li><router-link to="/admin/users" class="a">Painel</router-link></li>
        <li><router-link to="/login" class="a">Logout</router-link></li>
      </ul>
      <p class="menu-label">
        Administration
      </p>
      <ul class="menu-list">
        <li><a>Team Settings</a></li>
        <li>
          <a class="is-active">Manage Your Team</a>
          <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
          </ul>
        </li>
        <li><a>Invitations</a></li>
        <li><a>Cloud Storage Environment Settings</a></li>
        <li><a>Authentication</a></li>
      </ul>
      <p class="menu-label">
        Transactions
      </p>
      <ul class="menu-list">
        <li><a>Payments</a></li>
        <li><a>Transfers</a></li>
        <li><a>Balance</a></li>
      </ul>
    </aside>
    </header>
    
    <body class="column">
      <router-view/>
    </body>
  </div>
</template>

<style scoped>
  body{
    height: 100vh;
    width: 100%;
  }
  aside a, p {
    color: #FFf;
  }
  aside, figure{
    padding: 20px 0;
  }
  header{
    padding-top: 20px;
    height: 100vh;
    background-color: #19181F;
  }
  header figure{
    margin-bottom: 20px;
    margin-left: 10px;
  }
</style>
