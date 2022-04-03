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
    return`
        <img id="pokemon-picture-${i}" class="pokemon-picture" src="${allPokemon[i]['sprites']['other']['dream_world']['front_default']}">
    `;
}


function templateCreateNameField(i) {
    return`
        <h1 id="pokemon-name-${i}" class="pokemon-name">
            ${allPokemon[i]['name']}
        </h1>
    `;
}


function templateCreateTypeField(i) {
    let text = ''; // let text nur bei for-schleife?
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

function closeDialog(i) {
    let dialog = document.getElementById('dialog-bg');
    dialog.innerHTML = '';
    dialog.classList.add('d-none');
    dialog.classList.remove('d-flex');
}


function openDialog(i) {
    let dialog = document.getElementById('dialog-bg');
    dialog.innerHTML = '';
    dialog.classList.remove('d-none');
    dialog.classList.add('d-flex');
    dialog.innerHTML = templateRenderDialogCard(i);

    renderBackgroundDialogCards(i);
    loadStats(i);
}


function renderBackgroundDialogCards(i) {
    let PokemonType = allPokemon[i]['types'][0]['type']['name'];
    let pokemonDialogCard = document.getElementById(`dialog-card`);

    if (PokemonType == 'grass') {
        pokemonDialogCard.classList.add('bg-green');
    }
    if (PokemonType == 'fire') {
        pokemonDialogCard.classList.add('bg-red');
    }
    if (PokemonType == 'water') {
        pokemonDialogCard.classList.add('bg-blue');
    }
    if (PokemonType == 'bug') {
        pokemonDialogCard.classList.add('bg-light-green');
    }
    if (PokemonType == 'normal') {
        pokemonDialogCard.classList.add('bg-light-cyan');
    }
    if (PokemonType == 'poison') {
        pokemonDialogCard.classList.add('bg-dark-green');
    }
    if (PokemonType == 'electric') {
        pokemonDialogCard.classList.add('bg-yellow');
    }
    if (PokemonType == 'ground') {
        pokemonDialogCard.classList.add('bg-brown');
    }
    if (PokemonType == 'fairy') {
        pokemonDialogCard.classList.add('bg-fairy');
    }
}


function templateRenderDialogCard(i) {
    return /*html*/ `
        <div class="dialog-card" id="dialog-card">
            <div class="dialog-header">
                <div class="pokemon-dialog-name-container">
                    ${templateCreateDialogNameField(i)}
                </div>
                <div class="pokemon-dialog-img-container">
                    ${templateCreateDialogPictureField(i)}
                </div>
            </div>
            <div class="pokemon-dialog-stats-container" id="dialog-stats-container${i}"></div>
        </div>
    `;
}


function templateCreateDialogPictureField(i) {
    return `
        <img id="pokemon-dialog-img${i}" class="pokemon-dialog-img" src="${allPokemon[i]['sprites']['other']['dream_world']['front_default']}">
    `;
}


function templateCreateDialogNameField(i) {
    return `
        <h1 id="pokemon-dialog-name${i}" class="pokemon-dialog-name">
            ${allPokemon[i]['name']}
        </h1>
    `;
}


function loadStats(i) {
    let stats = allPokemon[i]['stats'];
    for (let k = 0; k < stats.length; k++) {
        document.getElementById(`dialog-stats-container${i}`).innerHTML += templateCreateDiagram(i, k);
        diagramColor(i, k);
    }
}


function templateCreateDiagram(i, k) {
    return `
    <div class="dialog-stats">
        <div>${allPokemon[i]['stats'][k]['stat']['name']}</div>
        <div class="stats-diagram-container">
            <div id="stats-diagram-${k}" class="stats-diagram" style="width:${allPokemon[i]['stats'][k]['base_stat']}%">
                <div class="stats">
                    ${allPokemon[i]['stats'][k]['base_stat']}
                </div>
            </div>
        </div>
    </div>
    `;
}


function diagramColor(i, k) {
    if (allPokemon[i]['stats'][k]['base_stat'] > 50) {
        document.getElementById(`stats-diagram-${k}`).classList.add('bg-color-green');
    } else {
        document.getElementById(`stats-diagram-${k}`).classList.add('bg-color-red');
    }
}


// Suchfunktion:

function searchPokemon() {
    let search = document.getElementById('search-field').value;
    search = search.toLowerCase();                                              // .toLowerCase() konvertiert die EIngabe in Kleinbuchstaben!
    let pokemonContainer = document.getElementById('pokemon-container');
    pokemonContainer.innerHTML = '';
    
    for (let i = 0; i < allPokemon.length; i++) {
        if (allPokemon[i]['name'].toLowerCase().includes(search)) {
            renderPokemonPreviewCards(i);
            renderBackgroundPreviewcards(i);
        }
    }
}