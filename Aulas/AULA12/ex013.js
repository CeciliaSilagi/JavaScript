var agora = new Date()
var diaSem = agora.getDay()
/*
 0 = Domingo
 1 = Segunda
 2 =Terca
 3 =Quarta 
 4 =Quinta
 5 =Sexta
 6 =Sabádo
*/

console.log(diaSem)
switch(diaSem){
    case 0:
        console.log(`Domingo`)
        break
        case 1:
        console.log(`Segunda-feira`)
        break
        case 2:
        console.log(`Terca-feira`)
        break
        case 3:
        console.log(`Quarta-feira`)
        break
        case 4:
        console.log(`Quinta-feira`)
        break
        case 5:
        console.log(`Sexta-feira`)
        break
        case 6:
        console.log(`Sabádo`)
        break
        default:
        console.log('Dia inválido!')
}