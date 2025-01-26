const filmes = [];

for (let i = 0; i < 5; i++) {
    const filme = prompt(`Digite o nome do filme ${i + 1}:`);
    filmes.push(filme);
}

// Ordenando a lista de filmes em ordem alfabética
filmes.sort();

console.log("Lista de filmes em ordem alfabética:");
filmes.forEach((filme, i) => {
    console.log(`${i + 1}. ${filme}`);
});
