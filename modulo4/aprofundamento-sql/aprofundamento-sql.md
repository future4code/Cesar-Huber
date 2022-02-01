# Aprofundamento SQL

### Exercício 1
a) na tabela Actor, deleta a coluna de salários
b) na tabela Actor, muda o nome da coluna gender para sex e seu tipo para varchar(6)
c) na tabela Actor, mantém o nome da coluna gender, mas altera (se era diferente) o tipo para varchar(255)
d) varchar(100)

### Exercício 2
a) UPDATE Actor
SET name = "Novo Nome", birth_date = "1900-01-01"
WHERE id = "003"
b) UPDATE Actor
SET name = UPPER(name)
WHERE name = "Juliana Paes"

### Exercício 3
b) DELETE from Actor 
WHERE gender = "male" and salary > 1000000

### Exercício 4 e 5
SELECT gender, AVG(salary) as salário_médio FROM Actor GROUP BY gender


