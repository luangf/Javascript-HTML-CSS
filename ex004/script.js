let pessoa={}
let arrayPessoa=[]
console.log(pessoa)
console.log(typeof(pessoa))
console.log(typeof(arrayPessoa))
console.log('---------')
let pessoa2={
    nome:'João', 
    idade:23.3,
    altura:0,
    pular(h=0){
        this.altura+=h
    }
}
pessoa2.pular(10)
console.log(pessoa2)
console.log(pessoa2.idade)