<template>
    <div v-if="userProfile.connections.length >= 5">
        <button @click="mintNFT">Mint TopWeb3NFT</button>
    </div>
</template>
  


<script>
export default {
    data() {
        return {
            userProfile: {}, // Fetch user profile data from the blockchain
            topWeb3NFTContract: null, // Initialize with your deployed contract instance
            userWallet: null // Initialize with Web3.js wallet instance
        };
    },
    methods: {
        async mintNFT() {
            try {
                await this.topWeb3NFTContract.methods.mintNFT(this.userWallet.address).send({ from: this.userWallet.address });
                // Refresh user data after minting NFT
            } catch (error) {
                console.error(error);
            }
        }
    },
    name: "top-web3-nft"
}
</script>
  