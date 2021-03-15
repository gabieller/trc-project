import "../styles/pingo.css"

window.onscroll = function () {
  scrollRotate()
}
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
} //funcao que verifica se o dispositivo eh mobile

function scrollRotate() {
  let ridepingo = document.getElementById("ridepingo")
  if (!isMobile() && window.pageYOffset < 300) {
    ridepingo.style.transform =
      "translateY(" + window.pageYOffset * 0.28 + "px)"
  }
} //funcao que anima o celular
