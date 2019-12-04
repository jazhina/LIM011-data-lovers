
import POKEMON from './data/pokemon/pokemon.js';

import {
  traerDataPokemon,
  ordenarAscOdescData,
  filtrarPokemones,
  mostrarTop,
  buscarPokemon,
  buscador,
  filtrarPorCandy,
} from './data.js';

const radioInput = document.querySelectorAll('input[name=ordena]');

const containerElements = (obj) => {
  const divElement = document.createElement('div');
  divElement.innerHTML = `
  <img class="imagenPokemon" src = "${obj.imagen}"/>
  <h1>${obj.identificador}</h1><p>${obj.nombre}</p>
  `;
  divElement.addEventListener('click', () => {
    
    //console.log(filtrarPorCandy((POKEMON),varCandy))
    const divElem = document.createElement('div');
    divElem.classList.add('modalDialog');
    if (obj.multiplicador === null || obj.caramelos === undefined) {
      divElem.innerHTML = `
    <div>
      <a href = "#close" title = "Close" class = "close">X</a>
      <seccion class = "seccionleft" >
      <h2>${obj.nombre.toUpperCase()}</h2>
      <img  src = "${obj.imagen}"/>
      </seccion>
      <seccion class = "seccionrigth">
      <p>Peso: ${obj.peso}  Altura: ${obj.altura} Tipo: ${obj.tipo}</p>
      <p>Caramelos: No tiene asignada esta propiedad</p>
      <p>Multiplicador: No tiene asignado un multiplicador</p>
      </seccion>
      <seccion>
      <div id="prevolucion">
        <p>Sig. evolucion: ${obj.nombre}</p>
      </div>
      </seccion>
    </div>
    `;
    } else {
      divElem.innerHTML = `
    <div>
      <a href = "#close" title = "Close" class = "close">X</a>
      <h2>${obj.nombre.toUpperCase()}</h2>
      <img class="imagenPokemon" src = "${obj.imagen}"/>
      <seccion>
      <p>Peso: ${obj.peso}  Altura: ${obj.altura}</p>
      <p>Tipo: ${obj.tipo}</p>
      <p>Caramelos: ${obj.caramelos}</p>
      <p>Multiplicador: ${obj.multiplicador}</p>
      </seccion>
      <seccion id="evolucion">
      <div id="prevolucion">
      <p>Sig. evolucion: ${obj.siguiente_evolucion[0]}</p>
      </div>
      </seccion>
    </div> 
    `;
    }

    document.getElementById('contenedor-modal').appendChild(divElem);
    divElem.style.display = 'block';
    divElem.querySelector('.close').addEventListener('click', () => {
      divElem.classList.remove('modalDialog');
      document.querySelector('#contenedor-modal').innerHTML = '';
    });
  // divElement.appendChild(divElem);
  });
  return divElement;
};

// const evolucion = () => {
//   console.log(searchPokemon(POKEMON, '003'));
// }

const generarTemplatePokemones = (arr) => {
  arr.forEach((obj) => {
    document.querySelector('#contenedor-pokemons').appendChild(containerElements(obj));
  });
};

generarTemplatePokemones(traerDataPokemon(POKEMON));


const inputBuscaPokemon = document.getElementById('buscaPokemon');
inputBuscaPokemon.addEventListener('click', () => {
  const nombrePokemonBuscar = document.getElementById('buscar').value;
  const muestraPokemon = traerDataPokemon(buscarPokemon((POKEMON), nombrePokemonBuscar));
  generarTemplatePokemones(muestraPokemon);
});


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

const buscaNombre = document.getElementById('buscar');
buscaNombre.addEventListener('input',(event) => {
  const pokeBuscado = traerDataPokemon(buscador((POKEMON), event.target.value));
  document.querySelector('#contenedor-pokemons').innerHTML = '';
  generarTemplatePokemones(pokeBuscado);
});
