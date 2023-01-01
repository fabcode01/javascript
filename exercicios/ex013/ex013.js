var agora = new Date()

var diaSem = agora.getDay()

/*
    DOMINGO - 0
    SEGUNDA - 1
    TERCA - 2
    QUARTA - 3
    QUINTA - 4
    SEXTA - 5
    SABADO - 6 

*/



switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado') 
        break 
    default:
        console.log('Erro, dia inválido')  
}