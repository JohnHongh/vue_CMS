<template>
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">vue后台管理系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
        <el-form-item prop="username">
          <el-input v-model="ruleForm.username" placeholder="用户名">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            v-model="ruleForm.password"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
// import { doSysLogin } from "@/service/serviceLcm";
export default {
  data: function() {
    return {
      ruleForm: {
        username: "admin",
        password: "123456"
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.$store);
      this.$refs[formName].validate(valid => {
        if (valid) {
          let promise = {
            loginname: this.ruleForm.username,
            password: this.ruleForm.password
          };
          /* doSysLogin(promise).then(data => {
            if (data.code == 200) {
              localStorage.setItem("ms_username", this.ruleForm.username);
              localStorage.setItem("token", data.data.token);
              localStorage.setItem("userId", data.data.sysUserDto.id);
              localStorage.setItem("items", JSON.stringify(data.data.items));
              this.$router.push("/");
            }
          }); */
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(./images/loginBg.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}

.ms-login {
  position: absolute;
  left: 78%;
  top: 50%;
  width: 350px;
  margin: -170px 0 0 -175px;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.ms-content {
  padding: 30px 30px;
}

.login-btn {
  text-align: center;
}

.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>
