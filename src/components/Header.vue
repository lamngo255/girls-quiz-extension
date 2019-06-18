<template>
  <div>
    <center>
      <h4>Boobs Quiz App</h4>
    </center>
  </div>
</template>

<script>
export default {
  name: "header",
  props: ["numCorrect", "numTotal"]
};
</script>

<style scoped>
h4 {
  color: #27ae60;
  font-weight: bold;
}
</style>
