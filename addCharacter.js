// ------------------ Add Character Form Functionality ------------------mainly used for add character.html


document.addEventListener("DOMContentLoaded", () => {
    const characterForm = document.getElementById("characterForm");
  
    if (characterForm) {
      characterForm.addEventListener("submit", (e) => {
        e.preventDefault();
  
        // Get form values 
        const newCharacter = {
          name: document.getElementById("name").value.trim(),
          species: document.getElementById("species").value.trim(),
          gender: document.getElementById("gender").value.trim(),
          status: document.getElementById("status").value.trim(),
          origin: document.getElementById("origin").value.trim(),
          img_url: document.getElementById("img_url").value.trim(),
        };
  
        // Validate required fields
        if (!newCharacter.name || !newCharacter.species || !newCharacter.img_url) {
          alert("Please fill in all required fields!");
          return;
        }
  
        // Retrieve existing data from local storage
        const storedData = JSON.parse(localStorage.getItem("characterData")) || [];
  
        // Add new character to local storage
        storedData.push(newCharacter);
        localStorage.setItem("characterData", JSON.stringify(storedData));
  
        // Reset form
        characterForm.reset();
  
        // Add new character to the displayed cards
        const newCharacterCard = `
          <div class="border border-secondary rounded pb-4 w-25 text-center m-4">
            <img src="${newCharacter.img_url}" class="w-100" alt="${newCharacter.name}" />
            <h3 class="heading mt-4"> ${newCharacter.name}</h3>
            <p class="m-0">Species: ${newCharacter.species}</p>
            <p class="m-0">Gender: ${newCharacter.gender}</p>
            <p class="m-0">Status: ${newCharacter.status}</p>
            <p class="m-0">Origin: ${newCharacter.origin}</p>
            <button class="btn btn-outline-danger mt-3">Select</button>
          </div>`;
        mainDiv.innerHTML += newCharacterCard;
  
        // Notify the user
        alert("Character added successfully!");
      });
    }
  });