var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

console.log(`Agora são exatamente ${hora}h${min}`)

if (hora > 5 && hora < 12){
    console.log('Tenha um Bom dia!')
}else if (hora >= 12 && hora < 17){
    console.log('Tenha uma Boa tarde!')
}else if(hora >= 18 && hora <= 23.59){
    console.log('Tenha uma Boa noite!')
}else{
    console.log('Tenha uma boa madrugada')
}