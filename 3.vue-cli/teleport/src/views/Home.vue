<template>
  <div class="modal">
     
    <h1>Home</h1>
    <button @click='showModal=true'>show modal</button>
    <Modal v-if="showModal"> 
       <h2>Buy this product now!</h2>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Sequi officia ipsam sapiente.</p>
       <button @click="showModalState">Close</button>
    </Modal>
    
    <Modal v-if="showModal1" > 
      <div class='modal-login'>
       <input type="userName" placeholder="enter Username">
       <input type="email" placeholder="enter your email">
       <button @click="showModalState">Close</button>
      </div>
       
    </Modal>
  </div>
</template>

<script>
// @ is an alias to /src

import Modal from '@/components/Modal.vue'
export default {
  name: 'Home',
  components: {
      Modal
  },
  data() {
    return{
    showModal: false,
    showModal1:false
    }
  },
  methods: {
    showModalState(){
      if(this.showModal)
      {
        this.showModal = !(this.showModal)
        this.showModal1 = !(this.showModal1)
      } 
      else
      {
        this.showModal = !(this.showModal)
        this.showModal1 = !(this.showModal1)
      }
  }
}
}
</script>
<style scoped>
.modal-login{
    display: flex;
    flex-direction: column;
    padding: 2rem 1rem;
    border-radius: 1rem;
    box-shadow: 0 10px 2rem #1111114b, 0 10px 4rem #333333;
}

.modal-login input{
   padding: 1rem;
   margin: 1rem;
}
</style>