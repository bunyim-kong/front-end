<!-- components/TheHeader.vue -->
<template>
  <div data-theme="light" class="navbar-container relative z-50">
    <header class="navbar container bg-base-100 shadow-sm mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> 
            </svg>
          </div>
          <ul tabindex="-1" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-4 shadow">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/">Job Category</NuxtLink></li>
            <li><NuxtLink to="/all-company">All Company</NuxtLink></li>
            <li><NuxtLink to="/">About</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="navbar-center">
        <NuxtLink to="/" class="btn btn-ghost text-xl">
          <p class="text-[#763feb]">PeopleCare</p>
          <p class="text-red-500">Solution</p>
        </NuxtLink>
      </div>

      <div class="navbar-end gap-2">
        <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <template v-if="user">
          <div class="dropdown dropdown-end">
            <div 
              tabindex="0" 
              role="button" 
              class="btn btn-ghost btn-circle avatar hover:ring-2 hover:ring-[#763feb]/30 transition-all duration-200"
            >
              <div class="w-10 rounded-full bg-gradient-to-br from-[#763feb] to-[#a076f9] text-white flex items-center justify-center font-semibold shadow-sm">
                <span class="text-base">{{ user.username?.charAt(0)?.toUpperCase() || '?' }}</span>
              </div>
            </div>

            <ul 
              tabindex="0" 
              class="menu menu-sm dropdown-content mt-3 z-[100] w-64 bg-base-100 rounded-2xl shadow-xl border border-base-200/50 overflow-hidden animate-in fade-in zoom-in-95 duration-150"
            >
              <NuxtLink to="/" class="px-4 py-3 border-b border-base-200/50 bg-base-200/30">
                <p class="text-xs text-base-content/70">Signed in as</p>
                <p class="font-semibold text-base-content truncate">{{ user.username || user.email || 'User' }}</p>
              </NuxtLink>

              <li>
                <NuxtLink 
                  to="/auth" 
                  class="flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-base-200/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile Settings
                </NuxtLink>
              </li>

              <li>
                <button 
                  @click="logout"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50/70 hover:text-red-700 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </template>

        <NuxtLink v-else to="/auth" class="btn btn-ghost text-[#763feb] font-bold">
          Sign In
        </NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup>
const { user, logout } = useAuth()
</script>