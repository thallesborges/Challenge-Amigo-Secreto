let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let input_nome = document.querySelector('input');

// Enviar o input apertando enter
input_nome.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        adicionarAmigo();
    }
});

function formatarNome(nome) {
    return nome
        .toLowerCase()
        .split(" ")
        .filter(p => p !== "")
        .map(p => p.charAt(0).toUpperCase() + p.slice(1))
        .join(" ");
}

function adicionarAmigo() {
    let nome = input_nome.value.trim(); // remove espaços extras: '    Thalles  ' = 'Thalles'
    
    if (nome === "") {
        alert('Por favor, insira um nome.');
        return;
    }

    // Normalizar o nome para que não haja nomes iguais: 'thalles' e 'Thalles', 'João' e 'Joao'
    let nomeNormalizado = nome
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, "");

    let jaExiste = amigos.some(amigo => 
        amigo
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") === nomeNormalizado
    );

    if (jaExiste) {
        alert('Esse nome já foi adicionado!');
    } else {
        let nomeFormatado = formatarNome(nome)

        amigos.push(nomeFormatado);
        console.log(amigos);
    }

    listarAmigos();
    input_nome.value = '';
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    listarAmigos();
}

function editarAmigo(index) {
    const novoNome = prompt('Digite o novo nome:', amigos[index]);
    if (novoNome && novoNome.trim() !== "") {
        let nomeNormalizado = novoNome 
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "");
    }

    let jaExiste = amigos.some((amigo, i) => 
        i !== index &&
        amigo
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") === nomeNormalizado
    );

    if (jaExiste) {
        alert('Esse nome já existe na lista!');
    } else {
        amigos[index] = formatarNome(novoNome);
    }
    listarAmigos();
}

function listarAmigos() {
    listaAmigos.innerHTML = '';

    amigos.forEach((nome, index) => {
        listaAmigos.innerHTML += `
            <li>
                ${nome}
                <span>
                    <button class="btnEditar" onclick="editarAmigo(${index})" title="Editar">
                        <i class="fa-solid fa-pencil"></i>
                    </button>
                    <button class="btnExcluir" onclick="excluirAmigo(${index})" title="Excluir">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </span>
                </li>
        `;
    });
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        let i = Math.floor(Math.random() * amigos.length);
        
        listaAmigos.innerHTML = '';
        resultado.innerHTML = `<li> O amigo secreto sorteado é: ${amigos[i]} </li>`
        amigos = [];

    } else {
        alert('Por favor, adicione ao menos 2 nomes.');
    }
}