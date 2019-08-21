<template>
  <div id="home" >
    <el-container>
      <el-header >中国人寿寿险APP问题锦集</el-header>
      <el-main>
        <ul>
          <li><router-link to="/judge" style="text-decoration:blink;color:blue" >"我的"页面中显示的姓名不正确</router-link></li>
          <li><router-link to="/judge" style="text-decoration:blink;color:blue" >开通初级权限提示:"您的身份证信息已注册过相关服务.."</router-link></li>
        </ul>
      </el-main>
      <el-footer>
        <p>版权所有©中国人寿保险（集团）公司</p>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'QuestionIndex'
}
</script>

<style>
#home {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.el-container{
  height:100%;
}

.el-header, .el-footer {
  background-color: rgb(102, 173, 108);
  color:white;
  text-align: center;
}
.el-header{
  padding-top:20px;
  font-weight:bolder; 
}
.el-footer  {
  font-size: 5px;
  background-color: lightgrey;
  padding-top:10px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
  }
.el-main ul li{
    background-color: #E9EEF3;
    color: #333;
    text-align: left;
  }
</style>