<template>
  <header>
    <h1> {{ title }}</h1>  
     <Button @click='onclick()' color ='green' text='Add Task'/>
  </header>
  
</template>

<script>
import Button from './Button.vue'
export default {
 name:'Header',
 props:{
     title: String,
     }
     ,
 components: {
          Button,
     },
     method:{
         onclick(){
           console.log('click') 
         }
     }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>