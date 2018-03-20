
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
    x: 0,
    y: 0
  },
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    },
    add: function (inc) { /* dodaję inc bo chę wywołać tę funkcję z atrybutem 10 lub 1 */
      // this.myAge++;
      this.myAge += inc; /* ciekawa zmaiana związana z modem powyżej */
    },
    subtract: function(dec) { /* dodaję dec bo chę wywołać tę funkcję z atrybutem 10 lub 1 */
      // this.myAge--;
      this.myAge -= dec;
    },
    go:function(){
      alert("ale jazda! Ten "+this.name+" to niezły gagatek!");
    },
    updateXY:function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;                                                               
    },
  }
});

