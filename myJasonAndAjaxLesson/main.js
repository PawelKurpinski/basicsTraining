// przeglądarka ma wbudowane narzędzie XMLHttpRequest pozwala na połączenie z url'em jaki podamy oraz na odebranie lub przesłanie danych; Teraz tworzymy instancję tego narżędzia


var myButton = document.getElementById('btn');
myButton.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json'); <!-- metoda get -->
    ourRequest.onload = function(){
        // onload mówi nam co mamy zrobić z pobranymi danymi; W ciele można zrobić co chcemy np. wyświetlić pobraną zawartość jako czytelny obiekt
        // console.log(ourRequest.responseText);
        var ourData = JSON.parse(ourRequest.responseText);
        console.log(ourData[0]);
        // ta linijka nie może działać bez zapisanego powyżej JSON.parse bo bez niego przeglądarka nie wie że to będzie obiekt a nie duży string
    };
    ourRequest.send();

    // var myDiv = document.getElementById('animal-info').innerHTML = (ourData);
})
