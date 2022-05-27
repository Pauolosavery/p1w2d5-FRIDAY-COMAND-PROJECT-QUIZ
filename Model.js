const fs = require('fs');

class Model {
  constructor(path) {
    this.path = path;
    this.themes = [];
  }
  getThemes() {
    return new Promise((resolve, reject) => {
      fs.readdir('./topics', (err, arrThemes) => {
        if (!err) {
          this.themes = arrThemes;
          resolve(arrThemes.map((el) => this.transformName(el)));
          //console.log(arrThemes);
        } else {
          reject(err)
          console.log('Не удалось получить список тем');
        }
      })
    })
  }
  getQuestions(fileID) {
    return new Promise((resolve, reject) => {
      const fileName = this.themes[fileID - 1];
      console.log(`${this.path}/${fileName}`);
      fs.readFile(`${this.path}/${fileName}`, 'utf-8', (err, questions) => {
        if (!err) {
          questions = questions.split('\n\n').map((el) => this.transformQuestion(el));
          resolve(questions)
          // console.log(questions);
        } else {
          reject(err)
          console.log('Не удалось получить список вопросов');
        }
      })
    })
  }

  transformName (name) {
    return name.split('_')[0];   
  }

  transformQuestion (question) {
    return {
      question: question.split('\n')[0],
      answer: question.split('\n')[1],
    };   
  }




};


const model = new Model('./topics')
// console.log(model);
// model.getThemes()
//  .then(result => {
//    for (let i = 0; i < result.length; i++) {
//      console.log(result[i].split('_')[0]);
//    }
//  });


//model.getQuestions('nighthawk_flashcard_data.txt')



module.exports = Model;
