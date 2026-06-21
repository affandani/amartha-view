import React from 'react';

export default function Fasilitas() {
  return (
    <div className="bg-surface text-on-surface font-body-md">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_TrtdUw97SF08BBZpmqtEICxllF9MUHMrdpTNMJojWsgBafj9epPwsi_EOjHq3krA32soa2Wv3kCnu-B51kE5Sw3jHZQlUscfnLavteL6S1W9VGbzZ9jS_BiRCro4lyK3TEQLkkRFfI8jQnEBVAYZSFtU_X3ymInFEb1az086XGTTP8ysP7Hz5pkaraMQrRtEe54HKP50aDceUuiUcwsSNZobOcYSWsE1efo7Ya4cRj6CZ0VVrmRIjC4suBOLyAlKNNK3Kdotfg" 
            alt="Amartha View Complex dusk view"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center text-white px-margin-mobile max-w-4xl">
          <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6 tracking-tight">Enjoy Your Holiday Everyday</h1>
          <p className="font-body-lg text-body-md md:text-body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
            Amartha View dirancang dengan konsep resort apartment sehingga memberikan kenyamanan tempat tinggal dengan fasilitas yang lengkap.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl">keyboard_double_arrow_down</span>
        </div>
      </header>

      {/* Intro Text Section */}
      <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center fade-in-section visible">
        <div className="max-w-3xl mx-auto">
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4 block">Eksklusivitas &amp; Kenyamanan</span>
          <h2 className="font-headline-lg text-headline-lg mb-6 md:mb-8 text-on-background">Relaksasi Jiwa dan Raga</h2>
          <p className="font-quote-serif text-lg md:text-quote-serif text-on-surface-variant italic mb-10">
            "Khusus untuk para penghuni dan tamu mereka, fasilitas dipersiapkan secara matang untuk relaksasi jiwa dan raga dalam balutan kemewahan resort."
          </p>
          <div className="w-20 h-1 bg-secondary-container mx-auto"></div>
        </div>
      </section>

      {/* Facilities Bento Grid */}
      <section className="pb-20 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:h-[900px]">
          {/* Infinity Pool - Main Feature */}
          <div className="md:col-span-8 min-h-[400px] group relative overflow-hidden image-zoom rounded-lg luxury-shadow fade-in-section visible">
            <img 
              className="w-full h-full object-cover transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzddPTxkxTnW8wA2vP-HbZi8u8-swPVCsZwUfMcbnDtmTU4juGBBXVoQO57PMxO_1Hl8Xi1VtcMzsjS8tqDh2PdcHm2KGhKvy_sEtSB0yPX5BAyneFPF1j9var70Qmz3RWkarGQZrx6rVHW0zaXMbRZTID3CTPDNcoamUkgDvaX_hoy9Roz2Jt6da8883fNnkFE4PyqDnKgQsF_cs5aOQEjar-9_KNgvInBODUwYUn0LwXcLrT9t3QOMePFG278yblr1kPsa3r2Q" 
              alt="Infinity Pool"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
              <span className="font-label-sm text-label-sm text-secondary-fixed mb-2 uppercase tracking-widest">Iconic Water Feature</span>
              <h3 className="font-headline-lg text-2xl md:text-headline-lg text-white mb-2 md:mb-4">Infinity Pool</h3>
              <p className="font-body-md text-sm md:text-body-md text-white/80 max-w-md">Berenang dengan pemandangan cakrawala yang tak terbatas, memberikan sensasi menyatu dengan alam.</p>
            </div>
          </div>

          {/* Zen Garden */}
          <div className="md:col-span-4 min-h-[300px] group relative overflow-hidden image-zoom rounded-lg luxury-shadow fade-in-section visible" style={{ transitionDelay: '100ms' }}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEGyp0XYw7e4-LnkMK3Qiho0xvujB_UClMGchr6CunZicebDZSExg5KbQ1NtgtiExMTzWjRAIfihnetQXBuDjOP8nz3QN-FWkD3w2j2io82JSEnsnLBHyhLjtRbyqDg2UhEiVOOJI9_PlN5b64lS7zNnfl9q-Yn2RJZ5I6TRnoeOTYcVmr1zHVUSpdx8gqHCMwxgYjrkyhwCf5lnunyxZV_d1lBlq_cpivvc8A-y1xB92U5wEordOd4xHl-dhbu4LJFTN7e9iiBQ" 
              alt="Zen Garden"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="font-headline-md text-xl md:text-headline-md text-white mb-1 md:mb-2">Zen Garden</h3>
              <p className="font-body-md text-sm md:text-body-md text-white/80">Ruang meditasi terbuka untuk ketenangan pikiran.</p>
            </div>
          </div>

          {/* Sky Gym */}
          <div className="md:col-span-4 min-h-[300px] group relative overflow-hidden image-zoom rounded-lg luxury-shadow fade-in-section visible" style={{ transitionDelay: '200ms' }}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRlmRvwckhxmv8xMdN_kTEYQhk2Xqun_cX9yQhqIj424C8v-qb29v5zvqmQRtYFoPp0HKPHy76LOuctR_Yh4VGpAbQsPKaV4eSCu7I9ITlFMRKMNmpPARAjcy6MBxpDNNkIIsiNlHVkUyBr5JbgE31uMf-uLU319dX2peXOV_8pNgDIVeylqz__CQ_VU6sqk2Z2KVO1kp0CT8uu6_2pwtREHCbgMrENnBM436Pu_AnYQ9jeK4RVWWPcA_FqSKbcaA72VhIrGWjIQ" 
              alt="Sky Gym"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
              <h3 className="font-headline-md text-xl md:text-headline-md text-white mb-1 md:mb-2">Sky Gym</h3>
              <p className="font-body-md text-sm md:text-body-md text-white/80">Kesehatan optimal dengan pemandangan kota dari ketinggian.</p>
            </div>
          </div>

          {/* Jogging Track */}
          <div className="md:col-span-8 min-h-[400px] group relative overflow-hidden image-zoom rounded-lg luxury-shadow fade-in-section visible" style={{ transitionDelay: '300ms' }}>
            <img 
              className="w-full h-full object-cover transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPYDwqntcSePZ3y41TJykQNZeUWDszS6HKZ42ba5Y44nMWVKQPhwfS8kDbTyz7bERWboYRZB7Fe_gjx0L5pEr_d3-WA4EYh6MFdM6OVXnPpQXlKwETpFOOUR1R503Dpk5FODuKHGS0qqDlZdnvDTIXR1onqplgm1xvQt7lvT0uI4lDxCexAIGUNO_kD6UFiS0qcR3R109-_mnhZdc2gpuUK77fYCoObUiTKdfFt2IXVIRejxRsKOYm4vSzh5iyyXcpSOQKDB2XHg" 
              alt="Elevated Jogging Track"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
              <h3 className="font-headline-lg text-2xl md:text-headline-lg text-white mb-2 md:mb-4">Elevated Jogging Track</h3>
              <p className="font-body-md text-sm md:text-body-md text-white/80 max-w-lg">Lintasan lari yang dikelilingi pepohonan asri, memberikan udara segar setiap pagi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Atmosphere Section */}
      <section className="relative bg-tertiary text-on-tertiary overflow-hidden py-20 md:py-section-gap">
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-gutter items-center">
          <div className="fade-in-section visible order-2 md:order-1">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-tertiary-container mb-6">Harmoni dengan Alam</h2>
            <p className="font-body-lg text-body-md md:text-body-lg mb-8 text-on-tertiary-container/80 leading-relaxed">
              Setiap jengkal Amartha View didesain untuk menghadirkan atmosfer resort yang menenangkan. Perpaduan material alam seperti batu alam dan kayu menciptakan kehangatan yang tak lekang oleh waktu.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container">spa</span>
                <div>
                  <h4 className="font-headline-md text-headline-md text-sm mb-1">Wellness</h4>
                  <p className="font-label-sm text-label-sm opacity-60">Layanan spa dan sauna eksklusif.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary-container">child_care</span>
                <div>
                  <h4 className="font-headline-md text-headline-md text-sm mb-1">Family</h4>
                  <p className="font-label-sm text-label-sm opacity-60">Area bermain anak yang aman.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[350px] md:h-[500px] rounded-xl overflow-hidden fade-in-section visible order-1 md:order-2" style={{ transitionDelay: '200ms' }}>
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-E_9QHP7Txo-7qGUP92m5z4Z_p5w_exDAup1lP2ApQ5ASJnzFj_9tYllhTwb80cUBKkYhMNzWzQIDXSuTwfGt64vE0BOEh8QqvEzSy2bg9g7FAEsMkRtDs0EG_C1dWvgji7DMb3MyMy0BI-822DjPRkpNtjdlmfi0PYU0AcTVh4agb136Hh2yrbiL3rNRz0zEvNReFCWx8qcPZJ7IPiM_dn1Jt6JrCZ5MF3PVJRNL7Ge_Rr2elSqdcnEv8zD_USJOj-f1wjWGHg" 
              alt="Spa Interior"
            />
            <div className="absolute inset-0 border-[10px] md:border-[20px] border-white/5 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <div className="bg-surface-container-low p-10 md:p-20 rounded-2xl border border-outline-variant/20 fade-in-section visible">
          <h2 className="font-headline-lg text-2xl md:text-headline-lg text-primary mb-6">Miliki Hunian Impian Anda</h2>
          <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
            Jadwalkan kunjungan anda hari ini dan rasakan langsung kenyamanan fasilitas bintang lima di Amartha View.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-on-primary px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-all cursor-pointer">Hubungi Sales</button>
            <button className="border border-primary text-primary px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary/5 transition-all cursor-pointer">Unduh Brosur</button>
          </div>
        </div>
      </section>
    </div>
  );
}
