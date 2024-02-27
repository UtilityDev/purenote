const newNoteBtn = document.querySelector('.new-note-btn');
const clearNotesBtn = document.querySelector('.clear-notes-btn');
let deleteNoteBtn = document.querySelector('.delete-note-btn');

const noteContainer = document.querySelector('.note-container');

const contextMenu = document.querySelector('.context-menu');
const contextElementNew = document.querySelector('.new-note-element');
const contextElementCopy = document.querySelector('.copy-content');
const contextElementColor = document.querySelector('#note-colorpicker');
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
    note.className = 'note';
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
    if (note.className === 'note') note.remove();
    updateLocalStorage();
}

// Open context menu at ('mouseX', 'mouseY)
const openContextMenu = (mouseX, mouseY) => {
    // Specifying the active note
    selectedNote = document.activeElement;

    // Showing and positioning the context menu
    contextMenu.style.display = 'block';
    contextMenu.style.left = mouseX + 'px';
    contextMenu.style.top = mouseY + 'px';
    
    // Show note-specific context elements
    if (selectedNote.className === 'note') {
        contextElementCopy.style.display = 'block';
        contextElementColor.parentElement.style.display = 'block';
        contextElementDelete.style.display = 'block';
    } else {
        contextElementCopy.style.display = 'none';
        contextElementColor.parentElement.style.display = 'none';
        contextElementDelete.style.display = 'none';
    };

    // Confirm menu visibility
    contextMenuVisible = true;
};

// Hide the context menu
const hideContextMenu = () => {
    contextMenu.style.display = 'none';

    contextMenuVisible = false;
};

// Event handlers
newNoteBtn.addEventListener('click', newNote);

// 'Clear all notes' button
clearNotesBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear your notes?')) {
        clearNotes();
    }
});

// Update note data everytime a key has been released for constant updated note information
noteContainer.addEventListener('keyup', () => {
    updateLocalStorage();
});

// 'Right click' in this instance
document.addEventListener('contextmenu', (e) => {
    openContextMenu(e.clientX, e.clientY);
    e.preventDefault();
});

// Color context element to change note color
contextElementColor.addEventListener('input', (e) => {
    // Set note color to specified color by color picker
    selectedNote.style.backgroundColor = e.target.value;
    updateLocalStorage();
});

document.addEventListener('click', () => {
    if (contextMenuVisible) hideContextMenu();
})