<template>
  <form  class="row custome-form " @submit.prevent="onSubmit">
      <div class="col-9  ">
        <div class="form-outline ">
        <input type="text" id="form12" class="form-control  custome-border"  v-model="userName"/>
        <label class="form-label" for="typeText"> Enter User Name</label>
        </div>
      </div>
      <div class="col-3">
        <button  class="btn btn-primary">Add User</button>
      </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex'
export default {
data(){
    return {
        userName: ''
    }
}
,
methods:{
    ...mapActions(['addUser']),
    onSubmit(){
        this.addUser(this.userName)
        this.userName=''
    }
}
}

</script>


<style scoped>


.custome-border{
    border: none;
    border-bottom: 2px solid darkblue !important;
}
.custome-form{
  margin-top: 1.2rem;
  margin: 5% 1% ;
}
</style>