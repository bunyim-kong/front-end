<template>
  <div data-theme="light" class="navbar-container relative z-50">
    <header class="navbar container bg-base-100 shadow-sm">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
          </div>
          <ul
            tabindex="-1"
            class="menu menu-l dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-4 shadow">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/">Job Category</NuxtLink></li>
            <li><NuxtLink to="/">All Company</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="navbar-center">
        <a class="btn btn-ghost text-xl">
          <p class="text-[#763feb]">PeopleCare</p>
          <p class="text-red-500">Solution</p>
        </a>
      </div>

      <div class="navbar-end gap-2">
        <button class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <NuxtLink to="/login" class="btn btn-ghost">
          Sign In
        </NuxtLink>
      </div>
    </header>
  </div>
</template>