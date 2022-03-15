/* eslint-disable no-undef */
let _table_ = document.createElement('table'),
  _tr_ = document.createElement('tr'),
  _th_ = document.createElement('th'),
  _td_ = document.createElement('td');

// Builds the HTML Table out of myList json data from Ivy restful service.
// eslint-disable-next-line no-unused-vars
function buildHtmlTable(arr) {
  let table = _table_.cloneNode(false),
    columns = addAllColumnHeaders(arr, table);

  table.classList.add('table', 'table-bordered');

  for (let i = 0, maxi = arr.length; i < maxi; ++i) {
    const tr = _tr_.cloneNode(false);
    for (let j = 0, maxj = columns.length; j < maxj; ++j) {
      let td = _td_.cloneNode(false);
      cellValue = arr[i][columns[j]];
      td.appendChild(document.createTextNode(arr[i][columns[j]] || ''));
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }
  return table;
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(arr, table) {
  const columnSet = [],
    tr = _tr_.cloneNode(false);
  for (let i = 0, l = arr.length; i < l; i++) {
    for (const key in arr[i]) {
      // eslint-disable-next-line no-prototype-builtins
      if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
        columnSet.push(key);
        const th = _th_.cloneNode(false);
        th.appendChild(document.createTextNode(key));
        tr.appendChild(th);
      }
    }
  }
  table.appendChild(tr);
  return columnSet;
}
