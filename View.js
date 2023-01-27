const readlineSync = require(`readline-sync`);
const { EOL } = require('os');

const styleGreen = '\033[38;5;040m';
const styleRed = '\033[38;5;160m';
const styleStop = '\033[0m';

class View {
  static showTheme() {
    const numberTheme = readlineSync.question(
      '❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓\nВыбор темы: (Выберите цифру)\n1. Насекомые\n2. Книга по цитате\n3. Матричная тема -РОН-\n❓❓❓❓❓❓❓❓❓❓❓❓❓❓❓\n'
    );
    return numberTheme;
  }

  static showQuestions(questionVariant) {
    const answer = readlineSync.question(`${questionVariant.question} ${EOL}`);
    if (answer === questionVariant.answer) {
      console.log(styleGreen, 'Ура!!!');
      console.log(styleStop, '🥳🥳🥳🥳🥳');
      return 100;
    } else {
      console.log(styleRed, 'Как можно было это не знать...');
      console.log(styleStop, '💩💩💩💩💩');
      return -100;
    }
  }
}

module.exports = View;
