// const readline = require("readline");
// const Model = require("./Model");
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
  question(objectArr) {
    console.log("Напишите ответ:");
    console.log(objectArr.join(""));
    console.log("Красачик");
  }
  print() {}
}

const view = new View();
const model = new Model();
view.topics(model.getTopics("./topics"));
view.question(model.read("./topics/nighthawk_flashcard_data.txt"));

module.exports = View;
