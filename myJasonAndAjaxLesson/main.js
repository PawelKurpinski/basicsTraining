// przeglądarka ma wbudowane narzędzie XMLHttpRequest pozwala na połączenie z url'em jaki podamy oraz na odebranie lub przesłanie danych; Teraz tworzymy instancję tego narżędzia

var ouRequest = new XMLHttpRequest();
ouRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');
