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
        let linha1 = document.createElement("div");
        linha1.className = "linha";

        for (colY = 0; colY < map[linX].length; colY++) { //for que constrói as colunas
            let cellId = linX + "." + colY;
            let paredeId = "parede" + linX;
            //let paredeId = "p." + linX + "." + colY;

            switch (map[linX][colY]) {
                case "W":
                    let parede = document.createElement("div");
                    parede.className = "parede";
                    parede.id = paredeId;
                    linha1.appendChild(parede);
                    break;

                case "F":
                    let fim = document.createElement("div");
                    fim.className = "fim";
                    fim.id = "fim";
                    linha1.appendChild(fim);
                    break;

                case "S":
                    let inicio = document.createElement("div");
                    inicio.className = "inicio";
                    inicio.id = "start"
                    linha1.appendChild(inicio);
                    break;

                case " ":
                    let vazio = document.createElement("div");
                    vazio.className = "vazio";
                    vazio.id = cellId;
                    linha1.appendChild(vazio);
                    break;
            }
        }
        labirinto.appendChild(linha1);
    }
}
MapLab();

let divStart = document.getElementById("start");
let jogador = document.getElementById("jogador");
divStart.appendChild(jogador);

let linha = 9;
let coluna = 0;

// function verifica() {
//     let parede = document.getElementsByClassName("parede");
//     let novaDiv = document.getElementById(linha + "." + coluna);

//     if (novaDiv == parede) {
//         false;
//     }
// }

function move() {

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        // let vazio = document.getElementsByClassName("vazio")
        //console.log(keyName)

        if (keyName === "ArrowRight") {
            console.log(linha + "." + coluna);
            coluna += 1;
            let novaDiv1 = document.getElementById(linha + "." + coluna);
            novaDiv1.appendChild(jogador);


        } else if (keyName === "ArrowLeft") {
            console.log(linha + "." + coluna);
            coluna -= 1;
            let novaDiv2 = document.getElementById(linha + "." + coluna);
            novaDiv2.appendChild(jogador);

        } else if (keyName === "ArrowUp") {
            console.log(linha + "." + coluna);
            linha -= 1;
            let novaDiv3 = document.getElementById(linha + "." + coluna);
            novaDiv3.appendChild(jogador);

        } else if (keyName === "ArrowDown") {
            console.log(linha + "." + coluna);
            linha += 1;
            let novaDiv4 = document.getElementById(linha + "." + coluna);
            novaDiv4.appendChild(jogador);
        }
    })
}

move();

let novaDiv = document.getElementById(linha + "." + coluna);

// function vitoria() {
//     //let fim = document.getElementById("fim");

//     if (novaDiv.textContent == "F") {
//         console.log("victory")

//     }

// }

//for para construir as linhas e outro dentro para construir as colunas - ok
// inserir movimentos pelo teclado (KeyboardEvents) - ok
// movimentar a div - colocar uma div jogador que quando mover teclado faz appendChild na div de destino - ok
// verificar se é parede ou não
// estilizar com Css e adicionar imagem