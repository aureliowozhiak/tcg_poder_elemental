const cartas = {
  monstro1: {
    nome: 'Dragão',
    ataque: 10,
    defesa: 8
  },
  monstro2: {
    nome: 'Gigante',
    ataque: 8,
    defesa: 10
  },
  monstro3: {
    nome: 'Unicórnio',
    ataque: 6,
    defesa: 6
  }
};

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
}


var nomeMonstro = prompt("Escolha um monstro:");

const monstroEscolhido = escolherMonstro(nomeMonstro);
console.log("Seu monstro é: ");
console.log(monstroEscolhido); // saída: {nome: 'Nome', ataque: x, defesa: y}

console.log("-------------------------")

const monstroAleatorio = escolherMonstroAleatorio();
console.log("Monstro do oponente: ");
console.log(monstroAleatorio); // saída: um objeto monstro aleatório do objeto cartas

console.log("-------------------------")

if(monstroEscolhido.ataque == monstroAleatorio.defesa){
        console.log("Empate");   
    }else if(monstroEscolhido.ataque > monstroAleatorio.defesa){
        console.log("Você Ganhou");  
    }else{
        console.log("Você Perdeu");   
    }
