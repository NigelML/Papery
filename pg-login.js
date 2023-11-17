document.addEventListener('DOMContentLoaded', function () {
    var main = document.getElementById('conteudo');

    function carregarAreaLogin() {
        fetch('login.html')
            .then(response => response.text())
            .then(html => {
                main.innerHTML = html;
            })
            .catch(error => console.error('Erro ao carregar a página de login:', error));
    }

    // Adiciona um evento de clique ao ícone do usuário para abrir a área de login
    var iconUsuario = document.getElementById('pagina-usuario');
    iconUsuario.addEventListener('click', carregarAreaLogin);
});

