function contar(){
    var cinício = document.getElementById('txtinicio')
    var cfim = document.getElementById('txtfim')
    var cpassos = document.getElementById('txtpassos')
    var res = document.getElementById('res')
    if(cinício.value.length == 0 || cfim.value.length == 0 || cpassos.value.length == 0 ){
        window.alert('[ERRO]Passo inválido!Considerando passo 1')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(cinício.value)
        var f = Number(cfim.value)
        var p = Number(cpassos.value)
    
   if(i < f){
    //contagem crescente
    for(var c = i; c <= f; c+=p ){
        res.innerHTML += `${c} \u{1F449}`
       }
    } else {
        //contagem regressiva
        for(var c = i; c >= f; c-=p) {
            res.innerHTML += `${c}\u{1F449}`
        }
    } 
    res.innerHTML  += `\u{1F3C1}`
 }

   

  
   
}

