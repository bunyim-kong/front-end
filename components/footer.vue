<template>
  <footer class="footer p-10 bg-white text-slate-900 border-t border-gray-200">
    <div class="container mx-auto flex flex-col lg:flex-row justify-between gap-12">
        <div class="flex flex-wrap gap-[140px]">
        <nav class="flex flex-col gap-3">
            <h6 class="footer-title text-[19px] text-black-900 opacity-100 font-extrabold uppercase tracking-widest">Services</h6>
            <a class="link link-hover hover:text-primary transition-colors">Job Placement</a>
            <a class="link link-hover hover:text-primary transition-colors">Resume Review</a>
            <a class="link link-hover hover:text-primary transition-colors">Career Coaching</a>
            <a class="link link-hover hover:text-primary transition-colors">Skills Assessment</a>
        </nav>

        <nav class="flex flex-col gap-3">
            <h6 class="footer-title text-[19px] text-black-900 opacity-100 font-extrabold uppercase tracking-widest">Company</h6>
            <a class="link link-hover hover:text-primary transition-colors">About us</a>
            <a class="link link-hover hover:text-primary transition-colors">Contact</a>
            <a class="link link-hover hover:text-primary transition-colors">Jobs</a>
            <a class="link link-hover hover:text-primary transition-colors">Press kit</a>
        </nav>

        <nav class="flex flex-col gap-3">
            <h6 class="footer-title text-[19px] text-black-900 opacity-100 font-extrabold uppercase tracking-widest">Legal</h6>
            <a class="link link-hover hover:text-primary transition-colors">Terms of use</a>
            <a class="link link-hover hover:text-primary transition-colors">Privacy policy</a>
            <a class="link link-hover hover:text-primary transition-colors">Cookie policy</a>
        </nav>
        </div>

        <div class="max-w-sm">
        <h6 class="footer-title text-[19px] text-black-900 opacity-100 font-extrabold uppercase tracking-widest mb-4">Newsletter</h6>
        <p class="text-slate-500 mb-4 text-sm leading-relaxed">
            Get the latest job openings and career advice delivered to your inbox weekly.
        </p>
        
        <div class="flex flex-col gap-2">
            <input 
            type="email" 
            placeholder="Enter your email" 
            class="bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl focus:outline-none focus:border-primary transition-all text-sm"
            />
            <button class="btn btn-primary rounded-xl normal-case font-bold shadow-sm">
            Join Now
            </button>
        </div>
        </div>

    </div>
  </footer>

  <footer class="footer bg-white text-slate-900 px-10 py-6">
    <div class="container flex items-center justify-between">
        <aside class="grid-flow-col items-center">

        <p class="font-bold">
            <span class="text-primary text-[26px] mr-2 tracking-tighter">PeopleCare</span><span class="text-red-500 text-[26px] tracking-tighter">Solution</span>
            <br /><br>
            <span class="font-medium text-slate-500">Connecting talent since 2026</span>
        </p>
        </aside>
        
        <nav class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4">
            <a class="w-10 h-10 border-2 border-black-900 flex items-center justify-center rounded-xl hover:bg-slate-100 hover:-translate-y-1 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a class="w-10 h-10 border-2 border-black-900 flex items-center justify-center rounded-xl hover:bg-slate-100 hover:-translate-y-1 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg>
            </a>
            <a class="w-10 h-10 border-2 border-black-900 flex items-center justify-center rounded-xl hover:bg-slate-100 hover:-translate-y-1 transition-all duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
            </a>
        </div>
        </nav>
    </div>
  </footer>
</template>