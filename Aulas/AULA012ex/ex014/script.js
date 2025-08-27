function carregar(){
var msg = window.document.getElementById('msg')
var imagem = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora sao ${hora} horas`
if(hora >=0 && hora < 12) {
    //BOM DIA
    imagem.src ='pexels-taryn-elliott-5235051.jpg'
    document.body.style.background='#e2cd9f'
}
 else if(hora >=12 && hora < 18) {
    //BOA TARDE
    imagem.src='pexels-pixabay-161963.jpg'
    document.body.style.background='#b9846'
} else {
    //BOA NOITE
    imagem.src='pexels-pixabay-414144.jpg'
    document.body.style.background='#51514'

}

}
