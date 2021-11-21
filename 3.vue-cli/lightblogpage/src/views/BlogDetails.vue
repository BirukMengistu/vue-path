<template>
<div class="container mt-5">
    <div class="border rounder p-5">
        <h1 class="txt-center">
         
          {{post.title}} 
        </h1>
       
        <hr class='bg-primary'>
        <p class="text-center">
          
          {{post.body}} 
        </p>
    </div>
</div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
   
  props: ['id'],
  computed: {
       ...mapGetters(['post'])  
   },
   methods: {
       ...mapActions(['getPost'])
   }, 
   created()  {
    this.getPost(this.$route.params.id);
   }

}
</script>

<style scoped>

</style>