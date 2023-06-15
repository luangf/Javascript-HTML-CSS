let num=document.querySelector('input#num')
let lista=document.querySelector('select#slista')
let res=document.querySelector('div#res')
let valores=[]

function numeroValido(n){
    if(num.value >= 1 && num.value <= 100){
        return true
    }
    return false
}

function jaTaNaLista(n){
    if(valores.indexOf(num.value) != -1){
        return true
    }
    return false
}

function adicionar(){
    if(numeroValido(num) && !jaTaNaLista(num)){
        valores.push(num.value)
        let item=document.createElement('option')
        item.text=`Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML=''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value=''
    num.focus()
}

function finalizar(){
    if(valores.length==0){
        alert('Adicione valores antes de finalizar')
    }else{
        let quantElementos=valores.length
        let maior=valores[0]
        let menor=valores[0]
        let soma=0
        let media=0
        for(let i in valores){
            soma+=Number(valores[i])
            if(valores[i] > maior)
                maior=valores[i]
            if(valores[i] < menor)
                menor=valores[i]
        }
        media=soma/quantElementos
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo temos ${quantElementos} números cadastrados</p>`
        res.innerHTML+=`<p>O maior valor informado foi: ${maior}</p>`
        res.innerHTML+=`<p>O menor valor informado foi: ${menor}</p>`
        res.innerHTML+=`<p>A soma foi: ${soma}</p>`
        res.innerHTML+=`<p>A média dos valores foi: ${media}</p>`
    }
}