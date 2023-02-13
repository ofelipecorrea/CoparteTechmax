function atualizaValorTotal() {
    var precoTotal = 0;
    var quantidadeTotal = 0;
  
    var linhas = document.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
    for (var i = 0; i < linhas.length; i++) {
      var quantidade = parseInt(linhas[i].getElementsByTagName("input")[0].value);
      var preco = parseFloat(linhas[i].getElementsByClassName("preco")[0].innerHTML.replace("R$ ", ""));
      precoTotal += quantidade * preco;
      quantidadeTotal += quantidade;
    }
  
    document.getElementById("quantidade-total").innerHTML = quantidadeTotal;
    document.getElementById("valor-total").innerHTML = "R$ " + precoTotal.toFixed(2);
  }