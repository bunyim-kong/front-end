<template>
  <div class="bg-slate-50 min-h-screen pb-20">

    <!-- ==================== Company Hero ==================== -->
    <div class="section bg-white pt-12 pb-16">
      <div class="section max-w-7xl mx-auto px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Wing Bank</h1>
        <p class="mt-3 text-2xl md:text-3xl text-red-600 font-medium">Careers at Wing Bank</p>

        <div class="mt-10 bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
          <div class="w-32 h-32 md:w-40 md:h-40 bg-white border-4 border-gray-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
            <img
              src="https://i.pinimg.com/1200x/8c/60/0e/8c600eac1bf06ecd663db232c4611a39.jpg"
              alt="Wing Bank logo"
              class="w-full h-full object-contain p-2"
            />
          </div>

          <div class="flex-1">
            <div class="flex items-center gap-3 flex-wrap">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900">
                WING BANK (CAMBODIA) PLC
              </h2>
              <span class="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-red-50 text-red-700 border border-red-200">
                Premium Employer
              </span>
            </div>

            <p class="mt-4 text-gray-700 leading-relaxed text-lg">
              Wing Bank — the Bank for every Cambodian — has revolutionized the way Cambodians access financial services. Since its inception, it has become one of the fastest-growing and most trusted financial institutions in the country.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ==================== Recent Job Openings ==================== -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 -mt-8">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
        <h3 class="text-2xl font-bold text-gray-900 mb-8">Recent Job Openings</h3>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
          <NuxtLink to="/job_detail" class="max-w-md  bg-white border-2 border-black-900 rounded-2xl p-5 transition-all duration-200 ease-in-out hover:translate-y-[-8px]">
            <h2 class=" font-bold text-gray-900">Frontend Developer</h2>

            <p class="text-sm text-gray-500 mt-1">ABC Tech Company</p>

            <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Phnom Penh
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                Full Time
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                $800–$1200
                </span>
            </div>

            <p class="text-sm text-gray-600 mt-3">
              We are looking for a skilled frontend developer experienced with Vue or React to build modern web applications.
            </p>

            <button class="btn-primary w-full h-12 mt-4 rounded-xl normal-case text-sm border border-black-100 shadow-none hover:brightness-105 active:scale-95 transition-all">
              Apply Now
            </button>

          </NuxtLink>

          <NuxtLink to="/job_detail" class="max-w-md  bg-white border-2 border-black-900 rounded-2xl p-5 transition-all duration-200 ease-in-out hover:translate-y-[-8px]">
            <h2 class=" font-bold text-gray-900">Frontend Developer</h2>

            <p class="text-sm text-gray-500 mt-1">ABC Tech Company</p>

            <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Phnom Penh
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                Full Time
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                $800–$1200
                </span>
            </div>

            <p class="text-sm text-gray-600 mt-3">
              We are looking for a skilled frontend developer experienced with Vue or React to build modern web applications.
            </p>

            <button class="btn-primary w-full h-12 mt-4 rounded-xl normal-case text-sm border border-black-100 shadow-none hover:brightness-105 active:scale-95 transition-all">
              Apply Now
            </button>

          </NuxtLink>

          <NuxtLink to="/job_detail" class="max-w-md  bg-white border-2 border-black-900 rounded-2xl p-5 transition-all duration-200 ease-in-out hover:translate-y-[-8px]">
            <h2 class=" font-bold text-gray-900">Frontend Developer</h2>

            <p class="text-sm text-gray-500 mt-1">ABC Tech Company</p>

            <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                Phnom Penh
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                Full Time
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                $800–$1200
                </span>
            </div>

            <p class="text-sm text-gray-600 mt-3">
              We are looking for a skilled frontend developer experienced with Vue or React to build modern web applications.
            </p>

            <button class="btn-primary w-full h-12 mt-4 rounded-xl normal-case text-sm border border-black-100 shadow-none hover:brightness-105 active:scale-95 transition-all">
              Apply Now
            </button>

          </NuxtLink>
        </div>

        <div class="text-center mt-10">
          <button class="text-red-600 font-semibold hover:text-red-800 transition flex items-center gap-2 mx-auto text-lg">
            See All Jobs
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- ==================== About Wing Bank ==================== -->
    <section class="max-w-7xl mx-auto lg:px-8 mt-12">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 lg:p-10">
        <h3 class="text-3xl font-bold text-red-600 mb-8">About Wing Bank</h3>
        <div class="prose prose-lg text-gray-700 max-w-none space-y-6 leading-relaxed">
          <p>Wing Bank the Bank for every Cambodian, has revolutionized the way Cambodians access financial services.</p>
          <p>Number One Job Portal in Cambodia. Bank is Cambodia's most widely used online professional job site and digital recruitment platform which effectively matches employers with the most suitable candidates to fill their jobs.</p>
          <p>In addition, JobNet delivers advanced online recruitment software modules, aimed at helping organizations digitize their recruitment function, save time and reduce cost to hire.</p>
          <p>With a clear vision of using digital solutions to improve the daily lives of every Cambodian, Wing Bank has achieved remarkable growth and now boasts the largest ecosystem in the country.</p>
          <p>It operates 23 branch offices, has over 11,000 agents, supports more than 170,000 SME merchants, and offers over 100 use cases through its user-friendly Wing Bank Mobile App.</p>
          <p>In 2023, Wing Bank inaugurated its new Head Office, Wing Bank Tower, strategically located along Preah Monivong Boulevard at the corner of Kampuchea Krom Boulevard.</p>
        </div>
      </div>
    </section>

    <!-- ==================== Featured Jobs ==================== -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
      <h2 class="text-3xl font-bold text-red-600 mb-8">Featured Jobs</h2>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Example Featured Job Card -->
        <div class="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <h3 class="font-bold text-xl text-gray-900">Frontend Developer</h3>
          <p class="text-sm text-gray-600 mt-1">ABC Tech Company</p>

          <div class="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Phnom Penh
            </div>
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18..." />
              </svg>
              Full Time
            </div>
            <div class="flex items-center gap-2">
              <svg class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v12m-3-2.818..." />
              </svg>
              $800–$1,200
            </div>
          </div>

          <p class="text-sm text-gray-700 mt-4 line-clamp-3">
            We are looking for a skilled frontend developer experienced with Vue or React to build modern web applications.
          </p>

          <button class="mt-6 w-full bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 active:scale-95 transition-all">
            Apply Now
          </button>
        </div>

        <!-- You can duplicate the above block for more featured jobs -->
      </div>
    </section>

    <!-- ==================== Gallery ==================== -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
      <div class="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden p-6">
        <div class="grid gap-6">
          <div class="aspect-[4/1.6] rounded-xl overflow-hidden">
            <img
              src="https://cambodiainvestmentreview.com/wp-content/uploads/2025/03/Capture-23.jpg"
              alt="Wing Bank main building"
              class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="aspect-[3/2] rounded-xl overflow-hidden">
              <img
                src="https://cambodiainvestmentreview.com/wp-content/uploads/2025/03/Capture-24.jpg"
                alt="Wing Bank office"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="aspect-[3/2] rounded-xl overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/a5/04/42/a504425005a478b6088ae585eee8ec5e.jpg"
                alt="Wing Bank team"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==================== Awards & Recognitions ==================== -->
    <section class="max-w-7xl mx-auto px-6 lg:px-8 mt-12">
      <h2 class="text-3xl font-bold text-red-600 mb-10 border-b-4 border-red-600 inline-block pb-2">Awards & Recognitions</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Award 1 -->
        <div class="group bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
          <div class="h-56 overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdttkb-3vX62eLbi1r1MUkC4F6vabN9a6Wg&s"
              alt="Visa Leadership Award"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-red-600 uppercase tracking-wide">Leadership in Credit Card Activation</h3>
            <p class="mt-3 text-gray-700 line-clamp-4">
              Honored at Visa Client Appreciation Night 2024 for massive success in credit card usage and innovative digital issuance.
            </p>
            <div class="mt-6 flex justify-between items-center">
              <span class="px-4 py-1.5 rounded-full text-xs font-bold uppercase border border-gray-200 bg-gray-50 text-gray-600">
                VISA LEADERSHIP
              </span>
              <span class="text-sm font-bold text-red-600">2024</span>
            </div>
          </div>
        </div>

        <!-- Add the other 3 awards in the same style -->

      </div>
    </section>

  </div>
</template>

<script setup>
// You can later fetch real data here
// const company = await $fetch('/api/companies/wing-bank')
</script>