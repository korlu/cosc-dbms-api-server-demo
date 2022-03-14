/* eslint-disable no-undef */
const socket = io();
const app = feathers();

app.configure(feathers.socketio(socket));

const outputDiv = document.getElementById('output-content');

executeQuery = async (selector) => {
  const params = {
    query: {
      sql: document.querySelector(selector).value
    }
  };

  const result = await app.service('api/data-service').find(params);
  const resultElement = document.createElement('pre');
  resultElement.textContent = JSON.stringify(result, null, 4);

  clearResult();

  outputDiv.appendChild(resultElement);
};

clearResult = () => {
  outputDiv.innerHTML = '';
};
