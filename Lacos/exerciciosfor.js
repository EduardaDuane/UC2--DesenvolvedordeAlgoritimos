///////////////////// exercício 1 //////////////////////////////////////////////////////////
/*for (let i = 1; i < 16; i++){
    console.log(" Sonic coletou " + i + " anéis!" )
}
console.log("Super velocidade ativada!")*/
///////////////////// exercício 2 //////////////////////////////////////////////////////////
// loop de 0 a 100
/*for (let i = 0; i <= 100; i++) {
    // Verificando se o número é par ou ímpar (condicional)
    if (i % 2 === 0) {
        // i do laço for que está no momento é par
        console.log(i + " é par")
    } else {
        console.log(i + " é ímpar")
    }

    // Destaca números múltiplos de 5 (exceto 0)
    if (i !== 0 && i % 5 === 0) {
        console.log(i + " é múltiplo de 5")
    }
}
*/
///////////////////// exercício 3 //////////////////////////////////////////////////////////

/*for (let i = 1; i <= 5; i++) {
    
    if (i === 5) {
        console.log("Sexta-feira! 🎉")
    } 
    else {
        console.log("Dia de trabalho 😴")
    }
}*/

////////////////// exercicio 4 ////////////////////////////////////////////////////////////////////////

/*for (let i = 10; i <= 25; i++) {
    
    if (i < 18) {
        console.log(i + " é menor de idade");
    } 
    else {
        console.log(i + " é maior de idade");
    }
}*/
//////////////////////EXERCICIO 5 ///////////////////////////////////////////////////////////////


let cores = ["Verde", "Amarelo", "Azul", "Branco", "Preto"]

for(let i = 0; i < cores.length; i++){
    let elemento = cores[i]
    console.log(elemento)
}