const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

class Model {
  constructor(questions) {
    this.questions = questions
    this.scores = 0
  }
  read(path){
    let v= []
    fs.readFile(path, 'UTF-8',(err, data)=>{
      if(err) throw new   Error('без грубостей')
      v = data.split('\n')
      let result = []
      for (let i = 0; i < v.length; i++) {
        if (i % 2 ===0) result.push({q: v[i], a: v[i + 1]}) 
      }
      console.log(result)
    })
    
    }
 }


const model = new Model()
model.read('./topics/nighthawk_flashcard_data.txt')
module.exports = Model