const fs = require('fs');
const { monitorEventLoopDelay } = require('perf_hooks');

class Model {
  constructor(questions) {
    this.questions = questions
    this.scores = 0
  }
  read(path){
  fs.readFile(path, 'UTF-8',(err, data)=>{
if(err) throw new   Error('без грубостей')
console.log(data);
  }); 
 
 
 }  
}
const model = new Model()
model.read('./topics/nighthawk_flashcard_data.txt')
module.exports = Model