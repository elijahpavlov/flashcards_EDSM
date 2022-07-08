const { stdout, rawListeners } = require("process");
const readline = require("readline");
const Model = require("./Model");
// readline.createInterface(
//   input: process.stdin,
//   output: process.stdout,
// )

class View {
  constructor(data) {
    this.data = data;
  }
  topics(topicsArr) {
    console.log("Выберите тему:\n");
    console.log(topicsArr.join("\n"));
  }
  print() {}
}

const view = new View();
const model = new Model();
view.topics(model.getTopics("./topics"));

module.exports = View;
