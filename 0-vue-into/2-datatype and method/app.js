console.log('hello , vue');

//event lisners on Vue
const app = Vue.createApp({
    templete : '<h3><p>Vue dancing 2</p></h3>',
    data(){
       return {
        title : 'the new empier',
        auther : 'Bod Dev',
        age : 45
       }
      },
       methods: {
           changeTitle(){
               this.title = 'My new Title' ;
           }
           ,


           changeTitle(title){
            this.title = title 
        }
       }
    
});


app.mount('#app')