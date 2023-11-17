document.addEventListener('DOMContentLoaded', function () {
    var main = document.getElementById('conteudo');

    function carregarAreaCadastro() {
        fetch('cadastro.html')
            .then(response => response.text())
            .then(html => {
                main.innerHTML = html;
            })
            .catch(error => console.error('Erro ao carregar a página de cadastro:', error));
    }

    // Adiciona um evento de clique ao botão de cadastro para abrir a área de cadastro
    var botaoCadastro = document.getElementById('criar-conta');
    botaoCadastro.addEventListener('click', carregarAreaCadastro);
});
