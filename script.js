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
    if (allPokemon[i]['types'][0]['type']['name'] == 'grass') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-green');
    }

    if (allPokemon[i]['types'][0]['type']['name'] == 'fire') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-red');
    }

    if (allPokemon[i]['types'][0]['type']['name'] == 'water') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-blue');
    }

    if (allPokemon[i]['types'][0]['type']['name'] == 'bug') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-light-green');
    }

    if (allPokemon[i]['types'][0]['type']['name'] == 'normal') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-light-cyan');
    }

    if (allPokemon[i]['types'][0]['type']['name'] == 'poison') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-dark-green');
    }

    if (allPokemon[i]['types'][0]['type']['name'] == 'electric') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-yellow');
    }

    if (allPokemon[i]['types'][0]['type']['name'] == 'ground') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-brown');
    }

    if (allPokemon[i]['types'][0]['type']['name'] == 'fairy') {
        document.getElementById(`pokemon-preview-card-${i}`).classList.add('bg-fairy');
    }
    
}

