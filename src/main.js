
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
  <img src = "${obj.imagen}"/>
  <h1>${obj.identificador}</h1><p>${obj.nombre}</p>
  `;
  divElement.addEventListener('click', () => {
    const divElem = document.createElement('div');
    divElem.classList.add('Modal');
    divElem.setAttribute("id", "miModal");
    divElem.innerHTML = `
    <div class="modal-contenido">
      <a href="#" >X</a>
      <h2>${obj.nombre.toUpperCase()}</h2>
      <img src = "${obj.imagen}"/>
      <p>${obj.identificador}</p>
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

