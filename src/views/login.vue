<template>
  <div>
    <el-card class="login-form-layout">
      <el-form
        aria-autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
        >
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width:56px;height: 56px;color: #409eff"></svg-icon>
        </div>
        <h2 class="login-title color-main">ma;;-admin-web</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="请输入用户名"
            >
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          username: 'admin',
          passwprd: '123456'
        },
        loading: false,
        pwdType: 'password',
      }
    },
    methods: {
      showPwd () {
        if (this.pwdType === 'password') {
          this.pwdType = ''
        } else {
          this.pwdType = 'password'
        }
      },
      handleLogin () {
        this.$.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Login', this.loginForm).then(response => {
              this.loading = false
              let code = response.data.code
              if (code == 200) {
                this.$router.push({
                  path: '/success',
                  query: {data: response.data.data}
                })
              } else {
                this.$router.push({
                  path: '/error',
                  query: {message: response.data.message}
                })
              }
            })
              .catch(() => {
                this.loading = false
              })
          } else {
            console.log("参数验证不合法! ");
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409eff;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409eff;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>
