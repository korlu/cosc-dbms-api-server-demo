/* eslint-disable no-undef */
const socket = io();
const client = feathers();

client.configure(feathers.socketio(socket));

const outputDiv = document.getElementById('output-content');
const outputTbl = document.getElementById('output-table');
// const showJson  = document.getElementById('show-json').checked;

executeQuery = async (selector) => {
  const params = {
    query: {
      sql: document.querySelector(selector).value
    }
  };

  const result = await client.service('api/data-service').find(params);
  const resultElement = document.createElement('pre');
  resultElement.textContent = JSON.stringify(result, null, 4);

  outputDiv.innerHTML = '';

  outputDiv.appendChild(resultElement);
  // outputTbl.appendChild(buildHtmlTable(result));
  outputTbl.innerHTML = buildHtmlTable(result);

  const showJson = document.getElementById('show-json').checked;

  if(showJson) {
    // outputDiv.appendChild(resultElement);
    console.log('trueeee');
    outputDiv.classList.remove('d-none');
  }
};

clearResult = (selector) => {
  outputDiv.innerHTML = '';
  outputTbl.innerHTML = '';

  const input = document.querySelector(selector);
  input.focus();
  input.select();
};

onShowJson = () => {
  // if(e.target.checked) {
  outputDiv.classList.toggle('d-none');
  // }
};

addRecord = (payload) => {
  console.log(payload);
};



// Listen to created events and add the new message in real-time
client.service('api/data-service').on('created', addRecord);
