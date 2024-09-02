<template>
    <div>
        <h1>{{ hello }}</h1>
        <input type="text" v-model="hello">
    </div>
</template>

<script>
    export default {
        data(){
            return {
                hello: "Hola Vue"
            }
        }
    }
</script>
