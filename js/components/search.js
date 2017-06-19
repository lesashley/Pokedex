const Search = (update) => {
  const section = $('<section class="container"></section>');
  const containerInput = $('<div class="row box-input"></div>');
  const icon = $('<i class="material-icons search">search</i>');
  const divInput = $('<div class ="col s6"></div>');
  const input = $('<input type="text" class="n">');
  const divSpan = $('<div class ="col s6 right"></div>');
  const span = $('<span class="az">A - Z</span>');
  const containerImg = $('<div class="row img"></div>');

  containerInput.append(icon);
  divInput.append(input);
  divSpan.append(span);
  containerInput.append(divInput);
  containerInput.append(divSpan);
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
      reRender(containerImg,pokeSelect,update);
  });
  return section;
}

const PokeItem = (pokemon, update) => {
  const contImg = $('<div class="col s3 box"></div>');
  const div = $('<div class = box-gray></div>');
  const divImg = $('<div class="box-img"></div>');
  const img = $(`<img src='https://serebii.net/art/th/${pokemon.entry_number}.png' class="responsive-img"/>`);
  const divInfo = $('<div class="div-absolute responsive-img"></div>');
  const icon1 = $('<a href="#modal-pokemon"><img src="icon/pokeball_gray.png" class="icon-pokemon"/></a>');
  const icon2 = $('<img src="icon/valentines-heart.png" class="icon-pokemon"/>');
  const icon3 = $('<img src="icon/data.png" class="icon-pokemon"/>');
  const name = $(`<p class="name-pokemon">${pokemon.pokemon_species.name}</p>`);

  divImg.append(img);
  divInfo.append(icon1);
  divInfo.append(icon2);
  divInfo.append(icon3);
  divInfo.append(name);
  div.append(divImg);
  div.append(divInfo);
  contImg.append(div);

  icon1.on('click', (e) =>{
    e.preventDefault();
    $('.modal').empty();
    state.selectedImg = div[0].outerHTML;
    const name = pokemon.pokemon_species.name;
    const descriptionURL = pokemon.pokemon_species.url;
    //descripcion
    $.getJSON(descriptionURL,function(response){
      state.selectedPokemon = response;
	   });
    $.getJSON("https://pokeapi.co/api/v2/pokemon/"+pokemon.entry_number,function(data){
      $('.modal').append(ModalPokemon(data,name, state.selectedPokemon));
	   });
     $.getJSON("https://pokeapi.co/api/v2/type/4/",function(data){
       state.selectedWeakness = data;
 	   });
  })

  return contImg;
}

const reRender = (contentImg,pokemon, update) => {
    contentImg.empty();
    $.each(pokemon, function (index, value) {
      contentImg.append(PokeItem(value,update));
    });
}
