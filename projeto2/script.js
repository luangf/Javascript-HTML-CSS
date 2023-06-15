function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('ano')
    var res=document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex=document.getElementsByName('sexo')
        // Number(fano.value) bm
        var idade=ano-fano.value
        var genero=''
        var img=document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='h'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/bebe-m.png')
                img.setAttribute('width', 250)
                img.setAttribute('height', 250)
                img.style.borderRadius = '50%';
            }else if(idade < 21){
                img.setAttribute('src', 'img/jovem-m.png')
                img.setAttribute('width', 250)
                img.setAttribute('height', 250)
                img.style.borderRadius = '50%';
            }else if(idade < 75){
                img.setAttribute('src', 'img/adulto-m.png')
                img.setAttribute('width', 250)
                img.setAttribute('height', 250)
                img.style.borderRadius = '50%';
            }else{
                img.setAttribute('src', 'img/idoso-m.png')
                img.setAttribute('width', 250)
                img.setAttribute('height', 250)
                img.style.borderRadius = '50%';
            }
        }else if(fsex[1].checked){
            genero='f'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'img/bebe-f.jpg')
                img.setAttribute('width', 250)
                img.setAttribute('height', 250)
                img.style.borderRadius = '50%';
            }else if(idade < 21){
                img.setAttribute('src', 'img/jovem-f.png')
                img.setAttribute('width', 250)
                img.setAttribute('height', 250)
                img.style.borderRadius = '50%';
            }else if(idade < 75){
                img.setAttribute('src', 'img/adulta-f.png')
                img.setAttribute('width', 250)
                img.setAttribute('height', 250)
                img.style.borderRadius = '50%';
            }else{
                img.setAttribute('src', 'img/idosa-f.png')
                img.setAttribute('width', 250)
                img.setAttribute('height', 250)
                img.style.borderRadius = '50%';
            }
        }
        res.style.textAlign='center'
        res.innerHTML=`Idade calculada: ${idade} e Genero: ${genero}`
        res.appendChild(img)
    }
}