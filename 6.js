function imprimirPrimeiroEUltimoNome(nomeCompleto) {
    const partes = nomeCompleto.trim().split(' ');
    const primeiroNome = partes[0];
    const ultimoNome = partes[partes.length - 1];

    console.log(`Primeiro nome: ${primeiroNome}`);
    console.log(`Último nome: ${ultimoNome}`);
}


imprimirPrimeiroEUltimoNome('Ana Maria dos Santos');
