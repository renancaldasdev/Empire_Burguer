const menuMobile = document.querySelector(".menu-mobile");

function abrirMenu() {
  document.body.style.display = "none";
}

menuMobile.addEventListener("click", abrirMenu);
