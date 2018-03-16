
new Vue({
  el:'#vue-app',
  data:{
    name: 'Paweł',
    job: 'Developer',
    website: 'http://www.thenetninja.co.uk'
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
