<template>
    <div>
        <img src="../assets/chuck_norris.jpg" />
        <br>
        <h2>{{ fact }}</h2>
    </div>
</template>
<script>
export default {
    props : ['facts'],
    data: function(){
        return {
            fact: undefined,
        }
    },

    created: function(){
      this.fact = this.facts[Math.floor(Math.random() * this.facts.length)]
    }
}
</script>

<style scoped>
    *{
      margin-left: auto;
    margin-right: auto;
    width: 800px;  
    }
</style>