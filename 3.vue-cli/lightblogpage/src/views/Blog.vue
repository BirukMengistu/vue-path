<template>
    <div class="blog bg-light ">
        <h1  class="text-center mt-2">Our Blog post</h1>
          <div class="container justify-content-sm-center mt-2">
              
                 <router-link class='card' v-for='post in posts' :key='post.id' :to="{name : 'Blogdetails' , params: { id : post.id }}"> 
                    <div class=" hover-shadow m-2">
                     <h3>{{ post.title }}</h3>
                      <p>{{post.body | short}} </p>                
                   </div>
                    
                </router-link>
              
                            
             
          </div>
    </div>
</template>
<script>

import { mapActions , mapGetters} from 'vuex'
export default ({
 
   computed:{
       ...mapGetters(['posts'])
   },
   methods:{
       ...mapActions(['getPosts'])
   }, 
   created(){
  this.getPosts()
   },
   filters: {
       short(val){
           return val.slice(0,75) +'...'
       }
       
   }
})
</script>
<style scoped>
.blog{
    width:100%;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-content: center;   
}

.blog  h1 {
    font-family:   Arial, sans-serif !important;
    font-size: 2rem;
    text-transform: uppercase;
    color: dodgerblue;

}

.container div h3{
    text-transform: uppercase;
     padding: 0.8rem 0.5rem;
}
div p{
    text-align: left;
    padding: 0.2rem 0.5rem;
}
.card:nth-child(even){
   background: rgb(241, 240, 231);
   border-radius: 1px 8px;
   margin: 2rem;
}


.card:nth-child(odd){
    background: rgb(221, 239, 245);
     margin: 2rem;
     border-radius: 8px 1px;
}

</style>