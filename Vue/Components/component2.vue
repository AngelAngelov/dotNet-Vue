<template>
    <div>
        <h2>{{text}} </h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                text: 'This is my second component'
            }
        }
    }
</script>
<style scoped>
    h2 {
        background-color: aquamarine;
        margin: 0px 10px 0px 10px;
        padding: 5px
    }
</style>