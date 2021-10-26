# Exercício 05 de Fixação de JS

```javascript
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    let nomesAnimais = []
    nomesAnimais = animais.map((animal) => {
      return animal.nome
    })
  
    return nomesAnimais
}
```

