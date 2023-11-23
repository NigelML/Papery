// document.addEventListener('DOMContentLoaded', function () {
//     var main = document.getElementById('conteudo');

//     function carregarAreaLogin() {
//         fetch('login.html')
//             .then(response => response.text())
//             .then(html => {
//                 main.innerHTML = html;
//             })
//             .catch(error => console.error('Erro ao carregar a página de login:', error));
//     }

//     // Adiciona um evento de clique ao ícone do usuário para abrir a área de login
//     var iconUsuario = document.getElementById('pagina-usuario');
//     iconUsuario.addEventListener('click', carregarAreaLogin);
// });

let usuarios = []

if(!JSON.parse(localStorage.getItem('users'))) {
    localStorage.setItem('users', JSON.stringify(usuarios));
    console.log('users localstorage criado');
}

function entrarUsuario() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value; 

    alert(checarSenha(email, senha));
    window.location.href = 'meu-perfil.html'
}

function checarSenha(email, senha) {
    let mensagemRetorno = 'Dados informados incorretos, tente novamente.';
    let usuariosExistentes = JSON.parse(localStorage.getItem('users'));

    for (let i = 0; i < usuariosExistentes.length; i++) {
        if(usuariosExistentes[i].email == email) {
            if(usuariosExistentes[i].senha == senha) {
                mensagemRetorno = `Logado com sucesso na conta ${email}!`;
                localStorage.setItem('usuario-logado', JSON.stringify(usuariosExistentes[i]));
                break;
            }
        } else {
            mensagemRetorno = 'Dados informados incorretos, tente novamente.';
        }

    }

    return mensagemRetorno;
}
