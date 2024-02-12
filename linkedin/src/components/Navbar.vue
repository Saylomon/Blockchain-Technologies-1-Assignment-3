<template>
    <div class="navbar">
      <button @click="$router.push('/sign-up')" class="nav-button">Registration</button>
      <button @click="$router.push('/sign-in')" class="nav-button">Sign in</button>
      <button @click="$router.push('/connect-wallet')" class="nav-button">Connect Wallet</button>
    </div>
  </template>
  
  <script>
  export default {

    name: "navbar"

  }
  </script>
  





  <style scoped>
  .navbar {
    background-color: #3b3838;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }

  
  .nav-button {
    background-color: rgb(8, 104, 248);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .nav-button:hover {
    background-color: #3a30f8;
  }
  </style>
  