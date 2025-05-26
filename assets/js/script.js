const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
    duvida.classList.toggle("ativa");
  });
});

const botao = document.querySelector(".btn-fixed");

window.addEventListener("scroll", function (ev) {
  if (window.scrollY == 0) {
    botao.classList.remove("visible");
  } else {
    botao.classList.add("visible");
  }
});
