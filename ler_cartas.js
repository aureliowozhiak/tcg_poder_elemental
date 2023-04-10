const Papa = require('papaparse');
const fs = require('fs');

const arquivoCsv = fs.readFileSync('monstros.csv', 'utf8');

let cartas = {};

Papa.parse(arquivoCsv, {
  header: true,
  delimiter: ',',
  complete: function(resultado) {
    resultado.data.forEach(function(monstro, indice) {
      const nomeMonstro = `monstro${indice+1}`;
      cartas[nomeMonstro] = {
        nome: monstro.nome,
        ataque: parseInt(monstro.ataque),
        defesa: parseInt(monstro.defesa)
      };
    });
    console.log(cartas); // saída: objeto cartas com base nos dados do arquivo CSV
  }
});