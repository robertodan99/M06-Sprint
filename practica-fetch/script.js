
  fetch('https://swapi.dev/api/people?limit=10000&offset=0', {
  method: "GET",
})
.then(response => response.json()) 
.then(response => {
    localStorage.setItem("characters", JSON.stringify(response));
    displayCharacters();
  });


console.log(localStorage.getItem("characters"));    


function displayCharacters() {
    const characters = localStorage.getItem("characters");
    const characterList = document.getElementById("characterList");
  
    if (characterList) {
      const parsedCharacters = JSON.parse(characters);
      if (parsedCharacters && parsedCharacters.results) {
        parsedCharacters.results.forEach(character => {
          const characterElement = document.createElement("div");
          characterElement.textContent = character.name;
          characterList.appendChild(characterElement);
        });
      }
    }
  }
  
     