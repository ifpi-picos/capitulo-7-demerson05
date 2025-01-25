const filmes = [];

for (let i = 0; i < 5; i++) {
    const filme = prompt(`Digite o nome do filme ${i + 1}:`);
    filmes.push(filme);
}

console.log("Filmes informados:");
for (let i = 0; i < filmes.length; i++) {
    console.log(`${i + 1}. ${filmes[i]}`);
}