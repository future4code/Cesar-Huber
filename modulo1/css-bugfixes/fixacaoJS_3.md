# Exercício 01 de Fixação de JS

```javascript
function calculaNota(ex, p1, p2) {
  let mediaPonderada = (ex + p1*2 + p2*3)/6
  
  if (mediaPonderada >= 9) {
    return "A"
  }
  else if (mediaPonderada >= 7.5) {
    return "B"
  }
  else if (mediaPonderada >= 6) {
    return "C"
  }
  else {
    return "D"
  }
}
```