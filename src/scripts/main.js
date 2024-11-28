'use strict';

const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const body = document.querySelector('body');
const rows = table.rows;
let rowCount = 4;
let columnCount = 4;
const addRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const addColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');

addRowButton.addEventListener('click', () => {
  const rowTr = tbody.children[0].cloneNode(true);

  tbody.append(rowTr);

  rowCount++;
});

removeRowButton.addEventListener('click', () => {
  tbody.deleteRow(-1);

  rowCount--;
});

addColumnButton.addEventListener('click', () => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].insertCell(-1);
  }

  columnCount++;
});

removeColumnButton.addEventListener('click', () => {
  for (let i = 0; i < rows.length; i++) {
    rows[i].deleteCell(-1);
  }

  columnCount--;
});

body.addEventListener('click', () => {
  switch (rowCount) {
    case 2:
      removeRowButton.disabled = true;
      addRowButton.disabled = false;
      break;
    case 10:
      addRowButton.disabled = true;
      removeRowButton.disabled = false;
      break;
    default:
      removeRowButton.disabled = false;
      addRowButton.disabled = false;
      break;
  }

  switch (columnCount) {
    case 2:
      removeColumnButton.disabled = true;
      addColumnButton.disabled = false;
      break;
    case 10:
      addColumnButton.disabled = true;
      removeColumnButton.disabled = false;
      break;
    default:
      removeColumnButton.disabled = false;
      addColumnButton.disabled = false;
      break;
  }
});
