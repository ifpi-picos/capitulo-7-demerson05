function imprimirPrimeiroEUltimoNome(nomeCompleto) {
    const partes = nomeCompleto.trim().split(' ');
    const primeiroNome = partes[0];
   

    console.log(`Primeiro nome: ${primeiroNome}`);
   
}


imprimirPrimeiroEUltimoNome('Lucas de Souza Brito');