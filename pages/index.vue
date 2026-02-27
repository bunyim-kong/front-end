<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  // តាងអថេរសម្រាប់រក្សាទុកទិន្នន័យក្រុមហ៊ុន និងការផ្សព្វផ្សាយការងារ
  const companies = ref([]);
  const jobPosings = ref([]);

  // ការអោយសិទ្ធិ API ត្រូវបានកំណត់នៅក្នុងកូដនេះ ដើម្បីអនុញ្ញាតឱ្យយើងទាញយកទិន្នន័យពី Strapi API។ សូមប្រាកដថាអ្នកបានប្តូរតម្លៃ `Authorization` ជាមួយនឹង token ដែលត្រឹមត្រូវសម្រាប់ការទាញយកទិន្នន័យពី Strapi API របស់អ្នក។
  const config = {
    headers: { Authorization: `Bearer 31271e43b98cc7d59389d5a3522a318dec24b1b711f728e3179083c09cdd392a990a2c5f493a44779eac98bcb724f848aa22d5a5fc548c634e3ee82eaed5529b04daa73026d3e98f53a60bd7d306d477a5bd8f9e8339ebc0ab55d0a8ad1ed5ff82b8cb58af3bba3458e500031239f686ce7f904e60ff08f904923eef9c7ca1d5` }
  };

  onMounted(() => {
    fetchCompanies();
    fetchJobPosings();
  });

  async function fetchCompanies() {
    try {
      const response = await axios.get('http://localhost:1337/api/companies', config);
      companies.value = response.data.data;
      console.log(companies.value);
    } 

    catch (error) {
      console.error('Error fetching companies:', error);
    }
  }

  async function fetchJobPosings() {
    try {
      const response = await axios.get('http://localhost:1337/api/jobpostings', config);
      jobPosings.value = response.data.data;
      console.log(jobPosings.value);
    } 
     
    catch (error) {
      console.error('Error fetching job positions:', error);
    }
  }
</script>

<template>
  <div data-theme="light" class="min-h-screen bg-slate-50">
    <!-- hero section -->
    <section class="section relative bg-white pt-16 pb-20 lg:pt-28 lg:pb-28">
      <div class="container mx-auto px-4 text-center">
        <h1 class="section text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
          Find your dream job with <br/>
        </h1>

        <h1 class="text-4xl md:text-6xl mt-4 font-extrabold text-slate-900 tracking-tight">
          <span class="text-primary">PeopleCare</span>
          <span class="text-red-500">Solution</span>
        </h1>

        <p class="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Connecting talented professionals with industry-leading companies. Your next career milestone starts here.
        </p>

        <!-- search bar -->
        <div class="mt-10 max-w-4xl mx-auto bg-white p-2 md:p-3 rounded-2xl border-2 border-black-900 flex flex-col md:flex-row items-center gap-2">
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

    <!-- our services section -->
    <section>
      <div class="container">
        <h1 class="text-4xl font-extrabold text-center text-slate-900 mt-12 mb-12">Our Services</h1>

        <!-- parent content -->
        <div class="content grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-16">
          <div class="service-card bg-white border-2 border-black-900 p-6 rounded-xl transition-all duration-300 ease-in-out hover:translate-y-[-8px]">
            <div class="header-card flex items-center gap-4 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 p-2 bg-[#763feb] text-[#fbf3f3] rounded-[10px] mb-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>

              <h2 class="text-2xl font-semibold text-primary mb-2">Trust & Security</h2>
            </div>
            <p class="text-slate-600">We manually vet every job listing and verify employer profiles to ensure you’re only applying to legitimate, high-quality opportunities in a secure environment.</p>
          </div>

          <div class="service-card bg-white border-2 border-black-900 p-6 rounded-xl transition-all duration-300 ease-in-out hover:translate-y-[-8px]">
            <div class="header-card flex items-center gap-4 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 p-2 bg-[#763feb] text-[#fbf3f3] rounded-[10px] mb-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>


              <h2 class="text-2xl font-semibold text-primary mb-2">Career Growth</h2>
            </div>
            <p class="text-slate-600">Access professional resume builders, salary benchmark data, and expert interview tips designed to give you a competitive edge in today’s market.</p>
          </div>

          <div class="service-card bg-white border-2 border-black-900 p-6 rounded-xl transition-all duration-300 ease-in-out hover:translate-y-[-8px]">
            <div class="header-card flex items-center gap-4 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 p-3 bg-[#763feb] text-[#fbf3f3] rounded-[10px] mb-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
              </svg>


              <h2 class="text-2xl font-semibold text-primary mb-2">Direct Connection</h2>
            </div>
            <p class="text-slate-600">Our platform facilitates direct communication between talent and hiring managers, allowing for faster feedback and more transparent hiring conversations.</p>
          </div>
        </div>

      </div>
    </section>

    <!-- how it work -->
    <section class="py-16 md:py-20 bg-gradient-to-b from-white to-slate-50">
      <div class="container mx-auto px-4">
        <div class="text-center max-w-3xl mx-auto mb-10">
          <h2 class="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Start Your Journey in <span class="text-primary">3 Simple Steps</span>
          </h2>
          <p class="text-lg text-slate-600">
            Getting your next role has never been easier. Follow these steps and connect with great opportunities today.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <!-- Step 1 -->
          <div class="relative bg-white rounded-2xl p-8 border-2 border-black-900 hover: traslate-y-[-8px] transition-all group">
            <div class="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg">
              1
            </div>
            <div class="mt-6">
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">Create Your Profile</h3>
              <p class="text-slate-600">
                Add your experience, skills, resume, and what you're looking for — it takes under 3 minutes.
              </p>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative bg-white rounded-2xl p-8 border-2 border-black-900 hover: traslate-y-[-8px] transition-all group">
            <div class="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg">
              2
            </div>
            <div class="mt-6">
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">Discover & Apply</h3>
              <p class="text-slate-600">
                Browse verified jobs, filter by salary/location/type, and apply directly with one click.
              </p>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative bg-white rounded-2xl p-8 border-2 border-black-900 hover: translate-y-[-8px] transition-all group">
            <div class="absolute -top-5 left-8 w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg">
              3
            </div>
            <div class="mt-6">
              <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-3">Get Hired</h3>
              <p class="text-slate-600">
                Connect directly with hiring managers, get fast feedback, and land your next role.
              </p>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <button class="btn btn-primary h-14 px-12 py-4 text-lg rounded-xl hover: transition-all">
            Get Started Now — It's Free
          </button>
        </div>
      </div>
    </section>

    <!-- featured job section -->
    <section class="mb-16">
      <h1 class="text-4xl font-extrabold text-center text-slate-900 mt-12 mb-12">Featured Jobs</h1>

        <div class="container grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 mt-10">

          <NuxtLink v-for="job in jobPosings.slice(0, 3)" :key="job.id" to="/job_detail" class="max-w-md  bg-white border-2 border-black-900 rounded-2xl p-5 transition-all duration-200 ease-in-out hover:translate-y-[-8px]">
            <h2 class=" font-bold text-gray-900">{{ job.title }}</h2>

            <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {{ job.location }}
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                {{ job.job_type }}
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {{ job.salary_range }}
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
    </section>

    <!-- featured category -->
    <section class="mb-16">
      <h1 class="text-4xl font-extrabold text-center text-slate-900 mt-12 mb-12">Featured Job Categories</h1>

      <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10">
          <NuxtLink to="/sales" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              583
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                  <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Sales, Business Development</h3>
          </NuxtLink>

          <NuxtLink to="/finance" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              234
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z" clip-rule="evenodd" />
              </svg>

            </div>
            <h3 class="font-semibold text-gray-800">Finance, Accounting, Audit</h3>
          </NuxtLink>

          <NuxtLink to="/it" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              227
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path fill-rule="evenodd" d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm3.97.97a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06l-2.25 2.25a.75.75 0 0 1-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 0 1 0-1.06Zm4.28 4.28a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">IT Hardware, Software</h3>
          </NuxtLink>

          <NuxtLink to="/customer" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              217
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path fill-rule="evenodd" d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z" clip-rule="evenodd" />
              </svg>

            </div>
            <h3 class="font-semibold text-gray-800">Customer Service, Support</h3>
          </NuxtLink>

          <NuxtLink to="/marketing" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              168
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Marketing, Media, Creative</h3>
          </NuxtLink>

          <NuxtLink to="/logistics" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              70
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Logistics, Warehousing, Port</h3>
          </NuxtLink>

          <NuxtLink to="/hr" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              69
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">HR, Training and Recruitment</h3>
          </NuxtLink>

          <NuxtLink to="/engineering" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              63
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path fill-rule="evenodd" d="M12 6.75a5.25 5.25 0 0 1 6.775-5.025.75.75 0 0 1 .313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 0 1 1.248.313 5.25 5.25 0 0 1-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 1 1 2.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0 1 12 6.75ZM4.117 19.125a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z" clip-rule="evenodd" />
                <path d="m10.076 8.64-2.201-2.2V4.874a.75.75 0 0 0-.364-.643l-3.75-2.25a.75.75 0 0 0-.916.113l-.75.75a.75.75 0 0 0-.113.916l2.25 3.75a.75.75 0 0 0 .643.364h1.564l2.062 2.062 1.575-1.297Z" />
                <path fill-rule="evenodd" d="m12.556 17.329 4.183 4.182a3.375 3.375 0 0 0 4.773-4.773l-3.306-3.305a6.803 6.803 0 0 1-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 0 0-.167.063l-3.086 3.748Zm3.414-1.36a.75.75 0 0 1 1.06 0l1.875 1.876a.75.75 0 1 1-1.06 1.06L15.97 17.03a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Engineering, Technical, HSE</h3>
          </NuxtLink>

          <NuxtLink to="/driver" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              50
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                <path fill-rule="evenodd" d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Driver, Delivery, Motorbike</h3>
          </NuxtLink>

          <NuxtLink to="/admin" 
            class="relative bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
            <div class="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded">
              50
            </div>
            <div class="text-purple-600 text-5xl mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                <path d="M19.5 21a3 3 0 0 0 3-3v-4.5a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h15ZM1.5 10.146V6a3 3 0 0 1 3-3h5.379a2.25 2.25 0 0 1 1.59.659l2.122 2.121c.14.141.331.22.53.22H19.5a3 3 0 0 1 3 3v1.146A4.483 4.483 0 0 0 19.5 9h-15a4.483 4.483 0 0 0-3 1.146Z" />
              </svg>
            </div>
            <h3 class="font-semibold text-gray-800">Administrative</h3>
          </NuxtLink>  
        </div>
    </section>

    <!-- featured job section -->
    <section class="mb-16">
      <h1 class="text-4xl font-extrabold text-center text-slate-900 mt-12 mb-12">Featured Jobs</h1>

        <div class="container mx-auto grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 mt-10">

          <NuxtLink v-for="job in jobPosings.slice(3, 9)" :key="job.id" to="/job_detail" class="max-w-md  bg-white border-2 border-black-900 rounded-2xl p-5 transition-all duration-200 ease-in-out hover:translate-y-[-8px]">
            <h2 class=" font-bold text-gray-900">{{ job.title }}</h2>

            <div class="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {{ job.location }}
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                {{ job.job_type }}
              </span>

              <span class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                {{ job.salary_range }}
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
    </section>

     <!-- company section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-extrabold text-center text-slate-900 mb-12">Featured Companies</h1>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
          <!-- company card -->
          <div v-for="company in companies.slice(0,3)" :key="company.id" class="group relative bg-slate-50 rounded-2xl p-8 transition-all duration-500 border-2 border-slate-200 hover:translate-y-[-8px]">
            <div class="flex flex-col h-full">
              <div class="card-header flex items-center mb-6">
                <h3 class="text-2xl font-bold text-gray-900 ml-4 tracking-tight">{{ company.company_name }}</h3>
              </div>

              <div class="mb-3">
                <span class="text-[11px] font-bold tracking-[0.2em] text-[#763febb6] uppercase border border-[#763feb57] px-3 py-1 rounded-full">{{ company.industry }}</span>
              </div>

              <p class="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#763feb]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span class="text-[14px] text-gray-600 ml-2 font-medium">{{ company.location }}</span>
              </p>

              <p class="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                A boutique creative agency defining modern branding. We're looking for disruptive designers and bold strategists.
              </p>

              <a href="#" class="btn-primary flex items-center justify-center">
                See Our Work
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>

     <!-- promote section -->
    <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- promote -->
            <div class="lg:col-span-6 space-y-4">
              <div class="uppercase">
                Why Choose Us
              </div>
              <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.1]">
                We’re more than just a <span class="text-primary">Job Board.</span>
              </h2>
              <p class="text-lg text-slate-600">
                PeopleCare Solution is a career ecosystem. We bridge the gap between "looking for work" and "finding your purpose" with verified listings and direct employer access.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center gap-3 font-medium text-slate-700">
                  <span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                    </svg>
                  </span>
                  No ghost jobs or expired listings.
                </li>

                <li class="flex items-center gap-3 font-medium text-slate-700">
                  <span class="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                    </svg>
                  </span>
                  Direct chat with hiring managers.
                </li>
              </ul>
              <button class="btn btn-primary px-10 rounded-xl normal-case text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all">
                Create Your Profile
              </button>
            </div>

            <div class="lg:col-span-6 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
              
              <div class="bg-slate-50 border-2 border-black-900 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white">
                <p class="text-5xl font-black text-primary mb-2">10k+</p>
                <p class="text-slate-900 font-bold">Active Users</p>
                <p class="text-sm text-slate-500 mt-1">Trusting us with their careers daily.</p>
              </div>

              <div class="bg-slate-50 border-2 border-black-900 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white">
                <p class="text-5xl font-black text-red-500 mb-2">500+</p>
                <p class="text-slate-900 font-bold">Companies</p>
                <p class="text-sm text-slate-500 mt-1">Hiring directly through our site.</p>
              </div>

              <div class="bg-slate-50 border-2 border-black-900 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:bg-white">
                <p class="text-5xl font-black text-slate-900 mb-2">92%</p>
                <p class="text-slate-900 font-bold">Success Rate</p>
                <p class="text-sm text-slate-500 mt-1">Of candidates get an interview in 7 days.</p>
              </div>

              <div class="bg-[#763feb] border-2 border-black-900 p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-center items-center text-center text-white">
                <p class="text-xl font-bold">Ready to start?</p>
                <p class="text-xs opacity-80 mb-4">It takes less than 2 minutes.</p>
                <div class="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
    </section>
  </div>
</template>