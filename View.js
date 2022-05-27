const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

class QuizViewer {
  viewThems(arrThemes) {
    return new Promise((resolve) => {
      console.log(`\n>>>>>_______Q____U______I_______Z_______<<<<<<`)
      console.log(`==============================================`)
      console.log(`>>>>>_______Let\'s get it started_______<<<<<<\n`);
      console.log(`${(arrThemes.map((theme, indx)=> `${indx+1}. ${theme}`)).join('\n')}`);
      readline.question(`\nВыбери тему (введи число или напиши 'exit'):`, user_answer_theme => {
        resolve(user_answer_theme);
        // readline.close()
      })
    })
  }
  viewQuestion(strQuestion) {
    return new Promise((resolve) => {
      console.log(`Вы выбрали тему:`);
      console.log(`\n${strQuestion}`);
      readline.question(`\nВведи номер правильного ответа:`, user_answer_quest => {
        resolve(user_answer_quest);
        // readline.close()
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

