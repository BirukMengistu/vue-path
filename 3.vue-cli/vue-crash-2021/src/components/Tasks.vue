<template>
<div>
    <div :key ="task.id" v-for="task in tasks">
        <TaskCard @delete-task="$emit('delete-task' , task.id)" :task= "task"/>
    </div>   
       
</div>
        
</template>

<script>
import TaskCard from  './Taskcard.vue'
export default {
name : 'Tasks',
props:{
   tasks: Array 
},
components:{
    TaskCard
}

}
</script>

<style>

</style>