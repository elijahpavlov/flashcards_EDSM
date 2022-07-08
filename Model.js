const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

class Model {
  constructor(questions) {
    this.questions = questions
    this.scores = 0
  }

  read(path){
    let result = []
    let v = fs.readFileSync(path, 'UTF-8').split('\n')
    for (let i = 0; i < v.length; i++) {
      if (i % 2 ===0) result.push({q: v[i], a: v[i + 1]}) 
    }
    return result    
  }

  getTopics(path){
    return fs.readdirSync(path)
  }
 }


const model = new Model()
// console.log(model.read('./topics/nighthawk_flashcard_data.txt'))
module.exports = Model