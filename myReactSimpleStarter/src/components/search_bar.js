import React, { Component }  from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    }
}

export default SearchBar;
//event nie jest konieczny może być e lub coś innego

// import React from 'react';
//
// const Searchbar = () => {
//     return <input />;
// };
// onInputChange(event){
//console.log(even.target.value);
//}
// export default Searchbar;

//ten komponent musi spełniać bardziej złożoną, "elastyczną rolę" stąd konieczność zastosowania klasy ES6


var czlowiek = {
    wiek: 50,
    plec: facet,
    wzrost: 175
}
function Animal(givenAge, doSomething){
    this.age = givenAge;
    this.action = function(){
        console.log(doSomething)
    }
}
