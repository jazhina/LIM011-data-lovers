/* eslint-disable no-alert */
import POKEMON from './data/pokemon/pokemon.js';

import {
  traerDataPokemon,
  ordenarAscOdescData,
  filtrarPokemones,
  mostrarTop,
  buscarPokemonNombre,
  buscarPokemonId,
  traerDataPokemonModal,
} from './data.js';

const contenedorPokemons = document.querySelector('#contenedor-pokemons');
const contenedorPokemonsModal=document.querySelector("#pantalla-Modal");

const radioInput = document.querySelectorAll('input[name=ordena]');

const generarTemplatePokemones = (arr) => {
  let catalogoImagenes = '';
  arr.forEach((obj) => {
    catalogoImagenes += `
    <div class="pokemonModal" align="center">
    <img src = "${obj.imagen}"/>
    <h1>${obj.identificador}</h1><p>${obj.nombre}</p>
    </div>
    `;
  });
  
  return catalogoImagenes;
};

const generarTemplatePokemonesModal = (obj) => {
  `
    <div align="center">
    <img src = "${obj.imagen}"/>
    <h1> ${obj.identificador}</h1><p>  ${obj.nombre}</p>
    <p> ${obj.altura}</p><p> ${obj.peso}</p>
    </div>
    `;
};


const template = generarTemplatePokemones(traerDataPokemon(POKEMON));
const templateModal= generarTemplatePokemonesModal(traerDataPokemonModal(POKEMON));

const pintarPokemonesEnPantalla = (plantilla, nodoDom) => {
  nodoDom.innerHTML = '';
  nodoDom.innerHTML = plantilla;
};

const pintarPokemonesEnPantallaModal = (plantilla, nodoDom) => {
  nodoDom.innerHTML = '';
  nodoDom.innerHTML = plantilla;
};

pintarPokemonesEnPantalla(template, contenedorPokemons);
pintarPokemonesEnPantallaModal(templateModal, contenedorPokemonsModal);

const clasePokemonModal=document.querySelectorAll('.pokemonModal')
console.log(clasePokemonModal)

for (let i = 0; i < clasePokemonModal.length; i += 1) {
  clasePokemonModal[i].addEventListener('click', (event) => {
    const idPokemonABuscar = clasePokemonModal[i].children[1].firstChild;
    console.log(idPokemonABuscar);
    console.log(buscarPokemonId)
    const pokemonBuscadoPorId = traerDataPokemonModal(buscarPokemonId(POKEMON, idPokemonABuscar));
    console.log(pokemonBuscadoPorId)
    // const pintarPokemonBuscadoModal = generarTemplatePokemonesModal(pokemonBuscadoPorId);
    // pintarPokemonesEnPantallaModal(pintarPokemonBuscadoModal, contenedorPokemonsModal);
  });
};


const inputBuscaPokemon = document.getElementById('buscaPokemon');
inputBuscaPokemon.addEventListener('click', () => {
  const nombrePokemonBuscar = document.getElementById('buscar').value;
  const muestraPokemon = traerDataPokemon(buscarPokemonNombre((POKEMON), nombrePokemonBuscar));
  const pintarMuestraPokemon = generarTemplatePokemones(muestraPokemon);
  pintarPokemonesEnPantalla(pintarMuestraPokemon, contenedorPokemons);
});

// const filtrarTipoDePokemones = document.getElementById('tipoPokemones');
// filtrarTipoDePokemones.addEventListener('change', () => {
//   const tPokemones = filtrarTipoDePokemones.value;
//   const arregloFiltrado = traerDataPokemon(filtrarPokemones((POKEMON), tPokemones));
//   const pintarArregloFiltrado = generarTemplatePokemones(arregloFiltrado);
//   pintarPokemonesEnPantalla(pintarArregloFiltrado, contenedorPokemons);
// });

const desple = document.getElementById('desple');
desple.addEventListener('click', (event) => {
  const tPokemones = event.target.id;
  console.log(tPokemones)
  const arregloFiltrado = traerDataPokemon(filtrarPokemones((POKEMON), tPokemones));
  const pintarArregloFiltrado = generarTemplatePokemones(arregloFiltrado);
  pintarPokemonesEnPantalla(pintarArregloFiltrado, contenedorPokemons);
  // console.log(pintarPokemonesEnPantalla);
});

for (let i = 0; i < radioInput.length; i += 1) {
  radioInput[i].addEventListener('change', (event) => {
    const string = event.target.id;
    const arregloOrdenado = traerDataPokemon(ordenarAscOdescData((POKEMON), string));
    const pintarArregloOrdenado = generarTemplatePokemones(arregloOrdenado);
    pintarPokemonesEnPantalla(pintarArregloOrdenado, contenedorPokemons);
  });
}
const btnBuscarTop10 = document.getElementById('botonBuscar');
btnBuscarTop10.addEventListener('click', () => {
  const arregloMuestraTop = traerDataPokemon(mostrarTop(POKEMON));
  const pintarArregloMuestraTop = generarTemplatePokemones(arregloMuestraTop);
  pintarPokemonesEnPantalla(pintarArregloMuestraTop, contenedorPokemons);
});

// const pElement=document.createElement("p");
// const pElement1= `<p></p>`;

//document.getElementById("example").appendChild(pElement);
//document.getElementById("example").innerHTML=pElement
