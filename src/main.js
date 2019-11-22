
import POKEMON from './data/pokemon/pokemon.js';

import {
  traerDataPokemon,
  // traerDataPokemonModal,
  ordenarAscOdescData,
  filtrarPokemones,
  mostrarTop,
  buscarPokemon,
} from './data.js';

const radioInput = document.querySelectorAll('input[name=ordena]');

const containerElements = (obj) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
    <img class = "imagenPokemon" src = "${obj.imagen}"/>
    <h1>${obj.identificador}</h1>
    <p>${obj.nombre}</p>
  `;
  divElement.addEventListener('click', () => {
    const divElem = document.createElement('div');
    divElem.classList.add('modalDialog');
    divElem.innerHTML = `
    <div>
      <a href="#close" title="Close" class="close">X</a>
      <h2>${obj.nombre.toUpperCase()}</h2> 
      <img class = "imagenPokemon" src = "${obj.imagen}"/>
      <div id="prevolucion"></div>
    </div> 
    `;

    divElem.style.display = 'block';
    // divElem.addEventListener('click', () => {
    //   divElem.style.display = 'none';
    // });
    divElement.appendChild(divElem);
  });
  return divElement;
};

const generarTemplatePokemones = (arr) => {
  arr.forEach((obj) => {
    document.querySelector('#contenedor-pokemons').appendChild(containerElements(obj));
  });
};

// const generarTemplatePokemonesModal = (obj) => {
//   `
//     <div align="center">
//     <img src = "${obj.imagen}"/>
//     <h1> ${obj.identificador}</h1><p>${obj.nombre}</p>
//     <p> ${obj.altura}</p><p> ${obj.peso}</p>
//     </div>
//     `;
// };

generarTemplatePokemones(traerDataPokemon(POKEMON));
// Buscar Pokemon
const inputBuscaPokemon = document.getElementById('buscaPokemon');
inputBuscaPokemon.addEventListener('click', () => {
  const nombrePokemonBuscar = document.getElementById('buscar').value;
  const muestraPokemon = traerDataPokemon(buscarPokemon((POKEMON), nombrePokemonBuscar));
  generarTemplatePokemones(muestraPokemon);
});
// Filtrar Pokemons
const desple = document.getElementById('desple');
desple.addEventListener('click', (event) => {
  const tPokemones = event.target.id;
  const arregloFiltrado = traerDataPokemon(filtrarPokemones((POKEMON), tPokemones));
  document.querySelector('#contenedor-pokemons').innerHTML = '';
  generarTemplatePokemones(arregloFiltrado);
});
// Ordenar Ascendente y descendente
for (let i = 0; i < radioInput.length; i += 1) {
  radioInput[i].addEventListener('change', (event) => {
    const string = event.target.id;
    const arregloOrdenado = traerDataPokemon(ordenarAscOdescData((POKEMON), string));
    document.querySelector('#contenedor-pokemons').innerHTML = '';
    generarTemplatePokemones(arregloOrdenado);
  });
}
// MostrarTop10
const btnBuscarTop10 = document.getElementById('botonBuscar');
btnBuscarTop10.addEventListener('click', () => {
  const arregloMuestraTop = traerDataPokemon(mostrarTop(POKEMON));
  document.querySelector('#contenedor-pokemons').innerHTML = '';
  generarTemplatePokemones(arregloMuestraTop);
});
