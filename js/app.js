document.addEventListener("DOMContentLoaded", function() {

  const inputTitle = document.getElementById("note-title");
  const inputDescription = document.getElementById("note-content");
  const submitBtn = document.getElementById("submit-btn");
  const notesList = document.getElementById("notes");
  const addBtn = document.getElementById("add-btn");
  const modalNoteContainer = document.getElementById("modal-container");

  const currentDate = new Date();

  function checkValues(event) {
    event.preventDefault();

    if (inputTitle.value === "") {
      alert("Please enter a valid title");
    } else {
      const note = document.createElement("li");
      note.classList.add("note");

      const dateOfNote = document.createElement("li");
      dateOfNote.classList.add("note-date");
      dateOfNote.innerText = `${currentDate.getDate()}.${currentDate.getMonth()}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
      note.appendChild(dateOfNote);


      const noteTitle = document.createElement("h2");
      noteTitle.classList.add("note-title");
      noteTitle.innerText = inputTitle.value;
      note.appendChild(noteTitle);

      const noteContent = document.createElement("p");
      noteContent.innerText = inputDescription.value;
      note.appendChild(noteContent);
      notesList.appendChild(note);

      inputTitle.value = "";
      inputDescription.value = "";

      addBtn.style.display = "block";
      modalNoteContainer.style.display = "none";
    }
  }

  function openModal(event) {
    modalNoteContainer.style.display = "flex";
    addBtn.style.display = "none";
  }

  addBtn.addEventListener("click", openModal);
  submitBtn.addEventListener("click", checkValues);
});