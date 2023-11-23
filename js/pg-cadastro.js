// document.addEventListener('DOMContentLoaded', function () {
//     var main = document.getElementById('conteudo');

//     function carregarAreaCadastro() {
//         fetch('cadastro.html')
//             .then(response => response.text())
//             .then(html => {
//                 main.innerHTML = html;
//             })
//             .catch(error => console.error('Erro ao carregar a página de cadastro:', error));
//     }

//     // Adiciona um evento de clique ao botão de cadastro para abrir a área de cadastro
//     var botaoCadastro = document.getElementById('criar-conta');
//     botaoCadastro.addEventListener('click', carregarAreaCadastro);
// });


let usuarios = []

if(!JSON.parse(localStorage.getItem('users'))) {
    localStorage.setItem('users', JSON.stringify(usuarios));
    console.log('users localstorage criado');
}

function addUsuario() {
    let email = document.getElementById('email').value;
    let nome = document.getElementById('nome-completo').value;
    let cpf = document.getElementById('cpf').value;
    let senha = document.getElementById('senha').value;
    let telefone = document.getElementById('telefone').value ?? "";
    usuarios = JSON.parse(localStorage.getItem('users'));

    if(!checarUsuarioExiste(email, cpf)) {
        let usuarioObjeto = {
            email: email,
            nome: nome,
            cpf: cpf,
            senha: senha,
            telefone: telefone
        };
        
        usuarios.push(usuarioObjeto);
        localStorage.setItem('users', JSON.stringify(usuarios));

        alert("Usuário criado com sucesso!")
        window.location.href = 'login.html';
    } else {
        alert("Usuário já existe!")
    }

}

function checarUsuarioExiste(email, cpf) {
    let retorno = false;
    let usuariosExistentes = JSON.parse(localStorage.getItem('users')) || [];

    usuariosExistentes.forEach(u => {
        if(u.email == email || u.cpf == cpf) retorno = true;
    });

    return retorno;
}

