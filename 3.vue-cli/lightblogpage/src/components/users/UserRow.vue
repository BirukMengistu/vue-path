<template>
     <!-- <tr :class='activeClass' > -->
    <tr :class='{inactive:!user.active}' >
      <th scope="row">{{index + 1}}</th>
      <td>{{user.name}}</td>
      <td> {{ user.active ?'Active':'Inactive'}} </td>
      <td>
          <button @click = 'user.active =!user.active' class='btn btn-info border-3 custome-btn-mrg'> {{user.active ?'Active':'Inactive'}} </button>
          <button @click='removeUser(user.id)' class='btn btn-danger'> <i class="fa fa-trash"></i> Delete</button>
     
      </td>
    </tr>
</template>

<script>
import { mapActions } from 'vuex'
export default {
props:['user','index'],
methods:{
    ...mapActions(['removeUser', 'toggleActive'])
    
},
computed:{
 isActiveText(){
     if(this.user.active)
     return 'Active'
     else
     return 'Inactive'
 },
 activeClass(){
     if(!this.user.active )
        return 'inactive'
     else
      return '' 

 }
}
}

</script>

<style scoped>
.fa-trash{
    border: 0 none transparent;
    outline: transparent;
    background: transparent;
    color:rgb(68, 0, 255);
}
.custome-btn-mrg{
    margin: 0 0.2rem;
}
.inactive{
   color: white;
}
.inactive:hover{
   color: rgb(175, 234, 245);
}
</style>