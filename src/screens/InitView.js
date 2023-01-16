import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import PokemonItem from '../components/PokemonItem'
import { getPokemonDetailsApi, getPokemonsApi, getPokemonSearchApi } from '../api/pokemon';
import { SearchBar } from '@rneui/base';

const InitView = ({ navigation }) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsSearch, setPokemonsSearch] = useState([]);
  const [search, setSearch] = useState('');
  const [nextUrl, setNextUrl] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(0);


  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      const arrayPokemons= await loadArray(response.results);
      setNextUrl(response.next);
      setPokemons([...pokemons, ...arrayPokemons]);
    } catch (error) {
      console.error(error);
    }
  };
  const searchPokemons = async (searchItem)=>{
    try {
      const response = await getPokemonSearchApi(searchItem);
      const arrayPokemons= await loadArray(response);
      setPokemonsSearch(arrayPokemons);
    } catch (error) {
      
    }

  }
  const loadArray =async(response)=>{
    const pokemonsArray = [];
    try {
      for await (const pokemon of response) {
        const pokemonDetails = await getPokemonDetailsApi(pokemon.url);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          weight:pokemonDetails.weight,
          height:pokemonDetails.height,
          sprites:pokemonDetails.sprites,
          moves:pokemonDetails.moves,
          type: pokemonDetails.types[0].type.name,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }
    } catch (error) {
      
    }
      return pokemonsArray
  }
  return (
    <View>
      <SearchBar
     onSubmitEditing={()=>{
     searchPokemons(search)
    }
     }
     onChangeText={string =>setSearch(string)}
     value={search}
      inputContainerStyle={{ backgroundColor: 'white',width: '100%', borderRadius: 10, height: 25}}
      />
      <PokemonItem 
      loadPokemons={loadPokemons}
      next={nextUrl}
      search={search}
      navigation={navigation} 
      pokemons={search ? pokemonsSearch :pokemons} />
    </View>
  )
}

export default InitView

const styles = StyleSheet.create({
  searchInput: {
    padding: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'white',
    borderTopWidth: 0,
    borderBottomWidth: 0,
}
})