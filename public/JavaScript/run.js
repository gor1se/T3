let originalText = document.getElementById("original-text").innerText;
document.getElementById("original-text").style.display = "none";
let started = false;

let part_1 = document.getElementById("part1-array");
let part_2 = document.getElementById("part2-array");
let part_3 = document.getElementById("part3-array");

originalText = originalText.split(' ').join('_');
originalText.replace(/ /g, "_");
part_1.innerText = "";
part_2.innerText = originalText.charAt(0);
part_3.innerText = originalText.substring(1);

originalText = "";

let hits = 0;
let fails = 0;
let hits_item = document.getElementById("dashboard-item-hits-content");
let fails_item = document.getElementById("dashboard-item-fails-content");
let time = 0;
let time_item = document.getElementById("dashboard-item-time-content");
time_item.innerText = "Press space to start!";

// Timer
// Sobald started aktiviert wird muss die hundreth Methode alle 10 MS aufgerufen werden.
// Dies sollte in einer externen Funktion gestartet werden. Nicht im Eventlistener
// Sonst könnte die dauerschleife das Programm schädigen

const timer = {
    hundreth: 0,
    seconds: 0,
    minutes: 0
}

const hundreth = function(timer) {
    timer.hundreth++;
    if (timer.hundreth >= 100) {
        timer.seconds++;
        timer.hundreth = 0;
    }
    if (timer.seconds >= 60) {
        timer.minutes++;
        timer.seconds = 0;
    }
    print_timer(timer);
}

const print_timer = function(timer) {
    let str = "";
    if (timer.minutes <= 10) {
        str += "0"
    }
    str += timer.minutes + ":";
    if (timer.seconds <= 10) {
        str += "0"
    }
    str += timer.seconds + ":";
    if (timer.hundreth <= 10) {
        str += "0"
    }
    str += timer.hundreth;
    console.log(str);
}

// Main Keydetection

document.body.addEventListener("keydown", function(evt) {
    // Wenn der eingegebene Buchstabe kein Enter, Space oder shift ist
    if (!started) {
        if (evt.keyCode === 32) {
            time_item.innerText = 1;
            // let doc1 = document.getElementsByClassName("dashboard-item-hits");
            // doc1.classList.remove("hidden");
            started = true;
        }
    } else if (started) {
        if (evt.keyCode !== 13 && evt.keyCode !== 32 && evt.keyCode !== 16 && evt.keyCode !== 8 || (evt.keyCode == 189 && evt.key != "_")) { // Und gleichzeitig ein Unterstrich
            // Hier auf richtigkeit überprüfen
            if (evt.key === part_2.innerText) {
                part_1.innerText += evt.key;
                part_2.innerText = part_3.innerText.charAt(0);
                //Hier geschieht der Fehler, entweder CharAt streicht das folgende Leerzeichen oder Substring
                part_3.innerText = part_3.innerText.substring(1);
                hits++;
                hits_item.innerText = hits;
                // Substring funktioniert. Gibt den gesamten String bis auf das erste Zeichen zurück.
            } else {
                hits++;
                hits_item.innerText = hits;
                fails++;
                fails_item.innerText = fails;
            }
        } else if (evt.keyCode === 32) {
            if ("_" === part_2.innerText) {
                part_1.innerText += part_2.innerText;
                part_2.innerText = part_3.innerText.charAt(0);
                part_3.innerText = part_3.innerText.substring(1);
            }
        } else if (evt.keyCode === 8) {
            // Hier wird später die Fehlerbehandlung durchgeführt
        }

    } // testdiv.innerText = w_text;
    // Starte erst sobald space gedrückt wurde
    // if (true) { //evt.keyCode == 32 && started == false
    //     started = true;
    //     text_array = text.innerText.split("");
    //     document.getElementById("original-text").style.display = "none";
    //     part1_array = [];
    //     part2_array = text_array[0];
    //     part3_array = text_array;
    //     // Lösche erstes Element von part3
    //     part3_array.shift();
    // }
    // text_array.forEach(function(item) {
    //     input_key = evt.keyCode;
    //     expected_key = part2_array;

    //     // Hier wird später die Eingabe überprüft, hier wird einfach true zurückgegeben
    //     if (input_key == expected_key.charCodeAt()) {
    //         part1_array.push(part2_array[0]);
    //         part2_array = part3_array[0];
    //         part3_array.shift();
    //         part_1.innerText = part1_array.join("");
    //         part_2.innerText = part2_array; // Da nur ein einziges Element kein join nötig
    //         part_3.innerText = part3_array.join("");
    //     } else {
    //         // Code wenn die eingabe falsch war
    //     }

    // });

    // Erster Buchstabe dunkel Grau


    // Erledigte Buchstaben immer Schwarz


    // alert(text_array[0]);
    // Durchlaufe das gesamte Array

    // Wenn Input richtig

    // Buchstabe wird Schwarz
    // Folgebuchstabe wird Dunkelgrau
    // Warte auf nächsten Input

    // Wenn Input falsch

    // Buchstabe wird Rot
    // Warte auf Backspace
    // Warte auf nächsten Input
});

// Backspace = keyCode 8
// Space = keyCode 32
// https://keycode.info/