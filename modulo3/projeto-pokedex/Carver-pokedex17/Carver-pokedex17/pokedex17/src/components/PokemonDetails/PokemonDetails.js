import React from "react";
import {
  Images,
  SectionStats,
  ArticleTypes,
  ArticleMoves,
  SectionInfo
} from "./Styled";


export default function PokemonDetails(props) {
  if (!props.pokemon)
    return <p>Pokémon Não Encontrado</p>;

  const { name, sprites, stats, types, moves } = props.pokemon;

  return (
    <>
      <Images>
        <img alt={`${name} frente`} src={sprites.front_default} />
        <img alt={`${name} trás`} src={sprites.back_default} />
      </Images> 

      <SectionStats>
        <h2>Estatísticas</h2>
        {stats.map((stat) => (
          <article key={stat.stat.name}>
            <h3>{stat.stat.name}</h3>
            <p>{stat.base_stat}</p>
          </article>
        ))}
      </SectionStats>
      <SectionInfo>
        <h2>Tipos</h2>
        <ArticleTypes>
          {types.map((type) => <p key={type.slot}>{type.type.name}</p>)}
        </ArticleTypes>
        <h2>Movimentos</h2>
        <ArticleMoves>
          {moves.map(({ move }) => <p key={move.url}>{move.name}</p>)}
        </ArticleMoves>
      </SectionInfo>

    </>
  );
}
