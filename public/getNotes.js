async function getNotesFromServer(){   
    options = {
        method: "GET"
    }

    const fetch_response = await fetch('getNotes/', options)
    const json = await fetch_response.json();
    console.log(json);
    showNotes(json.notes, "allServerNotes");
}

function showNotes(notes, element_id){
    let notesList = "";
    if (notes.length==0) {
        notesList = "there are no notes!"; 
    }
    else{
            for(let i = 0; i < notes.length; i++) {
            notesList += `
            <li>
                <a>
                    <h2>${notes[i].name}</h2>
                    <p>${notes[i].color}</p>
                </a>
            </li>`;

        }
    }
    document.getElementById(element_id).innerHTML = notesList
}

getNotesFromServer()