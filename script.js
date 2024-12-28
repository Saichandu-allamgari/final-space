

// ----------------display characters from api------------- Step1 -->mainly used for character.html

const charcterList = async () => {

    try{
           // Check if data is already in local storage
           const storedData = localStorage.getItem("characterData");

             if (storedData) {
             console.log("Data already exists in local storage.");
             createCharacterCard(JSON.parse(storedData)); // Use existing data
               return;
       }
        // Fetch character data from API

        const characterData = await fetch("https://finalspaceapi.com/api/v0/character/");
        console.log(characterData, "characterData");

        if(!characterData.ok){
            throw new Error(`Failed to fetch character data: ${characterData.status}`);
        };
        const characterResponse = await characterData.json();
        console.log(characterResponse, "characterResponse");

        // Save data to local storage
        localStorage.setItem("characterData", JSON.stringify(characterResponse));

        // Create cards
        createCharacterCard(characterResponse);    
    }
    catch(error){
         console.log(error, "error");
    }
    finally{
        console.log("finally");
    }
    };


  const mainDiv=document.getElementById("cardsCharacter");
  
  const createCharacterCard = (characterData) => {

    mainDiv.innerHTML="";

    for(let i=0; i<characterData.length; i++){
 
        console.log(characterData[i], `${i+1}th character`);

        const characterCard = `<div class="border border-secondary rounded pb-4 w-25 text-center m-4">
           <img src="${characterData[i].img_url}" class="w-100" />
           <h3 class="heading mt-4"> ${characterData[i].name}</h3>
           <p class="m-0">Species : ${characterData[i].species}</p>
           <p class="m-0">Gender : ${characterData[i].gender}</p>
           <p class="m-0">Status  : ${characterData[i].status}</p>
           <p class="m-0">Origin  : ${characterData[i].origin}</p>
           <button class="btn btn-outline-danger mt-3">Select</button>
           
      </div>`;
      mainDiv.innerHTML += characterCard;
    };

  };

    const selectCharacter = (name) => {
    alert(`You selected ${name}!`);
  };
  
    charcterList();



   