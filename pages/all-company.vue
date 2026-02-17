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
    <section class="text-[#141010] px-16 pt-12 pb-28">
      <h1 class="text-4xl font-bold">Wing Bank</h1>
      <p class="text-2xl mt-2 opacity-90">Careers at Wing Bank</p>
    </section>

    <!-- COMPANY CARD -->
    <div class="max-w-6xl mx-auto -mt-20 bg-[#faf6e9] rounded-xl shadow p-6 flex gap-6 items-center text-white">

      <!-- LOGO -->
      <div class="w-28 h-28 bg-[#faf6e9] border-4 border-[#757a79] rounded-lg flex items-center justify-center text-[#141010] font-bold text-lg">
        Wing<br>Bank
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
          <span class="border-b-2 border-[#2d4059] pb-1 cursor-pointer">About</span>
          <span class="cursor-pointer">Jobs</span>
          <span class="cursor-pointer">Gallery</span>
          <span class="cursor-pointer">Awards</span>
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
  </div>
</template>

<script setup>
</script>
