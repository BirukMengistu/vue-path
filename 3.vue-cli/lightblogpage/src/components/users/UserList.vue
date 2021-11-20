<template>
  <table class="table  custome-form">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">User Name</th>
      <th scope="col">Status</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  
   <UserRow  v-for='(user,index) in users' :key='user.id' :index='index' :user='user'/>
  </tbody>


  </table>

</template>

<script>
import UserRow from './UserRow.vue'
import {mapGetters} from 'vuex'
export default {
  components:{
      UserRow,
  },
  computed: {
      ...mapGetters(['users'])
  }
}
</script>

<style>
  .custome-form{
  width :80%;
  margin: 2% 5% ;
}
inactive::hover{
  color:white;
}
</style>