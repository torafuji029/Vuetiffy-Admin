<template>
  <div class="login-box">
    <div class="shutter"></div>
    <v-container fill-height class="content">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="7" md="5" lg="4" xl="2" class="ma-0">
          <div class="logo-box">
            <img class="logo" src="/v_white.png" />
            <p class="title">Vuetify Admin</p>
          </div>
          <v-container>
            <LoginForm :id.sync="user.id" :password.sync="user.password" />
            <v-btn color="primary" class="login-btn mt-3" block>Login</v-btn>

            <p class="forget-password">パスワードを忘れた場合</p>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 'admin',
        password: '1111',
      },
    }
  },
}
</script>

<style lang="scss">
.login-box {
  height: 100%;
  width: 100%;
  background: url('../assets/background1.jpg');
  background-size: cover;
  .content {
    margin-top: -25px;
  }
  .login-form {
    .form-item {
      transition: 0.2s;
      margin: 2px;
      opacity: 0.7;
    }
  }

  .forget-password {
    transition: 0.5s ease;
    text-align: center;
    font-size: 14px;
    color: white;
    text-decoration: underline;
    text-decoration-color: white;
    padding: 15px;
    cursor: pointer;

    &:hover {
      color: $primary;
      text-decoration-color: $primary;
    }
  }
  .logo-box {
    text-align: center;
    .logo {
      text-align: center;
      height: 120px;
    }
    .title {
      color: white;
    }
  }
}

// アニメーション
.shutter {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(18, 132, 184);
  background: linear-gradient(90deg, $primary 0%, $secondary 33%, $third 66%, $accent 100%);
  z-index: 9999;
  animation: byeShutter 2.6s forwards;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    background-color: #f3f3f3;
    width: 0;
    height: 1px;
    animation: shutterOpen 2.6s forwards;
  }
}

.content {
  animation: contentScale 2.6s forwards;
}

@keyframes byeShutter {
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: none;
    z-index: -1;
  }
}

@keyframes shutterOpen {
  0% {
    width: 0;
    height: 1px;
  }
  50% {
    width: 100%;
    height: 1px;
  }
  90% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 100%;
    height: 100%;
  }
}
</style>
