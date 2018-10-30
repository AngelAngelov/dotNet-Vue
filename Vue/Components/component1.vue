<template>
    <div>
        <h2 class="app-title">{{title}}</h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'My New Vue App'
            }
        }
    }
</script>
<style scoped>
    .app-title {
        color: red;
        width: 50%;
        margin: 10px auto;
        text-align: center;
    }
</style>