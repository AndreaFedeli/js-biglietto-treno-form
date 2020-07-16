document.getElementById("genera").addEventListener("click", function () {
  var dati = document.getElementById("anag").value;
  document.getElementById("demo").innerHTML = dati;
  document.getElementById("carrozza").innerHTML = numRandom(1,10);
}
);
