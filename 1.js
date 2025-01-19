const aluno = {
    nome: 'Lyan',
    idade: 20,
    curso: 'ADM',
    notas: [7.0, 6.5, 8.0],

    calcularMedia: function(){
        return (this.notas[0] + this.notas[1] + this.notas[2]) / 3
    }
};

// Imprimindo os dados do aluno de forma mais legível
console.log(`
    Nome: ${aluno.nome}
    Idade: ${aluno.idade}
    Curso: ${aluno.curso}
    Notas: ${aluno.notas.join(', ')}
    Média das notas: ${aluno.calcularMedia().toFixed(1)}
    `);
    