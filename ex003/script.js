let a=[1,2,3]
a[3]=4
a.push(3)
console.log(a)
console.log(a.length)
console.log(a.sort())
console.log('---------')
for(let i=0;i<a.length;i++){
    console.log(a[i])
}
console.log('---------')
// primeiro 3
console.log(a.indexOf(3)) 
// -1 se n tiver
console.log(a.indexOf(321321)) 
console.log('---------')
function funcTeste(a){
    return a
}
console.log(funcTeste(131221))