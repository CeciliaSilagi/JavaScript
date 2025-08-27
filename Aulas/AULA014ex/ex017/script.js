function tabuada(){
    var numero = document.getElementById('txtnumero')
    var tabuada = document.getElementById('settab')
    
    if(numero.value.length == 0){
       window.alert('Por favor, digite um número!')
    } else {
        var n = Number(numero.value)
        tabuada.innerHTML = ''
        for(var count = 1; count <= 10;count++){
            var item = document.createElement('option')
            item.text = `${n} x ${count} = ${n*count}`
            tabuada.appendChild(item)

        }
    }
    
    
    

   

}