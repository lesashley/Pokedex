'use strict';
const filterByName = (pokemon, query) =>{
  return pokemon.filter((e,i) => {
    if (e.name.toLowerCase().indexOf(query.toLowerCase()) != -1 ) {
      return e;
    }
  });
}
