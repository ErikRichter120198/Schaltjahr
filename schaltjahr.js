function checkSchaltjahr() {
    var year = document.getElementById("yearInput").value;
    var result = document.getElementById("result");
  
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
      result.textContent = year + " ist ein Schaltjahr.";
    } else {
      result.textContent = year + " ist kein Schaltjahr.";
    }
  }
  