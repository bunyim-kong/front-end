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
    <section class="section relative bg-white pt-16 pb-10">
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

    <!-- featured company section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-extrabold text-left text-slate-900 mb-12">All Companies</h1>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
          <!-- company card -->
          <NuxtLink to="/company_detail" v-for="company in companies" :key="company.id" class="group relative bg-slate-50 rounded-2xl p-8 transition-all duration-500 border-2 border-slate-200 hover:translate-y-[-8px]">
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
          </NuxtLink>

        </div>
      </div>

    </section>
  </div>
</template>