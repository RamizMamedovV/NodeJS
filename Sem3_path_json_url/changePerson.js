const fs = require('fs');
const path = require('path');

const pathtoFile = path.join(__dirname, 'person.json');

const person = JSON.parse(fs.readFileSync(pathtoFile, 'utf-8'));

person.age -= 10;
person.city = 'Baku';

fs.writeFileSync(pathtoFile, JSON.stringify(person, null, 2));
console.log(person);