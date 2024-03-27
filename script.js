var jogadorPrincipal = {
    name: "" ,
    vida: "" ,
    ataque: "" ,
    dano: "",
    hp: ""
}

// viloes do jogo
var adiversario = [    
    {
        name: "Tanos",
        vida: "1000",
        ataque: "10",
        dano: "100",
        hp: "10"
    },
    {
        name: "Curinga",
        vida: "1000",
        ataque: "10",
        dano: "100",
        hp: "10"
    }
]

// Texto da narrativa do jogo

var opcaoDoJogo = {
    inicio:`Então ${jogadorPrincipal.name}
    já se passaram alguns dias desde que você se juntou à Guilda dos Aventureiros, e você estava se preparando para sua primeira incursão em uma masmorra!
    Após alguns dias de viagem, você  chega à entrada da misteriosa masmorra. Você está cheio de expectativas enquanto se aproxima. A entrada da masmorra 
    está diante de você, escura e ameaçadora. As paredes de pedra são escorregadias de umidade, e o ar cheira a mofo e decomposição.
    O que você quer fazer?
    (A) Entrar na Caverna
    (B) Explorar
    `,

    entrarNacaverna: `Ao entrar na masmorra, você percebe que as paredes estão cobertas por símbolos estranhos, emitindo uma luz fraca na penumbra. O ar 
    dentro está impregnado com o cheiro forte de morte e decomposição, fazendo sua pele arrepiar. Você consegue ouvir os sons distantes de algo se movendo 
    nas profundezas da masmorra, mas não consegue identificar exatamente o que é.
    O que você quer fazer?
    (A) Seguir caminho
    (B) Analisar p interior da caverna
    `,

    explorar: [` ${jogadorPrincipal.name} Você decidiu explorar a área circundante. Após uma busca sem resultados na área, você se dirige à masmorra, aceitando a tranquilidade antes do
    desafio iminente. Embora sem descobertas notáveis, a expectativa cresce enquanto você se prepara para adentrar a dungeon.
    `,
    `
    ${jogadorPrincipal.name} Você decide explorar a área circundante, esperando encontrar pistas ou recursos
    valiosos que possam ajudá-lo em sua missão. Enquanto explora, nota algumas marcas entalhadas nas árvores próximas que lhe deixam curioso, você continua 
    a busca e finalmente descobre algo: um frasco misterioso escondido entre as folhas caídas, ele contém uma substância brilhante de cor azul intensa. 
    Intrigado, você examina mais de perto o frasco e percebe que se trata de uma poção mágica. A etiqueta, escrita em uma língua antiga, sugere que a poção
    tem propriedades de cura
    Você ganhou (+200) pontos de Vida !
    `
],

seguirCaminhando: [
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

// variavel global

var acao = ""

//iniciando o jogo

const iniciandoJogo = () => {
    getInforJogadorPrincipal()
}