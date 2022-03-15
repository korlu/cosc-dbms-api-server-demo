// Builds the HTML Table out of myList json data from Ivy restful service.
// eslint-disable-next-line no-unused-vars
function buildHtmlTable(arr) {

  if(!arr.length) return 'No result found, or possible error in query!';

  let table = '<table class="table table-sm table-hover table-bordered table-striped">'; // _table_.cloneNode(false),
  const { columns, tbl } = addAllColumnHeaders(arr, table);

  table = tbl;

  for (let i = 0, maxi = arr.length; i < maxi; ++i) {
    let tr = '<tr>';

    for (let j = 0, maxj = columns.length; j < maxj; ++j) {
      let td = '<td>';
      // cellValue = arr[i][columns[j]];
      td += arr[i][columns[j]] + '</td>';
      tr += td;
    }

    table += `${tr}</tr>`;
  }
  return `${table}</table>`;
}

// Adds a header row to the table and returns the set of columns.
// Need to do union of keys from all records as some records may not contain
// all records
function addAllColumnHeaders(arr, table) {
  // const columnSet = [];
  const columns = Object.keys(arr[0]);
  let tr = '<tr class="table-primary">';

  //for (let i = 0, l = arr.length; i < l; i++) {
  for (const key in columns) {
    // eslint-disable-next-line no-prototype-builtins
    // if (arr[i].hasOwnProperty(key) && columnSet.indexOf(key) === -1) {
    // columnSet.push(key);
    let th = `<th scope="col">${columns[key]}</th>`;
    tr += th;
    // }
  }
  //}

  return { columns, tbl: table += `${tr}</tr>` };
}
