var frase = $('.frase');
var botaoAlterar = $('.trocaFrase').click(alterarFrase);
var botaoEscolher = $('.escolheFrase').click(escolherFrase);

function alterarFrase() {
  $('#spinner').show();
    $.get("http://localhost:3000/frases", definirFrase)
    .fail(function () {
        $('.erroAjax').show();
        setTimeout(function () {
          $('.erroAjax').toggle();  
        }, 1500)
      })
      .always(function () {
          $('#spinner').toggle();
        })
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

function escolherFrase() {
   $('#spinner').toggle();
   var fraseId =  $('#idFrase').val();
   var dados = {id: fraseId}

   $.get("http://localhost:3000/frases", dados, pegaFrase)
   .fail(function () {
      $('.erroAjax').show();
      setTimeout(function () {
        $('.erroAjax').toggle();  
      }, 1500)
   })
  .always(function () {
      $('#spinner').toggle();
    })
}

function pegaFrase(data) {
   frase.text(data.texto);
   tamanhoFrase();
   atualizaTempo(data.tempo);
}