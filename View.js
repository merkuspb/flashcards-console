const readlineSync = require(`readline-sync`);

class View {
  static showTheme() {
    let numberTheme = readlineSync.question(
      `Выбор темы: (Выберите цифру)\n1. тема1\n2. тема2\n3. тема3\n`
    );
    return numberTheme;
  }
  static showQuestions(questionVariant) {
    let answer = readlineSync.question(`${questionVariant.question}\n`);
    return answer;
  }
  static showQuestions(questionVariant) {
    let answer = readlineSync.question(`${questionVariant.question}\n`);
    if (answer === questionVariant.answer) {
      console.log(`Ура!!!:+1:`);
    } else {
      console.log("Как можно было это не знать...");
    }
  }
}

module.export = View;
