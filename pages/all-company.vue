<template>

  <div 
          class="flex justify-center px-4 py-6 bg-white border-b border-gray-200 mt-11">
    <div 
          class="flex w-full max-w-6xl items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-gray-300 transition-all">

      <div class="flex flex-[1.5] items-center gap-2 px-2">
         <svg class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         </svg>
         <input type="text" placeholder="Search keywords..." class="w-full bg-white text-gray-800 text-sm font-medium outline-none placeholder-gray-400" />
      </div>

      <div class="h-8 w-[1px] bg-gray-200"></div>

      <div class="flex flex-1 items-center gap-2 px-2">
        <svg class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
        <!-- Research section -->
        <select class="w-full appearance-none bg-white text-gray-800 text-sm font-medium rounded-lg px-3 py-2 pr-8 border border-gray-200 hover:border-gray-400 cursor-pointer">
          <option disabled selected>Location</option>
          <option>Phnom Penh</option>
          <option>Siem Reap</option>
          <option>Sihanoukville</option>
          <option>Battambang</option>
          <option>Kampot</option>
          <option>Takhmau</option>
        </select>
      </div>

      <div class="h-8 w-[1px] bg-gray-200"></div>

      <div class="flex flex-1 items-center gap-2 px-2">
        <svg class="h-5 w-5 text-gray-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <select class="w-full appearance-none bg-white text-gray-800 text-sm font-medium rounded-lg px-3 py-2 pr-8 border border-gray-200 hover:border-gray-400 cursor-pointer">
          <option disabled selected>Job Type</option>
          <option>HR</option>
          <option>Admin</option>
          <option>IT / Software</option>
          <option>Sales / Marketing</option>
          <option>Teacher / Education</option>
          <option>Accounting</option>
        </select>
      </div>

      <button class="ml-2 flex items-center gap-1.5 rounded-full bg-white px-6 py-2.5 text-sm font-bold text-gray-800 shadow-sm border border-gray-300">
        <svg class="h-4 w-4 text-gray-600" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L14.5 9L21 11.5L14.5 14L12 21L9.5 14L3 11.5L9.5 9L12 3Z" fill="currentColor"/>
        </svg>
        <span>Research</span>
      </button>

      </div>
      </div>

        <div class="bg-gray-50 pt-12"> <section class=" px-16 pt-12 pb-28">
      <h1 class="text-4xl text-gray-900 font-bold">Wing Bank</h1>
      <p class="text-2xl text-red-600 mt-2 opacity-90">Careers at Wing Bank</p>
</section>

       <div class="max-w-6xl mx-auto -mt-20 bg-white rounded-xl shadow p-6 flex gap-6 items-center text-gray-800 border border-gray-200">

        <div class="w-28 h-28 bg-white border-4 border-gray-200 rounded-lg flex items-center justify-center">
        <img
        src="https://i.pinimg.com/1200x/8c/60/0e/8c600eac1bf06ecd663db232c4611a39.jpg"
        alt="Wing Bank logo"
        class="max-w-full max-h-full"/>
      </div>


      <div class="flex-1">
        <h2 class="text-xl font-semibold text-gray-900">
          WING BANK (CAMBODIA) PLC
          <span class="ml-2 bg-gray-100 text-xs px-2 py-1 rounded text-gray-600">Premium</span>
        </h2>

        <p class="mt-1 text-gray-600">
          Wing Bank the Bank for every Cambodian, has revolutionized the way...
        </p>

        <div class="flex gap-6 mt-4 text-gray-500 font-medium">
    </div>
    </div>
    </div>
    <!-- Recent job openings section -->

          <section class="max-w-6xl mx-auto mt-8 bg-white rounded-xl shadow p-6 text-gray-800 border border-gray-100">
         <h3 class="text-lg font-semibold mb-6">Recent job openings</h3>

        <div class="grid md:grid-cols-3 gap-6">

        <div class="border-r border-gray-100 md:pr-4">
            <h4 class="text-gray-900 font-semibold">
            Capital Balance Sheet Management Manager
            </h4>
            <p class="text-gray-500 mt-2">
            Phnom Penh • Finance, Accounting, Audit
            </p>
        </div>

        <div class="border-r border-gray-100 md:pr-4">
          <h4 class="text-gray-900 font-semibold">
            Associate Manager, Asset Liabilities Management
          </h4>
          <p class="text-gray-500 mt-2">
            Phnom Penh • Finance, Accounting, Audit
          </p>
        </div>

        <div>
          <h4 class="text-gray-900 font-semibold">
            Senior Finance Transformation Specialist
          </h4>
          <p class="text-gray-500 mt-2">
            Phnom Penh • Finance, Accounting, Audit
          </p>
        </div>

      </div>

      <div class="text-center mt-8 text-gray-600 font-semibold cursor-pointer hover:text-gray-900">
        See All Jobs
      </div>
 

    </section>
    <!-- about section -->
   <div class="max-w-6xl mx-auto bg-white mt-4 text-gray-800 text-base/6 p-4 rounded-xl shadow border border-gray-100">
      <h3 class="text-red-600 font-semibold mb-2">About Wing Bank</h3>
      <p class="text-base/6"> Number One Job Portal in Cambodia. Bank is Cambodia's most widely used online professional job site and digital recruitment platform which effectively matches employers with the most suitable candidates to fill their jobs.</p>
      <p class="text-base/7">In addition, JobNet delivers advanced online recruitment software modules, aimed at helping organizations digitize their recruitment function, save time and reduce cost to hire.</p>
      <p class="text-base/8"> Wing Bank the Bank for every Cambodian, has revolutionized the way Cambodians access financial services. Since its inception in 2008, Wing Bank has become one of the fastest-growing commercial banks and one of the most trusted financial institutions in Cambodia.</p>
      <p class="text-base/9">With a clear vision of using digital solutions to improve the daily lives of every Cambodian, Wing Bank has achieved remarkable growth and now boasts the largest ecosystem in the country. It operates 23 branch offices, has over 11,000 agents, supports more than 170,000 SME merchants, and offers over 100 use cases through its user-friendly Wing Bank Mobile App.</p>
      <p class="text-base/10"> In 2023, Wing Bank inaugurated its new Head Office, Wing Bank Tower, strategically located along Preah Monivong Boulevard at the corner of Kampuchea Krom Boulevard. This architectural marvel reflects Cambodia’s rising prominence in the realm of digital banking.</p>
    </div>
    <!-- card jobs section -->
    <div class="max-w-6xl mx-auto bg-white mt-4 text-gray-800 text-base/6 p-4 rounded-xl shadow border border-gray-100">
      <h2 class=" text-xl font-bold text-red-600 font-semibold mb-4">Featured Jobs</h2>
    <div class="max-w-md  bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition border border-gray-200">
          
    <h2 class=" font-bold text-gray-900">Frontend Developer</h2>

    <p class="text-sm text-gray-500 mt-1">ABC Tech Company</p>

    <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
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

  <p class="text-sm text-gray-600 mt-3">
    We are looking for a skilled frontend developer experienced with Vue or React to build modern web applications.
  </p>

  <button class="mt-4 w-full bg-gray-800 text-white py-2 rounded-xl font-medium hover:bg-black transition">
    Apply Now
  </button>

    </div>

    </div>
   <!-- Gallery section -->
    <section class="max-w-6xl mx-auto mt-6 bg-white pt-3 rounded-xl shadow p-3 text-gray-800 border border-gray-100">
    
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
  <!-- award section -->
  <section class="max-w-6xl mx-auto mt-6 bg-white rounded-xl shadow p-6 text-gray-800 border border-gray-100">
  <h2 class="text-xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2 inline-block">Awards & Recognitions</h2>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

    <div class="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 group">
      <div class="w-full sm:w-[320px] shrink-0 bg-gray-50 flex items-center justify-center overflow-hidden">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvdttkb-3vX62eLbi1r1MUkC4F6vabN9a6Wg&s" 
          class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
        >
      </div>
      <div class="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 class="text-lg font-bold text-red-600 line-clamp-1 uppercase">Leadership in Credit Card Activation</h3>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
            At the Visa Client Appreciation Night 2024, Wing Bank was honored for its massive success in driving credit card usage. This award recognizes the bank's ability to provide instant digital card issuance and innovative cashback rewards that have revolutionized the payment habits of Cambodians.
          </p>
        </div>
        <div class="flex justify-between items-center pt-4 border-t border-gray-100">
          <span class="inline-block px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-gray-200 bg-gray-50 text-gray-600">
            VISA LEADERSHIP
          </span>
          <span class="text-xs font-bold text-red-600">2024</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 group">
      <div class="w-full sm:w-[320px] shrink-0 bg-gray-50 overflow-hidden">
        <img 
          src="https://www.khmertimeskh.com/wp-content/uploads/2024/10/W7307478.jpg" 
          class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        >
      </div>
      <div class="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 class="text-lg font-bold text-red-600 line-clamp-1 uppercase">Excellence in Retail Banking</h3>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
            Honored for providing a comprehensive suite of retail products that empower everyday Cambodians. The award acknowledges Wing Bank's massive physical branch expansion and its commitment to financial inclusion through easy-to-access savings and loan services.
          </p>
        </div>
        <div class="flex justify-between items-center pt-4 border-t border-gray-100">
          <span class="inline-block px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-gray-200 bg-gray-50 text-gray-600">
            RETAIL EXCELLENCE
          </span>
          <span class="text-xs font-bold text-red-600">2024</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 group">
    <div class="w-full sm:w-[320px] shrink-0 bg-gray-50 overflow-hidden">
        <img 
          src="https://cdn.kiripost.com/static/images/W7303058.2e16d0ba.fill-960x540.jpg" 
          class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        >
    </div>
    <div class="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 class="text-lg font-bold text-red-600 line-clamp-1 uppercase">Digital Payment Innovation</h3>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
            Awarded for Wing Bank's role as a primary mover in the cashless revolution. By facilitating secure, instant QR payments and international card transactions, the bank has significantly modernized the digital payment landscape for merchants and travelers across the Kingdom.
          </p>
    </div>
    <div class="flex justify-between items-center pt-4 border-t border-gray-100">
          <span class="inline-block px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-gray-200 bg-gray-50 text-gray-600">
          VISA PARTNERSHIP
          </span>
          <span class="text-xs font-bold text-red-600">2024</span>
    </div>
    </div>
    </div>

    <div class="flex flex-col sm:flex-row bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 group">
    <div class="w-full sm:w-[320px] shrink-0 bg-gray-50 overflow-hidden">
        <img 
          src="https://www.khmertimeskh.com/wp-content/uploads/2023/12/1-Main-.jpg" 
          class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        >
    </div>
    <div class="p-5 flex flex-col justify-between flex-1">
    <div>
          <h3 class="text-lg font-bold text-red-600 line-clamp-1 uppercase">Best Consumer Digital Bank</h3>
          <p class="text-sm text-gray-600 mt-2 leading-relaxed line-clamp-3">
          Named by Global Finance as the leader in consumer digital banking. This recognizes the Wing Bank App as a top-tier financial ecosystem, offering everything from utility payments and payroll to advanced investment tools for millions of users.
          </p>
    </div>
    <div class="flex justify-between items-center pt-4 border-t border-gray-100">
          <span class="inline-block px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-gray-200 bg-gray-50 text-gray-600">
          DIGITAL BANKING
          </span>
          <span class="text-xs font-bold text-red-600">2023</span>
    </div>
    </div>
    </div>

  </div>
</section>
    </div>
 
</template>

<script setup>
</script>
