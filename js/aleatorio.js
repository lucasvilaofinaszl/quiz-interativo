const nomes = ["Jucas", "Emerson","Lucas","Antony","Victor","Wiliam"];

function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes)
