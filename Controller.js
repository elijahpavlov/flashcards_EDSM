class Controller {
  constructor(model, view) {
    this.model = model
    this.view = view
  }

  run() {
    this.model.getTopics("./topics")
                                .then(files => this.printTopicsController(files))
  }

  printTopicsController(files) {
    this.view.topics(files).then(topic =>{
      this.model.read(`${"./topics/"}${topic}`).then(questions => {
        this.model.questions = questions

        this.askQuestion(questions[this.view.i]).then(x => {
          this.askQuestion(questions[this.view.i]).then(x => {
            this.askQuestion(questions[this.view.i]).then(x => {
              this.askQuestion(questions[this.view.i]).then(x => {
                this.askQuestion(questions[this.view.i]).then(x => {
                  this.askQuestion(questions[this.view.i]).then(x => {
                    this.askQuestion(questions[this.view.i]).then(x => {
                      this.askQuestion(questions[this.view.i]).then(x => {
                        return x
                      })
                    })
                  })
                })
              })
            })
          })
        })
        

      })
    })
  }

  askQuestion(obj){
    return new Promise ((resolve, reject) => {
      this.view.question(obj).then(answer => {
        if (answer === obj.a) {
          this.view.result(true)
        } else {
          console.log('\nПравильный ответ: ' + obj.a)
          this.view.result(false)
        }
        return resolve('next')
      })
    })
  }
}

module.exports = Controller