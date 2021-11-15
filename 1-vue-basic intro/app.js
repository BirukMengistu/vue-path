const app = Vue.createApp({
  
    data(){
      return{
        firstName: 'John',
        lastName: 'John',
        email: 'John@email.com',
      }
    }
})

app.mount('#app')