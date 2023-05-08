function getElementById(id) {
    return document.getElementById(id)
}
var listaHortifrutiKey = "listaHortifrutiKey"
var selecionarProdutoId = "selecionarProduto"
var valorCompradoId = "valorComprado"
var botaoCompraId ="botaoPedidos"

function storageCadastroProdutos() {
    const cadastroStorage = localStorage.getItem(listaHortifrutiKey)
    return JSON.parse(cadastroStorage)
}

var nomeCompradorId = "nomeComprador"
var emailCompradorId = "emailComprador"
var idadeCompradorId = "idadeComprador"
var produtoCompradoId = "selecionarProduto"
var valorCompradoId = "valorComprado"
var listaPedidosKey = "listaPedidosKey"

function getListaPedidosStorage(){
    const listaStorage = localStorage.getItem(listaPedidosKey)
    const listaObjeto = JSON.parse(listaStorage)
    return listaObjeto 
}
loadlistaProdutos()

function loadlistaProdutos() {
    let getStorage = storageCadastroProdutos()
    getElementById(selecionarProdutoId).innerHTML = ""
    getStorage.forEach(function (element, index) {
        getElementById(selecionarProdutoId).innerHTML +=
            '<option value = ' + index + '>' + element.produtosCadastroProdutos + '</option>'
    });
    getElementById(valorCompradoId).value= storageCadastroProdutos()[0].precoCadastroProdutos
}

function onChangeProdutos(){
    let indexProdutos = getElementById(selecionarProdutoId).value
    getElementById(valorCompradoId).value = storageCadastroProdutos()[indexProdutos].precoCadastroProdutos

} 

getElementById(botaoCompraId).addEventListener('click', function(event){
    event.preventDefault();

    let dadosComprador = { 
        nomeComprador: getElementById(nomeCompradorId).value,
        emailComprador: getElementById(emailCompradorId).value,
        idadeComprador: getElementById(idadeCompradorId).value,
        produtoComprado: storageCadastroProdutos()[getElementById(produtoCompradoId).value].produtosCadastroProdutos,
        valorDoProduto: getElementById(valorCompradoId).value,
        statusPedido: "Pendente"
    }
    console.log(dadosComprador)
    
    if (getListaPedidosStorage()==null){
        const listaVendas = [dadosComprador]
        localStorage.setItem(listaPedidosKey, JSON.stringify(listaVendas))
    } else {
        const listaPedidosCarregada = getListaPedidosStorage()
        listaPedidosCarregada.push(dadosComprador)
        localStorage.setItem(listaPedidosKey, JSON.stringify(listaPedidosCarregada))
    }

    getElementById(nomeCompradorId).value = ""
    getElementById(emailCompradorId).value = ""
    getElementById(idadeCompradorId).value = ""
})

