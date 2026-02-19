<template>
  <div data-theme="light" class="min-h-screen bg-slate-50 text-slate-800 font-sans pb-16">
    <!-- about header -->
    <section class="section bg-white py-12 mb-8">
      <div class="container px-6">
        <h1 class="text-indigo-600 font-bold tracking-tight text-m uppercase mb-3">About Us</h1>
        <h2 class="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
          The Best Job Portal in <span class="text-indigo-600">Cambodia</span>
        </h2>
      </div>
    </section>

    <main class="container mx-auto px-6 space-y-20">
      <!-- about company -->
      <section class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-4 text-lg leading-relaxed text-slate-600">
          <p>
            <strong class="text-slate-900">People Solution.com</strong> is Cambodia's most widely used online professional job site and digital recruitment platform which effectively matches employers with the most suitable candidates.
          </p>

          <p>
            With a strong commitment to innovation and customer satisfaction, JobNet continues to evolve its platform to meet the changing needs of the job market, making it easier for both employers and job seekers to connect and succeed in their career goals.
          </p>

          <p>
            Beyond its core listing services, the platform serves as a comprehensive <strong>ecosystem for professional growth</strong>. By integrating data-driven insights with a user-centric interface, JobNet empowers HR departments to build sustainable talent pipelines while providing job seekers with the tools and visibility needed to navigate a competitive landscape.
          </p>
        </div>
        <div class="bg-indigo-50 rounded-2xl p-4">
          <img 
            src="https://www.jobnet.com.kh//General/img/about/Group%20427GP.png" 
            alt="JobNet Team"
            class="rounded-xl shadow-sm w-full"
          />
        </div>
      </section>

      <!-- vision and mission -->
      <section class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-8 rounded-2xl border-2 border-black-900">
          <h3 class="text-2xl font-bold mb-4 text-slate-900">Our History</h3>
          <p class="text-slate-600 leading-relaxed">
            CrawlJobs.com was created to build the largest global job board. Our innovative model, powered by an <span class="font-semibold text-indigo-600">Advanced AI Crawler</span>, automatically collects job listings directly from employer websites, removing the need for manual posting.
          </p>
        </div>
        <div class="bg-indigo-600 p-8 rounded-2xl text-white">
          <h3 class="text-2xl font-bold mb-4">Our Mission</h3>
          <p class="leading-relaxed opacity-90">
            "To enable companies of all sizes to easily, efficiently, and economically publish job offers worldwide with the help of AI innovations, making global recruitment accessible for both private and public sectors."
          </p>
        </div>
      </section>

      <section class="bg-white rounded-2xl p-8 border-2 border-black-900 grid lg:grid-cols-2 gap-8 items-stretch">
        <div class="rounded-3xl p-8 md:p-12 flex flex-col justify-between">
            <div class="max-w-2xl">
            <h2 class="text-3xl font-bold mb-8 text-slate-900">Let's work together.</h2>
            
            <div class="grid sm:grid-cols-2 gap-10 lg:gap-6">
                <div>
                <h4 class="font-bold uppercase text-xs tracking-widest text-slate-400 mb-3">Office Address</h4>
                <p class="text-slate-600 leading-relaxed">
                    Unit 6A, 6th Floor, Edan Tower, #23, St. Pasteur 51,<br>
                    BKK 1, Phnom Penh, Cambodia
                </p>
                </div>

                <div class="space-y-4">
                <h4 class="font-bold uppercase text-xs tracking-widest text-slate-400 mb-3">New Client Sales</h4>
                <div class="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span class="font-medium">+855 (0) 10 522 555</span>
                </div>
                <div class="flex items-center gap-3 text-slate-600 hover:text-indigo-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <a href="mailto:Sales@JobNet.com.kh" class="font-medium decoration-indigo-200 underline underline-offset-4">Sales@JobNet.com.kh</a>
                </div>
                </div>
            </div>

            <div class="mt-12 pt-8 border-t border-slate-100">
                <h4 class="font-bold text-slate-900 mb-2">Follow Us</h4>
                <p class="text-slate-500 text-sm">Join our journey and get exclusive content for subscribers.</p>
            </div>
            </div>
        </div>

        <div class="overflow-hidden rounded-3xl min-h-[350px]">
            <iframe 
            class="w-full h-full grayscale contrast-125 hover:grayscale-0 transition-all duration-700" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.889658535071!2d104.9213500758457!3d11.56045554425717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951307d934271%3A0x6b6a38622c5e5055!2sJobNet.com.kh!5e0!3m2!1sen!2skh!4v1710000000000!5m2!1sen!2skh" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </section>

    </main>
  </div>
</template>