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
    var definiranaVrijednost1 = 355; // Definirajte željenu vrijednost
    
    var broj2 = 0;
    var interval2 = setInterval(function() {
      broj2++;
      document.getElementById('two_number').innerText = broj2;
      if (broj2 >= definiranaVrijednost1) {
        clearInterval(interval2);
      }
    }, 10); // Povećajte broj svake sekunde
  });

  window.addEventListener('load', function() {
    var definiranaVrijednost2 = 825; // Definirajte željenu vrijednost
    
    var broj3 = 0;
    var interval3 = setInterval(function() {
        broj3++;
      document.getElementById('three_number').innerText = broj3;
      if (broj3 >= definiranaVrijednost2) {
        clearInterval(interval3);
      }
    }, 10); // Povećajte broj svake sekunde
  });

  window.addEventListener('load', function() {
    var definiranaVrijednost3 = 75; // Definirajte željenu vrijednost
    
    
    var broj3 = 0;
    var interval3 = setInterval(function() {
      broj3++;
      document.getElementById('four_number').innerText = broj3;
      if (broj3 >= definiranaVrijednost3) {
        clearInterval(interval3);
      }
    }, 10); // Povećajte broj svake sekunde
  });

  const images = document.querySelectorAll('.image');
  const filters = document.querySelectorAll('button[name="filter"]');
  
  // Funkcija za filtriranje i sortiranje slika
  const filterImages = (filter) => {
      images.forEach(image => {
          if (filter === 'all' || image.getAttribute('data-category') === filter) {
              image.classList.remove('hide');
          } else {
              image.classList.add('hide');
          }
      });
  };

  // Dodaj event listener za svaki button filter
  filters.forEach(filter => {
      filter.addEventListener('click', () => {
          filterImages(filter.value);
      });
  });

  function two() {
    for (i = 0; i < elements.length; i++) {
     
      elements[i].style.flex = "50%";
    }}