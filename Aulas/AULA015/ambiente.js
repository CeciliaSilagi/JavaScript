var num =[5,8,2,9,3]
num.push(1)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`O vetor tem ${num.length} posicoes`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(4)
if(pos == -1){
    console.log(`O valor nao foi encontrado`)
} else{
    console.log(`O valor está na posicao ${pos}`)
}



