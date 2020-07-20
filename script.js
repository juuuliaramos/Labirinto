const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
let linX;
let colY;

function MapLab() { // função que cria o mapa
    const labirinto = document.getElementById("campo");

    for (linX = 0; linX < map.length; linX++) { //for que constrói as linhas
        let linha = document.createElement("div");
        linha.className = "linha";

        for (colY = 0; colY < map[linX].length; colY++) { //for que constrói as colunas
            let cellId = linX + "." + colY;
            switch (map[linX][colY]) {

                case "W":
                    let parede = document.createElement("div");
                    parede.className = "parede";
                    parede.id = cellId;
                    linha.appendChild(parede);
                    break;

                case "F":
                    let fim = document.createElement("div");
                    fim.className = "fim";
                    fim.id = cellId;
                    linha.appendChild(fim);
                    break;

                case "S":
                    let inicio = document.createElement("div");
                    inicio.className = "inicio";
                    inicio.id = "start"
                    linha.appendChild(inicio);
                    break;

                case " ":
                    let vazio = document.createElement("div");
                    vazio.className = "vazio";
                    vazio.id = cellId;
                    linha.appendChild(vazio);
                    break;
            }
        }
        labirinto.appendChild(linha);
    }
}
MapLab();

let divStart = document.getElementById("start");
let jogador = document.getElementById("jogador");
divStart.appendChild(jogador);


let vertical = 9;
let horizontal = 0;
// coluna.linha = v.h

function move() {

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        //console.log(keyName)
        //let posicao;

        if (keyName === "ArrowRight") {
            horizontal += 1;
            console.log(vertical + "." + horizontal);
            // posicao = (vertical + "." + horizontal);
            // var direcao = getElementById("posicao");
            // direcao.appendChild(posicao);

        } else if (
            keyName === "ArrowLeft") {
            horizontal -= 1;
            console.log(vertical + "." + horizontal);
        } else if (
            keyName === "ArrowUp") {
            vertical -= 1;
            console.log(vertical + "." + horizontal);
        } else if (
            keyName === "ArrowDown") {
            vertical += 1;
            console.log(vertical + "." + horizontal);
        }
    })
}
move();







//for para construir as linhas e outro dentro para construir as colunas - ok
// inserir movimentos pelo teclado (KeyboardEvents) - ok
// movimentar a div - colocar uma div jogador que quando mover teclado faz appendChild na div de destino (tecla)
// verificar se é parede ou não
// estilizar com Css e adicionar imagem