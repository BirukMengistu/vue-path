<template>
  <div id="app">
     <router-link to="/">Home</router-link> |
     <router-link to="/about">About</router-link> 
      <router-view /> 
  </div>
 

</template>
<script>

export default {
   components: {
  
  }
}
</script>
<style>
   #app{
     text-align: center; 
     color:#2c3e50; 
   }
   button{
     background: orangered;
     padding:.5rem 1rem;
     border-radius: 5px;
     cursor: pointer;
   }
   
</style>
