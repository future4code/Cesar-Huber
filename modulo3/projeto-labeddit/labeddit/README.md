# Projeto Labeddit
#### Desenvolvido por: Cesar Huber
<hr>
Link Surge: <a>https://political-rub.surge.sh/</a>
<br><br>

## Objetivo
Desenvolver um website responsivo que se assemelhe à rede social <i>reddit</i>. 
<br>Objetivo alcançado: ✅

<br>

## Funcionalidades
As principais funcionalidades a serem desenvolvidas e implementadas para considerar que o objetivo foi atingido foram:
<li> Tela de Login com Autenticação e Autorização no Feed e detalhes do Post
<li> Tela de Cadastro
<li> Comunicação com a API via requisições
<li> Sistema de Voto e Comentários, com contador para cada um
<li> Adicionar comentário a um post
<li> Visualizar os comentários de um post na tela de detalhe do post
<br><br>
<b><u>Funcionalidades extra implementadas:</u></b>
<li> Paginação e seleção de posts por página via Material UI
<li> Barra de busca que filtra posts por <i>nome de usuário</i>, <i>título</i> ou <i>conteúdo</i>
<li> Funcionalidade de Logout
<li> Loading em cada requisição
<li> Registro salvo de voto do post e do comentário
<li> Contador de caracteres para informar o usuário do limite de caracteres do post

<br>

## Como utilizar o site
Primeiro, garanta que já tenha feito seu cadastro ou login, pois só será possível acessar o feed com as postagens e interações após o login. <br>
Na página de feed, poderá buscar por algum usuário, título de post ou conteúdo de post na barra de busca. <br>
Poderá também postar algo novo, informando um título e um conteúdo. Logo abaixo da área de texto, poderá acompanhar a quantidade de caracteres utilizada na sua postagem. O limite é de 255 caracteres. <br>
Em cada um dos posts, pode votar up ou down, ou seja, curtir ou descurtir o post. Pode visualizar a somatória de votos no <i>footer</i> de cada post. Clicando no ícone de caixa de comentário, irá habilitar um novo campo na parte inferior do post para escrever um comentário neste post. <br>
Clicando no <i>header</i> do post (usuário ou título), irá para o detalhe do post, onde será possível visualizar o próprio post, deixar um comentário neste post ou visualizar os demais comentários deixados por outros usuários. Além disso, continua possível votar no post e agora também poderá votar em algum comentário.

<br>

## Tecnologias utilizadas
<li> React JS
<br> Bibliotecas:
<li> styled-components
<li> axios
<li> material ui