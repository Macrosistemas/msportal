/*MODAL PERFIL*/
document.getElementById("openModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "block";
  });
  
  document.getElementById("closeModal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal")) {
      document.getElementById("modal").style.display = "none";
    }
  });
  /*MODAL PERFIL FIN*/
  
  
  /*MODAL art*/
  document.getElementById("openModal-art").addEventListener("click", function() {
    document.getElementById("modal-art").style.display = "block";
  });
  
  document.getElementById("closeModal-art").addEventListener("click", function() {
    document.getElementById("modal-art").style.display = "none";
  });
  
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("modal-art")) {
      document.getElementById("modal-art").style.display = "none";
    }
  });
  
  /*MODAL art fin*/