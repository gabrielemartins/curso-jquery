var botaoReinicio = $('.reinicioJogo');
botaoReinicio.addClass('campoDesativado');

var tempoInicial = $('.segundos').text();
var campoTexto = $('.campoDigitacao');


$(function () {
    marcadores();
    tamanhoFrase();
    contadores();
    cronometro();
    botaoReinicio.click(reiniciarJogo);
    campoTexto.val('');
    
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
              gameOver();
            }
          }, 1000);
    });
}

function gameOver() {
    botaoReinicio.attr("disabled", false);
    campoTexto.toggleClass('campoDesativado');
    botaoReinicio.toggleClass('campoDesativado');
    placar();
}

function marcadores() {
    campoTexto.on('input', function () {
        var frase = $('.frase').text();
        var conteudo = campoTexto.val();
        var comparavel = frase.substr(0, conteudo.length);
    
        if (conteudo == comparavel) {
            campoTexto.addClass('textoCerto');
            campoTexto.removeClass('textoErrado');
        }
        else {
            campoTexto.addClass('textoErrado');
            campoTexto.removeClass('textoCerto');
        }
    });
}

function reiniciarJogo() {
        campoTexto.attr('disabled', false);
        campoTexto.val('');
        $('.contPalavras').text('0');
        $('.contCaracteres').text('0');
        $('.segundos').text(tempoInicial);
        cronometro();
        campoTexto.toggleClass('campoDesativado');
        botaoReinicio.toggleClass('campoDesativado');
        campoTexto.removeClass('textoErrado');
        campoTexto.removeClass('textoCerto');
}





