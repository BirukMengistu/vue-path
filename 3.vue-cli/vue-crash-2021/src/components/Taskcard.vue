<template >
  <div :class= "[ 'taskCard', task.remender ? 'reminder' :'']"> 
       <h3>{{ task.text}}  <i @click="onDelete(task.id)" class='fas fa-times'></i></h3>
       <p>{{ task.day}}</p>
     
  </div>
</template>
<script>
export default {
    name: 'TaskCard',
    props:{
        task:Object,
       }
  ,  
   methods:{
    onDelete(id){
         this.$emit('delete-task', id) 
        }
           }
}
   
</script>
<style scoped>
.taskCard{
    background: lightgray;
    margin: 10px;
    padding: 1rem 1.3rem;
    cursor: pointer;
    border-radius:6px;
}
.taskCard.reminder{
    border-left: 5px solid green;
    padding-left:1rem;
}
.taskCard h3{
  display: flex;
  align-items: center;
  justify-content: space-between;
}   
.fas{
    color :red;
}
</style>