<template>
  <div id="Idfalse">   
      <h1>保单上的姓名是否正确</h1>
      <el-row>
      <el-button type="primary" ><router-link to ="/Nameright">是</router-link></el-button>
      <el-button><router-link to ="/Namefalse">否</router-link></el-button>
      </el-row>   
  </div>
</template>

<script>
export default {
  name: 'Idfalse'
}
</script>


