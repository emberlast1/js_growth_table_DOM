'use strict';

const tbody = document.querySelector('tbody');
const table = document.querySelector('table');
const body = document.querySelector('body');
const rows = table.rows;
let rowCount = 4;
// let columnCount = 4;

body.addEventListener('click', (e) => {
  const addRowButton = e.target.closest('.append-row');
  const removeRowButton = e.target.closest('.remove-row');
  const addColumnButton = e.target.closest('.append-column');
  const removeColumn = e.target.closest('.remove-column');

  if (addColumnButton) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].insertCell(-1);
    }

    // columnCount++;
  }

  if (removeColumn) {
    for (let i = 0; i < rows.length; i++) {
      rows[i].deleteCell(-1);
    }

    // columnCount--;
  }

  if (addRowButton) {
    const rowTr = tbody.children[0].cloneNode(true);

    tbody.append(rowTr);

    rowCount++;
  }

  if (removeRowButton) {
    tbody.deleteRow(-1);

    rowCount--;
  }

  // if (rowCount <= 2) {
  //   removeRowButton.disabled = true;
  // } else if (rowCount > 2) {
  //   removeRowButton.removeAttribute('disabled');
  // }

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
});
