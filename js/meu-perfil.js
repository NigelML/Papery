let usuarioLogado = JSON.parse(localStorage.getItem('usuario-logado'));
document.getElementById('nome-usuario').innerHTML = `Bem vindo, ${usuarioLogado.nome}`;