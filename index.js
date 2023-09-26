const div = document.getElementById("root");
const getKey = document.getElementById('number')
const searchPokemon = document.getElementById('search')

const pokemons = (key) => {
  fetch(`https://pokeapi.co/api/v2/pokemon/${key}/`)
    .then((data) => data.json())
    .then((pokemon) => {
      dom_pokemon(pokemon);
    });
};

const get_pokemon = (key) => {
  for (let i = 1; i <= key; i++) {
    pokemons(i);
  }
};

const dom_pokemon = (pokemon) => {
    
    const root = document.createElement('div')
    root.classList.add('card')
    root.setAttribute('id', pokemon.name)
    
    const root_img = document.createElement('div')
    root_img.classList.add('root_img')
    
    const img = document.createElement('img')
    img.classList.add('img_pokemon')
    img.src = pokemon.sprites.front_default
    root_img.appendChild(img)

    const card_body = document.createElement('div')
    card_body.classList.add('card-body')

    const body = document.createElement('div')
    body.classList.add('d-flex','flex-column')

    const name = document.createElement('b')
    name.classList.add('text-center', 'card-text')
    name.textContent = pokemon.name

    const id = document.createElement('span')
    id.textContent = `ID: ${pokemon.id.toString().padStart(3, 0)}`

    const ex = document.createElement('span')
    ex.textContent = `EXPERIENCE: ${pokemon.base_experience.toString().padStart(3, 0)}`
    
    body.appendChild(name)
    body.appendChild(id)
    body.appendChild(ex)

    card_body.appendChild(body)

    root.appendChild(root_img)
    root.appendChild(card_body)
    
    
    
    div.appendChild(root)

};


getKey.addEventListener('input', ()=> {
    get_pokemon(getKey.value)
    while(div.firstChild){
        div.removeChild(div.firstChild)
    }
})


searchPokemon.addEventListener('input', ()=>{
    
})