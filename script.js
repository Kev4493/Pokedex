const url = 'https://pokeapi.co/api/v2/pokemon/';
let allPokemon = [];


async function loadPokemon() {
    document.getElementById('pokemon-container').innerHTML += '';

    for (let i = 0; i < 51; i++) {
        const pokemon_url = url + (i + 1);
        let response = await fetch(pokemon_url);
        current = await response.json();
        allPokemon.push(current);

        console.log(allPokemon[i]);

        renderPokemonPreviewCards(i);
        renderBackgroundPreviewcards(i);
    }
}

// === Preview Cards: ===

function renderPokemonPreviewCards(i) {
    document.getElementById('pokemon-container').innerHTML += /*html*/ `

        <div onclick="openDialog(${i})" id="pokemon-preview-card-${i}" class="pokemon-preview-card">
            <div class="pokemon-picture-container">
                ${templateCreatePictureField(i)}
            </div>
            <div class="pokemon-name-container">
                ${templateCreateNameField(i)}
            </div>
            <div class="pokemon-type-container">
                ${templateCreateTypeField(i)}
            </div>
        </div>
    `;
}


function templateCreatePictureField(i) {
    let text = '';
        text += `<img id="pokemon-picture-${i}" class="pokemon-picture" src="${allPokemon[i]['sprites']['other']['dream_world']['front_default']}">`;
    return text;
}


function templateCreateNameField(i) {
    let text = '';
        text += `<h1 id="pokemon-name-${i}" class="pokemon-name">
                    ${allPokemon[i]['name']}
                </h1>`;
    return text;  
}


function templateCreateTypeField(i) {
    let text = '';
    for (let j = 0; j < allPokemon[i]['types'].length; j++) {
        text += `<p id="pokemon-type-${i}" class="pokemon-type">
                    ${allPokemon[i]['types'][j]['type']['name']}
                </p>`;
    }
    return text;
}


function renderBackgroundPreviewcards(i) {
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


// === Dialog ===

function openDialog(i) {
    let dialog = document.getElementById('dialog-bg');
    dialog.innerHTML = '';
    dialog.classList.remove('d-none');
    dialog.classList.add('d-flex');
    dialog.innerHTML = templateRenderDialogCard(i);
}

function templateRenderDialogCard(i) {
    return /*html*/ `

        <div class="dialog-card">

            <div class="pokemon-dialog-img-container">
                <img id="pokemon-dialog-img${i}">
            </div>

            <div class="pokemon-dialog-name-container">
                <h1 id="pokemon-dialog-name${i}"></h1>
            </div>


        </div>
    `;

}

