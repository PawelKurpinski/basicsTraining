
new Vue({
  el:'#vue-app',
  data:{
    name: 'Paweł',
    job: 'Developer',
    website: 'http://www.thenetninja.co.uk',
    website2: 'http://www.mojeauto.pl',
    mytag:"<a href='http://www.thenetninja.co.uk'>my Second link</a>"
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
