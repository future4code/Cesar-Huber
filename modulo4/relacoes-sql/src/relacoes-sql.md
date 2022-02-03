## Exercícios Relações SQL

### Exercício 01
a) A FOREIGN KEY cria a relação entre 2 tabelas através de um campo em comum entre elas, como um user_id por exemplo.

b) feito

c) A query retorna com um erro dizendo que o id informado não existe.

d) feito

e) não permite por conta do constraint de FOREIGN KEY

### Exercício 02
a) Esta tabela serve apenas como referência de relação N:M onde cada filme pode ter diversos atores e vice-versa.

b) feito

c) não permite por conta do constraint de FOREIGN KEY

d) não permite por conta do constraint de FOREIGN KEY

### Exercício 03
a) A query faz a junção entre as duas tabelas através da ligação pelo campo id da tabela movie com o movie_id da tabela Rating.

b) SELECT name, id, rating FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
o inner join já atua como filtro quando se junta com a tabela de rating, trazendo apenas filmes com avaliação nesta tabela.