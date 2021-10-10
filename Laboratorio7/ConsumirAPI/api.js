const BASE_URL = 'https://dog.ceo/api/breeds/list/all'

async function getDogsData(){
    let dogsData = null
    try {
        const response = await fetch(BASE_URL)
        dogsData = await response.json()
    } catch {
        console.log(`Algo ha fallado: ${error.message}`)
    }

    createBreedsDogsList(dogsData.message);
}

function createBreedsDogsList(dogsData){
    breedsDog=[];
    Object.keys(dogsData).map(function(value){
        breedsDog.push({ title: value});
    })
    main(breedsDog);
}

function main(breedsDog) {
    //let breedsDog = getDogsData(); 

    // Cada vez que se presiona una tecla en la barra de búsqueda, se hace la búsqueda
    document.getElementById("search").addEventListener("keyup", search);
    console.log(breedsDog);
    let dogsData = []
    for(let indx = 0; indx < breedsDog.length; ++indx) {
        dogsData.push({id: indx, title: breedsDog[indx].title});
    }
    console.log(dogsData)
    // Mostramos la data en la pantalla
    displayData(dogsData);
}

/**
* Itera un arreglo de datos y construye una lista que muestra su contenido en la pantalla
* cada elemento agregado se le agrega un id que es el id de cada objeto (dato) dentro del arreglo
*/
function displayData(data) {
    let display = "";
    data.forEach((post) => {
        display += `
        <ul id="${post.id}">
        <li><strong>Raza:</strong> ${post.title}</li>
        </ul>
        `;
    });
    document.getElementById("data").innerHTML = display;
}

/**
* Function que se pasa como callback el keyup del textarea search
*/
function search() {
    let text = document.getElementById("search").value;
    data.forEach((post) => {
        if (match(post.title, text) || text == "") show(post.id);
        else hide(post.id);
    });
}

/**
* Si substring es parte de word, retorna true, si no retorna false
* @param {String} word
* @param {String} substring
*/
function match(word, substring) {
    console.log(word, substring);
    console.log(word.includes(substring));
    return word.includes(substring);
}

/**
* Oculta el elemento html que tiene el id elementId
* @param {String} elementId
*/
function hide(elementId) {
    document.getElementById(elementId).style.display = "none";
}

/**
* Muestra el elemento html que tiene el id elementId
* @param {String} elementId
*/
function show(elementId) {
    document.getElementById(elementId).style.display = "block";
}

// Punto de entrada para desencadenar lógica
getDogsData()
//main();