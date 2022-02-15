# Projeto LabECommerce | v Backend
Desenvolvedor: Cesar Huber

API Doc: <br> https://documenter.getpostman.com/view/18385621/UVeNkMpU
APP Heroku: <br> https://projeto-labecommerce.herokuapp.com/

<hr>

## Objetivo
Criar os endpoints, as requisições e as lógicas para consulta no banco de dados de um sistema de E-Commerce básico.
Os endpoints criados foram:
<li> Criação de usuário (POST)
<li> Criação de produto (POST)
<li> Criação de compra (POST)
<li> Pegar usuários (GET)
<li> Pegar produtos (GET)
<li> Pegar compras (GET)
<br><br>
Todos os objetivos foram alcançados com êxito.
<br> Um destaque para a lógica utilizada na criação da compra. Ao invés de utilizar apenas uma tabela de compras conforme proposto no projeto, eu modifiquei a arquitetura a fim de ter duas tabelas, uma com a informação da compra e outra com a informação dos produtos comprados, deixando a solução mais completa, visto que é possível realizar uma compra com múltiplos produtos de uma vez desta forma.
<br> Um desafio que foi bacana de ser feito foi trazer, além das informações dos usuários (no endpoint Get All Users), foi incluir também a informação dos produtos comprados pelo usuário. O fato de ter dividido as informações de compra (usuário e produtos) em duas tabelas, facilitou para que eu utilizasse uma lógica de loop com conexão direta apenas com as tabelas que iria necessitar.

<hr>

## Tecnologias

O projeto foi desenvolvido principalmente em Typescript, sendo rodado num servidor com node js. As bibliotecas utilizadas neste projeto foram: 
<li> express
<li> cors
<li> dotenv
<li> knex
<li> mysql
<li> ts-node-dev

<br>
A documentação (bem como os testes) foi feita pelo aplicativo Postman.

