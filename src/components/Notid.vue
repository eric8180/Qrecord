<template>
  <div id="Notid">
    
      <h1>请您完成身份认证</h1>
      <div class="info">
      <p>姓名:</p>
      <el-input
       type="textarea"
       autosize
       placeholder="请输入姓名"
       v-model="textarea2">
      </el-input>
      <p>身份证：</p>
      <el-input
      type="text"
      placeholder="请输入身份证号码"
      v-model="text"
      maxlength="18"
      show-word-limit>
      </el-input>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Notid'
}
</script>

<style>
/* #info el-input{width: 60%}; */
</style>
