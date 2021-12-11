# Labe-X
### Desenvolvedor: Cesar Huber
Tecnologias: React JS, styled-components, axios, react-router-dom
## Objetivo
O objetivo deste projeto foi aprendermos a utilizar as seguintes bibliotecas e funcionalidades do ReactJS: 
<li> router do react js, nomeando páginas e fazendo a navegação através da funcionalidade useHistory fornecida pelo react-router 
<li> custom hooks, como o useProtectedPage e o useForm
<li> Autenticação e Controle de Acesso via Autorização

<br>
Para isto, criamos um site de viagens espaciais, inspirado na Space-X. 
<br><br>Objetivo atingido: ✅
<br><br>

## Funcionalidades
Dentre todas as funcionalidades implementadas ao longo do desenvolvimento deste site, as principais que se destacam são:
<li> Funcionalidade de Login com token armazenado em localStorage
<li> Utilização do <i>useForm</i> e <i>tag form</i> para controle e envio de informações via form, com input e select
<li> Adaptação do useProtectedPage para, além de controlar as páginas com acesso restrito, também pular a página de login quando o acesso já estiver concedido
<br><br>

## Navegando pelo site
A página inicial, lindamente estilizada por moi (rs), é a porta de entrada para duas páginas principais, a lista de viagens e a área administrativa. 
Na página de Lista de Viagens, é possível visualizar as viagens disponíveis (as datas estão um pouco desatualizadas) e, ao clicar em cima delas, ir para a página de formulário de cadastro à viagem. Preenchendo as informações corretamente, o formulário é enviado e o aplicante aparece na página de detalhes de cada viagem na área admin. 
Na outra página principal, área administrativa, é necessário realizar login para acessar, então, se não estiver com acesso concedido, a tela de Login será mostrada, onde deverá realizar login via email e senha previamente cadastrados no Postman.
Uma vez efetuado o login, não é mais necessário realizar login quando entrar nas áreas restritas, visto que o token é armazenado em localStorage e há um <i>custom hook</i> que inibe o login quando o acesso já está concedido. 
Ná área administrativa, é possível visualizar a lista de viagens, bem como deletar uma viagem individualmente. Ao clicar na viagem, será exibida a tela de detalhes da viagem, onde aparecerão os detalhes da viagem, os candidatos à espera de uma resposta e os candidatos aprovados. 
Na tela principal de admin também há a opção de fazer logout, o que limpa o token de acesso e faz com que seja necessário fazer nogo Login para acessar áreas restritas do site.
