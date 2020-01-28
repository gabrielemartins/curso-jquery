var frase = $('.frase');
var botaoAlterar = $('.trocaFrase').click(alterarFrase);

function alterarFrase() {
    $.get("http://localhost:3000/frases", definirFrase)
    .fail(function () {
        $('.erroAjax').show();
        setTimeout(function () {
          $('.erroAjax').toggle();  
        }, 1500)
      });
}

function definirFrase (data) {
    var numAleatorio = Math.floor(Math.random() * data.length);
    frase.text(data[numAleatorio].texto);
    tamanhoFrase();
    atualizaTempo(data[numAleatorio].tempo);
}

function atualizaTempo(tempo) {
    $('.segundos').text(tempo);
    tempoInicial = tempo;
}