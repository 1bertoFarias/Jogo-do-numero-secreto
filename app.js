let listadenumerosSorteados = [];
let numerolimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1


function exibirTextonNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',
    {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextonNaTela('h1', 'Jogo do número secreto');
    exibirTextonNaTela('p', 'Escolha um número entre 1 e 10');

}
exibirTextonNaTela('h1', 'Jogo do número secreto');
exibirTextonNaTela('p', 'Escolha um número entre 1 e 10');


function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextonNaTela('h1', 'acertou!');
        let palavrateantiva = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavrateantiva}!`;
        exibirTextonNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute
            ('disabled');
    } else {
        if (chute > numeroSecreto) { exibirTextonNaTela('p', 'o número é menor que o chute'); }
        else {
            exibirTextonNaTela('p', ' o número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
    let NumeroEscolhido = parseInt(Math.random() * numerolimite + 1);
    let quantidadeDeElementosNaLista = listadenumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numerolimite) {
        listadenumerosSorteados = [];
    }
    if (listadenumerosSorteados.includes(NumeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else {
        listadenumerosSorteados.push(NumeroEscolhido);
        return NumeroEscolhido;
    }

}
function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';

}
function reiniciarjogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',
    true);
}
