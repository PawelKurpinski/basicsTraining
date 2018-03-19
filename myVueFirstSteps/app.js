
new Vue({
  el:'#vue-app',
  data:{
    name: 'Paweł',
    job: 'Developer',
    website: 'http://www.thenetninja.co.uk',
    website2: 'http://www.mojeauto.pl',
    myTag:'<a href="http://www.thenetninja.co.uk">my link</a>',
    myAge: 38,
    myPage:'<a href="http://www.mojeauto.pl" target="_blank">moje auto</a>',
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
    },
    go:function(){
      alert("ale jazda! Ten "+this.name+" to niezły gagatek!");
    },

  }
});

