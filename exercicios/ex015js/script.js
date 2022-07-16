function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    var valano = Number(itxtano.value)


    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 1){
                //Bebê
            }else if(idade < 15){
                //Criança
            }else if(idade == 37){
                //Adulto
                img.setAttribute('src','eu.png')
            }else if(idade == 52){
                //casa dos 50
                img.setAttribute('src','yarariva.png')
            }else{
                //Idoso
            }

        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 3){
                //Bebê
                img.setAttribute('src', 'lulu.png')
            }
            else if(idade == 11){
                img.setAttribute('src', 'marmoteira2.png')
            }
            else if(idade == 9){
                //Criança
                img.setAttribute('src','marmoteira.png')
            }
            else if(idade == 33){
                img.setAttribute('src', 'camila.png')
            }
          
            else if(idade == 50){
                //casa dos 50
                img.setAttribute('src','bb.png')
            }else if(idade == 85){
                //Idoso
                img.setAttribute('src','ester.png')
            }
        }
        res.style.textAlign = 'center'
        if(idade == 37){
            res.innerHTML = `Detectamos ${genero} <strong>LINDÃO</strong> de ${idade} anos`
            res.appendChild(img)    
        }else{
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        res.appendChild(img)
        }
        res.innerHTML += `${valano}`
        
    }
}

