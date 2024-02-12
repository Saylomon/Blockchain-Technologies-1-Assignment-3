import { createStore } from 'vuex'
const ethers = require('ethers')
const Provider = new ethers.providers.JsonRpcProvider('https://eth-sepolia.g.alchemy.com/v2/iD99rSDpFWeLjYiSQPm6fzYcuRxG7f4J')

const Web3 = require('web3')
const web3 = new Web3('wss://eth-sepolia.g.alchemy.com/v2/iD99rSDpFWeLjYiSQPm6fzYcuRxG7f4J')
// import { ABI } from '@/contracts/Example.abi.js'
// import { bytecode } from '@/contracts/Example.bin.js'

export default createStore({
    state: {
        provider: {},
        userProfileContract: null,
        topWeb3NFTContract: null,
        userWallet: null,
        userProfile: {
            name: "",
            surname: "",
            login: "",
            password: "",
            telNumber: ""
        },
        wallet: {
            address: "",
            chain: "",
            chainId: "",
            balance: ""
        },
    },
    mutations: {
        setUserProfileContract(state, contract) {
            state.userProfileContract = contract;
        },
        setTopWeb3NFTContract(state, contract) {
            state.topWeb3NFTContract = contract;
        },
        setUserWallet(state, wallet) {
            state.userWallet = wallet;
        },
        setUserProfile(state, profile) {
            state.userProfile = profile;
        },
        setUsers(state, users) {
            state.users = users;
        },
    },
    actions: {
        async connectWallet({ state }) {
            if (typeof window.ethereum !== 'undefined') {
                console.log("Ethereum client installed!")
                if (ethereum.isMetaMask === true) {
                    console.log("Metamask installed!")
                    if (ethereum.isConnected() !== true) {
                        console.log("Metamask is not connected!")
                        await ethereum.enable()
                    }
                    console.log("Metamask connected!")
                }
                else {
                    alert("Metamask is not installed!")
                }
            }
            else {
                alert("Ethereum client is not installed!")
            }

            ethereum.request({ method: "eth_requestAccounts" })
                .then(accounts => {
                    state.wallet.address = accounts[0]
                    console.log(`Account ${state.wallet.address} connected`)
                })

            state.provider = new ethers.providers.Web3Provider(ethereum)
            let network = await Provider.getNetwork()
            state.wallet.chain = network.name
            state.wallet.chainId = network.chainId
            state.wallet.balance = ethers.utils.formatUnits(await Provider.getBalance(state.wallet.address), 'ether')

            ethereum.on('accountsChanged', async (accounts) => {
                state.wallet.address = accounts[0]
                console.log(`Account ${state.wallet.address} connected`)
                state.wallet.balance = ethers.utils.formatUnits(await Provider.getBalance(state.wallet.address), 'ether')
            })


            ethereum.on('chainChanged', async (accounts) => {
                state.provider = new ethers.providers.Web3Provider(ethereum)
                let network = await Provider.getNetwork()
                console.log("NETWORK NAME ---> ", network.name)
                state.wallet.chain = network.name
                state.wallet.chainId = network.chainId
            })
        },
        async registerUser({ state }, [name, surname, login, password, telNumber]) {
            try {
                // You can handle user registration logic here
                // For simplicity, let's store login and password in the state
                state.userProfile = {
                    name,
                    surname,
                    login,
                    password,
                    telNumber
                };
                console.log(state.userProfile)
            } catch (error) {
                console.error(error);
            }
        },
        async signIn({ commit, state }, { login, password }) {
            try {
                // Simulate authentication logic using state.userProfile
                const isValidCredentials = isValidUserCredentials(state.userProfile, login, password);

                if (isValidCredentials) {
                    // Update user information in the state
                    commit('setUser', {
                        login,
                        password,
                    });

                    // You may want to perform authentication, redirect, etc.
                    console.log('User signed in successfully');
                    return 'User signed in successfully'
                } else {
                    // Handle invalid credentials
                    console.error('Invalid login or password');
                    return "Login or Password are INCORRECT"
                }
            } catch (error) {
                console.error(error);
            }
        },
        async mintNFT({ commit, state }) {
            try {
                await state.topWeb3NFTContract.methods.mintNFT(state.userWallet.address).send({ from: state.userWallet.address });
                // Refresh user data after minting NFT
                // You may need to call other actions or mutations to update state
            } catch (error) {
                console.error(error);
            }
        },
    },
});

// Function to check if provided credentials are valid
function isValidUserCredentials(userProfile, login, password) {
    return userProfile.login === login && userProfile.password === password;
  }
