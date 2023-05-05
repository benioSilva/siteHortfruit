function getElementByIds(id) {
    return document.getElementById(id);
}
var produtoId = "produto"
var codigoId = "codigo"
var pesoId = "peso"
var precoId = "preco"
var botaoId = "botaoEnviar"
var listaHortifrutiKey = "listaHortifruti"
function storageCadastroProdutos() {
    const cadastroStorage = localStorage.getItem(listaHortifrutiKey)
    const cadastroObjeto = JSON.parse(cadastroStorage)
    return cadastroObjeto
}

getElementByIds(botaoId).addEventListener('click', function (event) {
    event.preventDefault();

    let listaCadastroProdutos = {
        codigoCadastroProdutos: getElementByIds(codigoId).value,
        produtosCadastroProdutos: getElementByIds(produtoId).value,
        pesoCadastroProdutos: getElementByIds(pesoId).value,
        precoCadastroProdutos: getElementByIds(precoId).value
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

    getElementByIds(produtoId).value = ''
    getElementByIds(codigoId).value = ''
    getElementByIds(pesoId).value = ''
    getElementByIds(precoId).value = ''

})