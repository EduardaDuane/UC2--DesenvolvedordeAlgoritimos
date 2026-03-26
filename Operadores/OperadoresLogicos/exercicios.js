// Operadores lógicos - utilizados geralmente para testar

/* - Operador E (Tudo deve ser verdadeiro).
    Representamos com: &&

  - Operador OU (Uma condição sendo verdadeira já basta).
    Representamos com : ||

  - Operador NAO (inverte o valor).
    Representamos com : !
*/

const idade = 33 // idade da pessoa
const temAssinatura = true // indica se a pessoa tem assinatura ativa

//verificando se a pessoa pode acessar:
// Condições :
// - Precisa ser maior ou igual a 18 anos (>= 18)
// - Ter assinatura (true)

const podeAcessar = idade >= 18 && temAssinatura 
console.log(podeAcessar)

