"use client";

export default function Home() {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Trusted by developers worldwide
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">See what our customers have to say about EdgeCloud</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              EdgeCloud telah menjadi pengubah permainan bagi startup kami. Jaringan edge global mengurangi latensi kami hingga 80%, dan pengalaman
              pengembangnya luar biasa. Proses penyiapannya hanya butuh waktu kurang dari 5 menit!
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full"></div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Sarah Chen</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">CTO, TechStart</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Penyimpanan yang kompatibel dengan S3 sangat cocok untuk platform media kami. Kami bermigrasi dari AWS dan memangkas biaya penyimpanan hingga 60%
              sekaligus meningkatkan kinerja. Solusi pencadangan ini memberi kami ketenangan pikiran.
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full"></div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Marcus Johnson</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Lead Engineer, MediaHub</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Dukungan dan keandalan yang luar biasa. Kami memproses jutaan permintaan setiap hari, dan EdgeCloud menanganinya dengan mudah. ​​Harganya
              transparan dan platformnya dapat diskalakan secara otomatis. Sangat direkomendasikan!
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-500 rounded-full"></div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">Emily Rodriguez</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">VP Engineering, DataFlow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
