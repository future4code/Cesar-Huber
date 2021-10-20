# Exercício 01 de Fixação de JS

```javascript
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
  let salarioFixo = 2000
  let comissaoFixa = 100
  let comissaoPercentual = 0.05
  let comissaoTotal = (qtdeCarrosVendidos * comissaoFixa) + (valorTotalVendas * comissaoPercentual)
  let salarioFinal = salarioFixo + comissaoTotal
  
  return salarioFinal
}
```