<template>
    <img src="@/assets/Linkedin.png" alt="Company Logo" class="company-logo" />
    <div class="registration-container">
        <h1>Register</h1>
        <div class="registration-form">
            <label for="login">Login:</label>
            <input v-model="login" id="login" class="input-field" placeholder="Enter your login" />
            <label for="login">Name:</label>
            <input v-model="name" id="login" class="input-field" placeholder="Enter your name" />
            <label for="login">Surname:</label>
            <input v-model="surname" id="login" class="input-field" placeholder="Enter your surname" />
            <label for="login">Phone Number:</label>
            <input v-model="telNumber" id="login" type="tel" class="input-field" placeholder="Enter your number" pattern="[0-9]{10}" title="Please enter a 10-digit phone number" required />

            <label for="password">Password:</label>
            <input v-model="password" id="password" type="password" class="input-field" placeholder="Enter your password" />

            <button @click="RegUser" class="register-button">Register</button>
        </div>
    </div>
</template>
  
<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            name: '',
            surname: '',
            login: '',
            password: '',
            telNumber:''
        };
    },
    methods: {
        ...mapActions({
            registerUser: 'registerUser',
        }),
        async RegUser() {
            await this.registerUser([this.name, this.surname, this.login, this.password, this.telNumber])
            this.name = ""
            this.surname = ""
            this.login = ""
            this.password = ""
            this.telNumber = ""
            this.$router.push('/user-profile')
        }
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

.registration-container {
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

.registration-form {
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

.register-button {
    background-color: rgb(8, 104, 248);
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.register-button:hover {
    background-color: #3a30f8;
}
</style>
  