const filmes = [];

for (let i = 0; i < 5; i++) {
    const filme = prompt(`Digite o nome do filme ${i + 1}:`);
    filmes.push(filme);
}

const filmesRecomendados = filmes.filter((filme, index) => {
    return index === 1 || index === 3; 
});

console.log("Filmes recomendados aos amigos:");
filmesRecomendados.forEach((filme, i) => {
    console.log(`${i + 1}. ${filme}`);
});
