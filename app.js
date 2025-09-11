let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');

function adicionarAmigo() {
    let input_nome = document.querySelector('input');
    let nome = input_nome.value.trim(); // remove espaços extras: '    Thalles  ' = 'Thalles'
    if (nome === "") {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(nome);
    }

    console.log(amigos);

    listar_amigos();
    input_nome.value = '';
}

function listar_amigos() {
    
    listaAmigos.innerHTML = '';

    for (let nome of amigos) {
        listaAmigos.innerHTML += `<li>${nome}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length > 2) {
        let i = Math.floor(Math.random() * amigos.length);
        console.log(i)
        console.log(amigos)
        
        listaAmigos.innerHTML = '';
        resultado.innerHTML = `<li> O amigo secreto sorteado é: ${amigos[i]} </li>`

    } else {
        alert('Por favor, adicione ao menos 2 nomes.');
    }
}