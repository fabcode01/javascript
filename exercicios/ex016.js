let array = [45,75,14,147,9,4]

/* Metodo 1 
for(let c = 0; c < array.length; c++){
    console.log(`O valor ${array[c]} está na posição ${c} `)
}*/


/* Metodo Simples
for(let c in array){
    console.log(`O valor do ${array[c]} está na posição ${c}`)
}*/

let pos = array.indexOf(4)

if (pos == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor está na posição ${pos+1}`)
}