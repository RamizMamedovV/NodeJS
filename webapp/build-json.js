

const fs = require('fs');

// Читаем входной JSON-файл
const raw = fs.readFileSync('./output.json', 'utf-8');
const original = JSON.parse(raw);

const transformed = {};

for (const key in original) {
  const entry = original[key];
  const [english, translation] = entry.words;

  transformed[key] = {
    id: entry.id,
    task: english,
    options: [translation],
    answer: translation
  };
}

// Сохраняем результат в новый файл
fs.writeFileSync('./res.json', JSON.stringify(transformed, null, 2), 'utf-8');
console.log('✅ Готово: res.json создан');





// const fs = require('fs');

// // Загружаем исходные файлы
// const tasks = JSON.parse(fs.readFileSync('./output.json', 'utf-8'));
// // const answers = JSON.parse(fs.readFileSync('./answers.json', 'utf-8'));

// const result = {};

// for (let i = 0; i < tasks.length; i++) {
//   const id = i + 1;

// // "82": {
// //     "id": 82,
// //     "words": [
// //       "force",
// //       "заставлять"
// //     ]
// //   },

// // {
// //   "1": {
// //     "id": 1,
// //     "task": "force",
// //     "options": [
// //       "заставлять",
// //     ],
// //     "answer": "заставлять"
// //   },
// //   "2": 


//   result[id] = {
//     id: id,
//     task: tasks[i].words[0],
//     options: tasks[i].words[1],
//     answer: tasks[i].words[0]
//   };
// }

// // Записываем в файл
// fs.writeFileSync('./output-r.json', JSON.stringify(result, null, 2), 'utf-8');

// console.log('✅ Готово! Файл "output.json" создан.');
