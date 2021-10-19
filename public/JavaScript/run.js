let originalText = document.getElementById("original-text").innerText;
document.getElementById("original-text").style.display = "none";
let started = false;

let part_1 = document.getElementById("part1-array");
let part_2 = document.getElementById("part2-array");
let part_3 = document.getElementById("part3-array");

// let testdiv = document.getElementById("testdiv");

part_1.innerText = "";
part_2.innerText = originalText.charAt(0);
part_3.innerText = originalText.substring(1);

let w_text = "";



originalText = "";

document.body.addEventListener("keydown", function(evt) {
    //testdiv.innerText = evt.key;
    // Wenn der eingegebene Buchstabe kein Enter, Space oder shift ist
    if (evt.keyCode !== 13 && evt.keyCode !== 32 && evt.keyCode !== 16 && evt.keyCode !== 8) {
        w_text += evt.key;
        // Hier auf richtigkeit überprüfen
        if (evt.key === part_2.innerText) {
            part_1.innerText += evt.key;
            part_2.innerText = part_3.innerText.charAt(0);
            part_3.innerText = part_3.innerText.substring(1);
        }
    } else if (evt.keyCode === 32) {
        w_text += " ";
    } else if (evt.keyCode === 8) {
        w_text = w_text.slice(0, -1);
    }
    // testdiv.innerText = w_text;
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