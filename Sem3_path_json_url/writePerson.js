/**
 * 
const fs = require('fs');
const path = require('path');

const person = {
    name: "Ivan",
    surName: "Ivanov",
    age: 45,
    city: "London",
}

const personJson = JSON.stringify(person, null, 2);
fs.writeFileSync(path.join(__dirname, 'person.json'), personJson);
*/


// Альтернативный вариант с async/await
// Для более удобной работы с Promise можно использовать синтаксис async/await:

const fs = require('fs').promises;
const path = require('path');

const person = {
    name: "Ivan",
    surName: "Ivanov",
    age: 45,
    city: "London",
};

const personJson = JSON.stringify(person, null, 2);

// Асинхронная функция для записи файла
async function savePersonToFile() {
    try {
        await fs.writeFile(path.join(__dirname, 'person.json'), personJson);
        console.log('Файл успешно записан!');
    } catch (err) {
        console.error('Ошибка при записи файла:', err);
    }
}

// Вызов асинхронной функции
savePersonToFile();