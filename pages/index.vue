<template>
  <div data-theme="light" class="min-h-screen bg-slate-50">
    <section class="section relative bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div class="container mx-auto px-4 text-center">
        <h1 class="section text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Find your dream job with <br/>
          <span class="text-primary">PeopleCare</span>
          <span class="text-red-500">Solution</span>
        </h1>
        <p class="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Connecting talented professionals with industry-leading companies. Your next career milestone starts here.
        </p>

        <!-- search bar -->
        <div class="mt-10 max-w-4xl mx-auto bg-white p-2 md:p-3 rounded-2xl border border-black-100 flex flex-col md:flex-row items-center gap-2">
          <div class="w-full flex items-center px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Job title or keywords" 
              class="bg-transparent border-none focus:outline-none focus:ring-0 w-full px-3 text-slate-700 placeholder:text-slate-400" 
            />
          </div>

          <div class="hidden md:block w-[1px] h-10 bg-slate-200"></div>

          <div class="w-full flex items-center px-4 py-2 hover:bg-slate-50 rounded-xl transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="City or remote" 
              class="bg-transparent border-none focus:outline-none focus:ring-0 w-full px-3 text-slate-700 placeholder:text-slate-400" 
            />
          </div>

          <button class="btn btn-primary w-full md:w-auto px-6 rounded-xl normal-case text-lg border border-black-100 shadow-none hover:brightness-105 active:scale-95 transition-all">
            Search Jobs
          </button>
        </div>
      </div>
    </section>
  </div>
</template>