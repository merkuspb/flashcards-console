/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable no-confusing-arrow */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
const fs = require('fs');

const userNum = 1;
const userNumToInd = userNum - 1;

class Theme {
  static getAllThemes() {
    const allThemes = fs.readdirSync('./topics');
    return allThemes;
  }

  static getThemeStrings(userNumToInd, allThemes) {
    const pickedTheme = allThemes[userNumToInd];
    const questionStrings = fs.readFileSync(`./topics/${pickedTheme}`, 'utf-8');
    return questionStrings;
  }

  static getQuestion(themeStrings) {
    const stringsToArr = themeStrings.split('\r\n');
    const onlyQuestionsArr = [];
    stringsToArr.map((str) => {
      if (str.includes('?') && str.length >= 2) onlyQuestionsArr.push(str);
    });
    return onlyQuestionsArr;
  }

  static getAnswers(themeStrings) {
    const questionArr = themeStrings.split('\r\n');
    const onlyAnswersArr = [];
    questionArr.map((str) => {
      if (!str.includes('?') && str.length >= 2) onlyAnswersArr.push(str);
    });
    return onlyAnswersArr;
  }
}

const allThemes = Theme.getAllThemes();
const themeStrings = Theme.getThemeStrings(userNumToInd, allThemes);
const questions = Theme.getQuestion(themeStrings);
const answers = Theme.getAnswers(themeStrings);
console.log(questions);
console.log(answers);
