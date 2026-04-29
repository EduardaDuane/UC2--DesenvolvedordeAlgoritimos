////////////////exercicio 1/////////////////////////////

/*let pote = ["Banana" , "Mamão" , "Melancia" , "Melão" , "Maçã"]

let i = 0

while( i < pote.length){
    console.log( `A fruta ${pote[i]} te dá superpoder!`)
    i++
}*/

////////////////exercicio 2/////////////////////////////

/*let moedas = [5, 7, 10, 8, 2]
let i = 0
let totalMoedas = 0

while(i < moedas.length){
    totalMoedas += moedas[i]
    i++
}
console.log(`Você tem ${totalMoedas} moedas cara!`)*/

/*let alienígenas = ["José" , "Maria" , "Marcos" , "Matheus" , "Fransisco" , "Ana" , "Sofia" , "Enzo" , "Valentina"]  

let i = 0 

while(i < alienígenas.length){
    console.log(`Oi ${alienígenas[i]} , vem dançar!`)
    i++
}*/

/*let numeros = [1, 5, 7, 9, 12];

let i = 0;
let maiorNumero = numeros[0]; 

while(i < numeros.length) {    
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
    
    i++;
}
console.log(`O verdadeiro tesouro  foi o número ${maiorNumero}!`);*/


let velocidades = [5, 10 ,220, 30 ,12, 1]
let i = 0;
let valor = velocidades[0]

while(i < velocidades.length){
    if(velocidades[i] > valor){
        valor = velocidades[i]
    }
    i++
}
console.log(`O corredor mais rápido atingiu ${valor} Km/h!!`)

