const fs = require("fs");
const { monitorEventLoopDelay } = require("perf_hooks");

class Model {
  constructor(questions) {
    this.questions = questions;
    this.scores = 0;
  }

  read(path){  
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'UTF-8', (err, data) =>{
        if (err) return reject(err)
        let result = []
        let v = data.split('\n')
        for (let i = 0; i < v.length; i++) {
          if (i % 2 ===0) result.push({q: v[i], a: v[i + 1]}) 
        }
        return resolve(result)
      })
    })
  }

  getTopics(path){
    return new Promise((resolve, reject) => {
      fs.readdir(path, (err, files) => {
        if(err) return reject(err)
        return resolve(files)
      })
    })
  }
}

// const model = new Model()
// model.read('./topics/nighthawk_flashcard_data.txt').then(x => console.log(x))
// model.getTopics('./topics').then(x => console.log(x))
module.exports = Model
