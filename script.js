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


//Aero Fantion
const inciarJogo = () => {
    alert (`Então ${JG1.name}, já se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros, e você estava se preparando para sua primeira incursão em uma masmorra! Após alguns dias de viagem, você  chega à entrada da misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra está diante de você, escura e ameaçadora. As paredes de pedra são escorregadias de umidade, e o ar cheira a mofo e decomposição.`);

    var res = prompt(`${JG1.name} O que você quer fazer?\n
        (A) Entrar na caverna\n
        (B) Explorar
    `) 

};

iniciarJogo();