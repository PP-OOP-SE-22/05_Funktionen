"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body | callee
// // Funktionsdeklraration)
// function test()
// {
//     console.log("Hallo Sabine!");
// }

/****** Funktionen 02a ******/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeName();
// console.log(firstname);   // Fehler: Scope!

// { let firstName = "Sabine"; // what happens in Vegas, stays in Vegas
//     console.log("Hallo " + firstName +"!");
// }

    // function ausgabeNameParam(firstName) // Parameter
    // {
    // console.log("Hello " + firstName +"!");
    // }
    // ausgabeNameParam("World!"); // Argument
    // Argumente sind Daten für Parameter


    /********* Funktionen 02c ********/
    // 2c. Mehrere Parameter

    // function ausgabeNameParam(firstName, familyName) // Parameter
    // {
    // console.log("Hello " + firstName + " " + familyName + "!"); //log=call
    // }
    // // ausgabeNameParam("Michael", "Müller");
    // ausgabeNameParam(prompt("Vorname?"),prompt("Nachname?"));

    // Funktionen können auch mehrere Parameter haben z.B
    // (firstname, familyName, Age...)


/*********Funktionen 03a**********/
// 03a. Vorbereitung
// Postulat: one function = one job (uncle bob)
// SRP single responsibility principle


    // ausgabeNameParam2("Michael", "Müller"); // Argument


    // function ausgabeNameParam2(firstName, familyName) // Parameter

//         // Funktionalität: string composing
   { const gap = " ";
    const outputStr = "Hello " + firstName + gap + familyName + "!";
return outputStr;
console.log("Funktion beendet")
   }
//         // Funtionalittät: data output
   
/********* Funktionen 03b ********/
// Trennen der Funktionalitäten | return

// 2. Funktionalität: string output
// output("hi");

function output(outputData)
{
    console.log(outputData);
}

output(getString("Maxine","Mütze"));
function getString(firstName, familyName)
console.log(outputData);
