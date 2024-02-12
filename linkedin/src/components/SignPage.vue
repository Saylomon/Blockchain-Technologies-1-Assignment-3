<template>
    <img src="@/assets/Linkedin.png" alt="Company Logo" class="company-logo" />
    <div class="sign-in-container">
        <h1>Sign In</h1>
        <div class="sign-in-form">
            <label for="login">Login:</label>
            <input v-model="login" id="login" class="input-field" placeholder="Enter your login" />

            <label for="password">Password:</label>
            <input v-model="password" id="password" type="password" class="input-field" placeholder="Enter your password" />

            <button @click="signIn" class="sign-in-button">Sign In</button>

            <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        </div>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            login: '',
            password: '',
            errorMessage: '',
        };
    },
    methods: {
        ...mapActions({
            signIn: 'signIn',
        }),
        async signIn() {
            if (!this.login || !this.password) {
                this.errorMessage = 'Please enter both login and password.';
                return;
            }

            try {
                // Clear previous error message
                this.errorMessage = '';

                // Call the signIn action from Vuex store
                this.errorMessage = await this.$store.dispatch('signIn', { login: this.login, password: this.password });

            } catch (error) {
                console.error(error);
            }
            if (this.errorMessage == 'User signed in successfully'){
                this.$router.push('/user-profile')
            }
        },
    },
};
</script>
  
<style scoped>
.company-logo {
    width: 500px;
    /* Adjust the width as needed */
    height: auto;
    margin-bottom: 20px;
}

.sign-in-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30vh;
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
}

.sign-in-form {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
}

.input-field {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.sign-in-button {
    background-color: rgb(8, 104, 248);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.sign-in-button:hover {
    background-color: #3a30f8;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
  