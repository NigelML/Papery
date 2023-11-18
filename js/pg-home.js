document.addEventListener('DOMContentLoaded', function () {
    var main = document.getElementById('conteudo');

    function carregarPaginaHome() {
        fetch('home.html')
            .then(response => response.text())
            .then(html => {
                main.innerHTML = html;
                configurarPaginaHome();
            })
            .catch(error => console.error('Erro ao carregar a página inicial:', error));
    }

    function configurarPaginaHome() {
        // Adicione lógica específica para a página inicial, se necessário
        var botaoRetorno = document.getElementById('home-page');
        if (botaoRetorno) {
            botaoRetorno.addEventListener('click', function () {
                carregarPaginaHome();
            });
        }
    }

    // Carregar a página inicial por padrão
    carregarPaginaHome();
});

