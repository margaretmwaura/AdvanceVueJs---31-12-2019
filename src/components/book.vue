<template>
  <div>
      <br>
      <br>
      <p id="userid"> {{user.userId}}</p>
      <p id="id"> {{user.id}}</p>
      <p id="title">{{user.title}}</p>
      <p id="body">{{user.body}}</p>


  </div>
</template>

<script>
    export default {
        name: "book",
        props: {
            user: Array
        },
    }
</script>

<style scoped>

</style>
