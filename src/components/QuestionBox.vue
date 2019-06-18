<template>
  <b-container v-if="currentQuestion">
    <div>
      <span class="dot">
        <center>{{ index + 1}}</center>
      </span>
      <span>{{ currentQuestion.question }}</span>
    </div>

    <b-row>
      <b-col>
        <ul>
          <li
            v-for="(answer, index) in shuffledAnswers"
            :key="index"
            :class="answerClass(answer.key)"
            @click="selectAnswer(answer.key)"
          >
            <span>{{ convertIndex(index)}}. {{ answer.content }}</span>
            <br>
          </li>
        </ul>
      </b-col>

      <b-col v-if="selectedKey === correctKey" class="reward">
        <!-- Here are images -->
        <span>Baby, you nailed it!</span>
        <img src alt>
      </b-col>
    </b-row>

    <a href="#" @click="next" :disabled="!answered">Next ►</a>
  </b-container>
</template>

<script>
import _ from "lodash";
export default {
  props: {
    currentQuestion: Object,
    index: Number,
    next: Function
  },
  data() {
    return {
      selectedKey: null,
      correctKey: null,
      shuffledAnswers: [],
      answered: null
    };
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedKey = null;
        this.correctKey = null;
        this.answered = null;
        this.shuffleAnswers();
      }
    }
  },
  methods: {
    shuffleAnswers() {
      if (this.currentQuestion) {
        let answers = _.shuffle(this.currentQuestion.answers);
        this.shuffledAnswers = answers;
        this.correctKey = this.currentQuestion.correct_answer;
      }
    },
    convertIndex(index) {
      return " " + String.fromCharCode(index + "A".charCodeAt(0));
    },
    submitAnswer() {},
    selectAnswer(key) {
      this.selectedKey = key;
      let isCorrect = false;
      if (this.selectedKey === this.correctKey) {
        isCorrect = true;
      }

      this.answered = true;
    },
    answerClass(key) {
      let answerClass = "";
      if (this.answered && this.correctKey === key) {
        answerClass = "correct";
      } else if (
        this.answered &&
        this.correctKey !== key &&
        this.selectedKey === key
      ) {
        answerClass = "incorrect";
      } else {
        answerClass = "";
      }
      return answerClass;
    }
  }
};
</script>

<style scoped>
.reward span {
  font-style: italic;
  font-weight: bold;
}
.dot {
  height: 28px;
  width: 28px;
  background-color: #27ae60;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  bottom: 1px;
  right: 2px;
  color: #fff;
}

a {
  color: #27ae60;
  text-decoration: underline;
}

.dot > center {
  padding-top: 3px;
}

li {
  list-style-type: none;
}

li:hover {
  cursor: pointer;
  font-weight: bold;
}

.correct {
  color: #27ae60;
  font-weight: bold;
}

.incorrect {
  color: #e74c3c;
  font-weight: bold;
}

span {
  margin: 10px 10px 0px 0px;
}
</style>
