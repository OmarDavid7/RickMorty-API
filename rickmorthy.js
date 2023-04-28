document.addEventListener("DOMContentLoaded", ()=>{
    fetchData();
});

const loading = document.getElementById("loading");
const carddinamica = document.getElementById("card-dinamica");
const template = document.getElementById("template-card").content;
const fragment = document.createDocumentFragment();

const fetchData = async()=>{
    try {
        loadingData(true);

        const res = await fetch("https://rickandmortyapi.com/api/character");
        const info = await res.json();
        pintarInformacion(info);

    } catch (error) {
        console.log(error)
    } finally{
        loadingData(false);
    }
}

const loadingData = (estado)=>{
    if(estado){
        loading.classList.remove("d-none");
    }else{
        loading.classList.add("d-none");
    }
}


const pintarInformacion = (info)=>{
    carddinamica.textContent = "";

    info.results.forEach((item)=>{
        const clone = template.cloneNode(true);
        clone.querySelector("h5").textContent = item.name;
        clone.querySelector("p").textContent = item.species;
        clone.querySelector("img").setAttribute("src", item.image);

        fragment.appendChild(clone);
    })

    carddinamica.appendChild(fragment);
}