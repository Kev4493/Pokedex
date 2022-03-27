const url = 'https://pokeapi.co/api/v2/pokemon/';
let allPokemon = [];


async function loadPokemon() {
    document.getElementById('pokemon-container').innerHTML += '';

    for (let i = 0; i < 50; i++) {
        const pokemon_url = url + (i + 1);
        let response = await fetch(pokemon_url);
        current = await response.json();
        allPokemon.push(current);

        console.log(allPokemon[i]);

        renderPokemonPreviewCard(i);
        renderPokemonInfos(i);
        renderBackgroundPreviewcard(i);
    }
}

function renderPokemonPreviewCard(i) {
    document.getElementById('pokemon-container').innerHTML += /*html*/ `

        <div id="pokemon-preview-card-${i}" class="pokemon-preview-card">
            <div class="pokemon-name-container">
                <h1 id="pokemon-name-${i}" class="pokemon-name"></h1>
            </div>
            <div class="pokemon-picture-container">
                <img id="pokemon-picture-${i}" class="pokemon-picture">
            </div>
            <div class="pokemon-type-container">
                <p id="pokemon-type-${i}" class="pokemon-type"></p>
                <p id="pokemon-type-2-${i}" class="pokemon-type"></p>
            </div>
        </div>
    `;
}

function renderPokemonInfos(i) {
    document.getElementById(`pokemon-picture-${i}`).src = allPokemon[i]['sprites']['other']['dream_world']['front_default'];
    document.getElementById(`pokemon-name-${i}`).innerHTML = allPokemon[i]['name'];
    document.getElementById(`pokemon-type-${i}`).innerHTML = allPokemon[i]['types'][0]['type']['name'];

    for (let j = 0; j < allPokemon[i]['types'].length; j++) {
        document.getElementById(`pokemon-type-2-${i}`).innerHTML = allPokemon[i]['types'][j]['type']['name'];
    }
    
}

function renderBackgroundPreviewcard(i) {
    let PokemonType = allPokemon[i]['types'][0]['type']['name'];
    let pokemonPreviewCard = document.getElementById(`pokemon-preview-card-${i}`);

    if (PokemonType == 'grass') {
        pokemonPreviewCard.classList.add('bg-green');
    }
    if (PokemonType == 'fire') {
        pokemonPreviewCard.classList.add('bg-red');
    }
    if (PokemonType == 'water') {
        pokemonPreviewCard.classList.add('bg-blue');
    }
    if (PokemonType == 'bug') {
        pokemonPreviewCard.classList.add('bg-light-green');
    }
    if (PokemonType == 'normal') {
        pokemonPreviewCard.classList.add('bg-light-cyan');
    }
    if (PokemonType == 'poison') {
        pokemonPreviewCard.classList.add('bg-dark-green');
    }
    if (PokemonType == 'electric') {
        pokemonPreviewCard.classList.add('bg-yellow');
    }
    if (PokemonType == 'ground') {
        pokemonPreviewCard.classList.add('bg-brown');
    }
    if (PokemonType == 'fairy') {
        pokemonPreviewCard.classList.add('bg-fairy');
    }
    
}

