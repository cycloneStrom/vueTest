<!-- 页面文件 -->
<template>
  <div>
    <div class="home text-center">
      <div class="loginWrapper">
        <h2>登录</h2>
        <el-form :label-position="labelPosition" :rules="rules" ref="login" label-width="80px" :model="login">
          <el-form-item label="用户名：">
            <el-input v-model="login.name"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="login.password"></el-input>
          </el-form-item>
        </el-form>
        <el-button type="primary" :loading="loginLoading" @click="handleLogin(login)">登录</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="less">
  .loginWrapper {
    width: 30%;
    margin: 0 auto;
    h2 {
      text-align: center;
    }
    button {
      position: absolute;
      left: 50%;
      margin-left: -20px;
    }
  }
</style>
<script>
  export default {
    data () {
      return {
        loginLoading: false,
        labelPosition: 'right',
        login: {
          name: '',
          password: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'change'},
            {min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      handleLogin (formName) {
        console.log('login!')
        this.loginLoading = true;
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
