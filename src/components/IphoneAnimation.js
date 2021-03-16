import "../styles/pingo.css"

window.onscroll = function () {
  scrollRotate()
}

function scrollRotate() {
  let ridepingo = document.getElementById("ridepingo")
  {
    ridepingo.style.transform =
      "translateY(" + window.pageYOffset * 0.28 + "px)"
  }
}
