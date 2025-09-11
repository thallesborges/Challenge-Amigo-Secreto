let nomes = [];

function adicionarAmigo() {
    let input_nome = document.querySelector('input');
    let nome = input_nome.value.trim(); // remove espaços extras: '    Thalles  ' = 'Thalles'

    if (nome === "") {
        alert('Por favor, insira um nome.');
    } else {
        nomes.push(nome);
    }

    console.log(nomes);

    // Limpa o campo de input
    input_nome.value = '';
}