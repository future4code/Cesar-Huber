# Projeto Cookenu

### Desenvolvedor: Cesar Huber

### Documentação API:
https://documenter.getpostman.com/view/18385621/UVkpPvzL

### Deploy Heroku:
https://projeto-cookenu-cesar-huber.herokuapp.com/

<hr>
<br>

### Objetivo
Desenvolver um projeto de backend que simula uma rede social de receitas. 
Para isso, foram requisitados diversos endpoints, para criação de usuários e receitas, edição de receitas, seguir usuários, deletar receitas e usuários e trazer um feed com os posts das receitas, de acordo com o usuário e usuários seguidos.
<br><br>
Objetivo alcançado: ✅
<br>
<hr>

### Tecnologias
Para alcançar o objetivo, utilizei o node.js com a linguagem Typescript e diversas bibliotecas: 
<li> Express (para criar os endpoints)
<li> Cors (como middleware)
<li> Knex (para criar a conexão com banco de dados)
<li> Mysql (banco de dados)
<li> Uuid (para gerar IDs)
<li> JWT (para gerar e gerenciar Tokens)
<li> Bcryptjs (para gerar Hash da senha)
<li> Dotenv (para gerenciar informações sensíveis)
<br><br>
A documentação foi feita pelo Postman. <br>
O banco de dados foi feito no MySql.
<br>
<hr>

### Destaques
Acredito que o maior desafio deste projeto foi pensar na melhor forma para gerar o feed de posts, pois para isso fiz inner join entre as 3 tabelas utilizadas no banco de dados, pelos campos mais indicados para isso.
Além disso, implementei também 7 dos 8 desafios propostos. Ao todo foram 13 endpoints desenvolvidos, testados e implementados, com muita lógica e validação. 
Fiquei bastante orgulhoso do resultado.
