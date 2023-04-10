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
      return JSON.stringify(cartas[monstro]);
    }
  }
  return null;
}

function escolherMonstroAleatorio() {
  const monstros = Object.values(cartas);
  const indiceAleatorio = Math.floor(Math.random() * monstros.length);
  return JSON.stringify(monstros[indiceAleatorio]);
}


var nomeMonstro = prompt("Escolha um monstro:");

const monstroEscolhido = escolherMonstro(nomeMonstro);
document.write("Seu monstro é: ");
document.write(monstroEscolhido); 

document.write("<br>-------------------------<br>")


const monstroAleatorio = escolherMonstroAleatorio();
document.write("Monstro do oponente: ");
document.write(monstroAleatorio);

document.write("<br>-------------------------<br>")

if(monstroEscolhido.ataque == monstroAleatorio.defesa){
        document.write("Empate");   
    }else if(monstroEscolhido.ataque > monstroAleatorio.defesa){
        document.write("Você Ganhou");  
    }else{
        document.write("Você Perdeu");   
    }
