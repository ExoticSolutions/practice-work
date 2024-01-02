//TO-DO 12/31/23 : ALMOST DONE complete whats left: make the create note and buttons in the flex to display only when a Batch ID is loaded using the
//displayExclusiveElements() function
//complete the functioon to display all notes using the displayBatchNotes() function
//make a function to save the notes batch to local storage to be able to load them up again!!
const outputElement = document.querySelector(".output");
let currentDataBatch;
let noteID;
const min = 129999;
const max = 999999;

function saveCurrentBatch() {
  if (currentDataBatch !== null) {
    console.log("Saving batch...");
    console.time("Completed in:");
    localStorage.setItem(String(noteID), JSON.stringify(currentDataBatch));
    console.timeEnd("Completed in:");
    outputElement.innerHTML = saveSucessfulPrompt();
  } else if (currentDataBatch === null) {
    outputElement.innerHTML = undefinedIDError();
  }
}
let notey;
console.log;
function displayBatchNotes() {
  if (currentDataBatch !== null || noteID !== undefined) {
    outputElement.innerHTML = createNotesTable();
    console.log(outputElement);
  } else if (currentDataBatch === null || noteID === undefined) {
    outputElement.innerHTML = undefinedIDError();
  }
}

function loadBatchPrompt() {
  outputElement.innerHTML =
    `<h1 class="underline">Enter Batch ID Credentials:</h1>\n` +
    `<input type="text" placeholder="Enter Batch ID" onkeydown="findIDEventCheck(event)" class="mt-4 load-notes-input">\n` +
    `<br>\n` +
    `<button class="mt-4 submit-load-input" onclick="findBatchID()">Find Batch ID</button>`;
}

function newBatchPrompt() {
  noteID = generateNoteID();
  /*
  console.log(`Batch ID Generatred: ${noteID}`);
  */
  currentDataBatch = getBatch();
  /*
  console.log(currentDataBatch);
  */
  outputElement.innerHTML = getBatchInfo();
}

function generateNoteID() {
  const IDgenerated = Math.ceil(Math.random() * (max - min + 1) + min);
  return IDgenerated;
}

function getBatch() {
  const batchObtained = JSON.parse(localStorage.getItem(String(noteID))) || {
    Notes: [],
  };

  return batchObtained;
}

function getBatchInfo() {
  const batchInfo = `<h1 class="underline">Batch ID (Save for reference): ${noteID}</h1>`;

  return batchInfo;
}

function createNotePrompt() {
  if (noteID !== undefined) {
    outputElement.innerHTML =
      `${getBatchInfo()}\n` +
      `<h1 class="mt-5">Create a note:</h1>\n` +
      `<input type="text" placeholder="Enter Note Content..." onkeydown="appendNoteEventCheck(event)" class="mt-3 create-note-input">\n` +
      `<br>\n` +
      `<button class="mt-4 submit-created-note" onclick="appendCreatedNote()">Create Note</button>`;
  } else if (noteID === undefined) {
    outputElement.innerHTML = undefinedIDError();
  }
}

function undefinedIDError() {
  return `<h1>Error: Must load or create new batch in order to use feature!</h1>`;
}

function appendCreatedNote() {
  const noteValue = document.querySelector(".create-note-input").value;
  currentDataBatch.Notes.push(noteValue);
  document.querySelector(`.create-note-input`).value = ``;
  /*
  console.log(currentDataBatch.Notes);
  */
}

function appendNoteEventCheck(event) {
  if (event.key === "Enter") {
    appendCreatedNote();
  }
}

function findIDEventCheck(event) {
  /*
  console.log(event);
  */
  if (event.key === "Enter") {
    findBatchID();
  }
}

function findBatchID() {
  /*
  console.log("Finding batch ID...");
  */
  const targetID = document.querySelector(".load-notes-input").value;
  noteID = targetID;
  console.log(targetID);
  currentDataBatch = JSON.parse(localStorage.getItem(targetID));
  console.log(currentDataBatch.Notes);
  if (currentDataBatch === null) {
    findErrorPrompt(targetID);
  } else if (currentDataBatch !== null) {
    outputElement.innerHTML += `<h1>Sucessfully found: ID ${targetID}</h1>`;
  }
}

function findErrorPrompt(nullID) {
  console.log(`Error: our records indicate ${nullID} does not exist`);
  outputElement.innerHTML += `\n<h1 class="mt-4">Error: Batch ID does not exist try again</h1>`;
}

function createNotesTable() {
  const notesTableElement =
    `  ${getBatchInfo()}\n` +
    `  <br>\n` +
    `<div class="flex justify-center">\n` +
    ` <table class="table-auto batch-notes-table">\n` +
    `  <thead class="border border-stone-950">\n` +
    `    <tr>\n` +
    `     <th>\n` +
    `       Note #\n` +
    `     </th>\n` +
    `     <th>\n` +
    `      Note Content\n` +
    `     </th>\n` +
    `   </tr>\n` +
    `  </thead>\n` +
    `  <tbody>\n` +
    `    ${createTableBody()}\n` +
    `  </tbody>\n` +
    ` </table>\n` +
    `</div>`;

  return notesTableElement;
}

function createTableBody() {
  const createTableBodyElement = currentDataBatch.Notes.map(
    (noteContent, index) => {
      return `
      <tr key=${index}>
       <td>
        ${index + 1}
       </td>
       <td>
        ${noteContent}
       </td>
      </tr>`;
    }
  );

  return createTableBodyElement;
}

function saveSucessfulPrompt() {
  return `<h1 class="underline">Sucessfully saved batch ID: ${noteID}</h1>`;
}
