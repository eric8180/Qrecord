<template>
  <div id="home">
    <div id="img">
        <img alt="Question logo" src="../assets/question.jpg">
    </div>
    <div id="question">
      <ul>
        <li><router-link to="/judge">"我的"页面中显示的姓名不正确</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionIndex'
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#question a{
  text-decoration: none;
  color:cornflowerblue
}