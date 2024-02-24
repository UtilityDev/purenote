const newNoteBtn = document.querySelector('.new-note-btn');
const clearNotesBtn = document.querySelector('.clear-notes-btn');
let deleteNoteBtn = document.querySelector('.delete-note-btn');

const noteContainer = document.querySelector('.note-container');

const contextMenu = document.querySelector('.context-menu');
const contextElementNew = document.querySelector('.new-note-element');
const contextElementCopy = document.querySelector('.copy-content');
const contextElementDelete = document.querySelector('.delete-note');

let contextMenuVisible = false;
var selectedNote = undefined;

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
    note.scrollIntoView();

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
    if (note.className === 'input-box') note.remove();
    // alert(note.className);
    updateLocalStorage();
}

const openContextMenu = (mouseX, mouseY) => {
    selectedNote = document.activeElement;

    contextMenu.style.display = 'block';
    contextMenu.style.left = mouseX + 'px';
    contextMenu.style.top = mouseY + 'px';

    contextMenuVisible = true;
};

const hideContextMenu = () => {
    contextMenu.style.display = 'none';

    contextMenuVisible = false;
};

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

document.addEventListener('contextmenu', (e) => {
    openContextMenu(e.clientX, e.clientY);
    e.preventDefault();
});

document.addEventListener('click', () => {
    if (contextMenuVisible) hideContextMenu();
})