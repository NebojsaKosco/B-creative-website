window.addEventListener('load', function() {
    var definiranaVrijednost = 355; // Definirajte željenu vrijednost
    
    var broj = 0;
    var interval = setInterval(function() {
      broj++;
      document.getElementById('two').innerText = broj;
      if (broj >= definiranaVrijednost) {
        clearInterval(interval);
      }
    }, 10); // Povećajte broj svake sekunde
  });
  window.addEventListener('load', function() {
    var definiranaVrijednost = 256; // Definirajte željenu vrijednost
    
    var broj = 0;
    var interval = setInterval(function() {
      broj++;
      document.getElementById('one_number').innerText = broj;
      if (broj >= definiranaVrijednost) {
        clearInterval(interval);
      }
    }, 10); // Povećajte broj svake sekunde
  });
  window.addEventListener('load', function() {
    var definiranaVrijednost = 256; // Definirajte željenu vrijednost
    
    var broj = 0;
    var interval = setInterval(function() {
      broj++;
      document.getElementById('one_number').innerText = broj;
      if (broj >= definiranaVrijednost) {
        clearInterval(interval);
      }
    }, 10); // Povećajte broj svake sekunde
  });