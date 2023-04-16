let notes = []
let notesCounter = 0
let note = {}

async function sendTheNoteToServer(){
    // save note
    let name = document.getElementById("newName").textContent;
    let color = document.getElementById("newColor").textContent;
    note = { name, color }
    console.log(note)
  
    // initialize html note
    document.getElementById("newName").textContent = "Student Name";
    document.getElementById("newColor").textContent = "Favorite color";

    
    let options = {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const fetch_response = await fetch('save/', options)
    const json = await fetch_response.json();
    console.log(json);
    document.getElementById("serverResponse").textContent = JSON.stringify(json);
}