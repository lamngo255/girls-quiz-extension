<template>
  <div id="app">
    <Header :numTotal="numTotal" :numCorrect="numCorrect"/>
    <QuestionBox :currentQuestion="questions[index]" :index="index" :next="next"/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import QuestionBox from "@/components/QuestionBox";
import questionData from "@/data/question-bank.json";
import _ from "lodash";

export default {
  name: "app",
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0,
      numTotal: 0,
      numCorrect: 0
    };
  },
  methods: {
    next() {
      this.index++;
    }
  },
  mounted() {
    this.questions = _.shuffle(questionData);
  }
};
</script>