const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

class QuizViewer {
  viewThemes(arrThems) {
    return new Promise((resolve) => {
      console.log(`\n>>>>>_______Q____U______I_______Z_______<<<<<<`)
      console.log(`==============================================`)
      console.log(`>>>>>_______Let\'s get it started_______<<<<<<\n`);
      // console.log(`${arrThems.join('\n')}`);
      console.log(arrThems.map((theme, id) => `${id + 1}. ${theme}`).join('\n'));
      readline.question(`\nВыбери тему (введи число или напиши 'exit'):`, user_answer_theme => {
        resolve(user_answer_theme);
        // readline.close()
      })
    })
  }
  viewQuestion(strQuestion) {
    return new Promise((resolve) => {
      // console.log(`Вы выбрали тему :`);
      console.log(`\n${strQuestion}`);
      readline.question(`\nВведи правильный ответ:`, user_answer_quest => {
        console.log(user_answer_quest);
        resolve(user_answer_quest);
        // readline.close();
      })
    })
  }
  viewFinal(strResult) {
    console.log(`\nПОЗДРАВЛЯЮ ВИКТОРИНА ЗАКОНЧЕНА.`);
    let OTBET;
    if (strResult==1){
      OTBET = 'ответ';
    } else if (strResult>1 && strResult<5){
      OTBET = 'ответа';
    } else {
      OTBET = 'ответов';
    }
    console.log(`\nТВОЙ РЕЗУЛЬТАТ: ${strResult} верных ${OTBET}!`);
    readline.close()
  }
};

module.exports = QuizViewer

const quiz = new QuizViewer();
// quiz.viewThems(['1. Theme Cars', '2. Theme Champions League', '3. Theme JS']);
// quiz.viewQuestion('Question about choosing theme.');
// quiz.viewFinal(9000);

