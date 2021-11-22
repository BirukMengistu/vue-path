<template>
<teleport to ='#modals'>
    <div class="modal-wrapper">
      <div class="modal">
        <slot></slot>
    </div> 
</div>
    
</teleport>
 
</template>
<script>
export default {
   name:'Modal' ,
   components:{
       
   }
   
}
</script>
<style scoped>
.modal-wrapper{
    background: rgba(0,0,0,0.329);
    position: absolute;
    inset:0;
    display:flex;
    justify-content: center;
    align-items: center;
}
.modal{
    background: #fff;
    border:1px solid #333;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 10px 2rem #1111114b, 0 10px 4rem #333333;
}

.modal-login{
    display: flex;
    flex-direction: row;
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 10px 2rem #1111114b, 0 10px 4rem #333333;
}
</style>