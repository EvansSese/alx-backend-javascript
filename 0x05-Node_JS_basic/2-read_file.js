const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = lines.slice(1).map((line) => line.split(','));
    const totalCount = students.length;

    const fields = {};
    students.forEach((student) => {
      const field = student[3];
      if (fields.hasOwnProperty(field)) {
        fields[field].push(student[0]);
      } else {
        fields[field] = [student[0]];
      }
    });

    console.log(`Number of students: ${totalCount}`);
    for (const field in fields) {
      if (fields.hasOwnProperty(field)) {
        console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
