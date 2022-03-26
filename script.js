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
    }
}

function renderPokemonPreviewCard(i) {
    document.getElementById('pokemon-container').innerHTML += /*html*/ `

        <div id="pokemon-preview-card-${i}" class="pokemon-preview-card">
            <div class="pokemon-picture-container">
                <h1 id="pokemon-name-${i}"></h1>
                <img id="pokemon-picture-${i}" class="pokemon-picture">
            </div>
        </div>
    `;
}

function renderPokemonInfos(i) {
    document.getElementById(`pokemon-picture-${i}`).src = allPokemon[i]['sprites']['other']['dream_world']['front_default'];
}

