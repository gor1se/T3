let text = document.getElementById("input-text");
let started = false;

document.body.addEventListener("keydown", function(evt) {
    // Starte erst sobald space gedrückt wurde
    if (evt.keyCode == 32 && started == false) {
        started = true;
        alert("Los gehts!");
        let text_array = text.innerText.split("");
        let part_1 = document.getElementById("part1-array");
        let part_2 = document.getElementById("part2-array");
        let part1_array = ["a", "b", "c"];
        let part2_array = ["c", "d"];
        part2_array = text;
        text_array.forEach(function(item) {
            document.getElementById("original-text").style.display = "none";
            part_1.innerText = part1_array.join("");
            alert("HI")
            part_2.innerText = part2_array.join("");
            alert("HI2")
        });
    }
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