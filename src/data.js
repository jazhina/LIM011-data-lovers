export const traerDataPokemon = (arr) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArray.push({
      identificador: arr[i].id,
      nombre: arr[i].name,
      imagen: arr[i].img,
      altura: arr[i].height,
      peso: arr[i].weight,
      tipo: arr[i].type,
      caramelos: arr[i].candy_count,
      multiplicador: arr[i].multipliers,
      debilidades: arr[i].weaknesses,
    });
  }
  return newArray;
};

export const ordenarAscOdescData = (arr, string) => {
  if (string === 'orAsc') {
    arr.sort((p1, p2) => ((p1.name < p2.name) ? -1 : 1));
    return arr;
  }
  arr.sort((p1, p2) => ((p1.name > p2.name) ? -1 : 1));
  return arr;
};
// export const filtrarPokemones = (arr, tPokemones) => {
//   const arregloFiltradoPokemones = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     const tipoFiltrado = arr[i].type;
//     const resultado = tipoFiltrado.filter((elemento) => elemento === tPokemones);
//     if (resultado !== '') {
//       arregloFiltradoPokemones.push(arr[i]);
//     }
//   }
//   return arregloFiltradoPokemones;
// };
export const filtrarPokemones = (arr, tPokemones) => {
  const arregloFiltradoPokemones = [];
  for (let i = 0; i < arr.length; i += 1) {
    const tipoFiltrado = arr[i].type;
    for (let j = 0; j < tipoFiltrado.length; j += 1) {
      if (tipoFiltrado[j] === tPokemones) {
        arregloFiltradoPokemones.push(arr[i]);
      }
    }
  }
  return arregloFiltradoPokemones;
};


export const mostrarTop = (arr) => {
  arr.sort((p1, p2) => ((p1.spawn_chance > p2.spawn_chance) ? -1 : 1));
  const arrTop = arr.slice(0, 10);
  return arrTop;
};

export const buscarPokemon = (arr, nombrePokemonBuscar) => {
  const arrBuscaPokemon = [];
  arrBuscaPokemon.push(arr.find((elemento) => elemento.name === nombrePokemonBuscar));
  return arrBuscaPokemon;
};
// export const buscarPokemonNombre = (arr, nombrePokemonBuscar) => {
//   const arrBuscaPokemon = [];
//   arrBuscaPokemon.push(arr.find((elemento) => elemento.name === nombrePokemonBuscar));
//   return arrBuscaPokemon;
// };

// // export const buscarPokemonId = (arr, idPokemonBuscar) => {
// //   const arrBuscaPokemon = [];
// //   arrBuscaPokemon.push(arr.find((elemento) => elemento.id === idPokemonBuscar));
// //   return arrBuscaPokemon;
// // },

// export const buscarPokemonId = (arr, idPokemonABuscar) => {
//   const arrBuscaPokemon = [];
//   arrBuscaPokemon.push(arr.find((elemento) => elemento.id === idPokemonABuscar));
//   return arrBuscaPokemon;
//  };
