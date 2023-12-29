let currUserNotes;
let ranNewbatch;
let currIDContent;
let temp;
let noteID;
const outputElement = document.querySelector(`.output`);
const addNoteElement = document.querySelector(".add-note-before");
console.log(addNoteElement);

const showNoteElement = document.querySelector(".show-notes-before");
console.log(showNoteElement);

function loadUserNotes() {
  temp = `<div class="text-white">
  <h5>Enter your note ID:</h5>
  <input type="text" placeholder="Note ID goes here..." class="mt-1 load-noteID-input">
  <br>
  <button class="mt-2 border border-white px-3 py-1 rounded">Submit</button>
  </div>`;

  outputElement.innerHTML = temp;
}

function addNotes() {}

function newNotesBatch() {
  noteID = Math.ceil(Math.random() * (998999 - 102399) + 102399);
  currIDContent = `
  <div class="text-white">
  Note ID: ${noteID}
  ${getNoteData()}
  </div>
  `;
  ranNewbatch = true;
  outputElement.innerHTML = currIDContent;

  showUtilityButtons();
}

function getNoteData() {
  currUserNotes = JSON.parse(localStorage.getItem(`${noteID}`)) || {
    notes: [],
  };
  currUserNotes.notes.push("test");
  currUserNotes.notes.push("hello");

  console.log(currUserNotes);
  return currUserNotes.notes;
}

function showUtilityButtons() {
  addNoteElement.classList.remove("add-note-before");
  addNoteElement.classList.add("add-note-after");

  showNoteElement.classList.remove("show-notes-before");
  showNoteElement.classList.add("show-notes-after");
}

function appendUserNote() {
  if (ranNewbatch) {
    outputElement.innerHTML = `${currIDContent}<div class="text-white mt-2">
    <h5 class="mt-2 mb-2">Enter note to add</h5>
    <input type=text placeholder="enter note to add..." class="bg-white note-input">
    </div>`;
  } else if (!ranNewbatch) {
  }
}
