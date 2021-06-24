const title=document.getElementById("title");
const description=document.getElementById("textArea");
const button=document.getElementById("button");
const rowPlace =document.getElementById("whereRowsGo");
const deleteButton =document.getElementsByClassName("deleteButton");
const counterPlace = document.getElementById("counter");
let counter = 0; 

counterPlace.textContent=counter;

button.addEventListener("click", function(event){
    event.preventDefault();
    //hämta inputfield texterna 
    const myTitle=title.value; 
    const myDescription=description.value; 
    if( myTitle ==="" || myDescription==="") {
        alert("You can't leave an empty note.")
    } else{
        // skapa ny rad med vår input. 
        const newRow = createTableRow(myTitle, myDescription);

        // Lägg den nya raden i tbody 
        rowPlace.appendChild(newRow);
        counter+=1;  
        isRemoveRowsPossible(); 
        counterPlace.textContent=counter;
        title.value="";
        description.value="";
    }
    
});



