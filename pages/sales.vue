<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  // តាងអថេរសម្រាប់រក្សាទុកទិន្នន័យក្រុមហ៊ុន និងការផ្សព្វផ្សាយការងារ
  const jobPosings = ref([]);

  // ការអោយសិទ្ធិ API ត្រូវបានកំណត់នៅក្នុងកូដនេះ ដើម្បីអនុញ្ញាតឱ្យយើងទាញយកទិន្នន័យពី Strapi API។ សូមប្រាកដថាអ្នកបានប្តូរតម្លៃ `Authorization` ជាមួយនឹង token ដែលត្រឹមត្រូវសម្រាប់ការទាញយកទិន្នន័យពី Strapi API របស់អ្នក។
  const config = {
    headers: { Authorization: `Bearer 31271e43b98cc7d59389d5a3522a318dec24b1b711f728e3179083c09cdd392a990a2c5f493a44779eac98bcb724f848aa22d5a5fc548c634e3ee82eaed5529b04daa73026d3e98f53a60bd7d306d477a5bd8f9e8339ebc0ab55d0a8ad1ed5ff82b8cb58af3bba3458e500031239f686ce7f904e60ff08f904923eef9c7ca1d5` }
  };

  onMounted(() => {
    fetchJobPosings();
  });

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
    <section class="section relative bg-white pt-16 p-10">
      <div class="container mx-auto px-4 text-center">
        <!-- search bar -->
        <div class="container mt-10 max-w-4xl mx-auto bg-white p-2 md:p-3 rounded-2xl border-2 border-black-900 flex flex-col md:flex-row items-center gap-2">
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

    <!-- featured job section -->
    <section class="container pb-16">
        <h1 class="text-2xl font-bold text-left mt-10 mb-10">Sale & Business Development Jobs</h1>

        <div class="container grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-6 mt-10">
          <NuxtLink v-for="job in jobPosings" :key="job.id" :to="`/job/${job.id}`" class="max-w-md  bg-white border-2 border-black-900 rounded-2xl p-5 transition-all duration-200 ease-in-out hover:translate-y-[-8px]">
            <h2 class=" font-bold text-gray-900">{{ job.title }}</h2>

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
    </section>
  </div>
</template>