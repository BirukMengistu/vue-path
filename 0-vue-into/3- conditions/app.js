console.log('hello , vue');

//event lisners on Vue
const app = Vue.createApp({
    templete : '<h3><p>Vue dancing 2</p></h3>',
    data(){
       return {
        showBooks: true,
        title : 'the new empier',
        auther : 'Bod Dev',
        age : 45
       }
      },
       methods: {
    
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        }
       }
    
});


app.mount('#app')