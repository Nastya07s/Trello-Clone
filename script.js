let noteIdCounter = 8;
let columnIdCounter = 4;

document
    .querySelectorAll('.column')
    .forEach(columnProcess);

document
    .querySelector('[data-action-addColumn]')
    .addEventListener('click', function (event) {
        const columnElement = document.createElement('div');
        columnElement.classList.add('column');
        columnElement.setAttribute('draggable', 'true');
        columnElement.setAttribute('data-column-id', columnIdCounter++);

        columnElement.innerHTML =
            `<p class="column-header">В плане</p>
             <div data-notes></div>
             <p class="column-footer">
                <span data-action-addNote class="action">+ Добавить карточку</span>
             </p>`;

        document.querySelector('.columns').append(columnElement);
        
        columnProcess(columnElement);
    });

document
    .querySelectorAll('.note')
    .forEach(noteProcess);

function columnProcess(columnElement) {
    const spanAction_addNote = columnElement.querySelector(`[data-action-addNote]`);

    spanAction_addNote.addEventListener('click', function (event) {
        const noteElement = document.createElement('div');
        noteElement.classList.add('note');
        noteElement.setAttribute('draggable', 'true');
        noteElement.setAttribute('data-note-id', noteIdCounter++);
        columnElement.querySelector('[data-notes]').append(noteElement);

        noteProcess(noteElement);
    });

    const headerElement = columnElement.querySelector('.column-header')
    headerElement.addEventListener('dblclick', function (event) {
        headerElement.setAttribute('contenteditable', 'true');
        headerElement.focus();
    });

    headerElement.addEventListener('blur', function (event) {
        headerElement.removeAttribute('contenteditable');
    })
}

function noteProcess(noteElement) {
    noteElement.addEventListener('dblclick', function (event) {
        noteElement.setAttribute('contenteditable', 'true');
        noteElement.focus();
    });

    noteElement.addEventListener('blur', function (event) {
        noteElement.removeAttribute('contenteditable');
    })
}
