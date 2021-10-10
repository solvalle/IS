const BASE_URL = "https://api.imgflip.com/get_memes"

class Meme {
	constructor(id, name, url) {
		this.id = id;
		this.name = name;
		this.url = url;
	}

}

class Controller {

    async getMemesData(){
        let memesData = null;
        try{
            const response = await fetch(this.URL);
            memesData = await response.json();
        } catch(error){
            console.log(`Algo ha fallado ${error.message}`);
        }
        return memesData;
    } 

    async run() {
        document.getElementById("search").addEventListener("keyup", search);
        const memesData = await getMemesData()

        data = []
        memesData.forEach((post) => {
            data.push(new Meme(post.id, post.name, post.url));
        });

        names = []
        memesData.forEach((post) => {
            names.push(post.name);
        });

        localStorage.setItem("names", JSON.stringify(names));

        $(document).ready(function() {
            $("#search").autocomplete({
                source: names
            });
        });

        displayData(data)
    }

    search(){
        let text = document.getElementById("search").value;
        data.forEach((post) => {
            if (text == "") hide(post.id) 
            else if (match(post.name, text)) show(post.id)
            else hide(post.id)
        });
    }

    displayData(data){
        let display = "";

        data.forEach((post) => {
            display += `
            <ul class = "${post.id}" style="display: none">
            <li><strong>Meme:</strong> ${post.name} </li> <br/>
            <img src = "${post.url}" class = "${post.id}" style="display: none"></img>
            </ul>
            `;
        });

        document.getElementById("data").innerHTML = display;
    }

    match(word, substring){
        console.log(word, substring);
        console.log(word.includes(substring));
        return word.includes(substring);
    }

    hide(elementId){
        Array.from(document.getElementsByClassName(elementId)).forEach((element) => {
            element.style.display = "none";
        });
    }

    show(elementId){
        Array.from(document.getElementsByClassName(elementId)).forEach((element) => {
            element.style.display = "block";
        });
    }

}

let controller = new Controller();
controller.run();