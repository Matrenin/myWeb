const app = new Vue({
    el: "#app",
    data: {
      letters: "",
      text: "",
      answer: "",
      count: 0
    },
    methods: {
      getRandomNumber(to) {
        return Math.round(Math.random() * to);
      },
      generateText(letters, length) {
        let text = "";
        for (let i = 0; i < length; i++) {
          let n = this.getRandomNumber(letters.length - 1);
          text += letters[n];
        }
        return text;
      },
      getNewText() {
        let arrayLetters = this.letters.split(",");
        this.text = this.generateText(arrayLetters, 20);
      },
      checkedAnswer() {
        if (this.answer === this.text) {
          this.count++;
          this.answer = "";
          this.getNewText();
        } else {
          this.answer = "";
        }
      }
    }
  });