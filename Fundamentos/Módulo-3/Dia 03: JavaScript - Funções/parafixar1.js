let saldo = 1000
let valor = 100
let taxa = 10

function adicionaValor(saldo){
    return valor + saldo
}
console.log(adicionaValor(saldo))

function subtraiValor(saldo){
    return saldo - valor
}
 console.log(subtraiValor(saldo));

 function multiplicataxa(saldo){
    return saldo * taxa 
 }
  console.log(multiplicataxa(saldo));

  function dividaSaldo(saldo){
    return saldo / valor
  }
  console.log(dividaSaldo(saldo));
