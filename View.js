const { rawListeners } = require("process");
const readline = require("readline");
const Model = require("./Model");

class View {
  constructor(i = 0) {
    this.i = i
  }
  topics(topicsArr) {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(("Выберите тему:\n\n" + topicsArr.join("\n") + '\n\n'), (answer) => {
        resolve(answer);
        rl.close()
      });
    });
  }

  question({ q }) {
    return new Promise((resolve, reject) => {
      this.i++
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(q + "\n", (answer) => {
        resolve(answer);
        rl.close()
      });
    });
  }

  result(bolean) {
    if (bolean === true) console.log("\nАй, Красавчик!\n");
    else console.log("\nНу ты мамонт...\n");
  }
}

module.exports = View;
