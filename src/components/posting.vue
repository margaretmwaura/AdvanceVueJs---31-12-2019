<template>
    <div>
        <input v-model="userid">
        <input v-model="id">
        <input v-model="title">
        <input v-model="body">
        <button @click="posttodb">Add post</button>
    </div>


</template>

<script>
    import axios from 'axios';
    import user from '../../user.js'
    export default {
        name: 'posting',
        data() {
            return {
                userid : " ",
                id : " ",
                title: " ",
                body : " "
            }
        },
        methods: {
            posttodb() {
                var muyser = new user(this.userId , this.id , this.title,this.body);
                axios
                    .post('https://jsonplaceholder.typicode.com/posts',muyser)
                    .then(response => {
                        var code = response.status;
                        console.log(code);
                        if(code === 201)
                        {
                            this.$notify({
                                group: 'foo',
                                title: 'Success',
                                text: 'Posting of data was successful'
                            });
                        }
                        else
                        {
                            this.$notify({
                                group: 'foo',
                                title: 'Failure',
                                text: 'Error occured when posting data : error code : ' + code
                            });
                        }
                    })
                    .catch(error => {
                        this.$notify({
                            group: 'foo',
                            title: 'Failure',
                            text: error
                        });
                    })
                    .finally(() => this.loading = false)
            },
        }
    }
</script>

<style scoped>

</style>
