/* eslint-disable no-confusing-arrow */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */
/* eslint-disable no-useless-constructor */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
const fs = require('fs');

const userNum = 1;
const userNumToInd = userNum - 1;

class Theme {
  static getAllThemes() {
    const allThemes = fs.readdirSync('./topics');
    console.log(allThemes);
  }

  static getTheme(userNumToInd) {
    const allThemes = fs.readdirSync('./topics');
    const pickedTheme = allThemes[userNumToInd];
    const questionStrings = fs.readFileSync(`./topics/${pickedTheme}`, 'utf-8');
    console.log(questionStrings);
  }

  static getQuestion() {
    const allThemes = fs.readdirSync('./topics');
    const pickedTheme = allThemes[userNumToInd];
    const questionStrings = fs.readFileSync(`./topics/${pickedTheme}`, 'utf-8');
    const questionArr = questionStrings.split('\r\n');
    const onlyQuestionsArr = [];
    let onlyAnswersArr = [];
    questionArr.map((str) =>
      str.includes('?') ? onlyQuestionsArr.push(str) : onlyAnswersArr.push(str)
    );
    let onlyAnswersArr1 = [];
    onlyAnswersArr.map((str) => {
      if (str.length > 1) onlyAnswersArr1.push(str);
    });
    console.log(onlyQuestionsArr);
    console.log(onlyAnswersArr1);
  }
}

const allThemes = Theme.getAllThemes();
Theme.getTheme(userNumToInd);
Theme.getQuestion();
//TODO rename this file to THEME
