<template>
<div class="container mt-5">
    <div class="border rounder hover-shadow p-5">
        <h1 class="txt-center">
          {{post.title}} 
        </h1>
       
        <hr class='bg-primary'>
        <p class="text-center">
          
          {{post.body}} 
        </p>
        <span>
          <div class="social-media d-flex flex-row  justify-content-end">
                     <i class="fa fa-share"></i>
                     <i class="fab fa-google-plus"></i>  
                     <i class="fab fa-twitter" ></i>
                    <i class="fab fa-facebook-f"></i>
                   </div>
        </span>
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

<style css=true scoped>
   .social-media{
    display: flex;
    flex-direction:row;
    font-weight: 300;
    color:rgb(16, 32, 173);
}
 h1 {
    font-family:   Arial, sans-serif !important;
    font-size: 2rem;
    text-transform: uppercase;
    color: dodgerblue;

}
.social-media .fab, .social-media .fa{
 padding: 1.2rem 1.5rem;
}
  .social-media .fab:hover{
  transform: scale(1.2);
  color: rgb(7, 136, 3);
  }
</style>