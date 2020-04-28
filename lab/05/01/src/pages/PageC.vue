<template>
  <div>
    <h1>Page C</h1>
    <button @click="goToPageD">Go to Page D</button>
  </div>
</template>

<script>
  export default {
    data: function(){
      return{
        message: undefined,
      }
    },
    methods: {
      goToPageD: function(){
        this.$router.push({name: 'Page' , params: {message: this.message}})
      }
    }
  };
</script>