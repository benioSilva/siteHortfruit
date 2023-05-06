var listaHortifrutiKey = "listaHortifrutiKey"

function getElementById(id) {
    return document.getElementById(id);

}
function storageCadastroProdutos() {
    const cadastroStorage = localStorage.getItem(listaHortifrutiKey)
    const cadastroObjeto = JSON.parse(cadastroStorage)
    return cadastroObjeto
}

var preenchimentoTabelaId = "PreencherListaProdutos"

preencherTabela()
function analisar(num){
    let comparar = storageCadastroProdutos()
    comparar = comparar.filter(function(element, index){
        return index != num
    })
    localStorage.setItem(listaHortifrutiKey, JSON.stringify(comparar))
    preencherTabela()
}
function preencherTabela(){
    getElementById(preenchimentoTabelaId).innerHTML=""
    storageCadastroProdutos().forEach(function(element, index){
        console.log(element)
        getElementById(preenchimentoTabelaId).innerHTML += '<tr>' +
        '<th scope="row">'+(index+1)+ '</th>' +
        '<td>'+element.codigoCadastroProdutos+'</td>'+
        '<td>'+element.produtosCadastroProdutos+'</td>'+
        '<td>'+element.pesoCadastroProdutos+'</td>'+
        '<td>'+element.precoCadastroProdutos+'</td>'+
        '<td><button onclick="analisar('+index+')">REMOVER</button></td>'+
        '</tr>'
        
    });
}