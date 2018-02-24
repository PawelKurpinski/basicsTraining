// przeglądarka ma wbudowane narzędzie XMLHttpRequest pozwala na połączenie z url'em jaki podamy oraz na odebranie lub przesłanie danych; Teraz tworzymy instancję tego narżędzia
var pageCounter = 1;
var foodCounter = 0;
var myDiv = document.getElementById('animal-info');
var myButton = document.getElementById('btn');

myButton.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    /* metoda get */
    ourRequest.onload = function(){
        // onload mówi nam co mamy zrobić z pobranymi danymi; W ciele można zrobić co chcemy np. wyświetlić pobraną zawartość jako czytelny obiekt
        // console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
        // ta linijka nie może działać bez zapisanego powyżej JSON.parse bo bez niego przeglądarka nie wie że to będzie obiekt a nie duży string
    };
    ourRequest.send();
    pageCounter ++;
    if (pageCounter > 3) {
        myButton.classList.add("hide-me");
    }
});

function renderHTML(ourData){
    var myVariable = "";

    for (i = 0; i < ourData.length; i++) {
        myVariable += "<p>" + ourData[i].name + " is a " + ourData[i].species + " that it likes to eat ";

        for (ii = 0; ii < ourData[i].foods.likes.length; ii++) {
            if (ii == 0) {
                myVariable += ourData[i].foods.likes[ii];
            } else {
                myVariable += " and " + ourData[i].foods.likes[ii];
            }
        }
        myVariable =+ ' and dislikes ';

        for (ii = 0; ii < ourData[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
              htmlString += ourData[i].foods.dislikes[ii];
            } else {
              myVariable += " and " + ourData[i].foods.dislikes[ii];
            }
          }
    } 
    myDiv.insertAdjacentHTML('beforeend', myVariable)
}