import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemButtonLink from './components/ImagemButtonLink/ImagemButtonLink'
import { MainContainer, PageSectionContainer, TitleH2General } from './components/styled/styled';
import { createGlobalStyle } from 'styled-components';
import perfil from "./img/perfil.png"
import mercadopago from "./img/mercadopago.png"
import rede from "./img/rede.png"
import { CardPequeno } from './components/CardPequeno/CardPequeno';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    a:link{
      text-decoration: none;
    };
    a:visited{
      text-decoration: none;
      color: black;
    }
  }
  `;

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <PageSectionContainer>
        <TitleH2General>Dados pessoais</TitleH2General>
        <CardGrande
          imagem={perfil}
          nome="Cesar Huber"
          descricao="Olá! Sou estudante de desenvolvimento web full stack na Labenu e fiz esta página de perfil usando React com Styled Components. Gosto de ser desafiado e de aprender cada vez mais, para deixar as páginas com a cara que eu quero que fiquem. Não me contento com uma resposta 'Não é possível fazer isso'. Sei que deve ter uma maneira de fazer acontecer e eu vou encontrar e aprender."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
          logo="https://cdn-icons-png.flaticon.com/512/747/747314.png"
          titulo="e-mail:"
          conteudo="cesar.huber@gmail.com"
        />

        <CardPequeno
          logo="https://cdn-icons-png.flaticon.com/512/3203/3203071.png"
          titulo="Endereço:"
          conteudo="Vila Formosa, São Paulo, SP"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <TitleH2General>Experiências profissionais</TitleH2General>
        <CardGrande
          imagem={mercadopago}
          nome="MercadoPago"
          descricao="Estratégia de Pricing"
        />

        <CardGrande
          imagem={rede}
          nome="Rede"
          descricao="Estratégia de Pricing"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <TitleH2General>Minhas redes sociais</TitleH2General>
        <a href="https://www.linkedin.com/in/cesar-huber-79149624/" target="blank">
          <ImagemButtonLink
            imagem="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            texto="Linkedin"
          />
        </a>

        <a href="https://github.com/cesarhuber" target="blank">
          <ImagemButtonLink
            imagem="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            texto="GitHub"
          />
        </a>
      </PageSectionContainer>
    </MainContainer>
  );
}

export default App;
