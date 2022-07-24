
var words = ["катастрофа", "передача", "программа", "оладушек", "валидол", "астронафт", "барашек", "простокваша", "корабль", "глаукома", "олимпиада",];
var word = words [Math.floor (Math.random () * words.length)];
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray [i] = "_";
}

var remainingLetters = word.length;
while (remainingLetters > 0) {
        alert (answerArray.join(""));
        var guess = prompt ("Угадывай букву или вали нахрен отсюда!");
        if (guess === null) {
            break;
        } else if (guess.length !== 1) {
            alert ("Только одну букву, мать твою!!!"); 
        } else {
            for (var j = 0; j < word.length; j++) {
                if (word [j] === guess) {
                    answerArray [j] = guess;
                    remainingLetters--;
                }
            }
        }
}
alert (answerArray.join ("") );
alert ("Отлично! Было загадано слово " + word);