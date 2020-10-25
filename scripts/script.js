/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

 /*eslint-env browser*/

 /*eslint 'no-console':0*/
 
/*maak var aan. doc.quer die gaat op zoek naar .add in html en css*/
var knop = document.querySelector('.add');

/*maak var aan. doc.quer die gaat op zoek naar .een in html en css*/
 var een = document.querySelector('.een');
 

/*maak functie aan. Hier geef je aan wat je wil dat er gebeurd. toggle geeft de optie van aan en uit (1) */
function zichtbaar(){

    een.classList.toggle("een");

 }

/* Als je erop klikt dan gebeurd er wat je wil. de code hierboven wordt aangeroepen*/

knop.addEventListener("click", zichtbaar);


