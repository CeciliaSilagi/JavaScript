var numero1 = document.querySelector('input#numero1')
var soma = document.querySelector('select#soma')
var res = document.querySelector('div#res')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    } else{
        return false
    }
    
}

function inSoma(n,s){
    if(s.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }

}

function adicao(){
   if(isNumero(numero1.value)&& !inSoma(numero1.value,valores)){
    valores.push(Number(numero1.value))
    var item =  document.createElement('option')
    item.text = `valor ${numero1.value} adicionado`
    soma.appendChild(item)
    res.innerHTML = ''
}else{
    window.alert('Valor inválido ou já endontrado na lista')
}
numero1.value = ''
numero1.focus()

   
   
}

function finalizar(){
    if(isNumero(valores.length == 0)){
        window.alert('Adicione valores antes de finalizae!')
    } else{
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var adicao = 0
        var media = 0
        for(var posicao in valores){
            adicao += valores[posicao]
            if(valores[posicao] > maior){
                maior = valores[posicao]
            if(valores[posicao] < menor)
                menor = valores[posicao]
              
            }
        media = soma /total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}. </p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor} .</p>`
        res.innerHTML += `<p>Somando todos valores temos ${adicao} .</p>`
        res.innerHTML += `<p>A média dos valores digitados sao ${media} .</p>`
     }
    }

   
   

}
