let alunos = ["Robersvaldo" , "Grayck" , "AntoniNunes" , "Dieberson" , ]

let i = 0

while(i < alunos.length){
    console.log(alunos[i])
    i++
}

/* EXPLICAÇÃO: REPETIÇÃO COM ARRAYS (WHILE)
   
   1. O ÍNDICE (let i = 0): Criamos um contador para representar a posição na lista. 
      Arrays sempre começam na posição 0.
   
   2. O LIMITE (alunos.length): O loop entende que deve parar assim que 
      percorrer todos os nomes da lista, não importa quantos sejam.
   
   3. O ACESSO (alunos[i]): A cada volta, o valor de 'i' muda (0, 1, 2...), 
      fazendo o código buscar o próximo aluno dentro dos colchetes.
   
   4. O INCREMENTO (i++): Adiciona 1 ao contador. É o que faz a lista 
      "andar" para frente.
*/