
new Vue({
  el:'#vue-app',
  data:{
    name: 'Paweł',
    job: 'Developer',
    website: 'http://www.thenetninja.co.uk',
    website2: 'http://www.mojeauto.pl',
    myTag:'<a href="http://www.thenetninja.co.uk">my link</a>',
    myAge: 38,
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    },
    add: function () {
      this.myAge++;
    },
    subtract: function () {
      this.myAge--;
    }
  }
});


new Vew({
  data:{

  },
  methods:{

  },
})