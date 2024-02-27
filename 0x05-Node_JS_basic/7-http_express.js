const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Define route handlers
app.get('/', (req, res) => {
    res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
    countStudents('database.csv')
        .then(data => {
            const totalCount = data.totalCount;
            const fields = data.fields;

            let response = `This is the list of our students\nNumber of students: ${totalCount}\n`;
            for (const field in fields) {
                if (Object.prototype.hasOwnProperty.call(fields, field)) {
                    response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
                }
            }
            res.send(response);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
});

// Start the server
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
