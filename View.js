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
      console.log(arrThems.map((theme, id) => `${id + 1}. ${theme}`).join('\n'));
      readline.question(`\nВыбери тему (введи число или напиши 'exit'):`, user_answer_theme => {
        resolve(user_answer_theme);
        // readline.close()
      })
    })
  }
  viewQuestion(strQuestion) {
    return new Promise((resolve) => {
      console.log(`\n${strQuestion}`);
      readline.question(`\nВведи правильный ответ:`, user_answer_quest => {
        console.log(user_answer_quest);
        resolve(user_answer_quest);
      })
    })
  }
  viewFinal(strResult) {
    console.log(`\nПОЗДРАВЛЯЮ!\n 
    ВИКТОРИНА ЗАКОНЧЕНА.`);
    let OTBET;
    if (strResult==1){
      OTBET = 'верный ответ';
    } else if (strResult>1 && strResult<5){
      OTBET = 'верных ответа';
    } else {
      OTBET = 'верных ответов';
    }
    console.log(`\nТВОЙ РЕЗУЛЬТАТ: ${strResult} ${OTBET}!`);
    readline.close()
  }
  viewResult(buleanResult) {
    if (buleanResult){
      console.log(`\nЭто правильный ответ! +1 балл`);
    }else{
    console.log(`\nНеправильно ¯\\_(ツ)_/¯ `);
    }
  }
};

module.exports = QuizViewer

const quiz = new QuizViewer();
// quiz.viewThems(['Theme Cars', 'Theme Champions League', 'Theme JS']);
// quiz.viewQuestion('Question about choosing theme.');
// quiz.viewFinal(6);
quiz.viewResult(true);
// quiz.viewResult(false);

