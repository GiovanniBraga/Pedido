function sim () {
  alert("Você aceitou namorar comigo 💖")
}

function nao () {
  alert("Você errou, retorne e escolha a opção certa!!!!!!!")
}

function desvia (t) {
  console.log("Opa desviei...")
  let btn = t;
  btn.style.position = "absolute"
  btn.style.bottom = geraPosicao(10, 80)
  btn.style.left = geraPosicao(10, 90)
}

function geraPosicao(min, max) {
  return (Math.random() * (max - min) + min) + "%";
}

geraPosicao(0, 100)

