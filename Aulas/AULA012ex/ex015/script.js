function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 ||  Number(fano.value) > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano -Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >= 0 || idade  < 13) {
                //Crianca
                img.setAttribute('src','pexels-louis-lim-3481556.png')
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src','pexels-atef-khaled-1731858.png')
            } else if(idade < 60) {
                //Adulto
                img.setAttribute('src','pexels-alex-hoces-16239470.png')
            } else {
                //Idoso
                img.setAttribute('src','pexels-andrea-piacquadio-3831645.png')
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 || idade  < 13) {
                //Crianca
                img.setAttribute('src','pexels-singkham-1166473.png')
            } else if(idade < 21) {
                //Jovem
                img.setAttribute('src','pexels-miguel-arcanjo-saddi-1213769.png')
            } else if(idade < 60) {
                //Adulta
                img.setAttribute('src','pexels-victor-chijioke-16320293.png')
            } else {
                //Idosa
                img.setAttribute('src','pexels-dalila-dalprat-2035502.png')
            }
        }
        res.style.textAling = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}