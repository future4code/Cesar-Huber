// eu usaria async promises para isso. no developer.mozilla encontrei um exemplo que ilustra bem essa questão de aguardar o input do usuário:

chooseToppings()
.then(toppings => placeOrder(toppings))
.then(order => collectOrder(order))
.then(pizza => eatPizza(pizza))
.catch(failureCallback);