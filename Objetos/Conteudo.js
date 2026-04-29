let pessoa = {
    nome: "Romario",
    idade: 56,
    profissao: "Corredor",
    gostaCoxinha: false,
    cidade:  "São Leopoldo",
    hobbies: ['correr' , 'escrever' , 'criticar a sociedade da coxinha' , 'ler' , 'jogar mario kart']
}
console.log(pessoa)

//=========================================================
//ACESSANDO PROPRIEDADES DE UM OBJETO
//=========================================================

//Podemos acessar os valores de 2 formas:
// 1. Usando a notação de ponto:
console.log("Nome de pessoa: ", pessoa.nome )
console.log("Idade da pessoa: ", pessoa.idade)
//2.Usamos colchetes
console.log("Cidade da pessoa: ",pessoa["cidade"])