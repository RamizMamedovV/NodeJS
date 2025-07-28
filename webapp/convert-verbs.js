// создаем json мз файла verbs.txt типа: <english> - <translation>

const fs = require('fs');

// Читаем текст из файла
const input = fs.readFileSync('./verbs_ru.txt', 'utf-8');

// Разделяем на строки, фильтруем пустые
const lines = input.split('\n').map(line => line.trim()).filter(Boolean);

const result = {};

// Обновленное регулярное выражение: учитывает -, —, – и любые тире из Unicode
lines.forEach((line, index) => {
  const [english, translation] = line.split(/\s*[–—-]\s*/).map(part => part.trim());

  if (!english || !translation) {
    console.warn(`⚠️ Пропущено: "${line}"`);
    return;
  }

  const id = index + 1;

  result[id] = {
    id: id,
    words: [translation, english]
  };
});

// Сохраняем результат
fs.writeFileSync('./output.json', JSON.stringify(result, null, 2), 'utf-8');

console.log('✅ Готово: output.json создан!');





// const fs = require('fs');

// // Читаем текст из файла
// const input = fs.readFileSync('./verbs.txt', 'utf-8');

// // Разделяем на строки, фильтруем пустые
// const lines = input.split('\n').map(line => line.trim()).filter(Boolean);

// const result = {};

// lines.forEach((line, index) => {
//   const [english, translation] = line.split(/[-—]/).map(part => part.trim());

//   if (!english || !translation) {
//     console.warn(`⚠️ Пропущено: "${line}"`);
//     return;
//   }

//   const id = index + 1;

//   result[id] = {
//     id: id,
//     words: [english, translation]
//   };
// });

// // Сохраняем результат
// fs.writeFileSync('./output.json', JSON.stringify(result, null, 2), 'utf-8');

// console.log('✅ Готово: output.json создан!');
