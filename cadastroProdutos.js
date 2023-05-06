function getElementById(id) {
    return document.getElementById(id);
}
var produtoId = "produto"
var codigoId = "codigo"
var pesoId = "peso"
var precoId = "preco"
var botaoId = "botaoEnviar"
var listaHortifrutiKey = "listaHortifrutiKey"
function storageCadastroProdutos() {
    const cadastroStorage = localStorage.getItem(listaHortifrutiKey)
    const cadastroObjeto = JSON.parse(cadastroStorage)
    return cadastroObjeto
}

getElementById(botaoId).addEventListener('click', function (event) {
    event.preventDefault();

    let listaCadastroProdutos = {
        codigoCadastroProdutos: getElementById(codigoId).value,
        produtosCadastroProdutos: getElementById(produtoId).value,
        pesoCadastroProdutos: getElementById(pesoId).value,
        precoCadastroProdutos: getElementById(precoId).value
    }
    console.log(listaCadastroProdutos)
    if (storageCadastroProdutos() == null) {
        const listahort = [listaCadastroProdutos]
        localStorage.setItem(listaHortifrutiKey, JSON.stringify(listahort))
    } else {
        const listaHortNovoValor = storageCadastroProdutos()
        listaHortNovoValor.push(listaCadastroProdutos)
        localStorage.setItem(listaHortifrutiKey, JSON.stringify(listaHortNovoValor))

    }

    getElementById(produtoId).value = ''
    getElementById(codigoId).value = ''
    getElementById(pesoId).value = ''
    getElementById(precoId).value = ''

})