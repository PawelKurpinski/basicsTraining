
new Vue({
  el:'#vue-app',
  data:{
    name: 'Paweł',
    job: 'Developer'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});

