function message(){
  alert("ora inserisci uno alla volta i numeri che hai visto");
}
setTimeout(inserimento, 3000);


function numero_random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

var numeroalert = [];

for (var i = 0; i < 5; i++) {
  var numero = numero_random(0,9);
  numeroalert.push(numero);
}

alert("ricorda questi numeri " + numeroalert);

var numero_utente = 0;
contatore = 0;
function inserimento() {
  for (var i=0; i < 5 ; i++){
    var numero_utente = prompt('Inserisci un numero');
    if (numero_utente == numeroalert[i]){
      contatore += 1;
    }
  }
  document.writeln("hai indovinato " + contatore + "numeri");
}
