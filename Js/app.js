console.log("This is my magic notes");
showNotes();
// alert("Hello world");

/// if user add a notes, add it to the local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
       notesobj = [];
    }
    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addTxt.value = "";
    console.log(notesobj);
    showNotes();

})

/// Function to show elements from local storage
function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notes = [];
     }
     else{
         notesobj = JSON.parse(notes);
     }

     let html = "";
     notesobj.forEach(function(element, index) {
         html += `                                                       
         
         <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
         <div class="card-body">
           <h5 class="card-title">Note ${index + 1}</h5>
           <p class = "card-text">${element}</p>
           <button onclick="deleteNote(this.id)" id="${index}" 
           class="btn btn-primary">Delete Note</button>
         </div>
       </div>
       `;
       /// backtick `
     });

     let notesElm = document.getElementById('notes');
     if(notesobj.length != 0){
        notesElm.innerHTML = html;
     }

     else{
        notesElm.innerHTML = `Nothing to show! Use "Add a note" section above to add notes.`;
     }
}

/// Function to delete note

function deleteNote(index){
    console.log('I am deleting' , index);

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesobj = [];
    }

    else{
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    showNotes();
}

          /// Search notes
  
let search = document.getElementById('searchTxt');   
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
       let cardTxt = element.getElementsByTagName("p")[0].innerText;
    //    console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })

    })
      










