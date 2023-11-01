
const getCharacters = async()=>{
    // mandar a llamar mi API
    const apiResponse = await fetch("http://localhost:3004/characters",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });
    
    // obtener la lista <ul> de html  
    const listUl = document.getElementById("list");

    // Obtener la lista de personajes de hora de aventura
    const adventureTimeArraylist = await apiResponse.json();

    // recorrer el arreglo
    for (let i = 0; i < adventureTimeArraylist.length; i++) {
        const element = adventureTimeArraylist[i];

        // crear elementos html
        const liElement = document.createElement('li');
        const pElement = document.createElement('p');
        const imgElement = document.createElement('img');

        // instertar informacion en los elementos html
        pElement.textContent = element.name;
        imgElement.src = element.picture;

        // adjutar elementos html p y img al li
        liElement.appendChild(imgElement);
        liElement.appendChild(pElement);
        // adjuntar el elemento li al ul
        listUl.appendChild(liElement);
        
    }
    // console.log(await list.json());
};
// AQUI SE MANDA A LLAMAR AUTOMATICAMENTE LA FUNCION getCharacters CUANDO SE INICIA LA APP

getCharacters();

const sendCharacter = ()=>{

};

const deleteCharacter = (id)=>{

}




