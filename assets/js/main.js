var welcome;
welcome = 'Beventuo in Boolean Trains!';
alert(welcome);


// Il programma dovrà chiedere all'utente il numero di chilometri
// che vuole percorrere e l'età del passeggero.
// ----------------------------------------------------
var userKM = prompt("Inserisci i km da percorrere:");
var userAge = prompt ("Inserisci la tua età:");

// Sulla base di queste informazioni dovrà calcolare il
// prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
// --------------------------------------------------------

var ticketPrice = userKM * 0.21;
var discount20 = (ticketPrice / 100) * 20;
var discount40 = (ticketPrice / 100) * 40;



// Arrotondamento prezzo
function roundTo(value, places){
     var power = Math.pow(10, places);
     return Math.round(value * power) / power;
 }


if (isNaN(userKM) || isNaN(userAge)) {
    alert("Devi inserire un numero!");
} else if (userAge < 18){
  document.getElementById("price").innerHTML = roundTo((ticketPrice - discount20), 2);
} else if (userAge > 65){
  document.getElementById("price").innerHTML = roundTo((ticketPrice - discount40), 2);
} else{
  document.getElementById("price").innerHTML = roundTo(ticketPrice, 2);
}
