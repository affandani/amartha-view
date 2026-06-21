import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function TipeUnit() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden pt-20">
      <main className="pt-8 md:pt-16">
        {/* Hero Section / Title */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 md:mb-16">
          <div className="max-w-3xl text-center md:text-left">
            <ScrollReveal>
              <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4 block">Pilihan Hunian</span>
              <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-6">Tipe Unit &amp; Denah</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Setiap unit di Amartha View dirancang dengan estetika modern yang hangat, memaksimalkan cahaya alami dan sirkulasi udara untuk kenyamanan hidup yang maksimal.</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Unit Types Grid */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-16 md:space-y-section-gap pb-16 md:pb-section-gap">
          {/* 1 Bedroom Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 rounded-xl overflow-hidden shadow-md">
              <ScrollReveal delay={100} className="w-full h-full">
                <div className="group relative aspect-[4/3] md:aspect-[1.34] overflow-hidden rounded-xl bg-surface-container-low hover:shadow-2xl transition-all duration-500 ease-out">
                  <img 
                    alt="1 Bedroom interior" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="/images/tipe-unit/tipeunit1.jpg" 
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
                </div>
              </ScrollReveal>
            </div>
            <div className="md:col-span-5 md:pl-12 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
              <ScrollReveal delay={200}>
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <span className="material-symbols-outlined text-xl">bed</span>
                  <span className="font-label-sm text-label-sm tracking-widest uppercase">Signature Collection</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">1 Bedroom</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed max-w-lg md:max-w-none">
                  Tersedia 2 pilihan tipe ruangan 1 Bedroom dengan luasan 22 m2 SGA, dan 1 Bedroom + luasan 24 m2 SGA. Ideal untuk profesional muda yang menghargai privasi dan fungsionalitas dalam balutan kemewahan resort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="flex items-center justify-center gap-3 bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase hover:bg-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out shadow-md cursor-pointer font-semibold">
                    <span className="material-symbols-outlined">360</span>
                    Tour 360 View
                  </button>
                  <button className="flex items-center justify-center gap-3 border border-outline text-primary font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer font-semibold">
                    <span className="material-symbols-outlined">download</span>
                    Brochure
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent"></div>

          {/* 2 Bedroom Section (Asymmetrical Flip) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 md:pr-12 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
              <ScrollReveal delay={200}>
                <div className="inline-flex items-center gap-2 text-primary mb-4">
                  <span className="material-symbols-outlined text-xl">family_restroom</span>
                  <span className="font-label-sm text-label-sm tracking-widest uppercase">Family Living</span>
                </div>
                <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">2 Bedroom</h2>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed max-w-lg md:max-w-none">
                  Tersedia 2 pilihan tipe ruangan 2 Bedroom dengan luasan 36 m2 SGA, dan 2 Bedroom + luasan 44 m2 SGA. Ruang yang lebih luas untuk momen berharga bersama keluarga, dilengkapi dengan balkon privat yang menyuguhkan pemandangan asri.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <button className="flex items-center justify-center gap-3 bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase hover:bg-primary-container hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out shadow-md cursor-pointer font-semibold">
                    <span className="material-symbols-outlined">360</span>
                    Tour 360 View
                  </button>
                  <button className="flex items-center justify-center gap-3 border border-outline text-primary font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase hover:bg-primary/5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out cursor-pointer font-semibold">
                    <span className="material-symbols-outlined">download</span>
                    Brochure
                  </button>
                </div>
              </ScrollReveal>
            </div>
            <div className="md:col-span-7 rounded-xl overflow-hidden shadow-md order-1 md:order-2">
              <ScrollReveal delay={100} className="w-full h-full">
                <div className="group relative aspect-[4/3] md:aspect-[1.34] overflow-hidden rounded-xl bg-surface-container-low hover:shadow-2xl transition-all duration-500 ease-out">
                  <img 
                    alt="2 Bedroom interior" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="/images/tipe-unit/tipeunit2.jpg" 
                  />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Feature Highlights (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 md:pt-16">
            <ScrollReveal className="h-full" delay={0}>
              <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 ease-out flex flex-col items-center text-center md:items-start md:text-left h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">high_quality</span>
                <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Premium Materials</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Lantai marmer impor dan perangkat sanitasi ternama melengkapi setiap sudut ruangan.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="h-full" delay={100}>
              <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 ease-out flex flex-col items-center text-center md:items-start md:text-left h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">wb_sunny</span>
                <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Natural Lighting</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Jendela setinggi langit-langit memastikan cahaya matahari masuk secara optimal ke seluruh ruangan.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="h-full sm:col-span-2 md:col-span-1" delay={200}>
              <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl transition-all duration-500 ease-out flex flex-col items-center text-center md:items-start md:text-left h-full">
                <span className="material-symbols-outlined text-primary text-4xl mb-6">smartphone</span>
                <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Smart Home System</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Kendali pencahayaan dan suhu ruangan hanya dengan satu sentuhan jari melalui ponsel Anda.</p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden py-20 px-6 bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(104, 60, 28, 0.6), rgba(104, 60, 28, 0.6)), url('/images/tipe-unit/tipeunit3.jpg')` 
          }}
        >
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-primary mb-8 max-w-4xl mx-auto px-4">Rasakan Kehidupan Modern yang Berpadu dengan Ketenangan Alam.</h2>
              <a 
                href="https://wa.me/6287894473388" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-primary font-label-sm text-label-sm px-10 md:px-12 py-4 md:py-5 rounded-lg uppercase tracking-widest hover:bg-surface-container-low hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out shadow-xl cursor-pointer font-semibold inline-block"
              >
                Hubungi Sales Kami
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
