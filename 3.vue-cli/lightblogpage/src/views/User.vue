<template>
  <div class="user">
      <AddUser />
      <UserList/>
  </div>
</template>
<script>
import AddUser from "../components/users/AddUserForm.vue"
import UserList from "../components/users/UserList.vue"
export default ({
 components: {
   AddUser,
   UserList,
 }
})
</script>
