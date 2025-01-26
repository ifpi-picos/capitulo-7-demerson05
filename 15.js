const filmes = [];

for (let i = 0; i < 5; i++) {
    const filme = prompt(`Digite o nome do filme ${i + 1}:`);
    filmes.push(filme);
}

// Função para buscar um filme na lista
function buscarFilme(titulo) {
    if (filmes.includes(titulo)) {
        return `O filme "${titulo}" foi encontrado na lista.`;
    } else {
        return `O filme "${titulo}" não foi encontrado na lista.`;
    }
}

// Exemplo de uso
const tituloBuscado = prompt("Digite o título do filme que deseja buscar:");
const resultado = buscarFilme(tituloBuscado);
console.log(resultado);
