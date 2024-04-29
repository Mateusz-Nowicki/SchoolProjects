function oblicze() {
  var wymiarx = wymiar1.value;
  var wymiary = wymiar2.value;
  
  var powierzchnia = Math.round(10*(wymiarx*2+wymiary*2)*2.7)/10;
  var koszt = 8*powierzchnia;
  
  document.getElementById("ak2").innerHTML = "Powierzchnai całkowita ścian:" +powierzchnia + "m2";
  document.getElementById("ak3").innerHTML = "Koszt" +koszt + " zł";
  }