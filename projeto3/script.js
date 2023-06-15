function contar(){
    var inicio=document.querySelector('#inicio').value
    var fim=document.querySelector('#fim').value
    var passo=document.querySelector('#passo').value
    var res=document.querySelector('#res')
    if(inicio == '' || fim == '' || passo == ''){
        res.innerHTML='<p>Impossível contar</p>'
    }else{
        res.innerHTML='<p>Contando<br></p>'
        if(passo<=0){
            window.alert('Passo inválido, setei p=1')
            passo=1
        }
        if(inicio < fim){
            // contagem crescente
            for(let i=Number(inicio); i<=Number(fim); i+=Number(passo)){
                res.innerHTML+=`${i} \u{1F449}`
            }
        }else{
            // contagem descrescente
            for(let i=Number(inicio); i>=Number(fim); i-=Number(passo)){
                res.innerHTML+=`${i} \u{1F449}`
            }
        }
        res.innerHTML+='\u{1F44D}'
    }
}