/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable no-confusing-arrow */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
const fs = require('fs');

const userNum = 2;
const userNumToInd = userNum - 1;

class Theme {
  static getQandA(userNumToInd) {
    const allThemes = fs.readdirSync('./topics');
    const pickedTheme = allThemes[userNumToInd];
    const questionStrings = fs.readFileSync(`./topics/${pickedTheme}`, 'utf-8');
    const stringsToArr = questionStrings.split('\r\n');
    const onlyQuestionsArr = [];
    const onlyAnswersArr = [];
    stringsToArr.map((str) => {
      if (str.includes('?') && str.length >= 2) {
        onlyQuestionsArr.push(`${stringsToArr.indexOf(str) / 3 + 1}. ${str}`);
      }
      if (!str.includes('?') && str.length >= 2) {
        onlyAnswersArr.push(str);
      }
    });
    const arrs = [onlyQuestionsArr, onlyAnswersArr];
    return arrs;
  }
}

const questions = Theme.getQandA(userNumToInd);
console.log(questions);
module.exports = Theme;
