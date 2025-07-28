const fs = require('fs');

// Загружаем основной JSON
const data = JSON.parse(fs.readFileSync('./res.json', 'utf-8'));

// Загружаем список переводов (строкой с запятыми)
const rawWords = fs.readFileSync('./wordlist.txt', 'utf-8');
const wordList = rawWords
  .split(',')
  .map(w => w.trim())
  .filter(w => w.length > 0);

// Возвращает 3 случайных, но НЕ включающих правильный ответ
function getRandomOptions(answer, count = 3) {
  const filtered = wordList.filter(w => w !== answer);
  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Добавляем случайные слова в options
for (const key in data) {
  const entry = data[key];
  const answer = entry.answer;

  const randomOptions = getRandomOptions(answer);
  const options = [answer, ...randomOptions];

  // Перемешаем финальный список
  entry.options = options.sort(() => 0.5 - Math.random());
}

fs.writeFileSync('./output.json', JSON.stringify(data, null, 2), 'utf-8');
console.log('✅ Опции добавлены в output.json');
