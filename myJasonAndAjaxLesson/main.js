// przeglądarka ma wbudowane narzędzie XMLHttpRequest pozwala na połączenie z url'em jaki podamy oraz na odebranie lub przesłanie danych; Teraz tworzymy instancję tego narżędzia
var pageCounter = 1;
var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+ pageCounter +'.json');
    /* metoda get */
    ourRequest.onload = function(){
        // onload mówi nam co mamy zrobić z pobranymi danymi; W ciele można zrobić co chcemy np. wyświetlić pobraną zawartość jako czytelny obiekt
        // console.log(ourRequest.responseText);
        var data = JSON.parse(ourRequest.responseText);
        renderHTML(data);
        // ta linijka nie może działać bez zapisanego powyżej JSON.parse bo bez niego przeglądarka nie wie że to będzie obiekt a nie duży string
    };

    ourRequest.send();
    pageCounter ++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data){
    var  htmlString= "";

    for (i = 0; i < data.length; i++) {
         htmlString+= "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                 htmlString+= data[i].foods.likes[ii];
            } else {
                 htmlString+= " and " + data[i].foods.likes[ii];
            }
        }
         htmlString += ' and dislikes ';

        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
             htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString+= " and " + data[i].foods.dislikes[ii];
             }
           }
            
           htmlString+= '.</p>';
    } 
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}

// new pure JS options

var text = document.getElementById("mainText");
var array = [2,3,6,7,8];

for (let i = 0; i < array.length; i++) {
   console.log(array[i]);
};

var seach = document.getElementById("main").getElementsByTagName("li");

for (let i = 0; i < seach.length; i++) {
    const element = seach[i].style.color = "blue";
    search [i].addEventListener("click", activateItem)
}

function activateItem() {
    text.innerHTML = 
}
