var frase = $('.frase').text();
var numPalavras = frase.split(' ').length;
var tamanhoFrase = $('.numPalavras');
tamanhoFrase.text(numPalavras);

var campoTexto = $('.campoDigitacao');
campoTexto.on('input', function () {
    var conteudo = campoTexto.val();

    var qtdPalavras = conteudo.split(/\S+/).length - 1;
    var contPalavras = $('.contPalavras');
    contPalavras.text(qtdPalavras)

    var contCaracteres = $('.contCaracteres');
    contCaracteres.text(conteudo.length)
})