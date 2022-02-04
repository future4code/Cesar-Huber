# Introdução SQL

### Exercício 1
a) <b>VARCHAR</b> é para definir tipo de caracteres variados, comumente usado para tipar o campo para string. <b>DATE</b> é para tipar o campo como data no formato YYYY-MM-DD. <b>PRIMARY KEY</b> é para definir aquele campo como o chave principal, que não poderá sofrer duplicação e deverá estar sempre preenchido. Funciona também como um campo indexado para agilizar o processamento da tabela. <b>NOT NULL</b> é para definir campos que não podem ter valores nulos, ou seja, devem sempre ter algum valor.

b) o comando <b>SHOW</b> Databases/Tables funciona para exibir na tela de resultados as bases e tabelas disponíveis.

c) o comando <b>DESCRIBE</b> <i>tabela</i> traz na tela de resultados a descrição da tabela informada, como o nome dos campos, seus tipos, se aceitam nulo e quais são os campos chave.

### Exercício 2
a) feito
b) aparece o erro de duplicação de chave primária.

c) o erro apresentado é de que a contagem de colunas informadas não equivale ao que foi estabelecido na primeira linha do comando.
Correção:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

d) apresenta o erro de que o campo name não tem um valor default, o que significa que deve sempre ser informado algum valor. Se tivesse um valor default pre-estabelecido, o valor default seria aplicado no lugar.
Correção: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Ator X",
  400000,
  "1949-04-18", 
  "male"
);

e) apresenta o erro de tipo no campo data, que deve ser informada como string no formato "YYYY-MM-DD".
Correção: 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

f) feito

### Exercício 3
a) SELECT * FROM Actor WHERE gender = "female";
b) SELECT salary FROM Actor WHERE name = "Tony Ramos";
c) retorna uma tabela em branco, visto que nenhum dos registros da tabela tem o valor "invalid" no campo gender.
d) SELECT id, name, salary FROM Actor WHERE salary <= 500000;
e) criamos a tabela com o campo name e não com o campo nome.
Corrigido fica SELECT id, name from Actor WHERE id = "002";