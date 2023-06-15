function contar(){
    var inicio=document.querySelector('input#inicio')
    var fim=document.querySelector('input#fim')
    var passo=document.querySelector('input#passo')
    var all=`${inicio.value} ${fim.value} ${passo.value}`
    // alert(all)
    if(inicio.value == ''){
        res.innerHTML='<p>Impossível contar</p>'
    }else if(fim.value == ''){
        res.innerHTML='<p>Impossível contar</p>'
    }else if(passo.value == ''){
    res.innerHTML='<p>Impossível contar</p>'
    }else{
        res.innerHTML='<p>aaa</p>'
    }
}