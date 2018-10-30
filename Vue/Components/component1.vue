<template>
    <div>
        <h2 class="app-title">{{title}}</h2>
        <my-component></my-component>
    </div>
</template>
<script>
    import component2 from "./component2.vue";
    export default {
        components: {
            'my-component': component2
        },
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