import { API } from "../utils/constants"


export async function getPokemonsApi(url) {
    try {
        const response = await fetch(url || `${API}/pokemon?limit=10&offset=0`);
        const result = await response.json();
        return result;
      } catch (error) {
        console.error(error);
      } 
  }
  
  export async function getPokemonDetailsApi(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  export async function getPokemonSearchApi(search) {
    try {
      let regex = new RegExp(search, 'i'); 
      const response = await fetch(`${API}/pokemon?limit=100000`);
      const result = await response.json();
      const searchFilter=result.results.filter(item => regex.test(item.name));
      console.log(search,searchFilter)
      return searchFilter;
    } catch (error) {
      console.log(error)
      throw error;
    }
  }
  