<template>
    <div id="app">
        <div id="app_rou">
            <div id="app_rou_inner">
                <router-link to="/post" id="thing">Home</router-link>
                <router-link to="/first" id="thingt">About us</router-link>
            </div>

        </div>
        <router-view></router-view>
        <notifications group="foo" />
    </div>
</template>

<script>
    export default {
        name: 'app',
        data (){
            return {

            }
        },
        methods: {
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
