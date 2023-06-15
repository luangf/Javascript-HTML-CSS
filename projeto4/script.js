function gerarTabuada(){
    let num=document.getElementById('num')
    let tabuada=document.getElementById('tabuada')
    if(num.value.length==0){
        alert('Digite um número')
    }else{
        let n=Number(num.value)
        tabuada.innerHTML=''
        for(let i=1; i<=10; i++){
            let item=document.createElement('option')
            item.text=`${n} x ${i} = ${n*i}`
            item.value=`tab${i}`
            tabuada.appendChild(item)
        }
    }
}