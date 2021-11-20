<template>
  <form  class="row custome-form ">
      <div class="col-9  ">
        <div class="form-outline ">
        <input type="text" id="form12" class="form-control  custome-border" />
        <label class="form-label" for="typeText">User Name</label>
        </div>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-primary">Add User</button>
      </div>
  </form>
</template>

<script>
export default {

}
</script>

<style>
.custome-border{
    border: none;
    border-bottom: 2px solid darkblue !important;
}
.custome-form{
  margin-top: 1.2rem;
  margin: 5% 1% ;
}
</style>