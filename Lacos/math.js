let lanches = ["Pizza", "Arepa", "Hamburguer", "Hot-dog", "Pastel", 
"Burritos", "Batata-frita", "Nuggets", "Morango", "Coxinha", "Sushi", 
"Salgadinho", "Sorvetim"]

// Vamos percorrer cada lanche e escolher um aleatório
for (let lanche of lanches){
    let chance = Math.random() // número aleatório entre 0 e 1
    if(chance > 0.5){
        console.log(`Vou comer ${lanche} hoje! 🍕`)
    }else{
        console.log(`Hoje não vai dar para ${lanche} 😕`)
    }
}