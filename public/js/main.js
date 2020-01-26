var botaoReinicio = $('.reinicioJogo');
var tempoInicial = $('.segundos').text();
var campoTexto = $('.campoDigitacao');

$(function () {
    tamanhoFrase();
    contadores();
    cronometro();
    botaoReinicio.click(reiniciarJogo);
    campoTexto.val('')
});

function tamanhoFrase() {
    var frase = $('.frase').text();
    var numPalavras = frase.split(' ').length;
    var tamanhoFrase = $('.numPalavras');
    tamanhoFrase.text(numPalavras);
}

function contadores () {
    campoTexto.on('input', function () {
        var conteudo = campoTexto.val();
    
        var qtdPalavras = conteudo.split(/\S+/).length - 1;
        var contPalavras = $('.contPalavras');
        contPalavras.text(qtdPalavras)
    
        var contCaracteres = $('.contCaracteres');
        contCaracteres.text(conteudo.length);
    });
    
}

function cronometro() {
    var tempo = $('.segundos').text();
    campoTexto.one('focus', function () {
        botaoReinicio.attr("disabled",true);
        var cronometroId = setInterval(function () {
            tempo--;
            $('.segundos').text(tempo)
            if (tempo <=0) {
              campoTexto.attr('disabled', true);
              clearInterval(cronometroId);
              botaoReinicio.attr("disabled", false);
              campoTexto.addClass('campoDesativado');
            }
          }, 1000);
    });
}

function reiniciarJogo() {
        campoTexto.attr('disabled', false);
        campoTexto.val('');
        $('.contPalavras').text('0');
        $('.contCaracteres').text('0');
        $('.segundos').text(tempoInicial);
        cronometro();
        campoTexto.removeClass('campoDesativado');
}
