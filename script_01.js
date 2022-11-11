"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktiionsrumpf (body | callee
// Funktionsdeklraration)
function test()
{
    console.log("Hallo Sabine!");
}

/****** Funktionen 02a ******/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeName();
// console.log(firstname);   // Fehler: Scope!

function ausgabeName()
{ let firstName = "Sabine"; // what happens in Vegas, stays in Vegas
    console.log("Hallo " + firstName +"!");
}

