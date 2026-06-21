import React from 'react';

export default function About() {
  return (
    <div className="bg-background text-on-background font-body-md overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-[716px] min-h-[600px] flex items-center overflow-hidden bg-surface-container-low pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAygvYnGNmCXexBOB5Z3cD2txzSvImawqs_34RMCdDrjSVs_EWpYTymLsjMypY0bMMOHia-O1qAOhEXtjAfRnpzE1uSNYmBupT8LBjqQ0aI6J4UVAqMsrsMDT-REngB1Djn_Ij3paOmy734kSIJBt5vx2tdWtnS_wQ5IPAr3fSWR45TeVOHvEQFtXgFgUzzM9lkErAUEO2x4fnWr8MprDvJWolBEm9bGjmXufA6Oc-p3wg83fej3d4j9FOEG-dzCfr4N8cwaNHHgw" 
            alt="Amartha View Tower Sunset"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-secondary-container text-on-secondary-container font-label-sm uppercase mb-6 rounded-full">Luxury Residence</span>
            <h1 className="font-headline-xl text-headline-xl text-primary leading-tight mb-8">APARTEMEN KONSEP RESORT PERTAMA DI SEMARANG BARAT</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">Hadirkan nuansa liburan setiap hari di tengah hiruk pikuk kota dengan kenyamanan hunian berstandar internasional.</p>
          </div>
        </div>
      </header>

      <main>
        {/* Vision Content Section */}
        <section className="py-section-gap max-w-container-max mx-auto px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 reveal active">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-8">Definisi Baru Hunian Modern</h2>
              <div className="space-y-6 text-on-surface-variant font-body-lg leading-relaxed">
                <p>PT PP Properti Tbk sebagai anak perusahaan BUMN dari PT PP (Persero) Tbk mempersembahkan Apartemen Amartha View.</p>
                <p>Mengusung konsep paduan antara apartment, hotel dan resort menjadikan Amartha View tidak sekedar hunian. Anda akan menikmati suasana resort setiap hari, menciptakan nuansa liburan menyenangkan bagi anda dan keluarga.</p>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4 reveal active animate-fadeIn" style={{ transitionDelay: '200ms' }}>
              <div className="pt-12">
                <img 
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEhx_bG6z9u0-LeqowlBeKUsukvcNxbrQgMZTWyX0g6SfMOOvXETjuaQ9fLB5eSfKbhzpG2H3voluAyq4bVZhF3avD8-Q1dT1K9uw13QKb_cToOXIo5RA3uDVf70JYlP0G5GTcbvXnBJTOkadTNDpZ3lMIIXCFH8cmUJ2wvc-p3pmiK4eeIFt_d4xQeWklhzYoOyq02TZ43Ua8fPCzBODjOrQQYQ9YxPySEJPcb9PoHXNaNV-WvLq_4w5v6jvQjKC23SEzGXDi4A" 
                  alt="Resort Infinity Pool"
                />
              </div>
              <div>
                <img 
                  className="rounded-xl shadow-lg w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBttLnkKWxDuAuwfTehJi0QToKhH4_kklLQtQGAAjqLUbhnU9CjZ2kFqXmxA9XyyVl8rBE5Im19cnsxyXRioQ3UYIR3e9EOruIbDcTQgLZiBZ_SOpQD-HSb5ESvwBXwcdH2IjKgJPlCoX63Y412WOckAcwV011YtKT4tKjWlGS07KjuSO1onbx0K8yU-SfkC_Nwtqb438Kkl5NWMNkL0yZu3ywf14XeQIlmdh20i5ut5tsZtg38QadCg8y_umF2tNBrx98Sjq-ovw" 
                  alt="Minimalist Lobby"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Investment Values (Bento Grid) */}
        <section className="bg-surface-container py-section-gap">
          <div className="max-w-container-max mx-auto px-margin-desktop">
            <div className="text-center mb-16 reveal active">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Investasi Aman &amp; Menguntungkan</h2>
              <p className="font-body-md text-on-surface-variant">Keunggulan Amartha View bagi Anda yang mengutamakan kualitas dan kepastian.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-surface p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 group reveal active">
                <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">key</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Siap Huni</h3>
                <p className="font-body-md text-on-surface-variant">Unit telah tersedia dan siap untuk segera Anda tempati. Tak perlu menunggu lama untuk menikmati kemewahan hunian impian Anda.</p>
              </div>
              {/* Value 2 */}
              <div className="bg-surface p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 group reveal active" style={{ transitionDelay: '150ms' }}>
                <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">payments</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Siap Sewa</h3>
                <p className="font-body-md text-on-surface-variant">Potensi passive income tinggi dengan okupansi yang terjaga. Terletak di area strategis Semarang Barat yang terus berkembang pesat.</p>
              </div>
              {/* Value 3 */}
              <div className="bg-surface p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/40 transition-all duration-300 group reveal active" style={{ transitionDelay: '300ms' }}>
                <div className="w-14 h-14 bg-primary-fixed flex items-center justify-center rounded-xl mb-8 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-white text-3xl">shield_with_house</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">Zona Aman Berinvestasi</h3>
                <p className="font-body-md text-on-surface-variant">Jaminan keamanan investasi di bawah naungan PT PP Properti Tbk (BUMN). Kepastian legalitas dan keberlanjutan properti jangka panjang.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-section-gap relative overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-desktop text-center reveal active">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-8">format_quote</span>
            <p className="font-quote-serif text-quote-serif text-primary italic max-w-4xl mx-auto mb-10">
              "Kami tidak hanya membangun gedung, kami menciptakan sebuah ekosistem dimana kenyamanan hunian dan ketenangan resort menyatu dalam harmoni yang sempurna."
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-outline-variant"></div>
              <span className="font-label-sm uppercase tracking-widest text-on-surface-variant">PT PP Properti Tbk</span>
              <div className="w-12 h-px bg-outline-variant"></div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-section-gap reveal active">
          <div className="bg-primary p-12 md:p-20 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 z-0 opacity-20">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVLOIw_wPDporDPoHrZ0FNUSu_-YxOzoEPzaQsnPQhvaNsrzNiwTbg0_twiOsfzGe3-KvEg_-My36og7_c9wY77KnN48qBZHOdSxqaVp6v4GEtItiyTTZMC3OMR2ERH-Jn6_40yKe7_JoEcjZxpHVjEmfp1uJgOHrle-Q3ywpVRJ5EXyqhZbThhus1C7t-Jivx39JA6qfVS-GdzQLiHtTh_nq6rEpaAP9d-8sY1dSCjOMagw_1KC1ghF3ld-5m3QYWZtMIbww0DQ" 
                alt="Exterior Night View"
              />
            </div>
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="font-headline-lg text-headline-lg text-white mb-6">Wujudkan Hunian Impian Anda Sekarang</h2>
              <p className="text-on-primary-container font-body-md mb-10">Dapatkan penawaran eksklusif dan tour unit pribadi bersama konsultan properti kami.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 w-full sm:w-auto cursor-pointer">Hubungi Kami</button>
                <button className="border border-white/30 text-white px-10 py-4 rounded-xl font-label-sm uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 w-full sm:w-auto cursor-pointer">Download Brochure</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
