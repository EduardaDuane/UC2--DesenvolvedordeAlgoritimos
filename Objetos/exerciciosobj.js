//////////////////////exercicio 1//////////////////////////////////////////////

// Exercício:
// Crie um objeto que represente um filme. Ele deve ter dados da direção, o nome, 
// o ano de lançamento, uma lista com o elenco e uma propriedade que diga se você já viu ou não.

let filme = {
    nome: "O Pequeno Príncipe",
    direcao: "Mark Osborne",
    anoLancamento: 2015,
    elenco: ["Riley Osborne", "Jeff Bridges", "Mackenzie Foy", "Marion Cotillard"],
    jaAssisti: true
}

console.log(filme)


console.log("Nome do filme: ", filme.nome)

console.log("Direção: ", filme.direcao)

console.log("Ano de lançamento: ", filme["anoLancamento"])

console.log("Elenco: ", filme["elenco"])

console.log("Já assisti o filme? ", filme["jaAssisti"])
