function Oblicz() {
  var wymiarx = wymiar1.value;
  var wymiary = wymiar2.value;
  
  var powierzchnia = Math.round(10*(wymiarx*2+wymiary*2)*2.7)/10;
  var koszt = 8*powierzchnia;
  
  document.getElementById("wynik1_js").innerHTML = "Powierzchnia całkowita ścian: " +powierzchnia + "m2";
  document.getElementById("wynik2_js").innerHTML = "Koszt malowania: " +koszt + " zł";
  }