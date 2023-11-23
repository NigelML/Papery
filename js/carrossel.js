const blocosCategoria = document.getElementsByClassName('bloco-categoria');

function VoltarCarrossel() {
    let blocoCategoriaInicial = blocosCategoria[0].innerHTML;

    for (let i = 0; i < blocosCategoria.length - 1; i++) {
        blocosCategoria[i].innerHTML = blocosCategoria[i+1].innerHTML;
    }

    blocosCategoria[blocosCategoria.length - 1].innerHTML = blocoCategoriaInicial;
}

function AvancarCarrossel() {
    let blocoCategoriaFinal = blocosCategoria[blocosCategoria.length - 1].innerHTML;

    for (let i = blocosCategoria.length - 1; i > 0; i--) {
        blocosCategoria[i].innerHTML = blocosCategoria[i-1].innerHTML;
    }

    blocosCategoria[0].innerHTML = blocoCategoriaFinal;
}
