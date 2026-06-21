import React from 'react';

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim.');
  };

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0 stagger-in">
          <img 
            alt="Amartha View Resort Apartment Hero" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDR07W1OmSFf7J8VxNSJryasmfXDgj8oqJtom9xrbga99HWurYBWIRncIkR-Ri8l2rDrG_06QccumUgx0R2LuZ2dgc5XBsE7cS7pFO98QndU2dS6MSP-0d1bh5KKSW21Dlw6ZQxwgh-bi7nZOl_wQE8g3gK5Khz6wfAo925JPDiidRYpu-NAAlz1wqfpQf9KH-FH_0cLWb7lfpETGq98KAoQ2kZHUsiaq-DVimfX29v2f7xy_CskUlcEhkGTSTExasWHmELKw46Qw" 
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop w-full stagger-in">
          <div className="max-w-2xl text-on-primary-fixed-variant space-y-8 stagger-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 bg-secondary-fixed/30 text-on-secondary-fixed font-label-sm uppercase tracking-[0.2em] border border-secondary-fixed">
                Resort Living
              </span>
              <h1 className="font-headline-xl text-headline-xl text-white leading-tight">
                APARTEMEN BERKONSEP <br /> RESORT SIAP HUNI
              </h1>
              <p className="font-headline-md text-headline-md text-white/90 font-light italic">
                NIKMATI hunian dengan PEMANDANGAN yang memukau
              </p>
              <p className="font-body-lg text-body-lg text-white/80 max-w-lg leading-relaxed">
                Amartha View adalah apartemen berkonsep resort strategis karya PT PP Properti Tbk, menghadirkan harmoni alam dan kemewahan modern di tengah kota Semarang.
              </p>
            </div>
            <div className="flex gap-4">
              <a className="bg-white text-primary px-10 py-4 font-label-sm uppercase tracking-[0.15em] font-bold hover:bg-secondary-fixed transition-colors" href="#about">
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-gap bg-surface" id="about">
        <div className="max-w-container-max mx-auto px-margin-desktop stagger-in">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed/20 z-0"></div>
              <div className="relative z-10 aspect-[4/5] overflow-hidden">
                <img 
                  alt="Amartha View Exterior Architecture" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzaztzbCKQsFofQPd8EF7Ehtu0L8tbdgL-AElCvLSr5IsN7aj4XuCl3UyMGTIKbfBYXnx0DorUmYtbkeAsMH2KeHzJsVYRisvMFO_lD8IB0ubMxYwK17bmqNHX05bJoV3dOe5GO3wqBAbjcGyj_YwxW0AE-kc3eRaksJR5-kccmhwYdSuDzRncYxur11xY-kF09QLBGbliajlKcb8vlj5XxQtAC2e0hpz4p6MbrPN640W0SI_vzjzMHWXtGetl_2OONEmZWfy9Xg" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary-container text-white p-8 max-w-xs shadow-xl">
                <p className="font-headline-md text-headline-md mb-2">800 Units</p>
                <p className="font-body-md text-body-md opacity-80">Premium living spaces designed across 4 exclusive unit types in Ngaliyan.</p>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="font-headline-xl text-headline-xl text-primary leading-tight">
                  APARTEMEN KONSEP RESORT PERTAMA DI SEMARANG BARAT
                </h2>
                <div className="w-20 h-1 bg-secondary-fixed"></div>
              </div>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p className="font-body-lg text-body-lg">
                  Amartha View merupakan persembahan dari PT PP Properti Tbk yang membawa visi baru dalam hunian vertikal. Kami menggabungkan kenyamanan apartemen modern dengan kemewahan fasilitas hotel dan suasana tenang resort.
                </p>
                <p className="font-body-md text-body-md">
                  Berlokasi strategis di Ngaliyan, Semarang Barat, proyek ini berdiri di atas lahan yang didesain untuk memaksimalkan sirkulasi udara alami dan pencahayaan matahari, menciptakan lingkungan yang sehat dan menyegarkan bagi setiap penghuni.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <span className="material-symbols-outlined text-primary text-4xl">corporate_fare</span>
                  <p className="font-label-sm uppercase tracking-widest text-primary">Developer</p>
                  <p className="font-body-md font-semibold">PT PP Properti Tbk</p>
                </div>
                <div className="space-y-2">
                  <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                  <p className="font-label-sm uppercase tracking-widest text-primary">Location</p>
                  <p className="font-body-md font-semibold">Ngaliyan, Semarang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="relative py-section-gap overflow-hidden" id="facilities">
        <div className="absolute inset-0 z-0 stagger-in">
          <img 
            alt="Amartha View Luxury Facilities" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTB0WrI2baYii1Tlx2Isy05nY0dB8T2GIJ8eBt0GIKyL9HOLUuzwidk0NMG-VJGaeEAmZ8mqejrwsF_PVH76bBpVo845-kmLkH0oRnZocapJzUuxbdABIUmgWr4pG59Y_GPCv5pddBlOz3nIsG713ntfDbcY-Uq6izlG3q468vKDoJrJH0UnpIB6jeHkharvY56yU4de41a5_UniwIlTU_8nl0iQTeMNT4BGkGu4f_6g1T1FjuwUXdRocCo2_iVVufJrh_nUJwI6Hv" 
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-desktop text-center stagger-in">
          <div className="max-w-3xl mx-auto space-y-6 text-white mb-16">
            <h2 className="font-headline-xl text-headline-xl">ENJOY YOUR HOLIDAY EVERYDAY</h2>
            <p className="font-body-lg text-body-lg opacity-90">
              Fasilitas bergaya resort kami dirancang khusus untuk memberikan relaksasi maksimal setiap kali Anda melangkah keluar dari unit Anda.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface/10 backdrop-blur-md p-10 border border-white/20 hover:bg-surface/20 transition-all group">
              <span className="material-symbols-outlined text-white text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">pool</span>
              <h4 className="font-headline-md text-headline-md text-white mb-4">Infinity Pool</h4>
              <p className="text-white/80 font-body-md">Berenang dengan pemandangan cakrawala kota Semarang yang memukau.</p>
            </div>
            <div className="bg-surface/10 backdrop-blur-md p-10 border border-white/20 hover:bg-surface/20 transition-all group">
              <span className="material-symbols-outlined text-white text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">park</span>
              <h4 className="font-headline-md text-headline-md text-white mb-4">Zen Garden</h4>
              <p className="text-white/80 font-body-md">Taman meditasi yang tenang untuk melepas penat setelah seharian beraktivitas.</p>
            </div>
            <div className="bg-surface/10 backdrop-blur-md p-10 border border-white/20 hover:bg-surface/20 transition-all group">
              <span className="material-symbols-outlined text-white text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">fitness_center</span>
              <h4 className="font-headline-md text-headline-md text-white mb-4">Sky Gym</h4>
              <p className="text-white/80 font-body-md">Pusat kebugaran modern dengan peralatan lengkap dan udara segar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unit Types Section */}
      <section className="py-section-gap bg-surface-container-low" id="units">
        <div className="max-w-container-max mx-auto px-margin-desktop stagger-in">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-headline-xl text-headline-xl text-primary">TIPE UNIT EKSKLUSIF</h2>
            <p className="text-on-surface-variant font-body-lg">Pilih hunian yang paling sesuai dengan gaya hidup Anda.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Unit Card 1 */}
            <div className="bg-surface flex flex-col group card-shadow transition-all duration-500">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  alt="1 Bedroom Unit Type" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDa1tdb-WEx96eGKepwVz4nBwLE76nXEy7fr6z9gd61T5cXOH0Eo8uyFSrsKav9ibxHjnCJZyZkQW5fLhzbsvbmOi0i9uQUoR8Y9VTdzr7tCqUobItO2R4y-kOK07dKtpohBJQfo9oH1xtfKihMPtmZtksovpdsKtU7UW20fNxqNn2YRWQJRcTG73SgKVss7dKpnTysvngK3gJ5pmGgEnJI_udibc8g0gLKFjNu0SwgBU_Zo5N_LGlFpNX3we7Mgko9cuchJoIxQ" 
                />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 font-label-sm uppercase tracking-widest">Featured</div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-primary">1 BEDROOM</h3>
                    <p className="text-on-surface-variant font-body-md">Perfect for Young Professionals</p>
                  </div>
                  <div className="text-right">
                    <p className="font-label-sm text-primary uppercase">Area Size</p>
                    <p className="font-headline-md text-headline-md">22 - 24 m² SGA</p>
                  </div>
                </div>
                <div className="w-full h-px bg-outline-variant/30"></div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">bed</span>
                      <span className="text-xs uppercase tracking-tighter">1 Bed</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">bathtub</span>
                      <span className="text-xs uppercase tracking-tighter">1 Bath</span>
                    </div>
                  </div>
                  <button className="border border-primary text-primary px-6 py-2 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined">360</span> Tour 360 View
                  </button>
                </div>
              </div>
            </div>

            {/* Unit Card 2 */}
            <div className="bg-surface flex flex-col group card-shadow transition-all duration-500">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  alt="2 Bedroom Unit Type" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJOocJaUaW_F-PeqhPiLKXI7kapLN47M2dncjuaEAIlUHJL0tXu3B6XOVc1is1jSd3a6uchD7_qXTB6jGqOzTQAcjfPjHgfd4Hmm9D-KdXYv42Wsfo_llU0SGZxL_pTVTWEjx9-s9bYg7CpzCVusZhcNJ2VV6pGwjMOmnvXkmtga_Ll9wF4oKgp-xdvjlRFN5jhhlHIksuhhw8DqdFn84MiNFwhVyDa3zg_ASS7uwM-wogUfOA7YweYjVMcTdQbhhaBqixabygFQ" 
                />
                <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 font-label-sm uppercase tracking-widest">Family Choice</div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="font-headline-lg text-headline-lg text-primary">2 BEDROOM</h3>
                    <p className="text-on-surface-variant font-body-md">Spacious Modern Sanctuary</p>
                  </div>
                  <div className="text-right">
                    <p className="font-label-sm text-primary uppercase">Area Size</p>
                    <p className="font-headline-md text-headline-md">36 - 44 m² SGA</p>
                  </div>
                </div>
                <div className="w-full h-px bg-outline-variant/30"></div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">bed</span>
                      <span className="text-xs uppercase tracking-tighter">2 Bed</span>
                    </div>
                    <div className="flex items-center gap-2 text-on-surface-variant">
                      <span className="material-symbols-outlined text-sm">bathtub</span>
                      <span className="text-xs uppercase tracking-tighter">2 Bath</span>
                    </div>
                  </div>
                  <button className="border border-primary text-primary px-6 py-2 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                    <span className="material-symbols-outlined">360</span> Tour 360 View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-section-gap bg-surface" id="contact">
        <div className="max-w-container-max mx-auto px-margin-desktop stagger-in">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 className="font-headline-xl text-headline-xl text-primary">GET IN TOUCH</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">Kunjungi show unit kami atau hubungi tim marketing kami untuk informasi lebih lanjut.</p>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-primary-fixed p-4">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-1" style={{ color: 'rgb(104, 60, 28)' }}>
                      Marketing Gallery
                    </h4>
                    <p className="text-on-surface-variant">Permata Puri, Ngaliyan, Semarang Barat, Jawa Tengah 50181</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-primary-fixed p-4">
                    <span className="material-symbols-outlined text-primary">phone_in_talk</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-1">Contact Phone</h4>
                    <p className="text-on-surface-variant font-headline-md text-headline-md">+62 24 762 8569</p>
                    <p className="text-on-surface-variant">Senin - Minggu: 09.00 - 18.00 WIB</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-primary-fixed p-4">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-1">General Inquiries</h4>
                    <p className="text-on-surface-variant">info@amarthaview.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] bg-surface-container-high overflow-hidden shadow-2xl">
              <div className="absolute inset-0 pointer-events-none z-10 border-[16px] border-surface"></div>
              <img 
                alt="Location Map of Amartha View" 
                className="w-full h-full object-cover grayscale opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIF7h69MXJhfBNiPA2jxgC9SD2Bw5_fdmev-ZjxMe7cvKt-6y0VhhRF5kdhVQGI6aQDQxF0qH3JunsYJqDyARgAA7ODbMKadpD3ik-b0XmcPlpXqFOPjMrMq8OO-nySAG0agrKPuUeD24O1cMGeHcAgBQL2XGVSEMMNI2dmZak8JVd-usjrqhrnSRKwy9KS2zno1b1h7zpQM6RZFPaOELDEQA9o_dD5NZqaGdglhhIUVpfxcqVH3cbMGET2dKHQCCn6er4Ttoksg" 
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center animate-bounce shadow-xl">
                  <span className="material-symbols-outlined text-white">pin_drop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-section-gap bg-surface-container-low" id="promotion">
        <div className="max-w-4xl mx-auto px-margin-desktop stagger-in">
          <div className="bg-surface p-10 md:p-16 shadow-xl stagger-in">
            <div className="text-center mb-10 space-y-4">
              <h2 className="font-headline-xl text-headline-xl text-primary leading-tight">DAPATKAN PROMO MENARIK</h2>
              <p className="font-body-lg text-on-surface-variant">Tinggalkan detail kontak Anda dan tim kami akan segera menghubungi Anda dengan penawaran eksklusif.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block font-label-sm text-primary uppercase tracking-widest mb-2">Nama Lengkap</label>
                  <input required className="w-full bg-surface-container-low border-b-2 border-outline/30 focus:border-primary outline-none py-3 px-4 transition-all" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block font-label-sm text-primary uppercase tracking-widest mb-2">Email</label>
                  <input required className="w-full bg-surface-container-low border-b-2 border-outline/30 focus:border-primary outline-none py-3 px-4 transition-all" placeholder="email@example.com" type="email" />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-label-sm text-primary uppercase tracking-widest mb-2">Pesan</label>
                  <textarea required className="w-full bg-surface-container-low border-b-2 border-outline/30 focus:border-primary outline-none py-3 px-4 transition-all h-[134px]" placeholder="Saya tertarik dengan unit..."></textarea>
                </div>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full bg-primary text-on-primary py-5 font-label-sm uppercase tracking-[0.2em] font-bold hover:brightness-110 transition-all shadow-lg active:scale-[0.98] cursor-pointer">
                  Kirim Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
