const http = require('http');
const countStudents = require('./3-read_file_async');

// Create the HTTP server
const app = http.createServer((req, res) => {
    // Set the response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Handling different URL paths
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    } else if (req.url === '/students') {
        // Call countStudents function to get student information
        countStudents('database.csv')
            .then(data => {
                const totalCount = data.totalCount;
                const fields = data.fields;

                // Response message
                let response = `This is the list of our students\nNumber of students: ${totalCount}\n`;
                for (const field in fields) {
                    response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
                }
                res.end(response);
            })
            .catch(error => {
                res.statusCode = 500;
                res.end(error.message);
            });
    } else {
        res.statusCode = 404;
        res.end('Page not found\n');
    }
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
