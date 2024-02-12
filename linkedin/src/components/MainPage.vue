<template>
    <div>
        <h1>Добро пожаловать в сообщество специалистов!</h1>
        <img src="@/assets/Main-Linkedin.png" alt="Human" class="human" />
        <img src="@/assets/Linkedin.png" alt="Logo" class="Logo">
    </div>
</template>
  


<script>
export default {
    data() {
        return {
            users: [], // Fetch and populate user data from the blockchain
            userProfileContract: null, // Initialize with your deployed contract instance
            userWallet: null // Initialize with Web3.js wallet instance
        };
    },
    methods: {
        async sendConnectionRequest(toAddress) {
            try {
                await this.userProfileContract.methods.sendConnectionRequest(toAddress).send({ from: this.userWallet.address });
                // Refresh user data after sending connection request
            } catch (error) {
                console.error(error);
            }
        }
    },
    name: "main-page"
}
</script>
  

<style scoped>
.Logo {
    position: absolute;
    top: 80px;
    left: 80px;
    width: 10%;
    height: auto;
}

h1 {
    position: absolute;
    top: 150px;
    left: 80px;
    width: 33%;
    height: auto;
    color: rgb(172, 89, 75);
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 300;
    font-size: 60px;
    text-align: left;
}
.human{
    position: absolute;
    top: 80px;
    left: 800px;
    width: 45%;
    height: auto;
}
</style>