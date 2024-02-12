<template>
    <div>
        <h1>{{ $store.state.userProfile.name }}</h1>
        <h1>{{ $store.state.userProfile.surname }}</h1>
        <p>{{ $store.state.userProfile.login }}</p>
    </div>
</template>
  


<script>
export default {
    data() {

    },
    methods: {

    },
    name: "user-profile"
}
</script>
  