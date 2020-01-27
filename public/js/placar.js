function placar() {
    var tabela = $('.placar').find('tbody');
    var usuario = 'Gabriele';
    var numPalavras = $('.contPalavras').text();
    var botaoRemover =  "<a href='#' class='remover'><i class='small material-icons'>delete</i></a>" ;
    var linha = novaLinha(usuario, numPalavras);
    linha.find('.remover').click(removerLinha)
    tabela.prepend(linha);
}

function novaLinha(usuario, numPalavras) {
    var linha = $('<tr>');
    var colunaUsuario = $('<td>').text(usuario);
    var colunaPalavras = $('<td>').text(numPalavras);
    var colunaRemover = $('<td>');
    var linkRemover = $('<a>').addClass('remover').attr('href', '#');
    var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');
    var resultado = $('<td>');
    resultado.text(checarVitoria)
  
    linkRemover.append(icone);
    colunaRemover.append(linkRemover);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(resultado);
    linha.append(colunaRemover);
    
    return linha;
}

function removerLinha() {
    event.preventDefault();
    $(this).parent().parent().remove();
}

function checarVitoria () {
    var check;
    var frase = $('.frase').text();
    var conteudo = campoTexto.val();
    
    if (conteudo == frase){
        check = 'Ganhou';
    }

    else {
        check = 'Perdeu'
    }

    return check
}