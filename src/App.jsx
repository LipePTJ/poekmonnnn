import { useState, useEffect } from 'react';
import api from './services/api';
import PokemonCard from './components/PokemonCard';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [busca, setBusca] = useState('');

  useEffect(() => {
    async function buscarPokemons() {
      try {
        const resposta = await api.get('/pokemon?limit=151');
        setPokemons(resposta.data.results);
      } catch (err) {
        setErro('Ops! Não foi possível carregar os Pokémon. Tente novamente.');
      } finally {
        setCarregando(false);
      }
    }

    buscarPokemons();
  }, []);

  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="pagina">
      <header className="cabecalho">
        <h1>Pokédex React</h1>
        <p>Descubra e pesquise seus Pokémon favoritos</p>
        <input
          type="text"
          placeholder="Buscar Pokémon pelo nome (ex: pikachu)..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="campo-busca"
        />
      </header>

      <div className="container">
        {carregando && <p className="aviso">Carregando dados...</p>}

        {erro && <p className="aviso erro">{erro}</p>}

        {!carregando && !erro && pokemonsFiltrados.length === 0 && (
          <p className="aviso">Nenhum Pokémon encontrado com "{busca}".</p>
        )}

        {!carregando && !erro && (
          <main className="lista-pokemons">
            {pokemonsFiltrados.map((pokemon) => (
              <PokemonCard key={pokemon.name} pokemon={pokemon} />
            ))}
          </main>
        )}
      </div>
    </div>
  );
}

export default App;