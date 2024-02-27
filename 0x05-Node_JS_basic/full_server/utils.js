const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const students = {};
    lines.slice(1).forEach((line) => {
      const [, , , field] = line.split(',');
      if (students[field]) {
        students[field].push(line.split(',')[0]);
      } else {
        students[field] = [line.split(',')[0]];
      }
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

export { readDatabase };
