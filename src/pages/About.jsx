import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden pt-20">
      {/* Hero Section */}
      <header className="relative h-[716px] min-h-[600px] flex items-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover animate-fadeIn duration-1000" 
            src="/images/about/about1.jpg" 
            alt="Amartha View Tower Sunset"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <ScrollReveal delay={100} translateY="translate-y-4">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container font-label-sm uppercase mb-6 rounded-full">Luxury Residence</span>
              <h1 className="font-headline-xl text-headline-xl text-primary leading-tight mb-8">APARTEMEN KONSEP RESORT PERTAMA DI SEMARANG BARAT</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Hadirkan nuansa liburan setiap hari di tengah hiruk pikuk kota dengan kenyamanan hunian berstandar internasional.</p>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <main>
        {/* Vision Content Section */}
        <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            
            <div className="lg:col-span-5">
              <ScrollReveal>
                <h2 className="font-headline-lg text-headline-lg text-primary mb-8 font-semibold">Definisi Baru Hunian Modern</h2>
                <div className="space-y-6 text-on-surface-variant font-body-lg leading-relaxed">
                  <p>PT PP Properti Tbk sebagai anak perusahaan BUMN dari PT PP (Persero) Tbk mempersembahkan Apartemen Amartha View.</p>
                  <p>Mengusung konsep paduan antara apartment, hotel dan resort menjadikan Amartha View tidak sekedar hunian. Anda akan menikmati suasana resort setiap hari, menciptakan nuansa liburan menyenangkan bagi anda dan keluarga.</p>
                </div>
              </ScrollReveal>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="pt-12">
                <ScrollReveal delay={150}>
                  <img 
                    className="rounded-xl shadow-lg w-full h-[400px] object-cover hover:scale-103 transition-transform duration-700" 
                    src="/images/about/about2.jpg" 
                    alt="Resort Infinity Pool"
                  />
                </ScrollReveal>
              </div>
              <div>
                <ScrollReveal delay={300}>
                  <img 
                    className="rounded-xl shadow-lg w-full h-[450px] object-cover hover:scale-103 transition-transform duration-700" 
                    src="/images/about/about3.jpg" 
                    alt="Minimalist Lobby"
                  />
                </ScrollReveal>
              </div>
            </div>

          </div>
        </section>

        {/* Investment Values (Bento Grid) */}
        <section className="bg-surface-container py-section-gap">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4 font-bold">Investasi Aman &amp; Menguntungkan</h2>
                <p className="font-body-md text-on-surface-variant">Keunggulan Amartha View bagi Anda yang mengutamakan kualitas dan kepastian.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <ScrollReveal delay={0} className="h-full">
                <div className="bg-surface p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out group h-full">
                  <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors duration-300">key</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold mb-4">Siap Huni</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">Unit telah tersedia dan siap untuk segera Anda tempati. Tak perlu menunggu lama untuk menikmati kemewahan hunian impian Anda.</p>
                </div>
              </ScrollReveal>

              {/* Value 2 */}
              <ScrollReveal delay={150} className="h-full">
                <div className="bg-surface p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out group h-full">
                  <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors duration-300">payments</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold mb-4">Siap Sewa</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">Potensi passive income tinggi dengan okupansi yang terjaga. Terletak di area strategis Semarang Barat yang terus berkembang pesat.</p>
                </div>
              </ScrollReveal>

              {/* Value 3 */}
              <ScrollReveal delay={300} className="h-full">
                <div className="bg-surface p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/40 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out group h-full">
                  <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary transition-colors duration-300">
                    <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl transition-colors duration-300">shield_with_house</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary font-semibold mb-4">Zona Aman Berinvestasi</h3>
                  <p className="font-body-md text-on-surface-variant leading-relaxed">Jaminan keamanan investasi di bawah naungan PT PP Properti Tbk (BUMN). Kepastian legalitas dan keberlanjutan properti jangka panjang.</p>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </section>

        {/* Quote Section */}
        <section className="py-section-gap relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <ScrollReveal>
              <span className="material-symbols-outlined text-6xl text-outline-variant mb-8">format_quote</span>
              <p className="font-quote-serif text-quote-serif text-primary italic max-w-4xl mx-auto mb-10 leading-relaxed">
                "Kami tidak hanya membangun gedung, kami menciptakan sebuah ekosistem dimana kenyamanan hunian dan ketenangan resort menyatu dalam harmoni yang sempurna."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-px bg-outline-variant"></div>
                <span className="font-label-sm uppercase tracking-widest text-on-surface-variant">PT PP Properti Tbk</span>
                <div className="w-12 h-px bg-outline-variant"></div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
          <ScrollReveal>
            <div className="bg-primary p-12 md:p-20 rounded-3xl relative overflow-hidden group shadow-2xl">
              <div className="absolute inset-0 z-0 opacity-20 transition-transform duration-[1000ms] group-hover:scale-102">
                <img 
                  className="w-full h-full object-cover" 
                  src="/images/about/about4.jpg" 
                  alt="Exterior Night View"
                />
              </div>
              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <h2 className="font-headline-lg text-headline-lg text-white mb-6 font-bold">Wujudkan Hunian Impian Anda Sekarang</h2>
                <p className="text-on-primary-container font-body-md mb-10 leading-relaxed">Dapatkan penawaran eksklusif dan tour unit pribadi bersama konsultan properti kami.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="https://wa.me/6287894473388" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto cursor-pointer font-bold shadow-md flex items-center justify-center"
                  >
                    Hubungi Kami
                  </a>
                  <button className="border border-white/30 text-white px-10 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto cursor-pointer">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
