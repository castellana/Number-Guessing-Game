// Lass uns noch einmal ein Spiel machen. Ein Spiel, bei dem der Spieler eine Zahl zwischen 1 und 100 erraten soll. 
// Der Spieler kann auch auswählen, wie viele Versuche er braucht, um die richtige Zahl zu finden.

// Verwende eine schöne Schrift, schöne Farben und versuche es schön zu Designen.

let btn = document.getElementById('button')
let output = document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]

button.addEventListener('click', function() {
    let input = document.getElementById('userInput').value;

    if (input == number) {
        output.innerHTML = `You guessed right, your number was ${number}`
    } else if (input < number) {
        output.innerHTML = `You guessed too low`
    };
    if (input > number ){
        output.innerHTML = `You guessed too high`
    }
})