

function getElementById(id) {
    return document.getElementById(id)
}
var listaPedidosKey = "listaPedidosKey"

function getListaPedidosStorage() {
    const listaStorage = localStorage.getItem(listaPedidosKey)
    const listaObjeto = JSON.parse(listaStorage)
    return listaObjeto
}
var dadosComprasId = "preencherListaPedidos"
preencherPedidos()

function preencherPedidos() {
    getElementById(dadosComprasId).innerHTML = ""
    getListaPedidosStorage().forEach(function(element, index) {
        console.log(element)
        getElementById(dadosComprasId).innerHTML += '<tr>'+
        '<th scope="col">'+(index+1)+'</th>' +
        '<td>'+element.nomeComprador+'</td>' +
        '<td>'+element.emailComprador+'</td>' + 
        '<td>'+element.idadeComprador+'</td>' + 
        '<td>'+element.produtoComprado+'</td>' + 
        '<td>'+element.statusPedido+'</td>' + 
        '<td><button type=button onclick="mudancaStatus('+index+')">confirmar</button></td>' +
        '<td><button type=button onclick="verificarDeletar('+index+')">Deletar</button</td>' +
    '</tr>'
        
    });
}
function verificarDeletar(p1){
    let verificar = getListaPedidosStorage()
    verificar = verificar.filter(function(element, index){
        return index != p1
    })
    localStorage.setItem(listaPedidosKey, JSON.stringify(verificar))
    preencherPedidos()
}
function mudancaStatus(index) {
    let objetoPedidos = getListaPedidosStorage()
    objetoPedidos[index].statusPedido = "Pedido Confirmado"
  
    localStorage.setItem(listaPedidosKey, JSON.stringify(objetoPedidos))
    preencherPedidos()


}