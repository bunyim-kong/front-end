<!-- pages/jobs/[id].vue  or  pages/job-detail.vue -->
<template>
  <div class="min-h-screen bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-5xl mx-auto">
      <!-- Back button + actions -->
      <div class="mb-6 flex items-center justify-between">
        <NuxtLink 
          to="/jobs" 
          class="inline-flex items-center gap-2 text-black-600 hover:text-[#763feb] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Jobs
        </NuxtLink>

        <div class="flex gap-3">
          <button class="btn btn-ghost btn-sm gap-2 text-gray-600 hover:text-[#763feb]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Save
          </button>
          <button class="btn btn-ghost btn-sm gap-2 text-gray-600 hover:text-[#763feb]">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367 2.684m-5.367-2.684l-6.632-3.316" />
            </svg>
            Share
          </button>
        </div>
      </div>

      <!-- Main card / content -->
      <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <!-- Header / hero section -->
        <div class="px-8 pt-10 pb-6 bg-gradient-to-br from-[#763feb]/5 to-[#a076f9]/5 border-b border-gray-100">
          <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <h1 class="text-3xl md:text-4xl font-black text-gray-900">
                Frontend Developer
              </h1>
              <p class="mt-2 text-lg text-gray-600 font-medium">
                ABC Tech Company
              </p>

              <div class="flex flex-wrap gap-4 mt-5 text-sm text-gray-600">
                <span class="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-[#763feb]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Phnom Penh, Cambodia
                </span>

                <span class="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-[#763feb]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                  </svg>
                  Full-time
                </span>

                <span class="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 text-[#763feb]">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  $800 – $1,200
                </span>
              </div>
            </div>

            <div class="flex-shrink-0">
              <button class="btn bg-[#763feb] hover:bg-[#6235c4] text-white px-10 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-purple-200/30 transition-all active:scale-95">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        <!-- Main content -->
        <div class="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <!-- Left / main description -->
          <div class="lg:col-span-2 space-y-10">
            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
              <div class="text-gray-900 max-w-none">
                <p>
                  We are looking for a passionate and talented <strong>Frontend Developer</strong> to join our growing team in Phnom Penh. You will be responsible for building high-performance, responsive, and beautiful user interfaces for web applications using modern JavaScript frameworks.
                </p>
                <p>
                  Our stack includes Vue 3 (Composition API), Nuxt 3, Tailwind CSS, Pinia, TypeScript, and we’re moving toward full server-side rendering + edge functions.
                </p>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
              <ul class="list-disc pl-6 space-y-2.5 text-gray-700">
                <li>Develop new user-facing features using Vue.js / Nuxt.js</li>
                <li>Build reusable components and front-end libraries</li>
                <li>Optimize applications for maximum speed and scalability</li>
                <li>Collaborate with backend developers and designers</li>
                <li>Write clean, maintainable, and testable code</li>
                <li>Participate in code reviews and contribute to best practices</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul class="list-disc pl-6 space-y-2.5 text-gray-700">
                <li>2+ years of professional experience with Vue.js or React</li>
                <li>Strong understanding of HTML, CSS, JavaScript/TypeScript</li>
                <li>Experience with Tailwind CSS or modern CSS-in-JS</li>
                <li>Familiar with state management (Pinia / Vuex / Redux)</li>
                <li>Experience with REST APIs and GraphQL is a plus</li>
                <li>Good understanding of responsive design & accessibility</li>
                <li>Ability to work independently and in a team</li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-4">Nice to have</h2>
              <ul class="list-disc pl-6 space-y-2.5 text-gray-700">
                <li>Experience with Nuxt 3 / SSR / Nitro</li>
                <li>Knowledge of testing (Vitest, Playwright, Cypress)</li>
                <li>Basic backend knowledge (Node.js, Strapi, Supabase)</li>
                <li>Experience with design systems</li>
              </ul>
            </section>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8 lg:sticky lg:top-8 lg:h-fit">
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 class="text-lg font-bold text-gray-900 mb-4">Job Details</h3>
              <dl class="space-y-4 text-sm">
                <div>
                  <dt class="font-bold text-gray-900">Location</dt>
                  <dd class="font-medium text-gray-500">Phnom Penh, Cambodia</dd>
                </div>
                <div>
                  <dt class="font-bold text-gray-900">Job Type</dt>
                  <dd class="font-medium">Full-time</dd>
                </div>
                <div>
                  <dt class="font-bold text-gray-900">Salary Range</dt>
                  <dd class="font-medium text-gray-500">$800 – $1,200</dd>
                </div>
                <div>
                  <dt class="font-bold text-gray-900">Posted</dt>
                  <dd class="font-medium text-gray-500">3 days ago</dd>
                </div>
                <div>
                  <dt class="font-bold text-gray-900">Application Deadline</dt>
                  <dd class="font-medium text-gray-500">March 15, 2025</dd>
                </div>
              </dl>
            </div>

            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 class="text-lg font-bold text-gray-900 mb-4">How to Apply</h3>
              <p class="text-gray-600 text-sm mb-4">
                Send your CV and portfolio to <a href="mailto:careers@abctech.kh" class="text-[#763feb] hover:underline">careers@abctech.kh</a> with subject line:
              </p>
              <div class="bg-white text-gray-500 p-3 rounded-xl font-mono text-sm text-center border border-gray-200">
                Frontend Developer – [Your Name]
              </div>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="px-8 py-10 bg-gray-50 border-t border-gray-100 text-center">
          <button class="btn bg-[#763feb] hover:bg-[#6235c4] text-white px-12 py-5 rounded-2xl text-xl font-bold shadow-xl shadow-purple-200/40 transition-all active:scale-95">
            I'm Interested – Apply Now
          </button>
          <p class="mt-4 text-sm text-gray-500">
            Applications are reviewed within 48 hours
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You can fetch real data here later
// const route = useRoute()
// const job = await $fetch(`/api/jobs/${route.params.id}`)
</script>

<style scoped>
/* Optional: extra polish if needed */
.prose :where(p):not(:where([class~="not-prose"],[class~="not-prose"] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}
</style>