console.log('hello , vue');
const app = Vue.createApp({
    templete : '<h3><p>Vue dancing 2</p></h3>',
    data(){
       return {
        title : 'the new empier',
        auther : 'Bod Dev',
        age : 45
       } ;
    }
});


app.mount('#app')