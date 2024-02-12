<template>

    <div class="block-info">
      <table>
        <tbody>
          <tr>
            <td>Address:</td>
            <td>{{ $store.state.wallet.address }}</td>
          </tr>
          <tr>
            <td>Network:</td>
            <td>{{ $store.state.wallet.chain }}</td>
          </tr>
          <tr>
            <td>ID account:</td>
            <td>{{ $store.state.wallet.chainId }}</td>
          </tr>
          <tr>
            <td>Balance:</td>
            <td>{{ $store.state.wallet.balance }} ETH</td>
          </tr>
        </tbody>
      </table>
      <button @click="connectWallet" class="metamask-button">Подключить Metamask</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    name: 'connect-wallet',
    methods: {
      ...mapActions({
        connectWallet: 'connectWallet',
      }),
    },
  };
  </script>
  




  <style scoped>
  .metamask-button {
    background-color: rgb(8, 104, 248);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  
  .metamask-button:hover{
    background-color: #3a30f8;
  }
  
  .block-info {
    margin-top: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 15px;
  }
  
  table, th, td {
    border: 1px solid #ddd;
  }
  
  th, td {
    padding: 10px;
    text-align: left;
  }
  
  </style>
  