import "../styles/pingo.css"

window.onscroll = function () {
  scrollRotate()
}

function scrollRotate() {
  document.getElementById("ridePingo")
  if (window.pageYOffset < 300) {
    ridePingo.style.transform =
      "translateY(" + window.pageYOffset * 0.28 + "px)"
  }
} //funcao que anima o celular
