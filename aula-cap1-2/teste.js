const vetor = [5, 6, 3, 3, 2, 3, 3, 3,];
let qtdFigurinhas = Number(lines[0]);
let compras = lines.slice(2, lines.length - 1);
let novo = [];

vetor.forEach(
    elem => {
        if (novo.indexOf(elem) == -1){
            novo.push(elem)
        }
    }
)
let quantas = qtdFigurinhas - novo.length;