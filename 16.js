const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let jogadores = []; 

function iniciarJogo() {
  rl.question("Digite seu nome: ", (nome) => {
    console.log(`Bem-vindo(a), ${nome}! O jogo está começando.`);
    const numeroSecreto = Math.floor(Math.random() * 100) + 1; 
    let pontos = 100; 
    let tentativas = 0;

    console.log("Tente adivinhar o número entre 1 e 100.");

    function jogar() {
      rl.question("Seu palpite: ", (palpite) => {
        tentativas++;
        const numeroPalpite = parseInt(palpite);

        if (isNaN(numeroPalpite) || numeroPalpite < 1 || numeroPalpite > 100) {
          console.log("Por favor, digite um número válido entre 1 e 100.");
          return jogar();
        }

        if (numeroPalpite === numeroSecreto) {
          console.log(`Parabéns, ${nome}! Você acertou o número em ${tentativas} tentativa(s).`);
          console.log(`Sua pontuação final é: ${pontos} pontos.`);

       
          jogadores.push({ nome, pontos });
          jogadores.sort((a, b) => b.pontos - a.pontos); 

          console.log("\nClassificação geral:");
          jogadores.forEach((jogador, index) => {
            console.log(`${index + 1}. ${jogador.nome} - ${jogador.pontos} pontos`);
          });

          rl.question("\nDeseja jogar novamente? (s/n): ", (resposta) => {
            if (resposta.toLowerCase() === "s") {
              iniciarJogo();
            } else {
              console.log("Obrigado por jogar! Até a próxima.");
              rl.close();
            }
          });
        } else {
          pontos--; 
          if (numeroPalpite > numeroSecreto) {
            console.log("O número secreto é menor.");
          } else {
            console.log("O número secreto é maior.");
          }
          jogar(); 
        }
      });
    }

    jogar(); 
  });
}

iniciarJogo();
