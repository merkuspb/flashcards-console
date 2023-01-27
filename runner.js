const Question = require('./Question');
const View = require('./View');
const Theme = require('./Theme');

// вызов функции показа темы
const theme1 = View.showTheme();

// вызов метода класса по цифре
const questionAndAnsw = Theme.getQandA(theme1);
// получаем массив с вопросами и ответами по теме

// создаем экз класса Вопрос и
// показываем вопрос и получаем ответ от пользователя
let count = 0;
for (let i = 0; i < questionAndAnsw[0].length; i += 1) {
  const question1 = new Question(questionAndAnsw[0][i], questionAndAnsw[1][i]);
  const q1 = View.showQuestions(question1);
  count += q1;
  console.log(`Ваш счёт: ${count}`);
}
setTimeout(() => {
  console.clear();
}, 1500);
