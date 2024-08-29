function voltatopo() {
    window.scrollTo(0, 0);
}

var nossa
var mamar
var ent
var yes

function preload() {
  nossa = loadSound("nossa.mp3")
  mamar = loadSound("mamar.mp3")
  ent = loadSound("Ent.mp3")
  yes = loadSound("Yesbaby.mp3")
}

function setup() {
  window.alert("Cuidado, o site a seguir possui frases como vou mamar, certifique-se de estar em lugares privados ou estar conectado a um fone de ouvido")
  
  const tocaumButton = document.getElementById("tocaum");
  if (tocaumButton) {
    tocaumButton.addEventListener('click', function() {
      nossa.play();
    });
  }

  const tocadoisButtons = document.querySelectorAll(".tocadois");
  tocadoisButtons.forEach(button => {
    button.addEventListener('click', function() {
      mamar.play();
    });
  });
  
  const tocatresButtons = document.querySelectorAll(".tocatres");
  tocatresButtons.forEach(button => {
    button.addEventListener('click', function() {
      ent.play();
    });
  });
  
  const tocaquatroButtons = document.querySelectorAll(".tocaquatro");
  tocaquatroButtons.forEach(button => {
    button.addEventListener('click', function() {
      yes.play();
    });
  });
}

const avança = document.querySelectorAll(".prx");

avança.forEach(button => {
  button.addEventListener('click', function(){
  const atual = document.querySelector('.ativo');
const proximoPasso = 'p' + this.getAttribute('data-proximo');
atual.classList.remove('ativo');
document.getElementById(proximoPasso).classList.add('ativo');
    voltatopo();
})
})

