let amigos = [];
let listaAmigos = document.getElementById('listaAmigos'); 

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