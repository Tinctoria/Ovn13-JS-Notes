function createTableRow(title, description) {
    //skapa alla element 
    const newRow= document.createElement("tr"); 
    const newTitle = document.createElement("td");
    const newDescription = document.createElement("td");
    const newDate = document.createElement("td");
    const deleteButton =document.createElement("button");
    const deleteButtonIcon =document.createElement("i");

    deleteButtonIcon.classList+="bi bi-trash";
    deleteButton.appendChild(deleteButtonIcon); 
    deleteButton.classList+="deleteButton";

    const date = new Date().toISOString().slice(0, 10);
    
    //ge elementen innehåll 
    newTitle.textContent= title; 
    newDescription.textContent= description;
    newDate.textContent=date;
    
    //lägg elementen i raden 
    newRow.appendChild(newTitle);
    newRow.appendChild(newDescription);
    newRow.appendChild(newDate);
    newRow.appendChild(deleteButton);

    return newRow;
}

function deleteRow(event) {
    const target=event.target;
    const thisButton = target.parentNode;  
    const thisRow = thisButton.parentNode;
    
    thisRow.parentNode.removeChild(thisRow);

    counter -=1; 
    counterPlace.textContent=counter;
}

function checkSubmissions() {
    if(rowPlace.childNodes == "") {
        return true; 
    }
}

function isRemoveRowsPossible() {
    if(!checkSubmissions()) {
        const deleteButton =document.getElementsByClassName("deleteButton");
        
        Array.from(deleteButton).forEach(deleteButton=> deleteButton.addEventListener("click", deleteRow));
    }  
} 
