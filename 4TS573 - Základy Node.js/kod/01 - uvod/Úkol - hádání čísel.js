/// Vygeneruje hodnotu mezi 1 a 100.
function generateRandomValue() {
    return Math.round(Math.random() * 100 + 1);
}

// Proměnná drží informaci o tom, jestli hráč chce pokračovat ve hře.
let play = true;
while(play) {
    // Počítač si myslí náhodné číslo
    let random = generateRandomValue();

    // Uživatelský tip
    let guess = "";

    do {
        // Pokud uživatelský tip není prázdný, porovná se s hodnotou, co si myslí počítač. Ať můžeme uživateli dát info
        // jak se blíží.
        if (guess != "") {
            guess = prompt(`Your guess was too ${guess < random ? "small" : "big"}.` + " " + "Your guess: ");
        } else {
            // Tento vstup se používá na začátku hry.
            guess = prompt("I am thinking of number between 1 and 100. What is your guess? Enter q to quit:");
        }

        // Ukončení hry
        if (guess == "q") {
            play = false;
            break;
        }

        // Uživatel uhádl, na co myslel počítač.
        if (guess == random) {
            alert(`You guessed it right. It was ${random}. Starting new game.`);
            guess = "";
        }
    } while (guess != random);
}