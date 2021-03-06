class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }




  async run() {
    const listThemes = await this.model.getThemes();
    let choosedThemes;
    let count = 0
    do {
      choosedThemes = await this.view.viewThemes(listThemes);
      if (choosedThemes === 'exit') {
        this.view.viewClose();
        return;
      }
    }
    while (!this.checkThemes(listThemes, choosedThemes));
    const questions = await this.model.getQuestions(choosedThemes);
    for (let arrQuestion of questions) {
      let userAnswer = await this.view.viewQuestion(arrQuestion.question);
      this.view.viewResult(userAnswer.toLowerCase() == arrQuestion.answer.toLowerCase(), arrQuestion.answer);
      if (userAnswer.toLowerCase() == arrQuestion.answer.toLowerCase()) {
        count += 100;
      } else {
        count -= 100;
      }
    }
    const isNewRun = await this.view.viewFinalNew(count);
    if (isNewRun.toLowerCase() === 'да') {
      this.run();
    } else {
      this.view.viewEnd();
    }
  }

    // Просим экземпляр класса модели прочитать папку со всеми темами и составить меню.
    // Попутно передаем метод контроллера this.printTopicsController,
    // так как нам нужно отправить сформинованное меню на вывод в экземпляр класса view
    // после того, как завершится асинхронная операция чтения папки
    // Здесь this.printTopicsController — является callback'ом  
  //   this.model.readTopics(this.printTopicsController)
  

  checkThemes(listThemes, choosedThemes) {

    return +choosedThemes <= listThemes.length && +choosedThemes > 0;
  }


  // printTopicsController(topicsMenu) {
  //   // Тут нужно попросить экземпляр класса view вывести меню пользователю, 
  //   // а также дождаться ответа последнего
  // }


}

module.exports = Controller
