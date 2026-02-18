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

    <!-- featured job section -->
    <section>
      
    </section>

     <!-- company section -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-extrabold text-center text-slate-900 mb-12">Featured Companies</h1>

        <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
          <!-- company card -->
          <div class="group relative bg-slate-50 rounded-2xl p-8 transition-all duration-500 border-2 border-slate-200 hover:translate-y-[-8px]">
            <div class="flex flex-col h-full">
              <div class="card-header flex items-center mb-6">
                <div class="h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-sm overflow-hidden group-hover:rotate-12 transition-transform">
                  <img src="https://blackdurian.com/wp-content/uploads/2025/09/logo-black-durain.gif" alt="Black Durian Logo" class="w-full h-full object-cover">
                </div>
                <h3 class="text-2xl font-bold text-gray-900 ml-4 tracking-tight">Black Durian</h3>
              </div>

              <div class="mb-3">
                <span class="text-[11px] font-bold tracking-[0.2em] text-[#763febb6] uppercase border border-[#763feb57] px-3 py-1 rounded-full">Creative Agency</span>
              </div>

              <p class="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-[#763feb]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <span class="text-[14px] text-gray-600 ml-2 font-medium">+32 Open Positions</span>
              </p>

              <p class="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                A boutique creative agency defining modern branding. We're looking for disruptive designers and bold strategists.
              </p>

              <a href="#" class="btn-primary flex items-center justify-center">
                See Our Work
              </a>
            </div>
          </div>

          <div class="group relative bg-slate-50 rounded-2xl p-8 transition-all duration-500 border-2 border-slate-200 hover:translate-y-[-8px]">
            <div class="flex flex-col h-full">
              <div class="card-header flex items-center mb-6">
                <div class="h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-sm overflow-hidden group-hover:rotate-12 transition-transform">
                  <img src="https://hrincjobs-pro.s3.amazonaws.com/media/public/filer_public/f8/88/f888d4b0-f249-404a-b7a3-16aa0c356a8b/download.png" alt="Ezecom Logo" class="w-full h-full object-cover">
                </div>
                <h3 class="text-2xl font-bold text-gray-900 ml-4 tracking-tight">Ezecom</h3>
              </div>

              <div class="mb-3">
                <span class="text-[11px] font-bold tracking-[0.2em] text-red-600/70 uppercase border border-red-200 px-3 py-1 rounded-full">ISP & Cloud</span>
              </div>

              <p class="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <span class="text-[14px] text-gray-600 ml-2 font-medium">+18 Open Positions</span>
              </p>

              <p class="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                The premium choice for internet and cloud infrastructure. We build the connectivity that powers Cambodia's biggest businesses.
              </p>

              <a href="#" class="btn-primary flex items-center justify-center">
                See Our Work
              </a>
            </div>
          </div>

          <div class="group relative bg-slate-50 rounded-2xl p-8 transition-all duration-500 border-2 border-slate-200 hover:translate-y-[-8px]">
            <div class="flex flex-col h-full">
              <div class="card-header flex items-center mb-6">
                <div class="h-16 w-16 flex items-center justify-center bg-white rounded-2xl shadow-sm overflow-hidden group-hover:rotate-12 transition-transform">
                  <img src="https://cdn.aptoide.com/imgs/c/f/f/cffec3f2fc237b5e9baefcff21783b7c_icon.png" alt="Wing Bank Logo" class="w-full h-full object-cover">
                </div>
                <h3 class="text-2xl font-bold text-gray-900 ml-4 tracking-tight">Wing Bank</h3>
              </div>

              <div class="mb-3">
                <span class="text-[11px] font-bold tracking-[0.2em] text-blue-600/70 uppercase border border-blue-200 px-3 py-1 rounded-full">Fintech & Banking</span>
              </div>

              <p class="flex items-center mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-blue-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
                <span class="text-[14px] text-gray-600 ml-2 font-medium">+14 Open Positions</span>
              </p>

              <p class="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
                Empowering every Cambodian with smart financial solutions. Join the team that's leading the digital payment revolution.
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