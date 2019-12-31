<template>
    <div id="app">
        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>

        <section v-else>
            <div v-if="loading">Loading...</div>
        </section>

        <notifications group="foo" />
        <p>This is the computed value :: {{name}}</p>
        <p>This is the computed value :: {{currentuser}}</p>
        <input v-model="namemmine">
        <button @click="updatingvalue">Click to update </button>

        <li v-for="item in books" :key="item.id">
            <Book :user="item"></Book>
        </li>

    </div>
</template>

<script>
    import axios from 'axios';
    import Book from "./book";
    import  {mapState,mapGetters} from 'vuex'
    export default {
        name: 'app',
        components: {
            Book
        },
        data() {
            return {
                loading: true,
                errored: false,
                books: [],
                namemmine : ' '
            }
        },
        created() {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.books = response.data;
                    console.log(this.books)
                    // this.iterate()
                })
                .catch(error => {
                    this.console.log(error);
                    this.errored = true
                })
                .finally(() => this.loading = false)
        },
        computed :
            {
                ...mapState(['name']),
                ...mapGetters(['currentuser'])
            },
        methods: {
            updatingvalue () {
                this.$store.dispatch('perfomchanhing',this.namemmine)
            }
        },
        watch: {
            books : function() {
                this.$notify({
                    group: 'foo',
                    title: 'Data gotten',
                    text: 'Data has been gotten , it has been rendered'
                });

                console.log("Data has been gotten")
            }
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
