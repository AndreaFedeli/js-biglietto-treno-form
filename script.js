document.getElementById("genera").addEventListener("click", function () {
  var dati = document.getElementById("anag").value;
  document.getElementById("demo").innerHTML = dati;
  var carrozza = Math.floor(Math.random() * 10);
  document.getElementById("carrozza").innerHTML = carrozza;
  var codice = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
  document.getElementById("codice").innerHTML=codice;
}
);
