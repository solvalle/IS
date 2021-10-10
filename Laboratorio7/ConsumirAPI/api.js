const BASE_URL = 'http://universities.hipolabs.com/search'
const COUNTRY = "turkey"

function displayData(universitiesData) {
    let display = "";
    universitiesData.forEach((post) => {
        display += `
        <ul id="${post.id}">
        <li><strong>Universidad:</strong> ${post.name} </li>
        <li><strong>País:</strong> ${post.country} </li>
        <li><strong>Página web: </strong><a href="${post.webPage}">${post.webPage}</a></li>
        <li><strong>Dominio:</strong> ${post.domain}</li>
        </ul>
        `;
    });
    document.getElementById("data").innerHTML = display;
}

function search() {
    let text = document.getElementById("search").value;
    data.forEach((post) => {
        if (match(post.title, text) || text == "") show(post.id);
        else hide(post.id);
    });
}

function match(word, substring) {
    console.log(word, substring);
    console.log(word.includes(substring));
    return word.includes(substring);
}

function hide(elementId) {
    document.getElementById(elementId).style.display = "none";
}

function show(elementId) {
    document.getElementById(elementId).style.display = "block";
}

async function getUniversitiesData(country){
    let universitiesData = null
    universitiesURL = `${BASE_URL}?country=${country}`
    try {
        const response = await fetch(universitiesURL)
        universitiesData = await response.json()
    } catch(error) {
        console.log(`Algo ha fallado: ${error.message}`)
    }
    console.log(universitiesData)
    return universitiesData;
}

function main(universitiesData) {
    document.getElementById("search").addEventListener("keyup", search);

    data = [];
    for(let index = 0; index < universitiesData.length; ++index){
        data.push({ 
            "id": index,
            "name": universitiesData[index].name,
            "country": universitiesData[index].country,
            "webPage": universitiesData[index].web_pages[0],
            "domain": universitiesData[index].domains[0]
        });
    }
    console.log(data)
    displayData(data);
}

async function loadUniversities() {
    let universitiesData = await getUniversitiesData();
    console.log(universitiesData)
    main(universitiesData);
}

loadUniversities();