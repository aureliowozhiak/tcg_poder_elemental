const cartas = {
  Iara: {
  nome: "Iara",
  ataque: 75,
  defesa: 55,
  img:"iara.png"
  },
  "Elfo": {
  nome: "Elfo",
  ataque: 45,
  defesa: 15,
  img:"elfo.png"
  },
};

//Filtra as informações do monstro escolhido
function escolherMonstro(nomeMonstro) {
  for (let monstro in cartas) {
    if (cartas[monstro].nome === nomeMonstro) {
      return cartas[monstro];
    }
  }
  return null;
}

function escolherMonstroAleatorio() {
  const monstros = Object.values(cartas);
  const indiceAleatorio = Math.floor(Math.random() * monstros.length);
  return monstros[indiceAleatorio];
};

//var nomeMonstro = prompt("Escolha um monstro:");
//
//const monstroEscolhido = escolherMonstro(nomeMonstro);
//document.write("Seu monstro é: ");
//document.write(JSON.stringify(monstroEscolhido)); 
//
//document.write("<br>-------------------------<br>");
//
//const monstroAleatorio = escolherMonstroAleatorio();
//document.write("Monstro do oponente: ");
//document.write(JSON.stringify(monstroAleatorio));
//
//document.write("<br>-------------------------<br>")
//
//
//if(monstroEscolhido.ataque == monstroAleatorio.defesa){
//        document.write("Empate");   
// }else if(monstroEscolhido.ataque > monstroAleatorio.defesa){
//     document.write("Você Ganhou");  
// }else{
//     document.write("Você Perdeu");   
// }


// Populando lista suspensa com os nomes dos monstros
document.querySelector(".home-select").innerHTML = Object.keys(cartas).map((x) => {
  return "<option value=" + x + ">" + x + "</option>";
});



// Função para exibir os valores de ataque e defesa quando um monstro for selecionado
document.querySelector(".home-select").addEventListener("change", (e) => {
  var monstroSelecionado = cartas[e.target.value];
  document.querySelector(".home-nomemonstro").innerHTML = monstroSelecionado.nome;
  document.querySelector(".home-ataque").innerHTML = "ataque: " + monstroSelecionado.ataque;
  document.querySelector(".home-defesa").innerHTML = "defesa: " + monstroSelecionado.defesa;
  var img = document.querySelector("body > div > div > div.home-batalha > div.home-monstrojogador > img");
  img.src = "http://poder-elemental.jvmsolutions.tech/cards_imgs/"+monstroSelecionado.img;

});


function batalhar(){
  const monstroEscolhido = escolherMonstro(document.querySelector(".home-nomemonstro").textContent);
  //alert(JSON.stringify(monstroEscolhido));
  const monstroAleatorio = escolherMonstroAleatorio();
  document.querySelector(".home-nomemonstro1").innerHTML = monstroAleatorio.nome;
  document.querySelector(".home-ataque1").innerHTML = "ataque: " + monstroAleatorio.ataque;
  document.querySelector(".home-defesa1").innerHTML = "defesa: " + monstroAleatorio.defesa;

  var img = document.querySelector("body > div > div > div.home-batalha > div.home-monstroadversario > img");
  img.src = "http://poder-elemental.jvmsolutions.tech/cards_imgs/"+monstroAleatorio.img;



  var resultado = "";
  if(monstroEscolhido.ataque == monstroAleatorio.defesa){
    resultado = "Empate";
  }else if(monstroEscolhido.ataque > monstroAleatorio.defesa){
    resultado = "Você Ganhou";  
  }else{
    resultado = "Você Perdeu";   
  }


  document.querySelector("body > div > div > h1").innerHTML = resultado;
}