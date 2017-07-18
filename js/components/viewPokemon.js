'use strict';

const ModalPokemon = (pokemonSelected, name, select) => {
  var habilidades = "", tipos ="", debilidades="";
  let abilities = pokemonSelected.abilities.forEach((e)=>{habilidades += "<p>"+e.ability.name+"</p>";});
  let types = pokemonSelected.types.forEach((e)=>{tipos += "<div class='col m3 s6 box-green'>"+e.type.name+"</div>";});
  let weakness = state.selectedWeakness.damage_relations.double_damage_from.forEach((e)=>{debilidades += "<div class='col m3 s6 box-orange'>"+e.name+"</div>";})
  const modalContent = $('<div class="modal-content row"></div>');
  const contentTitle = $('<div class="col s12 center-align"></div>');
  const title = $('<h2 class="h2-pokemon">'+name+'</h2>');
  const close = $('<a href="#" class="modal-close"><img src="icon/cross-out.png"/></a>');
  const contentPokemon = $('<div class="row"></div>');
  const contentImg = $('<div class="col m5 s12">'+state.selectedImg+'</div>');
  const contentInfo = $('<div class="col m7 s12"></div>');
  const description = $('<div><p class="mt0">'+select.flavor_text_entries[3].flavor_text+'</p></div>');
  const datosPokemon = $('<div class="div-celeste col s12"></div>');
  const item1 =$('<div class="col m5 s6"><p>Altura:</p><p>'+pokemonSelected.height/10+' m'+'</p></div>');
  const item2 =$('<div class="col m5 s6"><p>Categoria:</p><p>'+select.genera[2].genus+'</p></div>');
  const item3 =$('<div class="col m5 s6"><p>Peso:</p><p>'+pokemonSelected.weight/10+" kg"+'</p></div>');
  const item4 =$('<div class="col m5 s6"><p>Habilidad:</p>'+habilidades+'</div>');
  const item5 =$('<div class="col m5 s6"><p>Sexo:</p><p></p></div>');
  const tipo = $('<div class="col s12"><h6>Tipo:</h6></div>');
  const debilidad = $('<div class="col s12"><h6>Debilidad:</h6></div>');

  contentTitle.append(title);
  contentTitle.append(close);
  contentInfo.append(description);
  datosPokemon.append(item1);
  datosPokemon.append(item2);
  datosPokemon.append(item3);
  datosPokemon.append(item4);
  datosPokemon.append(item5);
  contentInfo.append(datosPokemon);
  tipo.append(tipos);
  debilidad.append(debilidades);
  contentInfo.append(tipo);
  contentInfo.append(debilidad);
  modalContent.append(contentTitle);
  modalContent.append(contentImg);
  modalContent.append(contentInfo);

  close.on('click',function () {
    $('.modal').modal('close');
  })

  return modalContent;
}

const Weaknesses = (data) => {
}
