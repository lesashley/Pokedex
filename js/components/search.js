const Search = (update) => {
  const section = $('<section class="container"></section>');
  const containerInput = $('<div class="row box-input"></div>');
  const icon = $('<i class="material-icons search">search</i>');
  const input = $('<input type="text" class="col s6">');
  const span = $('<span class="az">A -Z</span>');
  const containerImg = $('<div class="row img"></div>');

  containerInput.append(icon);
  containerInput.append(input);
  containerInput.append(span);
  section.append(containerInput);
  section.append(containerImg);

  $.each(state.pokemon.pokemon_entries, function (index, value) {
    containerImg.append(PokeItem(value,update));
    if (index == 15) {
      return false;
    }
  });

  input.keyup(function () {
    const pokeSelect  = filterByName(state.pokemon.pokemon_entries, $(this).val(),update);
    if (pokeSelect.length != 0) {
      reRender(containerImg,pokeSelect,update);
    }
  });

  return section;
}

const PokeItem = (pokemon, update) => {
  const contImg = $('<div class="col s3 box"></div>');
  const div = $('<div class = box-gray></div>');
  const divImg = $('<div class="box-img"></div>');
  const img = $(`<img src='http://serebii.net/art/th/${pokemon.entry_number}.png' class="responsive-img"/>`);
  const divInfo = $('<div class="div-absolute"></div>');
  const icon1 = $('<i>poke</i>');
  const icon2 = $('<i>heart</i>');
  const icon3 = $('<i>flecha</i>');
  const name = $(`<p>${pokemon.pokemon_species.name}</p>`);

  divImg.append(img);
  divInfo.append(icon1);
  divInfo.append(icon2);
  divInfo.append(icon3);
  divInfo.append(name);
  // divImg.append(divInfo);
  div.append(divImg);
  div.append(divInfo);
  contImg.append(div);
  return contImg;
}

const reRender = (contentImg,pokemon, update) => {
    contentImg.empty();
    $.each(pokemon, function (index, value) {
      contentImg.append(PokeItem(value,update));
      if (index == 15) {
        return false;
      }
    });
}
