<script setup>
import { ref } from 'vue'

const userid = ref('')
const password = ref('')

const handlelogin = () => {
  // 로그인 로직 구현
  console.log('로그인 시도:', userid.value, password.value)
}
</script>

<template>
  <div class="login-container">
    <h2>로그인</h2>
    <div class="login-form">
      <div class="input-group">
        <input 
          type="text" 
          v-model="userid" 
          placeholder="아이디를 입력하세요"
        >
      </div>
      <div class="input-group">
        <input 
          type="password" 
          v-model="password" 
          placeholder="비밀번호를 입력하세요"
        >
      </div>
      <div class="button-group">
        <button class="login-btn" @click="handlelogin">로그인</button>
        <button class="signup-btn" @click="$router.push('/signup')">회원가입</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-group input {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

button {
  flex: 1;
}
</style>