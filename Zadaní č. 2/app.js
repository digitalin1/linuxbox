/* Zadání 2: 
Napište funkci, která po uplynutí stanoveného času napíše součin dvou čísel. Využijte přitom tyto vlastnosti JavaScriptu:

Promise
Arrow functions
Template literals */

function nasobeni(x,y, time) {
  var x = document.getElementById("x").value;
  var y = document.getElementById("y").value;
  var time = document.getElementById("z").value;
  var vysledek = 0;
  var hotovo = "Výsledkem je";
  
  new Promise(function(resolve,reject) {
    setTimeout(function() {
      if(x,y,time <= 0 || isNaN(x,y, time)) {
        reject("error")
      } else {
        result = x*y;
        if(time <= 0 || !isFinite(time)) {
          reject(result);
        } else {
          resolve(result);}
      }
    }, (time*1000))
  }) .then((vypis) => {
    vysledek = vypis; document.getElementById("vypocet").innerHTML = 
    ` ${ hotovo } ${ vypis } po ${ time } sekundách.`
    vysledek;
  })
    .catch((vypis) => {
    vysledek = vypis; document.getElementById("vypocet").innerHTML = 
    `Špatný formát. V zadání musí být čísla! Čas musí být kladná hodnota!`
    vysledek;
  });
}