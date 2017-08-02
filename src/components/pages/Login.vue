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
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  class="demo-ruleForm">
            <el-form-item prop="username">
              <el-input type="text" v-model="ruleForm.username"  auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input type="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')" style="width:314px;" >登录</el-button>
            </el-form-item>
      </el-form>
      <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    //手动添加验证方法
    //  var validatePass = (rule, value, callback) => {
    //    if (value === '') {
    //      callback(new Error('请输入用户名'));
    //    } else {
    //      if (this.ruleForm.username !== '') {
     //
     //
    //      }
    //      callback();
    //    }
    //  };
    //  var validatePass2 = (rule, value, callback) => {
    //    if (value === '') {
    //      callback(new Error('请输入密码'));
    //    } else {
    //
    //      callback();
    //    }
    //  };

     return {
       ruleForm: {
         username: '',
         password: ''
       },
       //手动添加验证方法
      //  rules: {
      //    username: [
      //      { validator: validatePass, trigger: 'blur' }
      //    ],
      //    password: [
      //      { validator: validatePass2, trigger: 'blur' }
      //    ]
      //  }
      rules:{
        username:[{required:true,message:'请输入用户名',trigger:'blur'}],
        password:[{required:true,message:'请输入密码',trigger:'blur'}]
      }
     };
   },
   methods: {
     submitForm(formName) {
       this.$refs[formName].validate((valid) => {
         if (valid) {
          localStorage.setItem('username',this.ruleForm.username);
          this.$router.push('/readme');
         } else {
           console.log('error submit!!');
           return false;
         }
       });
     }
   }
}
</script>
