const urlBase = ("https://rickandmortyapi.com/api") ;
const resourcePath = "/character"
const url = `${urlBase}${resourcePath}`

function getCharacters (done){
    const results = fetch(`${url}`);
    results
        .then(response => response.json())
        .then(data =>{
            done(data)
        });
}
getCharacters(data => {
    data.results.forEach (personaje => {
        const article = document.createRange().createContextualFragment(
            `<article>
                <div class="image-container">
                    <img src="${personaje.image}" alt="Personaje">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}-${personaje.species}</span>
                <span class="location">Last known location:</span>
                <span>${personaje.location.name}</span>

            </article>
            `);
            const main = document.querySelector("main");
                main.append(article)

    });
})
