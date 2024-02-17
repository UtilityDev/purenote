const newNoteBtn = document.querySelector('.new-note-btn');
const clearNotesBtn = document.querySelector('.clear-notes-btn');
let deleteNoteBtn = document.querySelector('.delete-note-btn');

const noteContainer = document.querySelector('.note-container');

// Load notes from localStorage into DOM
const loadNotes = () => {
    noteContainer.innerHTML = localStorage.getItem("notes");
};

// Update localStorage with updates note data
const updateLocalStorage = () => {
    localStorage.setItem("notes", noteContainer.innerHTML);
}

// Load notes on page load
loadNotes();

// New note
const newNote = () => {
    let note = document.createElement('div');
    note.className = 'input-box';
    note.contentEditable = true;
    noteContainer.append(note);

    note.focus();

    // Save note in localStorage
    updateLocalStorage();
};

// Clear notes
const clearNotes = () => {
    noteContainer.innerHTML = "";

    // Clear localStorage
    localStorage.clear();
};

// Delete specificed note
const deleteNote = (note) => {
    note.remove();
    updateLocalStorage();
}

// Event handlers
newNoteBtn.addEventListener('click', newNote);

clearNotesBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your notes?')) {
        clearNotes();
    }
});

// Update note data everytime a key has been released for constant updated note information
noteContainer.addEventListener('keyup', () => {
    updateLocalStorage();
});

// Deleting notes
noteContainer.addEventListener('keydown', (e) => {
    let activeNote = document.activeElement;

    if (e.key == 'Backspace') {
        if (activeNote.textContent.trim() === '') {
            deleteNote(activeNote);
        }
    }
});