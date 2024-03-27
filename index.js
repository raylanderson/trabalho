// player o heroi
let player = {
    nome:"",
    vida:"",
    ataque:"",
    dano:"",
    hp:""
}

// array de objetos contendo os viloes
let monsters = [
   { 
        nome:"caverinha",
        vida:"1000",
        ataque:"10",
        dano:"100",
        hp:"10"
    },
    {
        nome:"caveirão",
        vida:"1000",
        ataque:"10",
        dano:"100",
        hp:"10"
    }
]

// objeto dos text da anarrativa
const dadosDoJogo = {
    inicio:`Então ${player.nome}
    já se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros, e você estava se preparando para sua primeira incursão em uma masmorra!
    Após alguns dias de viagem, você  chega à entrada da misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra 
    está diante de você, escura e ameaçadora. As paredes de pedra são escorregadias de umidade, e o ar cheira a mofo e decomposição.
    O que você quer fazer?
    (A) Entrar na Caveerna
    (B) Explorar
    `,
    entarNacaveerna:`Ao entrar na masmorra, você percebe que as paredes estão cobertas por símbolos estranhos, emitindo uma luz fraca na penumbra. O ar 
    dentro está impregnado com o cheiro forte de morte e decomposição, fazendo sua pele arrepiar. Você consegue ouvir os sons distantes de algo se movendo 
    nas profundezas da masmorra, mas não consegue identificar exatamente o que é.
    O que você quer fazer?
    (A) Seguir caminho
    (B) Analisar p interior da caverna
    `,
    explorar:[` ${player.nome} Você decidiu explorar a área circundante. Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do
        desafio iminente. Embora sem descobertas notáveis, a expectativa cresce enquanto você se prepara para adentrar a dungeon.
        `,
        `
        ${player.nome} Você decide explorar a área circundante, esperando encontrar pistas ou recursos
        valiosos que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas que lhe deixam curioso, você continua 
        a busca e finalmente descobre algo: um frasco misterioso escondido entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. 
        Intrigado, você examina mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga, sugere que a poção
        tem propriedades de cura
        Você ganhou (+200) pontos de Vida !
        `
    ],
    seguirCaminhando:[
        `Ao seguir caminhando você tropeça...
         Você perdeu (-200) pontos de Vida !
        `,
        `Ao seguir caminhando pela caverna, o tempo passa e a sua a equipe de aventureiros começa a ganhar confiança, a atenção vai se dispersando e quando notam, todos estão
         fazendo piadas em tom de voz descontraído. Tudo parece estar indo bem até que todos começam a ouvir um ruído arrepiante surgindo em meio a suas vozes, o clima alegre
          se dissipa repentinamente, todos ficam alertas e em silêncio, tentando observar o que os espera pela frente.
        `,
        `Ao olhar adiante, sua equipe depara-se com um grupo de esqueletos dispostos em uma formação ameaçadora. Suas figuras ósseas parecem animadas e prontas para o combate 
         enquanto ficam próximas a um cristal que emite uma luz fraca. As órbitas vazias dos olhos focam em você com uma intensidade sinistra conforme você se aproxima cautelosamente,
         sentindo a presença ameaçadora dos mortos-vivos.
        `
    ],
    lutar:`
        Finalmente o Exército foi conquistado! Uma sesação de paz invade cada centímetro da câmara... Num piscar de olhos você está em uma planície muito peculiar e ao mesmo tempo familiar
        também... você percebe que está diante de três portas...
        O que você quer fazer?
        (A) Portão de ouro
        (B) Portão de Ferro
    `,
    portaoDeouro:`
        Você escolhe a Porta de Ouro. Atrás dela você encontra muito ouro, cristais, etc... você começa a imaginar toda a glória e poder que poderá onter com este tesouro praticamente
        infinito. Assim que você toca a primeira moeda a seu alncace uma voz grave e ecoante chama seu nome... "Então você prefere assim? Acha que seria fácil?"... o <nome do inimigo> 
        suege com uma aura de poder nunca antes vista...
    `,
    portaoDeFerro:`
        Você escolhe a Porta de Ferro, após atravessa-la tudo a sua volta desaparece, o infinito é seu novo horizonte... alguns minutos se passam até que você consegue escutar alguém
        chamando por seu nome... "Finalmente você conseguiu chegar até minha morada... Seus passos até aqui não foram fáceis, não espere nenhum tipo de alívio agora..."
    `,
    analizarCaverna:`
        Ao analisar o interior da caverna, você nota que o piso está repleto de ossos de animais, deixando o cheiro pútrido ainda mais evidente, você começa a observar as paredes 
        da caverna e encontra um objeto pendurado...
        O que você quer fazer?
        (A) Sair Fora
        (B) Examiná-la
    `

}

// evento de click para iniciar o jogo
const btn = document.querySelector("button")
btn.addEventListener("click", ()=>{
    IniciaJogo()
})

// variavel global 
let resposta = ""

// inicia o jogo
const IniciaJogo = () => {
    getInforPlayer()
    
    resposta = respostaDoPlayer(dadosDoJogo.inicio, "inicio")

    if(resposta.toLocaleUpperCase() === "A"){
        entrarNaCaveerns()
    }else{
        let sorte =  Math.round(Math.random())
            
        if(sorte == 0){ 
            alert(`
            ${player.nome} Você decide explorar a área circundante. 
            Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a 
            tranquilidade antes do desafio iminente. Embora sem descobertas notáveis, a 
            expectativa cresce enquanto você se prepara para adentrar a dungeon.
            `)
            entrarNaCaveerns()
        }else{
            player.vida = player.vida + 200;
            alert(`
            ${player.nome} 
            você ganhou (+200 de vida!)
            Você decide explorar a área circundante, esperando encontrar pistas ou recursos valiosos
            que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas
            que lhe deixam curioso, você continua a busca e finalmente descobre algo: um frasco misterioso escondido
            entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. Intrigado, você examina 
            mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga,
            sugere que a poção tem propriedades de cura."
            `)
            entrarNaCaveerns()
        }
    }
    
}

// açao de entrar na caveerna 
const entrarNaCaveerns = () =>{
    resposta = respostaDoPlayer(dadosDoJogo.entarNacaveerna, "Entrar na caverna")
       
    if(resposta === "A"){
         let sorte =  Math.round(Math.random())
         
         if(sorte == 0){ 
             player.vida -= 200
             alert(dadosDoJogo.seguirCaminhando[sorte])
             alert(`${player.nome} Agora seus pontos de Vida são ${player.vida }`)
             alert(dadosDoJogo.seguirCaminhando[2])
             resposta = respostaDoPlayer(`O que você quer fazer?\n(A) Lutar\n(B) Correr`, "lutar" )
             
             if(resposta === "A"){
                 batalha(monsters[0])
             }else{
                 alert(`${player.nome}Correr não é uma opção!
                 venha e me enfrente seu covarde!!`)
                 batalha(monsters[0])
             }
             
         }else{
             alert(dadosDoJogo.seguirCaminhando[2])
             batalha(monsters[0])
         }

     }else{
         resposta = prompt(`${dadosDoJogo.analizarCaverna}`)

         if(resposta === "A"){
             alert(`
                 Ao sair fora, você tropeça em um monte de ossos. O estrondo ecoa pelo ambiente
                 e o barulho rompe o silêncio, alertando aqueles que vivem nas profundezas da caverna...
             `)
             alert(dadosDoJogo.seguirCaminhando[2])
             resposta = respostaDoPlayer(`O que você quer fazer?\n(A) Lutar\n(B) Correr`, "lutar" )

             if(resposta === "A"){
                 batalha(monsters[0])
             }else{
                 alert(`${player.nome}Correr não é uma opção!
                 venha e me enfrente seu covarde!!`)
                 batalha(monsters[0])
             }
         }else{
             player.dano = player.dano + 30;

             alert(`
                 ${player.nome} você achou um objeto parece ser uma lanterna antiga, coberta de poeira e teias de aranha. Ao
                 se aproximar para examiná-la, você percebe que ainda há vestígios de óleo dentro
                 dela, e ao tocar nela você a derruba abruptamente com um estrondo alto, ecoando pelo 
                 ambiente. O barulho rompe o silêncio, deixando a equipe tensa e alerta, tentando prestar
                 atenção ao que os espera adiante +PODER
                 ${player.nome} Você ganhou (+30) pontos de Dano
                 Seus pontos agora são: ${player.dano}
             `)

             alert(dadosDoJogo.seguirCaminhando[2])
             resposta = respostaDoPlayer(`O que você quer fazer?\n(A) Lutar\n(B) Correr`, "lutar" )

             if(resposta === "A"){
                 batalha(monsters[0])
             }else{
                 alert(`${player.nome} Correr não é uma opção!
                 venha e me enfrente seu covarde!!`)
                 batalha(monsters[0])
             }

         }
      
     }


}








// montando os valores do objeto player com nome, Hp etc..
const getInforPlayer = () => {
 
    player.nome = player.nome ? player.nome : prompt("Digite seu Nome");
    
    let HP = false;
   
    const getHP =()=>{
        if(player.nome){
            HP = Number(prompt("digite de 3 a 20 para seu Hp de luta"));
       }
    }

    getHP()

    if(player.nome){
        if(HP){

            player.hp = HP
            player.ataque = (20 - player.hp);
            player.vida = player.hp * 100;
            player.dano = player.ataque * 10;
        
            alert(
                `
                Dados do Player
                Nome: ${player.nome}
                vida: ${player.vida} pts
                Força de ataque: ${player.ataque} pts
                Dano: ${player.dano} pts
                Nivel de resistencia HP: ${player.hp} pts
             `
            )
           
        }else{
            alert("O Digite um numero")
            getInforPlayer()
        }

    }else{
        alert("O Digite seu Nome")
        getInforPlayer()
    }
   
}

// funçao de respotas do usuario 
const respostaDoPlayer = (text, verificador) => {
    
    if(verificador === "inicio"){
        return prompt(text)
    }else if(verificador === "Entrar na caverna"){
       return prompt(text)
    }else if(verificador === "lutar"){
        return prompt(text)
    }else if(verificador === "venceu"){
        return prompt(text)
    }
  
}

// logica de batalha entre player e vilao
const batalha = (monster) => {
    alert(`
        ${player.nome} chego o momento da batalha!
        O ${monster.nome} sera emplacavel...
    `)
    alert(`
        Dados do Vilão
        Nome: ${monster.nome}
        Vida: ${monster.vida} pts
        Poder: ${monster.dano} pts
    `)

    while(player.vida > 0 && monster.vida > 0){
           
        if(player.vida > 0 && monster.vida > 0){

            if(monster.vida > 0 ){    
                alert(`${player.nome} tem apenas ${player.vida} de Vida!`)
                alert(`${player.nome} click OK para atacar`)
                ataquePlayer(monster)
            }

            if(player.vida > 0){
                alert(`${monster.nome} tem apenas ${monster.vida} de Vida!`)
                alert(`${monster.nome} click OK para atacar`)
                ataqueMonster(monster)
            }
            
        }
      
      
        if(player.vida > 0 && monster.vida <= 0 && monster.nome === "caverinha"){
            alert(`${monster.nome} foi derrotado !`)
        }else if(player.vida <= 0 && monster.vida > 0 ){
            alert(`${player.nome} você foi derrotado !`)

        }
       
    }

    if(player.vida <= 0 || monster.vida <= 0){
        if(player.vida <= 0){
            let reload = prompt(`
                GAME HOVER !!
                ${player.nome} VOCÊ Foi derrotado
                (A) Jogar novamente
                (B) Não

                `
            )

            player.nome = "";
            window.location.reload()
           
        }else{
            if(monster.nome === "caverinha"){
                player.vida = player.vida + 200;
                player.dano = player.dano + 30;
                alert(`${player.nome} você ganhou
                    (+30) de Dano
                    (+200) pontos de Vida
                    pontos de vida total: ${player.vida}
                    pontos de Dano total: ${player.dano}
                `)
                resposta = respostaDoPlayer(dadosDoJogo.lutar, "venceu")
                portoes(resposta)
            }else{
                alert(`${player.nome}você Venceu !
                O ${monsters[1].nome} não mais nos assombrará! É hora de voltar a vila e comemorar com o povo...
                FIM
                `)
            
            }
           
        }

    }

}

// logica de subtraçao de posntos do vilao
const ataque =(monster)=>{
    let nivelDeAtaque = Math.floor(Math.random() * 4) // gerando qual vai ser a força do ataque do heroi 

    // caso  baseado no gerador de nivel de ataque 
    switch(nivelDeAtaque){
        case 1: monster.vida = monster.vida - (player.dano * 1);
            alert(`
                ${player.nome} seu ataque foi de nivel (1)
            `)
            break
        case 2: monster.vida = monster.vida - (player.dano * 1.5);
            alert(`
                ${player.nome} seu ataque foi de nivel (2)
            `)
            break 
        case 3: monster.vida = monster.vida - (player.dano * 2);
            alert(`
                ${player.nome} seu ataque foi de nivel (3)
            `)
        break
        default:  
            alert(`
                ${player.nome} seu ataque foi Bloqueado
            `)
    }
}

// funçao de ataque do player
const ataquePlayer = (monster)=>{
    ataque(monster)
}

// funçao de ataque do vilao
const ataqueMonster = (monster)=>{
    let ataque = Math.floor(Math.random() * 4) 
    console.log(ataque)
    if(ataque > 0 ){
        player.vida = player.vida - monster.dano
    }else{
        console.log("defeneu heroi")
        alert(`
             ${monster.nome} seu ataque foi Bloqueado
        `)
    }
}


// funçao de escolha do portao
const  portoes = (portao) => {
    if(portao === "A"){
        alert(`
            ${dadosDoJogo.portaoDeouro}
        `)
        batalha(monsters[1])
    }else if(portao === "B"){
        alert(`
            ${dadosDoJogo.portaoDeFerro}
        `)
        batalha(monsters[1])
    }
}

// intruçoes do jogo

alert(`
Por favor, responda e preencha todos os campos!
Escreva as letras das opções MAIÚSCULAS,
pois não há validações. Caso retorne vazio ou resposta que não existe.
Bom jogo.
`)