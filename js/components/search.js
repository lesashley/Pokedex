const Search = (update) => {
  const section = $('<section class="container"></section>');
  const containerInput = $('<div class="row"></div>');
  const icon = $('<i class="">icon</i>');
  const input = $('<input type="text" class="col s6">');
  const span = $('<span>A - Z</span>');
  const containerImg = $('<div class="row"></div>');

  containerInput.append(icon);
  containerInput.append(input);
  containerInput.append(span);
  section.append(containerInput);
  section.append(containerImg);

  // state.pokemon.forEach((pokemon)=>{
  //   containerImg.append(PokeItem(pokemon,update));
  // })

  input.keyup(function () {
    const pokeSelect  = filterByName(state.pokemon.results, $(this).val(),update);
    if (pokeSelect.length != 0) {
      reRender(containerImg,pokeSelect,update);
    }
  });

  return section;
}


const PokeItem = (pokemon, update) => {
  const divImg = $('<div class="col s2"></div>');
  const img = $(`<img src='img/${pokemon.entry_number}'/>`);
  const divInfo = $('<div class="div-absolute"></div>');
  const icon1 = $('<i>poke</i>');
  const icon2 = $('<i>heart</i>');
  const icon3 = $('<i>flecha</i>');
  const name = $(`<p>${pokemon.results.name}</p>`);


  divImg.append(img);
  divInfo.append(icon1);
  divInfo.append(icon2);
  divInfo.append(icon3);
  divImg.append(divInfo);

  return divImg;
}


const reRender = (contentImg,pokemon, update) => {
    contentImg.empty();
    pokemon.forEach(e => {
        contentImg.append(PokeItem(e,update));
    });
}
