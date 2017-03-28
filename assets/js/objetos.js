function Pokemon (nombre, color, puntosAtaque) {
    this.nombre = nombre;
    this.color = color;
    this.nivelDeAmistad = 0;
    this.puntosAtaque = puntosAtaque;
    this.vida = 100;
    this.saludar = function() {
        console.log("Hola, me llamo " + this.nombre);
    };
    this.beber = function (tipoAlcohol) {
        if(tipoAlcohol == "chelas"){
            this.nivelDeAmistad += 80;
        } else if(tipoAlcohol == "vodka") {
            this.nivelDeAmistad += 10;
        }
    }
    this.pelear = function (pokemonObjeto) {
        pokemonObjeto.vida = pokemonObjeto.vida - this.puntosAtaque;
    }
    
}

var pokemones = [];

function crearPokemon() {
    var nombrePokemon = document.getElementById("nombrePokemon");
    var colorPokemon = document.getElementById("colorPokemon");
    var puntosAtaque = document.getElementById("puntosDeAtaque");
    
    
    var pokemon = new Pokemon(nombrePokemon.value, 
                              colorPokemon.value, 
                              parseInt(puntosAtaque.value));
    pokemones.push(pokemon);                         
    console.log(pokemones);
    mostrarPokemon();
    nombrePokemon.value = " ";
    colorPokemon.value = " ";
    puntosAtaque.value = " ";
}

function mostrarPokemon() {
    var listaPokemones = document.getElementById("listaPokemones");
    var listaContrincantes = document.getElementById("listaContrincante");
    var opciones = document.createElement("select");
    var opcionesContrincantes = document.createElement("select");
    var elemento = document.createElement("option");
    var elementoContrincante = document.createElement("option");
   pokemones.forEach(function(pokemon) {
    elemento.innerText = pokemon.nombre + " " + pokemon.color + " " + pokemon.puntosAtaque;
    elementoContrincante.innerHTML = pokemon.nombre + " " + pokemon.color + " " + pokemon.puntosAtaque;
    listaPokemones.appendChild(elemento);
    listaContrincantes.appendChild(elementoContrincante);
    });
    
    
}