const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

class QuizViewer {
  
  viewThemes(arrThems) {
    return new Promise((resolve) => {
      console.clear();
      console.log(`\n>>>>>_______Q____U______I_______Z_______<<<<<<`);
      console.log(`==============================================`);
      console.log(`>>>>>_______Let\'s get it started_______<<<<<<\n`);
      console.log(`Список тем:`);
      console.log(arrThems.map((theme, id) => `${id + 1}. ${theme}`).join('\n'));
      readline.question(`\nВыбери тему (введи число или напиши 'exit'): `, user_answer_theme => {
        resolve(user_answer_theme);
        // readline.close()
      })
    })
  }
  viewQuestion(strQuestion) {
    return new Promise((resolve) => {
      console.log('==========================================');
      console.log(`\n${strQuestion}`);
      readline.question(`\nВведи свой ответ: `, user_answer_quest => {
        resolve(user_answer_quest);
      })
    })
  }
  viewFinal(strResult) {
    console.log(`\nПОЗДРАВЛЯЮ!\n 
ВИКТОРИНА ЗАКОНЧЕНА.`);
    console.log(`\nТВОЙ РЕЗУЛЬТАТ: ${strResult} баллов!`);
    readline.close()
  }

  viewEnd() {
    console.log('\nНу и ладно!!!!\n');
    readline.close();
  }

  viewFinalNew(strResult) {
    console.log(`\nПОЗДРАВЛЯЮ!\n 
ВИКТОРИНА ЗАКОНЧЕНА.`);

    console.log(`\nТВОЙ РЕЗУЛЬТАТ: ${strResult} баллов!`);

    return new Promise((resolve) => {
      readline.question(`\nХотите сыграть еще? Введите ДА если согласны: `, user_answer_quest => {
        resolve(user_answer_quest);
      });
    });
  }

  viewResult(buleanResult, rightAnswer) {
    if (buleanResult){
      console.log(`\nЭто правильный ответ! +100 баллов`);
    }else{
    console.log(`\nВы ответили неверно! ¯\\_(ツ)_/¯ -100 баллов`);
    console.log(`\nПравильный ответ: ${rightAnswer}`);
    }
    console.log('==========================================');
  }
  viewClose() {
    console.log('Жаль что Вы не способны выбрать тему. Досвидания!!!!!!!');
    readline.close();
  }
};

module.exports = QuizViewer

// const quiz = new QuizViewer();
// quiz.viewThems(['Theme Cars', 'Theme Champions League', 'Theme JS']);
// quiz.viewQuestion('Question about choosing theme.');
// quiz.viewFinal(6);
// quiz.viewResult(true);
// quiz.viewResult(false);

