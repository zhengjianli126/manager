<style lang="css" type="text/css">
  .login{
    background: url(../../assets/logobg.jpg) no-repeat #282828;
    position: absolute;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
  }
  .login-header{
    background-color:#2c2f34;
    width: 100%;
    height: 97px;
    background: url(../../assets/sjwlogo.png) no-repeat 80px 30px #2c2f34;
  }
  .form-bd{
    background: url(../../assets/logocon_bg.png) no-repeat center 0px;
    padding-top: 193px;
    text-align: center;
    position: fixed;
    width: 477px;
    height: 554px;
    left: 50%;
    margin-left: -238px;
    top: 18%;
    padding-left: 82px;
    padding-right: 82px;
  }

</style>
<template lang="html">
    <div class="login">
      <div class="login-header"></div>
      <div class="form-bd">
        <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
            <el-form-item prop="username">
              <el-input type="text" v-model="ruleForm2.username"  auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="ruleForm2.password"  auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')" style="width:314px;" >登录</el-button>
            </el-form-item>
      </el-form>
      </div>

  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
     var validatePass = (rule, value, callback) => {
       if (value === '') {
         callback(new Error('请输入用户名'));
       } else {
         if (this.ruleForm2.username !== '') {
          //  this.$refs.ruleForm2.validateField('username');
         }
         callback();
       }
     };
     var validatePass2 = (rule, value, callback) => {
       if (value === '') {
         callback(new Error('请输入密码'));
       } else {
          // this.$refs.ruleForm2.validateField('password');
         callback();
       }
     };
     return {
       ruleForm2: {
         username: '',
         password: ''
       },
       rules2: {
         username: [
           { validator: validatePass, trigger: 'blur' }
         ],
         password: [
           { validator: validatePass2, trigger: 'blur' }
         ]
       }
     };
   },
   methods: {
     submitForm(formName) {
       this.$refs[formName].validate((valid) => {
         if (valid) {
           alert('submit!');
         } else {
           console.log('error submit!!');
           return false;
         }
       });
     }
   }
}
</script>
