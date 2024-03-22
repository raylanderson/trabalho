var JG1 = {
    name: "" ,
    vida: "" ,
    poder: "" ,
}

var adiversario = {
    name: "Tanos",
    vida: "1000",
    poder: "100",
}

var usuario = prompt("Digite seu nome");
JG1.name = usuario;

var saude = +prompt("Digite um numero entre 3 e 20 ")
JG1.vida = saude * 100;
JG1.poder = (20 - saude) * 10;

console.log(JG1);

alert (`Então ${JG1.name}, já se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros, e você estava se preparando para sua primeira incursão em uma masmorra! Após alguns dias de viagem, você  chega à entrada da misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra está diante de você, escura e ameaçadora. As paredes de pedra são escorregadias de umidade, e o ar cheira a mofo e decomposição.`);

//Aero Fantion
const iniciarJogo = () => {

    var res = prompt(`${JG1.name} O que você quer fazer?\n
        (A) Entrar na caverna\n
        (B) Explorar
    `) 

    if (res.A) {
    alert `<50% de chance de não encontrar nada> " Você decide explorar a área circundante. Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a expectativa cresce enquanto você se prepara para adentrar a dungeon.`

    }else (res.B); {

        alert `<50% de chance de não encontrar nada> Você decide explorar a área circundante. Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a expectativa cresce enquanto você se prepara para adentrar a dungeon.\n
        
        
        <50% de chance de encontrar poção (aumenta +500 de HP ao encontrá-la)> Você decide explorar a área circundante, esperando encontrar pistas ou recursos valiosos que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas que lhe deixam curioso, você continua a busca e finalmente descobre algo: um frasco misterioso escondido entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. Intrigado, você examina mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga, sugere que a poção tem propriedades de cura.
        `
    }

};

iniciarJogo();
