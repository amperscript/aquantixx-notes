document.addEventListener("DOMContentLoaded", function() {

  const inputTitle = document.getElementById("note-title");
  const inputDescription = document.getElementById("note-content");
  const title = document.getElementById("title");
  const noteTitle = document.createElement("h2");
  const sumbitBtn = document.createElement("sumbit-btn");

  const note = document.createElement("div");

  function handleTextResult() {
    const noteTitle = document.createElement("h2");
    noteTitle.innerText = inputTitle.value;
    return noteTitle;
  }

  function checkValues(){
  event.preventDefault();

  if(inputTitle.value === ""){
    alert("Please enter a valid title");
  }
  else {
    note.classList.add("note");
    noteTitle.classList.add("note-title");
    noteTitle.innerText = inputTitle.value;
    note.appendChild(noteTitle);
  }
    inputTitle.value = "";
  }
  inputTitle.addEventListener("input", handleTextResult);
  sumbitBtn.addEventListener("click", checkValues);

})
