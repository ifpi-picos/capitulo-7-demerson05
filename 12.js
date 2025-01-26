const filmes = [];

for (let i = 0; i < 5; i++) {
    const filme = prompt(`Digite o nome do filme ${i + 1}:`);
    filmes.push(filme);
}

console.log("Filmes informados:");
let index = 0;

for (const filme of filmes) {
    let critica;

    switch (index) {
        case 0:
            critica = "Esse filme é tão bom que o sofá ficou com inveja de quem estava assistindo!";
            break;
        case 1:
            critica = "O enredo é tão surpreendente que eu quase joguei a pipoca na tela!";
            break;
        case 2:
            critica = "Esse filme fez a minha cadeira se sentir mais confortável do que eu nunca imaginei!";
            break;
        case 3:
            critica = "Risos e lágrimas: o filme que vai fazer você questionar sua própria vida... e seu snack!";
            break;
        case 4:
            critica = "Não sabia que um filme poderia ser mais viciante que a procrastinação!";
            break;
        default:
            critica = "Um filme tão bom que até o controle remoto ficou com ciúmes de tanta atenção!";
    }

    console.log(`${index + 1}. ${filme} - Crítica: "${critica}"`);
    index++;
}
