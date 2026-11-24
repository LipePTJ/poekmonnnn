function PokemonCard({ pokemon }) {
  // Divide a URL nas barras "/" para extrair o ID do Pokémon
  const partesUrl = pokemon.url.split('/');
  const id = partesUrl[partesUrl.length - 2];

  // Formata o número para sempre ter 3 dígitos (ex: "1" vira "001")
  const numeroFormatado = id.padStart(3, '0');

  // Monta o link da imagem oficial usando o ID
  const imagemUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <div className="card">
      <span className="numero">#{numeroFormatado}</span>
      <div className="imagem-fundo">
        <img src={imagemUrl} alt={pokemon.name} />
      </div>
      <h3>{pokemon.name}</h3>
    </div>
  );
}

export default PokemonCard;