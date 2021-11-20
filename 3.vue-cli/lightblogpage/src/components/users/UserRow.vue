<template>
     <tr class="table-active">
      <th scope="row">{{index + 1}}</th>
      <td>{{user.name}}</td>
      <td>Active</td>
      <td><button><i class="fa fa-times"></i></button></td>
    </tr>
</template>

<script>
export default {
props:['user','index']
}
</script>

<style>
.fa-times{
    border: 0 none transparent;
    outline: transparent;
    background: transparent;
    color:red;
}
</style>