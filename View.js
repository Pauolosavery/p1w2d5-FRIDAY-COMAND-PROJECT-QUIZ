const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

class QuizViewer {
  
  viewThemes(arrThems) {
    return new Promise((resolve) => {
      console.clear();
      console.log('\x1b[45m',`>>>>>_______Q____U______I_______Z_______<<<<<<`,"\x1b[0m");
      console.log("\x1b[47m",`==============================================`,"\x1b[0m");
      console.log('\x1b[45m',`>>>>>_______Let\'s get it started_______<<<<<< `,"\x1b[0m");
      console.log('\n');
      console.log(`Список тем:`);
      console.group();
      console.log(arrThems.map((theme, id) => `${id + 1}. ${theme}`).join('\n'));
      readline.question(`\nВыбери тему (введи число или напиши 'exit'): `, user_answer_theme => {
        resolve(user_answer_theme);
        console.groupEnd();
        // readline.close()
      })
    })
  }
  viewQuestion(strQuestion) {
    return new Promise((resolve) => {
      console.log("\x1b[47m",'==========================================',"\x1b[0m");
      console.log("\x1b[36m",`\n${strQuestion}`,"\x1b[0m");
      readline.question(`\nВведи свой ответ: `, user_answer_quest => {
        resolve(user_answer_quest);
      })
    })
  }
  viewFinal(strResult) {
    console.log("\x1b[33m",`\nПОЗДРАВЛЯЮ!\n 
ВИКТОРИНА ЗАКОНЧЕНА.`,"\x1b[0m");
    console.log("\x1b[32m",`\nТВОЙ РЕЗУЛЬТАТ: ${strResult} баллов!`,"\x1b[0m");
    readline.close()
  }

  viewEnd() {
    console.log('\nНу и ладно!!!!\n');
    readline.close();
  }

  viewFinalNew(strResult) {
    console.log("\x1b[33m",`\nПОЗДРАВЛЯЮ!\n 
ВИКТОРИНА ЗАКОНЧЕНА.`,"\x1b[0m");

    console.log("\x1b[33m",`\nТВОЙ РЕЗУЛЬТАТ: ${strResult} баллов!`,"\x1b[0m");

    return new Promise((resolve) => {
      readline.question(`\nХотите сыграть еще? Введите ДА если согласны: `, user_answer_quest => {
        resolve(user_answer_quest);
      });
    });
  }

  viewResult(buleanResult, rightAnswer) {
    if (buleanResult){
      console.log("\x1b[32m",`\nЭто правильный ответ! +100 баллов`,"\x1b[0m");
    }else{
    console.log("\x1b[31m",`\nВы ответили неверно! ¯\\_(ツ)_/¯ -100 баллов`,"\x1b[0m");
    console.log("\x1b[33m",`\nПравильный ответ: ${rightAnswer}`,"\x1b[0m");
    }
    console.log("\x1b[47m",'==========================================',"\x1b[0m");
  }
  viewClose() {
    console.log("\x1b[35m",'Жаль что Вы не способны выбрать тему. Досвидания!!!!!!!',"\x1b[0m");
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

