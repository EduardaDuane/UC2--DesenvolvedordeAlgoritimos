const NF = 6.5
const NR = 8.5
const T1 = 7
const T2 = 5
const T3 = 9

const trabalhos3 = ((T1 > 6) + (T2 > 6) + (T3 > 6)) >= 2

const aprovadoDireto = NF > 7

const aprovado = (NF > 7) || (NR >= 8 && trabalhos3)

console.log(aprovado);

// Caso 7: Sistema de Avaliação com Nota Final, Recuperação e Trabalhos

//Objetivo: Desenvolver um algoritmo que determine se um aluno foi aprovado ou reprovado 
// com base na sua nota final (NF), nota de recuperação (NR) e nas notas de três trabalhos (T1, T2 e T3).

//Regras de Aprovação:

//Nota Final (NF):

//O aluno será aprovado diretamente se a nota final (NF) for maior que 7. Nesse caso, não importa o desempenho na recuperação ou nos trabalhos.

//Nota de Recuperação (NR) e Trabalhos (T1, T2, T3):

//Caso a nota final (NF) seja menor ou igual a 7, o aluno terá a oportunidade de ser aprovado se:

//A nota de recuperação (NR) for maior ou igual a 8, e

//Pelo menos dois dos três trabalhos (T1, T2, T3) tiverem uma nota maior que 6.

//Reprovação:

//Se a nota final (NF) for menor a 7, a nota de recuperação (NR) for menor que 8, e menos de dois trabalhos tiverem nota maior que 6, o aluno será reprovado.