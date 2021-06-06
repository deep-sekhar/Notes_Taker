// console.log("yay");
shownotes();

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", (e)=>{
    let addtxt= document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes==null) {
        notesObj = [];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtxt.value="";
    console.log(notesObj);
    shownotes();
});

// show notes 
function shownotes()
{
    let notes = localStorage.getItem("notes");
    if (notes==null) {
        notesObj = [];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach((element, index) => {
        html+=`<div class="notecard text-dark bg-warning mx-2 my-2"   style="max-width: 18rem;">
        <div class="card-header"><h5>${index+1}</h5></div>
        <div class="card-body">
        <p class="card-text">${element}</p>
        <button id="${index}" href="#" onclick="deletenote(this.id)" class="btn btn-primary">Delete Note </button>
        </div>
      </div>`;
    });
    let notesele= document.getElementById("notes");
    if (notesObj.length!= 0) {
        notesele.innerHTML=html;
    }
    else
    {
        notesele.innerHTML=`Added notes are shown here`;
    }
}

// delete notes 
function deletenote(index)
{
    console.log(index);
    let notes = localStorage.getItem("notes");
    if (notes==null) {
        notesObj = [];
    }
    else
    {
        notesObj=JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    shownotes();
}

// search 
let searchtxt= document.getElementById("searchty");
searchtxt.addEventListener("input",()=>{
    // console.log("ji");
    let inputval = searchtxt.value.toLowerCase();
    let notecards = document.getElementsByClassName("notecard");
    Array.from(notecards).forEach(element => {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
    });
})