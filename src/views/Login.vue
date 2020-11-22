<template>
  <div class="login-wrapper">
    <a-form class="login-form">
      <h2>后台管理系统</h2>
      <a-form-item label="用户名：" class="form-item">
        <a-input v-model:value="form.name" />
      </a-form-item>
      <a-form-item label="密码：">
        <a-input v-model:value="form.pwd" type="password"/>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" class="login-button">登陆</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        name: '',
        pwd: '',
      },
    };
  },
};
</script>
<style lang="postcss" scoped>
.login-wrapper {
  height: 100%;
  width: 100%;
  background: url(../assets/login_bg.jpg) no-repeat 50%;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
}
.login-form {
  position: absolute;
  top: 20%;
  left: 50%;
  width: 500px;
  height: 500px;
  margin-left: -250px;
  & h2 {
    font-size: 38px;
    color: #fff;
    text-align: center;
  }
}
</style>
<style lang="postcss" >
.ant-form-item-label {
  width: 100px!important;
  & label {
    color: #fff!important;
  }
}
.ant-col {
  width: 300px;;
}
.login-button {
  margin-left: 100px;
  width: 300px;
}
</style>
