const { rawListeners } = require("process");
const readline = require("readline");
const Model = require("./Model");
readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class View {
  constructor(data) {
    this.data = data;
  }
  topics(topicsArr) {
    return new Promise((resolve, reject) => {
      readline.question("Выберите тему:\n" + topicsArr.join("\n"), (answer) => {
        resolve(answer);
      });
    });
  }

  question({ a }) {
    return new Promise((resolve, reject) => {
      readline.question(a + "\n", (answer) => {
        resolve(answer);
      });
    });
  }

  result(bolean) {
    if (bolean === true) console.log("Ай, Красавчик!");
    else console.log("Ну ты мамонт...");
  }
}

const view = new View();
const model = new Model();
view.topics(model.getTopics("./topics"));
view.question(model.read("./topics/nighthawk_flashcard_data.txt"));

module.exports = View;
