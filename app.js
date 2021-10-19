const express = require("express");
const body_parser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const app = express();
const port = 3000;

const texts = [{
        date: "16.10.21",
        text: 'Ein höherer Mindestlohn, umfassende Investitionen, aber keine Steuererhöhungen. Kritiker rügen am Ergebnispapier der Ampel-Sondierungen besonders, dass die Frage der Finanzierung offen bleibe. Doch es gibt auch Lob - selbst aus der Union.Die Grundsatzvereinbarungen von SPD, Grünen und FDP für die Aufnahme von Koalitionsgesprächen haben - erwartungsgemäß - unterschiedliche Reaktionen hervorgerufen. Kritik gibt es besonders bei der Frage, wie die Vorhaben finanziert werden sollen.So sagte CDU-Generalsekretär Paul Ziemiak der "Rheinischen Post", das Ergebnis beinhalte mehr Fragen als Antworten. "Es wurden einfach viele Vorschläge zusammengewürfelt - ohne konkret zu sagen, was das für die Menschen bedeutet. Insbesondere die Frage der Finanzierbarkeit bleibt offen. Ähnlich äußerte sich Ver.di-Chef Frank Werneke in derselben Zeitung: Wenn es um die notwendigen Finanzen gehe, komme das Sondierungspapier "leider ausgesprochen blutleer daher". "Für die notwendigen Zukunftsinvestitionen in den Klimaschutz werden keine belastbaren Pläne aufgezeigt, nicht mal das Finanzierungsvolumen wird beschrieben. Wenn demnächst die Koalitionsverhandlungen beginnen, muss hier dringend nachgearbeitet werden."Kritisch zu den finanzpolitischen Aspekten des Papiers äußerte sich auch Jessica Rosenthal, Bundesvorsitzende der Jusos - der Jugendorganisation der SPD. "Was wir nicht verstehen können, ist, wie die Investitionen am Ende bezahlt werden sollen und warum die Umverteilungsaspekte, die für uns wichtig sind, dort nicht vorkommen", sagte sie dem Nachrichtensender Phoenix. Lob von Merz und LaschetÜberraschend positiv äußerte sich hingegen der CDU-Politiker Friedrich Merz: "Sie haben, wie ich finde, ein beachtliches Papier vorgelegt", sagte Merz dem Redaktionsnetzwerk Deutschland. "Das ist ein Anlass zum Respekt und zur kritischen Selbstüberprüfung: Das hätten wir auch haben können."Auch der CDU-Vorsitzende Armin Laschet zollte den Vereinbarungen Respekt: "Das Papier, das da vorgelegt wurde, ist in Ordnung", sagte Laschet beim Deutschlandtag der Jungen Union in Münster. In dem Sondierungspapier seien "viele gute Sachen drin". "Da hätten wir manches mitmachen können."BDA: Höherer Mindestlohn "brandgefährlich"Bei aller Kritik an den Finanzen - auch Ver.di-Chef Werneke sieht positive Aspekte: "Gut Ist: Zwölf Euro Mindestlohn kommen, das Rentenniveau bleibt stabil - dieses bei einer Absage an eine Erhöhung des Renteneintrittsalters, bessere Bedingungen in der Pflege, eine Offensive im gemeinnützigen Wohnungsbau", sagte er der "Rheinischen Post".Dass SPD und Grüne sich beim Mindestlohn durchsetzen konnten, stößt wiederum bei der Bundesvereinigung der Deutschen Arbeitgeberverbände (BDA) auf Ablehnung. "Dass dieses neue Ampel-Bündnis die Mindestlohnkommission aushebeln will, ist indiskutabel. Das ist ein schwerer Eingriff in die Tarifautonomie", sagte Arbeitgeberpräsident Rainer Dulger den Zeitungen der Funke Mediengruppe. Für die Unternehmen wäre ein Mindestlohn von 12 Euro "brandgefährlich".'
    },
    {
        date: "15.10.21",
        text: "Bitte schreib mich ab"
    }
]

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(body_parser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/texts/:text", function(req, res) {
    let param = req.params.text;
    texts.forEach(function(text) {
        if (_.lowerCase(text.date) == _.lowerCase(param)) {
            res.render("text", { text: text });
        }
    });
});

app.listen(port, function() {
    console.log("Server running on Localhost 3000...");
});