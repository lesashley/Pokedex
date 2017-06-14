'use strict';

const render = (root,data) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());


  root.append(wrapper);
}

const state = {
  pokemon : null,
  selectedPokemon: null
};

$( _ => {
  getPokemons((err, data) => {
    if (err) console.log(err);
    const root = $("#root");
    render(root,data);
  });
})
