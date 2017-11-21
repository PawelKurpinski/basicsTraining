import React from 'react';
import ReactDom from 'react-dom';

import Searchbar from './components/search_bar';
const API_KEY = 'AIzaSyApPuQdAGdhvSHLhzVg-5WcHN49uczAEHs';

//Create a new component. This component should produce some HTML
const App = () => {
    return (
        <div>
            <Searchbar/>
        </div>
    );
}
//function() is equal    () => This is ES6
// in practise I do not need () here but it looks better

//Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
//<App /> is an instance of an component with we want to rende
