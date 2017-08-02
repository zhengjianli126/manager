<style lang="css">
.header {
      position: relative;
      box-sizing: border-box;
      width: 100%;
      height: 70px;
      font-size: 22px;
      line-height: 70px;
      color: #fff;
      background-color: #f1f1f1;
  }
  .header .logo{
      float: left;
      width:250px;
      text-align: center;
  }
  .user-info {
      float: right;
      padding-right: 50px;
      font-size: 16px;
      color: #fff;
  }
  .user-info .el-dropdown-link{
      position: relative;
      display: inline-block;
      padding-left: 50px;
      color: #fff;
      cursor: pointer;
      vertical-align: middle;
  }
  .user-info .user-logo{
      position: absolute;
      left:0;
      top:15px;
      width:40px;
      height:40px;
      border-radius: 50%;
  }
  .el-dropdown-menu__item{
      text-align: center;
  }
  .user-info {
        float: right;
        padding-right: 50px;
        font-size: 16px;
        color: #fff;
    }
    .user-info .el-dropdown-link{
        position: relative;
        display: inline-block;
        padding-left: 50px;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
    }
    .user-info .user-logo{
        position: absolute;
        left:0;
        top:15px;
        width:40px;
        height:40px;
        border-radius: 50%;
    }
</style>
<template lang="html">
  <div class="header">
      <div class="user-info">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link">
                <img class="user-logo" src="../../assets/userImg.png" alt="">
              {{username}}
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      name:'zjl',
      loginout:'loginout'
    }
    // 默认值
  },
  computed:{
      username () {
          let username = localStorage.getItem('username');
          return username?username:this.name;
      }
  },
  methods:{
    handleCommand(command){
        this.$message({
            message:command, //提示信息可动态
            type:"error",// 四种状态
            duration:2000,// 延迟时间
            showClose:true// 是否可以手动关闭
        })
        if(command=='loginout'){
            localStorage.removeItem('username');
            this.$router.push('/login');

        }
    }
  }
}
</script>
