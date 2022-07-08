const { stdout } = require('process');
const readline = require('readline')
readline.createInterface(
  input: process.stdin,
  output: process.stdout,
)

class View {
  constructor(data) {
    this.data = data;
  }
  question()
}

topics() {
  const data = [];
  this.data.forEach(el => {
    data.push(el)
    
  });
}







module.exports = View;
