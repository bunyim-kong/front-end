<template>
  <div class="min-h-screen flex items-center justify-center bg-[#f8fafc] px-6 pt-20">
    
    <!-- Logged-in: Profile view -->
    <div v-if="user" class="w-full max-w-md bg-white rounded-[32px] shadow-2xl border border-slate-100 p-10 flex flex-col items-center">
      <div class="relative mb-6">
        <div class="w-24 h-24 bg-gradient-to-tr from-[#763feb] to-[#a076f9] rounded-full flex items-center justify-center text-white text-3xl font-black shadow-xl">
          {{ user.username?.charAt(0)?.toUpperCase() || '?' }}
        </div>
        <div class="absolute bottom-0 right-0 w-6 h-6 bg-green-500 border-4 border-white rounded-full"></div>
      </div>

      <h2 class="text-2xl font-black text-slate-900 mb-1">Account Profile</h2>
      <p class="text-slate-400 text-sm mb-8">Manage your account settings</p>

      <div class="w-full space-y-3 mb-10">
        <div class="flex justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <span class="text-xs font-bold text-slate-400 uppercase">Username</span>
          <span class="text-sm font-bold text-slate-900">{{ user.username || '—' }}</span>
        </div>
        <div class="flex justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <span class="text-xs font-bold text-slate-400 uppercase">Email</span>
          <span class="text-sm font-bold text-slate-900">{{ user.email || '—' }}</span>
        </div>
      </div>

      <button @click="logout" class="w-full py-4 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center justify-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        Sign Out
      </button>
    </div>

    <!-- Not logged-in: Login / Register form -->
    <div v-else class="w-full max-w-md h-[580px] bg-white rounded-[32px] shadow-2xl border border-slate-100 flex flex-col overflow-hidden">
      <div class="flex p-2 bg-slate-100/50 m-6 mb-2 rounded-2xl shrink-0">
        <button @click="isLogin = true" :class="isLogin ? 'bg-white text-[#763feb] shadow-sm' : 'text-slate-500'" class="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">Login</button>
        <button @click="isLogin = false" :class="!isLogin ? 'bg-white text-[#763feb] shadow-sm' : 'text-slate-500'" class="flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all">Register</button>
      </div>

      <div class="px-10 flex-grow flex flex-col justify-center pb-10">
        <div>
          <h2 class="text-3xl font-black text-slate-900">{{ isLogin ? 'Welcome Back' : 'Create Account' }}</h2>
          <p class="text-slate-400 text-sm mt-1">Please enter your details</p>
        </div>

        <div class="h-10 mb-4">
          <p v-if="errorMsg" class="text-red-500 text-[11px] font-bold bg-red-50 p-2 rounded-lg border border-red-100 animate-fade-in">{{ errorMsg }}</p>
        </div>

        <form @submit.prevent="handleAuth" class="space-y-2">
          <div v-if="!isLogin" class="animate-in slide-in-from-top-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Username</label>
            <input v-model="authData.username" type="text" placeholder="JohnDoe" class="auth-input" required />
          </div>

          <div>
            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
            <input v-model="authData.email" type="email" placeholder="name@domain.com" class="auth-input" required />
          </div>

          <div>
            <label class="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Password</label>
            <input v-model="authData.password" type="password" placeholder="••••••••" class="auth-input" required />
          </div>

          <button :disabled="loading" type="submit" class="w-full bg-[#763feb] text-white py-4 rounded-2xl font-bold hover:bg-[#6235c4] transition-all shadow-lg shadow-purple-100 flex justify-center mt-4">
            <span v-if="loading" class="animate-spin border-2 border-white border-t-transparent rounded-full h-5 w-5"></span>
            <span v-else>{{ isLogin ? 'Sign In' : 'Register Account' }}</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const { user, setUser, logout } = useAuth()

const isLogin = ref(true)
const loading = ref(false)
const errorMsg = ref('')
const authData = ref({
  username: '',
  email: '',
  password: ''
})

const handleAuth = async () => {
  loading.value = true
  errorMsg.value = ''

  const endpoint = isLogin.value ? 'auth/local' : 'auth/local/register'
  const payload = isLogin.value
    ? { identifier: authData.value.email, password: authData.value.password }
    : { ...authData.value }

  try {
    const data = await $fetch('/api/auth/proxy', {
      method: 'POST',
      body: { endpoint, payload }
    })

    setUser(data.user, data.jwt)

    if (isLogin.value) {
      navigateTo('/')
    }

    authData.value = { username: '', email: '', password: '' }
  } catch (err) {
    errorMsg.value = err?.data?.error?.message || err?.message || 'Authentication failed'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.auth-input {
  @apply w-full mt-1 px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-[#763feb] focus:bg-white outline-none transition-all text-slate-900 placeholder:text-slate-300 font-medium;
}
</style>