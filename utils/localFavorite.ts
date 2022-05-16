
const toggleFavorite = (id: number) => {

    //esta funcion va tomando id de pokemones y los acumula dentro de un array que esta
    //alojado en el localStorage

    //parseamos el objeto obtenido del localStorage
    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    if(favorites.includes(id)) {
        //si hay id incluido lo eliminamos
        favorites = favorites.filter(pokeId => pokeId != id)
    } else {
        //si no hay id incluido entonces agregamos el id dentro del array
        favorites.push(id);
    }

    //seteamos lo nuevo del array
    localStorage.setItem('favorites', JSON.stringify(favorites));

}

const existInFavorites = (id: number): boolean => {
    
    //si esta verficando del lado del servidor va a retornar un false y no va a ejecutar las lineas siguientes
    if(typeof window === 'undefined') return false; 

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites.includes(id) //retorna un boolean si es verdad
}

const pokemons = (): number[] => {

    return JSON.parse(localStorage.getItem('favorites') || '[]')
}

//exportacion por defecto
export default{
    toggleFavorite,
    existInFavorites,
    pokemons
}