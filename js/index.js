'use strict';

const render = (root,data) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Search());

  root.append(wrapper);
}

const state = {
  pokemon : null,
  selectedPokemon: null,
  selectedImg: null,
  selectedWeakness : null
};

$( _ => {
  getPokemons((err, data) => {
    if (err) console.log(err);
    const root = $("#root");
    state.pokemon=data;
    render(root,data);
    $('.pre-load').hide('slow');
    $('#root').show();
  });
  $('.modal').modal();
})
