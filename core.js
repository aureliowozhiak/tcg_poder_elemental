const cartas = {
  "Boto-cor-de-bromélia": {
  nome: "Boto-cor-de-bromélia",
  ataque: 30,
  defesa: 10,
  },
  "Boto-cor-de-rosa": {
  nome: "Boto-cor-de-rosa",
  ataque: 35,
  defesa: 20,
  },
  "Boto-cor-de-margarida": {
  nome: "Boto-cor-de-margarida",
  ataque: 20,
  defesa: 25,
  },
  "Boto-cor-de-orquídea": {
  nome: "Boto-cor-de-orquídea",
  ataque: 25,
  defesa: 30,
  },
  "Elfo Aquático": {
  nome: "Elfo Aquático",
  ataque: 50,
  defesa: 30,
  },
  Iara: {
  nome: "Iara",
  ataque: 75,
  defesa: 55,
  },
  "Dragão Bebê": {
  nome: "Dragão Bebê",
  ataque: 20,
  defesa: 20,
  },
  "Dragão Jovem": {
  nome: "Dragão Jovem",
  ataque: 50,
  defesa: 30,
  },
  "Senhor Dragão": {
  nome: "Senhor Dragão",
  ataque: 60,
  defesa: 85,
  },
  "Pônei Flamejante": {
  nome: "Pônei Flamejante",
  ataque: 50,
  defesa: 50,
  },
  "Palhaço em Chamas": {
  nome: "Palhaço em Chamas",
  ataque: 35,
  defesa: 40,
  },
  Boitatá: {
  nome: "Boitatá",
  ataque: 20,
  defesa: 70,
  },
  "Dragão Elétrico": {
  nome: "Dragão Elétrico",
  ataque: 95,
  defesa: 80,
  },
  "Alma Abençoada": {
  nome: "Alma Abençoada",
  ataque: 50,
  defesa: 60,
  },
  "Cavaleiro Iluminado": {
  nome: "Cavaleiro Iluminado",
  ataque: 40,
  defesa: 80,
  },
  "Centopeia do Trovão": {
  nome: "Centopeia do Trovão",
  ataque: 50,
  defesa: 80,
  },
  "Elfo Elétrico": {
  nome: "Elfo Elétrico",
  ataque: 45,
  defesa: 15,
  },
  "Muralha Ambulante": {
  nome: "Muralha Ambulante",
  ataque: 0,
  defesa: 100,
  },
  "Robô Defeituoso": {
  nome: "Robô Defeituoso",
  ataque: 20,
  defesa: 10,
  },
  "Cavaleiro-Robô": {
  nome: "Cavaleiro-Robô",
  ataque: 70,
  defesa: 20,
  }
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

var nomeMonstro = prompt("Escolha um monstro:");

const monstroEscolhido = escolherMonstro(nomeMonstro);
document.write("Seu monstro é: ");
document.write(JSON.stringify(monstroEscolhido)); 

document.write("<br>-------------------------<br>");

const monstroAleatorio = escolherMonstroAleatorio();
document.write("Monstro do oponente: ");
document.write(JSON.stringify(monstroAleatorio));

document.write("<br>-------------------------<br>")

if(monstroEscolhido.ataque == monstroAleatorio.defesa){
        document.write("Empate");   
 }else if(monstroEscolhido.ataque > monstroAleatorio.defesa){
     document.write("Você Ganhou");  
 }else{
     document.write("Você Perdeu");   
 }