/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable array-callback-return */
/* eslint-disable no-confusing-arrow */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
const fs = require('fs');
const { EOL } = require('os');

class Theme {
  static getQandA(userNum) {
    const userNumToInd = userNum - 1;
    const allThemes = fs.readdirSync('./topics');
    const pickedTheme = allThemes[userNumToInd];
    const questionStrings = fs.readFileSync(`./topics/${pickedTheme}`, 'utf-8');
    const stringsToArr = questionStrings.split(`${EOL}`);
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

module.exports = Theme;
