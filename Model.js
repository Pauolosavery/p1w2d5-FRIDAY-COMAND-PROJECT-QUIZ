const fs = require('fs');

class Model {
  constructor(path) {
    this.path = path;
  }
  getThemes() {
    return new Promise((resolve, reject) => {
      fs.readdir('./topics', (err, arrThemes) => {
        if (!err) {
          resolve(arrThemes)
          //console.log(arrThemes);
        } else {
          reject(err)
          console.log('Не удалось получить список тем');
        }
      })
    })
  }
  getQuestions(fileName) {
    return new Promise((resolve, reject) => {
      console.log(`${this.path}/${fileName}`);
      fs.readFile(`${this.path}/${fileName}`, 'utf-8', (err, questions) => {
        if (!err) {
          resolve(questions)
           console.log(questions);
        } else {
          reject(err)
          console.log('Не удалось получить список вопросов');
        }
      })
    })
  }
};


const model = new Model('./topics')
// console.log(model);
model.getThemes()
 .then(result => {
   for (let i = 0; i < result.length; i++) {
     console.log(result[i]);
   }
 });


//model.getQuestions('nighthawk_flashcard_data.txt')



module.exports = Model
