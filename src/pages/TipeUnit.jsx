import React from 'react';

export default function TipeUnit() {
  return (
    <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden pt-20">
      <main className="pt-8 md:pt-16">
        {/* Hero Section / Title */}
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop mb-12 md:mb-16">
          <div className="max-w-3xl text-center md:text-left">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.2em] mb-4 block">Pilihan Hunian</span>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-6">Tipe Unit &amp; Denah</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Setiap unit di Amartha View dirancang dengan estetika modern yang hangat, memaksimalkan cahaya alami dan sirkulasi udara untuk kenyamanan hidup yang maksimal.</p>
          </div>
        </section>

        {/* Unit Types Grid */}
        <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop space-y-16 md:space-y-section-gap pb-16 md:pb-section-gap">
          {/* 1 Bedroom Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 group overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
              <div className="relative aspect-[4/3] md:aspect-[1.34] overflow-hidden">
                <img 
                  alt="1 Bedroom interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsGwRD-NRPTHTJKs8vdAtgB4ljKx6_6SjmsGxoIZAZqakzPeTGIzimjmcrfmYbLiZVKYcrXKjJ3ByZpBqJ7HRJRDi4Flu7JhatfDIPI-9LOr9khcSpVbe_EcCx1Ytgbs7U1jScZdB1qv34-h5DM30UBe8zAIj_phI_vuKASVhcV5XPWcmADEy6Nhv0s7jaHOJRYWxtypKd86AFzCTqRPVvr1h2AYnuKIvRI7K_DbISHVXnYqbc-Q1PoDg" 
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
              </div>
            </div>
            <div className="md:col-span-5 md:pl-12 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <span className="material-symbols-outlined text-xl">bed</span>
                <span className="font-label-sm text-label-sm tracking-widest uppercase">Signature Collection</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">1 Bedroom</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed max-w-lg md:max-w-none">
                Tersedia 2 pilihan tipe ruangan 1 Bedroom dengan luasan 22 m2 SGA, dan 1 Bedroom + luasan 24 m2 SGA. Ideal untuk profesional muda yang menghargai privasi dan fungsionalitas dalam balutan kemewahan resort.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="flex items-center justify-center gap-3 bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase transition-all hover:bg-on-surface-variant active:scale-95 shadow-md cursor-pointer">
                  <span className="material-symbols-outlined">360</span>
                  Tour 360 View
                </button>
                <button className="flex items-center justify-center gap-3 border border-outline text-primary font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase transition-all hover:bg-surface-container-high active:scale-95 cursor-pointer">
                  <span className="material-symbols-outlined">download</span>
                  Brochure
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-outline-variant/50 to-transparent"></div>

          {/* 2 Bedroom Section (Asymmetrical Flip) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 md:pr-12 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
              <div className="inline-flex items-center gap-2 text-primary mb-4">
                <span className="material-symbols-outlined text-xl">family_restroom</span>
                <span className="font-label-sm text-label-sm tracking-widest uppercase">Family Living</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg mb-4 text-primary">2 Bedroom</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed max-w-lg md:max-w-none">
                Tersedia 2 pilihan tipe ruangan 2 Bedroom dengan luasan 36 m2 SGA, dan 2 Bedroom + luasan 44 m2 SGA. Ruang yang lebih luas untuk momen berharga bersama keluarga, dilengkapi dengan balkon privat yang menyuguhkan pemandangan asri.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button className="flex items-center justify-center gap-3 bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase transition-all hover:bg-on-surface-variant active:scale-95 shadow-md cursor-pointer">
                  <span className="material-symbols-outlined">360</span>
                  Tour 360 View
                </button>
                <button className="flex items-center justify-center gap-3 border border-outline text-primary font-label-sm text-label-sm px-8 py-4 rounded-lg uppercase transition-all hover:bg-surface-container-high active:scale-95 cursor-pointer">
                  <span className="material-symbols-outlined">download</span>
                  Brochure
                </button>
              </div>
            </div>
            <div className="md:col-span-7 group overflow-hidden rounded-xl bg-surface-container-low shadow-sm order-1 md:order-2">
              <div className="relative aspect-[4/3] md:aspect-[1.34] overflow-hidden">
                <img 
                  alt="2 Bedroom interior" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida/AP1WRLuy2UbaHMF1bJ_H4qmd0u58wktWAQxxwyf0v7dn6N_BexfPTIju_aN04uYhRPT8EjPAkq8p8gMwf9rlB_efKRoE2gkUTJKd_ltJ0UY-PitXW_jM05JsZC-WUmibPIEDNThQqizros6jItD8Z_YKPOD0XHb8vsjefnjGTqJSTAaJib6y5xnKDBhN9U6RJTVrCv2F4bVw5ki60w3vKUZ0aag-NShFc-4zTc0NOXJU3C82lDi8a1XU1loYOw" 
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0"></div>
              </div>
            </div>
          </div>

          {/* Feature Highlights (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 md:pt-16">
            <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors flex flex-col items-center text-center md:items-start md:text-left">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">high_quality</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Premium Materials</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Lantai marmer impor dan perangkat sanitasi ternama melengkapi setiap sudut ruangan.</p>
            </div>
            <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors flex flex-col items-center text-center md:items-start md:text-left">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">wb_sunny</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Natural Lighting</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Jendela setinggi langit-langit memastikan cahaya matahari masuk secara optimal ke seluruh ruangan.</p>
            </div>
            <div className="bg-surface-container-low p-8 md:p-10 rounded-2xl border border-outline-variant/30 hover:border-primary/30 transition-colors flex flex-col items-center text-center md:items-start md:text-left sm:col-span-2 md:col-span-1">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">smartphone</span>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Smart Home System</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Kendali pencahayaan dan suhu ruangan hanya dengan satu sentuhan jari melalui ponsel Anda.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="relative min-h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden py-20 px-6 bg-cover bg-center" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(104, 60, 28, 0.6), rgba(104, 60, 28, 0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuChPlpjt9OiWFhuLZ3eqUef-3a4hqUQhUM6zHB2yGyDtlR_cMvE4thswB69BTonGIKFAJU273dcJIyxCslIZlDj4em-XoY5sMSAxNF2T1LhfXr0cB1Rcq6X_sQOWhYEq12nlVxSLqQPk-L4cCnp7drYBwMHUZTNRi_qwFeoBPrvbeNX0jyI3MwSRsEy_uH76P5hCEXHyCQGNnteGwD3xKmbkdvC-GGxj7ixo0eEW6q7w1UQO2vDD71tHRa4uge8aMjcP7j3jskeSA')` 
          }}
        >
          <div className="relative z-10 text-center">
            <h2 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-primary mb-8 max-w-4xl mx-auto px-4">Rasakan Kehidupan Modern yang Berpadu dengan Ketenangan Alam.</h2>
            <button className="bg-white text-primary font-label-sm text-label-sm px-10 md:px-12 py-4 md:py-5 rounded-lg uppercase tracking-widest hover:bg-primary-fixed-dim transition-all shadow-xl active:scale-95 cursor-pointer">
              Hubungi Sales Kami
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
