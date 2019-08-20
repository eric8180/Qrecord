<template>
  <div id="home">
    <div id="img">
        <img alt="Question logo" src="../assets/sfz.jpg">
    </div>
    <div id="judge">
      <h1>用户是否身份认证</h1>
      <el-row>
      <el-button type="primary" ><router-link to ="/Isid">是</router-link></el-button>
      <el-button><router-link to ="/Notid">否</router-link></el-button>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'judge'
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
#judge a{
  text-decoration: none;
  color:cornflowerblue
}