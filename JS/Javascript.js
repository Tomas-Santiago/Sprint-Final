function openDate(evt, date) {
    // Declaro las variables
    var i, tabcontent, tablinks;
  
    // Llamo los elementos con  class="tabcontent" y los escondo
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Llamo los elementos con class="tablinks" y elimino la clase activa
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Muestra la pestaña actual y agrega la clase active al boton que abrio la pestaña
    document.getElementById(date).style.display = "block";
    evt.currentTarget.className += " active";
  }