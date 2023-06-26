const express = require('express');
const mysql = require('mysql');
const util = require('util');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
};

const connection = mysql.createConnection(config);
const query = util.promisify(connection.query).bind(connection);

app.get('/', async (_, res) => {
  try {
    const insertPersonQuery = `INSERT INTO people(name) values('Pessoa numero ${Math.floor(
      Math.random() * 1000
    )}')`;

    await query(insertPersonQuery);

    const selectPeople = `SELECT id, name FROM people`;
    const response = await query(selectPeople);

    const list = `
      <ol>
        ${response
          .map((person) => `<li value="${person.id}">${person.name}</li>`)
          .join('')}
      </ol>
    `;

    res.send('<h1>hello world</h1>' + list);
  } catch (error) {
    console.log(error);
    res.send(`
      <h1>Full Cycle Rocks!!</h1>
      <span>algo deu errado ao pegar os registros no banco de dados, tente novamente</span>
    `);
  }
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
