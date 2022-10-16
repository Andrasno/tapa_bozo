// dimensionando o jogo
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;
let tempoMosquito = 1500;


function telaVariavel(){
    altura = window.innerHeight;
    largura = window.innerWidth;
    //console.log(largura, altura)
    
}

telaVariavel()

document.getElementById('cronometro').innerHTML = tempo


//criando valores randomicos para o mosquito aparecer na tela
// como o math.random é sempre menor do que um, basta multiplica-lo por altura e largura
//assim, ele sempre está no limite da pagina do usuario

function dandoVidaAoMosquito(){

    //remove o mosquito anterior, caso ele exista
    // implementamos o controle dos corações, se o elemento não for clicado
    if(document.getElementById('mosca')){
        document.getElementById('mosca').remove();
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        }
        document.getElementById('v' + vidas).src = './imagens/coracao_vazio.png';

        vidas++;
    }
    // movimentando automatica e randomicamente o mosquito
    let eixoX = Math.floor(Math.random() * largura) - 90;
    let eixoY = Math.floor(Math.random() * altura) - 90;

eixoX = eixoX < 0 ? 0 : eixoX;
eixoY = eixoY < 0 ? 0 : eixoY;

//console.log(eixoX, eixoY)

// inserindo a imagem no body da página

var imgMosca = document.createElement('img');
imgMosca.src = "./imagens/bozo-face.png";
imgMosca.className = mudaTamanhoMosca() + ' ' + inverteImgMosca();
imgMosca.style.left = eixoX + 'px';
imgMosca.style.top = eixoY + 'px';
imgMosca.style.position = 'absolute';
imgMosca.id = 'mosca'

//remove o mosquito em caso de clique, pra não passar na condicional
imgMosca.onclick = function(){
    this.remove();
}

document.body.appendChild(imgMosca);
}

dandoVidaAoMosquito();

function mudaTamanhoMosca(){
    let classe = Math.floor(Math.random() * 3);

    if (classe == 0){
        return 'mosca1'
    }else if(classe == 1){
        return 'mosca2'
    }else{
        return 'mosca3'
    }
}

function inverteImgMosca(){
    let inverte = Math.floor(Math.random() * 2)

    if(inverte == 0){
        return 'ladoA'
    }else{
        return 'ladoB'
    }
}
let = cronometro = setInterval(function(){
    tempo -= 1;

    if(tempo < 0){
        clearInterval(cronometro) 
        clearInterval(criaMosca)
        window.location.href = 'vitoria.html'   
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    
    
}, 1000)
let criaMosca = setInterval(function(){
    
    dandoVidaAoMosquito();
}, tempoMosquito)


