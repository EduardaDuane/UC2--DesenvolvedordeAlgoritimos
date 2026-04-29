/*let i = 0

while(i < 10){
    console.log(i)
    i++

}*/

/*let estomago = 0
while(estomago < 8){
    console.log("Lívia quer mais coxinha!")
    estomago++
    }*/

/*let estomagoCorbucci = 0
while (estomagoCorbucci < 100){
    console.log("CONSIGO COMER MAIS COXINHA!!!")
    estomagoCorbucci = estomagoCorbucci + 10
}*/

let contador = 10
  while (contador >= 0){
    console.log(contador)
    contador --
  }
  console.log("Foguete lançado! 🚀")


/* ESTRUTURA DE REPETIÇÃO (WHILE):
  
  O 'while' (enquanto) funciona como um loop que repete um bloco de código 
  sempre que a condição entre parênteses for VERDADEIRA.
  
  1. CONDIÇÃO (contador >= 0): O código verifica se o número ainda é maior 
     ou igual a zero antes de cada volta.
     
  2. DECREMENTO (contador--): Em vez de somar, aqui nós subtraímos 1 a cada 
     repetição. É o que faz a contagem diminuir (10, 9, 8...).
     
  3. SAÍDA DO LOOP: Quando o contador chega a -1, a condição se torna 
     FALSA, o loop para e o programa segue para a próxima linha fora das chaves.
     
  4. LÓGICA DE CONTROLE: Note que, nos exemplos acima, o controle mudou:
     - No caso da coxinha, o valor subia (incremento).
     - No caso do Corbucci, subia de 10 em 10 (estomagoCorbucci + 10).
     - No foguete, o valor desce (decremento), mostrando que o loop é flexível.
*/