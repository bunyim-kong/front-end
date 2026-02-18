<template>
  <!-- SEARCH BAR -->
  <div class="flex justify-center px-4 py-6 bg-[#1abb9c] mt-11">
    <div class="flex w-full max-w-6xl items-center gap-2 rounded-full bg-[#faf6e9] px-4 py-2 shadow-md border border-[#757a79]/30 transition-all">

      <!-- Search -->
      <div class="flex flex-[1.5] items-center gap-2 px-2">
        <svg class="h-5 w-5 text-[#2d4059] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Search keywords..." class="w-full bg-[#faf6e9] text-[#141010] text-sm font-medium outline-none placeholder-[#757a79]" />
      </div>

      <div class="h-8 w-[1px] bg-[#757a79]/40"></div>

      <!-- Location -->
      <div class="flex flex-1 items-center gap-2 px-2">
        <svg class="h-5 w-5 text-[#2d4059] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
        <select class="w-full appearance-none bg-[#faf6e9] text-[#141010] text-sm font-medium rounded-lg px-3 py-2 pr-8 border border-[#757a79]/40 hover:border-[#2d4059] cursor-pointer">
          <option disabled selected>Location</option>
          <option>Phnom Penh</option>
          <option>Siem Reap</option>
          <option>Sihanoukville</option>
          <option>Battambang</option>
          <option>Kampot</option>
          <option>Takhmau</option>
        </select>
      </div>

      <div class="h-8 w-[1px] bg-[#757a79]/40"></div>

      <!-- Job Type -->
      <div class="flex flex-1 items-center gap-2 px-2">
        <svg class="h-5 w-5 text-[#2d4059] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <select class="w-full appearance-none bg-[#faf6e9] text-[#141010] text-sm font-medium rounded-lg px-3 py-2 pr-8 border border-[#757a79]/40 hover:border-[#2d4059] cursor-pointer">
          <option disabled selected>Job Type</option>
          <option>HR</option>
          <option>Admin</option>
          <option>IT / Software</option>
          <option>Sales / Marketing</option>
          <option>Teacher / Education</option>
          <option>Accounting</option>
        </select>
      </div>

      <!-- Button -->
      <button class="ml-2 flex items-center gap-1.5 rounded-full bg-[#faf6e9] px-6 py-2.5 text-sm font-bold text-[#141010] shadow-sm border border-[#757a79]/30">
        <svg class="h-4 w-4 text-[#2d4059]" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L14.5 9L21 11.5L14.5 14L12 21L9.5 14L3 11.5L9.5 9L12 3Z" fill="currentColor"/>
        </svg>
        <span>Research</span>
      </button>

    </div>
  </div>

  <!-- MAIN CONTENT -->
  <div class="bg-[#1abb9c] pt-12"> <!-- use bg color -->
    <!-- HEADER -->
    <section class=" px-16 pt-12 pb-28">
      <h1 class="text-4xl text-[#763feb] font-bold">Wing Bank</h1>
      <p class="text-2xl text-red-500 mt-2 opacity-90">Careers at Wing Bank</p>
    </section>

    <!-- COMPANY CARD -->
    <div class="max-w-6xl mx-auto -mt-20 bg-[#faf6e9] rounded-xl shadow p-6 flex gap-6 items-center text-white">

      <!-- LOGO -->
    <div class="w-28 h-28 bg-white border-4 border-gray-300 rounded-lg flex items-center justify-center">
    <img
    src="https://i.pinimg.com/1200x/8c/60/0e/8c600eac1bf06ecd663db232c4611a39.jpg"
    alt="Wing Bank logo"
    class="max-w-full max-h-full"/>
    </div>


      <!-- INFO -->
      <div class="flex-1">
        <h2 class="text-xl font-semibold text-[#141010]">
          WING BANK (CAMBODIA) PLC
          <span class="ml-2 bg-[#faf6e9] text-xs px-2 py-1 rounded text-[#141010]">Premium</span>
        </h2>

        <p class="mt-1 text-[#141010]">
          Wing Bank the Bank for every Cambodian, has revolutionized the way...
        </p>

        <!-- TABS -->
        <div class="flex gap-6 mt-4 text-[#2d4059] font-medium">
        </div>
      </div>
    </div>
     <!-- JOB SECTION -->
    <section class="max-w-6xl mx-auto mt-8 bg-[#faf6e9] rounded-xl shadow p-6 text-[#141010]">
      <h3 class="text-lg font-semibold mb-6">Recent job openings</h3>

      <div class="grid md:grid-cols-3 gap-6">

        <!-- JOB -->
        <div class="border-r md:pr-4">
          <h4 class="text-[#2d4059] font-semibold">
            Capital Balance Sheet Management Manager
          </h4>
          <p class="text-[#757a79] mt-2">
            Phnom Penh • Finance, Accounting, Audit
          </p>
        </div>

        <!-- JOB -->
        <div class="border-r md:pr-4">
          <h4 class="text-[#2d4059] font-semibold">
            Associate Manager, Asset Liabilities Management
          </h4>
          <p class="text-[#757a79] mt-2">
            Phnom Penh • Finance, Accounting, Audit
          </p>
        </div>

        <!-- JOB -->
        <div>
          <h4 class="text-[#2d4059] font-semibold">
            Senior Finance Transformation Specialist
          </h4>
          <p class="text-[#757a79] mt-2">
            Phnom Penh • Finance, Accounting, Audit
          </p>
        </div>

      </div>

      <div class="text-center mt-8 text-[#2d4059] font-semibold cursor-pointer">
        See All Jobs
      </div>
 

    </section>

   <!-- ABOUT -->
    <div class="max-w-6xl mx-auto bg-white mt-4 text-[#141010] text-base/6 p-4 rounded-xl shadow">
      <h3 class="text-red-500 font-semibold mb-2">About Wing Bank</h3>
      <p class="text-base/6"> Number One Job Portal in Cambodia. Bank is Cambodia's most widely used online professional job site and digital recruitment platform which effectively matches employers with the most suitable candidates to fill their jobs.</p>
      <p class="text-base/7">In addition, JobNet delivers advanced online recruitment software modules, aimed at helping organizations digitize their recruitment function, save time and reduce cost to hire.</p>
      <p class="text-base/8"> Wing Bank the Bank for every Cambodian, has revolutionized the way Cambodians access financial services. Since its inception in 2008, Wing Bank has become one of the fastest-growing commercial banks and one of the most trusted financial institutions in Cambodia.</p>
      <p class="text-base/9">With a clear vision of using digital solutions to improve the daily lives of every Cambodian, Wing Bank has achieved remarkable growth and now boasts the largest ecosystem in the country. It operates 23 branch offices, has over 11,000 agents, supports more than 170,000 SME merchants, and offers over 100 use cases through its user-friendly Wing Bank Mobile App.</p>
      <p class="text-base/10"> In 2023, Wing Bank inaugurated its new Head Office, Wing Bank Tower, strategically located along Preah Monivong Boulevard at the corner of Kampuchea Krom Boulevard. This architectural marvel reflects Cambodia’s rising prominence in the realm of digital banking.</p>
    </div>

    <!-- job section -->
      <div class="max-w-6xl mx-auto bg-white mt-4 text-[#141010] text-base/6 p-4 rounded-xl shadow">
      <h2 class=" text-xl font-bold text-red-500 font-semibold mb-4">Featured Jobs</h2>
        <div class="max-w-md  bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition">
          
  <!-- Job Title -->
  <h2 class=" font-bold text-[#763feb]">Frontend Developer</h2>

  <!-- Company -->
  <p class="text-sm text-[#757a79] mt-1">ABC Tech Company</p>

  <!-- Info Row -->
  <div class="flex flex-wrap gap-4 mt-3 text-sm text-[#2d4059]">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
     <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
     </svg>
     <span>  Phnom Penh</span>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
     </svg>
     <span> Full Time</span>
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
     <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
     </svg>
     <span> $800–$1200</span>
  </div>

  <!-- Description -->
  <p class="text-sm text-gray-600 mt-3">
    We are looking for a skilled frontend developer experienced with Vue or React to build modern web applications.
  </p>

  <!-- Button -->
  <button class="mt-4 w-full bg-[#1abb9c] text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
    Apply Now
  </button>

</div>

    </div>
   
    <!-- the section baner -->
<section class="max-w-6xl mx-auto mt-6 bg-[#faf6e9] pt-3 rounded-xl shadow p-3 text-[#141010]">
    
  <div class="w-full aspect-[11/5] rounded-lg overflow-hidden">
    <img 
    src="https://cambodiainvestmentreview.com/wp-content/uploads/2025/03/Capture-23.jpg"
    alt="Wing Bank Gallery"
    class="w-full h-full object-cover"
  />
    </div>
    <div class="w-full aspect-[18/5] rounded-lg overflow-hidden mt-4 flex gap-4">
    <img 
    src="https://cambodiainvestmentreview.com/wp-content/uploads/2025/03/Capture-24.jpg"
    alt="Wing Bank Gallery 1"
    class="w-50 h-full object-cover">
    <img 
    src="https://i.pinimg.com/736x/a5/04/42/a504425005a478b6088ae585eee8ec5e.jpg"
    alt="Wing Bank Gallery 2"
    class="w-full h-full object-cover">
  </div>
</section>

  <!-- AWARD SECTION -->
<section class="max-w-6xl mx-auto mt-6 bg-[#faf6e9] rounded-xl shadow p-4 text-[#141010]">
  <h2 class="text-xl font-bold text-red-500 mb-4">Awards & Recognitions</h2>

  <div class="grid md:grid-cols-3 gap-6">

    <!-- Award Card -->
    <div class="flex items-center gap-4 bg-white p-3 rounded-lg shadow-sm">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1h6YlwmPWnA8t4dNHhGzo9tRl3tbfXFiIPA&s"
        alt=""
        class="w-16 h-16 object-cover rounded-full">

      <div>
        <h3 class="text-sm font-semibold text-[#763feb]">
          Best Digital Bank Cambodia 2024
        </h3>
        <p class="text-xs text-[#757a79]">
      Recognized for Innovation and Leadership in Credit Activation in 2024

      Wing Bank is proud to announce that it has received two prestigious awards from Visa, the global leader in digital payments, further solidifying its role as a trailblazer in Cambodia’s financial sector. The accolades were presented at Visa’s Client Appreciation Night 2025.
        </p>
      </div>
    </div>

  </div>
</section>

  </div>
 
</template>

<script setup>
</script>
