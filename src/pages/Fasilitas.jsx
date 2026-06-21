import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Fasilitas() {
  return (
    <div className="bg-surface text-on-surface font-body-md">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover animate-fadeIn duration-1000" 
            src="/images/fasilitas/fasilitas1.jpg" 
            alt="Amartha View Complex dusk view"
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 text-center text-white px-margin-mobile max-w-4xl">
          <ScrollReveal delay={100} translateY="translate-y-4">
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-6 tracking-tight">Enjoy Your Holiday Everyday</h1>
            <p className="font-body-lg text-body-md md:text-body-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
              Amartha View dirancang dengan konsep resort apartment sehingga memberikan kenyamanan tempat tinggal dengan fasilitas yang lengkap.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <span className="material-symbols-outlined text-white text-4xl">keyboard_double_arrow_down</span>
        </div>
      </header>

      {/* Intro Text Section */}
      <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4 block">Eksklusivitas &amp; Kenyamanan</span>
            <h2 className="font-headline-lg text-headline-lg mb-6 md:mb-8 text-on-background font-bold">Relaksasi Jiwa dan Raga</h2>
            <p className="font-quote-serif text-lg md:text-quote-serif text-on-surface-variant italic mb-10 leading-relaxed">
              "Khusus untuk para penghuni dan tamu mereka, fasilitas dipersiapkan secara matang untuk relaksasi jiwa dan raga dalam balutan kemewahan resort."
            </p>
            <div className="w-20 h-1 bg-secondary-container mx-auto"></div>
          </div>
        </ScrollReveal>
      </section>

      {/* Facilities Bento Grid */}
      <section className="pb-20 md:pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 md:h-[900px]">
          
          {/* Infinity Pool - Main Feature */}
          <div className="md:col-span-8 min-h-[400px] rounded-xl overflow-hidden shadow-md">
            <ScrollReveal delay={0} className="w-full h-full">
              <div className="w-full h-full group relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 ease-out">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="/images/fasilitas/fasilitas2.jpg" 
                  alt="Infinity Pool"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
                  <span className="font-label-sm text-label-sm text-secondary-fixed mb-2 uppercase tracking-widest">Iconic Water Feature</span>
                  <h3 className="font-headline-lg text-2xl md:text-headline-lg text-white mb-2 md:mb-4">Infinity Pool</h3>
                  <p className="font-body-md text-sm md:text-body-md text-white/80 max-w-md">Berenang dengan pemandangan cakrawala yang tak terbatas, memberikan sensasi menyatu dengan alam.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Zen Garden */}
          <div className="md:col-span-4 min-h-[300px] rounded-xl overflow-hidden shadow-md">
            <ScrollReveal delay={100} className="w-full h-full">
              <div className="w-full h-full group relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 ease-out">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="/images/fasilitas/fasilitas3.jpg" 
                  alt="Zen Garden"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-headline-md text-xl md:text-headline-md text-white mb-1 md:mb-2 font-semibold">Zen Garden</h3>
                  <p className="font-body-md text-sm md:text-body-md text-white/80">Ruang meditasi terbuka untuk ketenangan pikiran.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sky Gym */}
          <div className="md:col-span-4 min-h-[300px] rounded-xl overflow-hidden shadow-md">
            <ScrollReveal delay={200} className="w-full h-full">
              <div className="w-full h-full group relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 ease-out">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="/images/fasilitas/fasilitas4.jpg" 
                  alt="Sky Gym"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 md:p-8">
                  <h3 className="font-headline-md text-xl md:text-headline-md text-white mb-1 md:mb-2 font-semibold">Sky Gym</h3>
                  <p className="font-body-md text-sm md:text-body-md text-white/80">Kesehatan optimal dengan pemandangan kota dari ketinggian.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Jogging Track */}
          <div className="md:col-span-8 min-h-[400px] rounded-xl overflow-hidden shadow-md">
            <ScrollReveal delay={300} className="w-full h-full">
              <div className="w-full h-full group relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 ease-out">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="/images/fasilitas/fasilitas5.jpg" 
                  alt="Elevated Jogging Track"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6 md:p-10">
                  <h3 className="font-headline-lg text-2xl md:text-headline-lg text-white mb-2 md:mb-4">Elevated Jogging Track</h3>
                  <p className="font-body-md text-sm md:text-body-md text-white/80 max-w-lg">Lintasan lari yang dikelilingi pepohonan asri, memberikan udara segar setiap pagi.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Interactive Atmosphere Section */}
      <section className="relative bg-tertiary text-on-tertiary overflow-hidden py-20 md:py-section-gap">
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-gutter items-center">
          
          <div className="order-2 md:order-1">
            <ScrollReveal>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-tertiary-container mb-6 font-semibold">Harmoni dengan Alam</h2>
              <p className="font-body-lg text-body-md md:text-body-lg mb-8 text-on-tertiary-container/80 leading-relaxed">
                Setiap jengkal Amartha View didesain untuk menghadirkan atmosfer resort yang menenangkan. Perpaduan material alam seperti batu alam dan kayu menciptakan kehangatan yang tak lekang oleh waktu.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container">spa</span>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-sm mb-1 font-semibold">Wellness</h4>
                    <p className="font-label-sm text-label-sm opacity-60">Layanan spa dan sauna eksklusif.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-secondary-container">child_care</span>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-sm mb-1 font-semibold">Family</h4>
                    <p className="font-label-sm text-label-sm opacity-60">Area bermain anak yang aman.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative h-[350px] md:h-[500px] rounded-2xl overflow-hidden order-1 md:order-2">
            <ScrollReveal delay={150} className="w-full h-full">
              <div className="w-full h-full group relative overflow-hidden shadow-xl rounded-2xl">
                <img 
                  className="w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-102" 
                  src="/images/fasilitas/fasilitas6.jpg" 
                  alt="Spa Interior"
                />
                <div className="absolute inset-0 border-[10px] md:border-[20px] border-white/5 pointer-events-none"></div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <ScrollReveal>
          <div className="bg-surface-container-low p-10 md:p-20 rounded-3xl border border-outline-variant/20 shadow-lg">
            <h2 className="font-headline-lg text-2xl md:text-headline-lg text-primary mb-6 font-bold">Miliki Hunian Impian Anda</h2>
            <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
              Jadwalkan kunjungan anda hari ini dan rasakan langsung kenyamanan fasilitas bintang lima di Amartha View.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/6287894473388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer rounded-lg font-semibold flex items-center justify-center"
              >
                Hubungi Sales
              </a>
              <button className="border border-primary text-primary px-10 py-4 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer rounded-lg">
                Unduh Brosur
              </button>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
