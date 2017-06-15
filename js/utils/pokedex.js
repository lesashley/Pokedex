const getPokemons = (callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',_ => {
    if (xhr.status != 200) callback(new Error("Error al obtener datos"));
    callback(null,xhr.response);
  });

  xhr.open('GET','http://pokeapi.co/api/v2/pokedex/1/');
  xhr.responseType = 'json';
  xhr.send();
}

// const getMovie = (id,callback) => {
//   $.get('api/movies/'+id,(data) => {
//     if (data.status != 200) callback(new Error("Error al obtener la peli"));
//     callback(null,data);
//   })
// }
