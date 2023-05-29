const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuItems = document.querySelectorAll(".submenu-item");
const subMenuTitles = document.querySelectorAll(".submenu .menu-title");

sidebarClose.addEventListener("click", () => sidebar.classList.toggle("close"));

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-submenu");
    menuItems.forEach((item2, index2) => {
      if (index !== index2) {
        item2.classList.remove("show-submenu");
      }
    });
  });
});

subMenuTitles.forEach((title) => {
  title.addEventListener("click", () => {
    menu.classList.remove("submenu-active");
  });
});

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