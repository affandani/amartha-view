import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const text = `Halo Amartha View, saya ${name}.\nEmail: ${email}\nTertarik dengan promo:\n${message}`;
    const url = `https://wa.me/6287894473388?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-surface">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Amartha View Resort Apartment Hero" 
            className="w-full h-full object-cover animate-fadeIn duration-1000" 
            src="/images/home/home1.jpg" 
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <ScrollReveal delay={100} translateY="translate-y-4">
            <div className="max-w-2xl text-on-primary-fixed-variant space-y-8">
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
                <a className="bg-white text-primary px-10 py-4 font-label-sm uppercase tracking-[0.15em] font-bold hover:bg-secondary-fixed hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md inline-block text-center" href="#about">
                  Explore
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section className="py-section-gap bg-surface" id="about">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            
            <ScrollReveal delay={0}>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary-fixed/20 z-0"></div>
                <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                  <img 
                    alt="Amartha View Exterior Architecture" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-102" 
                    src="/images/home/home2.jpg" 
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-primary-container text-white p-8 max-w-xs shadow-xl rounded-lg">
                  <p className="font-headline-md text-headline-md mb-2">800 Units</p>
                  <p className="font-body-md text-body-md opacity-80">Premium living spaces designed across 4 exclusive unit types in Ngaliyan.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
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
                <div className="grid grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2">
                    <span className="material-symbols-outlined text-primary text-4xl">corporate_fare</span>
                    <p className="font-label-sm uppercase tracking-widest text-primary">Developer</p>
                    <p className="font-body-md font-semibold text-on-surface">PT PP Properti Tbk</p>
                  </div>
                  <div className="space-y-2">
                    <span className="material-symbols-outlined text-primary text-4xl">location_on</span>
                    <p className="font-label-sm uppercase tracking-widest text-primary">Location</p>
                    <p className="font-body-md font-semibold text-on-surface">Ngaliyan, Semarang</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="relative py-section-gap overflow-hidden" id="facilities">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Amartha View Luxury Facilities" 
            className="w-full h-full object-cover" 
            src="/images/home/home3.jpg" 
          />
          <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px]"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
          
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-6 text-white mb-16">
              <h2 className="font-headline-xl text-headline-xl">ENJOY YOUR HOLIDAY EVERYDAY</h2>
              <p className="font-body-lg text-body-lg opacity-90">
                Fasilitas bergaya resort kami dirancang khusus untuk memberikan relaksasi maksimal setiap kali Anda melangkah keluar dari unit Anda.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal delay={0}>
              <div className="bg-surface/10 backdrop-blur-md p-10 border border-white/20 hover:bg-surface/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out group h-full rounded-lg">
                <span className="material-symbols-outlined text-white text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">pool</span>
                <h4 className="font-headline-md text-headline-md text-white mb-4">Infinity Pool</h4>
                <p className="text-white/80 font-body-md">Berenang dengan pemandangan cakrawala kota Semarang yang memukau.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="bg-surface/10 backdrop-blur-md p-10 border border-white/20 hover:bg-surface/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out group h-full rounded-lg">
                <span className="material-symbols-outlined text-white text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">park</span>
                <h4 className="font-headline-md text-headline-md text-white mb-4">Zen Garden</h4>
                <p className="text-white/80 font-body-md">Taman meditasi yang tenang untuk melepas penat setelah seharian beraktivitas.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="bg-surface/10 backdrop-blur-md p-10 border border-white/20 hover:bg-surface/20 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-500 ease-out group h-full rounded-lg">
                <span className="material-symbols-outlined text-white text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">fitness_center</span>
                <h4 className="font-headline-md text-headline-md text-white mb-4">Sky Gym</h4>
                <p className="text-white/80 font-body-md">Pusat kebugaran modern dengan peralatan lengkap dan udara segar.</p>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Unit Types Section */}
      <section className="py-section-gap bg-surface-container-low" id="units">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          
          <ScrollReveal>
            <div className="text-center mb-20 space-y-4">
              <h2 className="font-headline-xl text-headline-xl text-primary font-bold">TIPE UNIT EKSKLUSIF</h2>
              <p className="text-on-surface-variant font-body-lg">Pilih hunian yang paling sesuai dengan gaya hidup Anda.</p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Unit Card 1 */}
            <ScrollReveal delay={0}>
              <div className="bg-surface flex flex-col group card-shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out rounded-xl overflow-hidden h-full">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    alt="1 Bedroom Unit Type" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="/images/home/home4.jpg" 
                  />
                  <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 font-label-sm uppercase tracking-widest rounded shadow-sm">Featured</div>
                </div>
                <div className="p-10 space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <h3 className="font-headline-lg text-headline-lg text-primary font-semibold">1 BEDROOM</h3>
                        <p className="text-on-surface-variant font-body-md">Perfect for Young Professionals</p>
                      </div>
                      <div className="text-right">
                        <p className="font-label-sm text-primary uppercase text-xs tracking-wider">Area Size</p>
                        <p className="font-headline-md text-headline-md font-semibold text-on-surface">22 - 24 m² SGA</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-outline-variant/30 mb-6"></div>
                  </div>
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
                    <button className="border border-primary text-primary px-6 py-2.5 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 rounded cursor-pointer">
                      <span className="material-symbols-outlined text-lg">360</span> Tour 360 View
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Unit Card 2 */}
            <ScrollReveal delay={150}>
              <div className="bg-surface flex flex-col group card-shadow hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 ease-out rounded-xl overflow-hidden h-full">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    alt="2 Bedroom Unit Type" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src="/images/home/home5.jpg" 
                  />
                  <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 font-label-sm uppercase tracking-widest rounded shadow-sm">Family Choice</div>
                </div>
                <div className="p-10 space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-end mb-6">
                      <div>
                        <h3 className="font-headline-lg text-headline-lg text-primary font-semibold">2 BEDROOM</h3>
                        <p className="text-on-surface-variant font-body-md">Spacious Modern Sanctuary</p>
                      </div>
                      <div className="text-right">
                        <p className="font-label-sm text-primary uppercase text-xs tracking-wider">Area Size</p>
                        <p className="font-headline-md text-headline-md font-semibold text-on-surface">36 - 44 m² SGA</p>
                      </div>
                    </div>
                    <div className="w-full h-px bg-outline-variant/30 mb-6"></div>
                  </div>
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
                    <button className="border border-primary text-primary px-6 py-2.5 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 rounded cursor-pointer">
                      <span className="material-symbols-outlined text-lg">360</span> Tour 360 View
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-section-gap bg-surface" id="contact">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <ScrollReveal>
              <div className="space-y-12">
                <div className="space-y-4">
                  <h2 className="font-headline-xl text-headline-xl text-primary font-bold">GET IN TOUCH</h2>
                  <p className="font-body-lg text-body-lg text-on-surface-variant">Kunjungi show unit kami atau hubungi tim marketing kami untuk informasi lebih lanjut.</p>
                </div>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start transition-transform duration-300 hover:translate-x-1">
                    <div className="bg-primary-fixed p-4 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-primary">location_on</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-primary font-semibold mb-1" style={{ color: 'rgb(104, 60, 28)' }}>
                        Marketing Gallery
                      </h4>
                      <a 
                        href="https://maps.app.goo.gl/v661M8Dipx5dB2ZZ7?g_st=ic" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-on-surface-variant leading-relaxed hover:text-primary transition-colors"
                      >
                        Jl. Bukit barisan no. 57 Permata Puri, Ngaliyan Semarang, Indonesia
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start transition-transform duration-300 hover:translate-x-1">
                    <div className="bg-primary-fixed p-4 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-primary">phone_in_talk</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-primary font-semibold mb-1">Contact Phone / WhatsApp</h4>
                      <a 
                        href="https://wa.me/6287894473388" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-on-surface-variant font-headline-md text-headline-md font-bold mb-1 block hover:text-primary transition-colors"
                      >
                        +62 878 9447 3388
                      </a>
                      <p className="text-on-surface-variant text-sm">Senin - Minggu: 09.00 - 18.00 WIB</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start transition-transform duration-300 hover:translate-x-1">
                    <div className="bg-primary-fixed p-4 rounded-lg shadow-sm">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <h4 className="font-headline-md text-headline-md text-primary font-semibold mb-1">General Inquiries</h4>
                      <a 
                        href="mailto:info@amarthaview.com"
                        className="text-on-surface-variant font-semibold hover:text-primary transition-colors"
                      >
                        info@amarthaview.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="relative h-[500px] bg-surface-container-high overflow-hidden shadow-2xl rounded-2xl group">
                <div className="absolute inset-0 pointer-events-none z-10 border-[16px] border-surface rounded-2xl"></div>
                <img 
                  alt="Location Map of Amartha View" 
                  className="w-full h-full object-cover grayscale opacity-80 transition-transform duration-[1000ms] group-hover:scale-105" 
                  src="/images/home/home6.jpg" 
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center animate-bounce shadow-2xl border-4 border-white">
                    <span className="material-symbols-outlined text-white text-2xl font-bold">pin_drop</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Promotion Section */}
      <section className="py-section-gap bg-surface-container-low" id="promotion">
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <div className="bg-surface p-10 md:p-16 shadow-2xl rounded-3xl border border-outline-variant/20">
              <div className="text-center mb-10 space-y-4">
                <h2 className="font-headline-xl text-headline-xl text-primary font-bold leading-tight">DAPATKAN PROMO MENARIK</h2>
                <p className="font-body-lg text-on-surface-variant">Tinggalkan detail kontak Anda dan tim kami akan segera menghubungi Anda dengan penawaran eksklusif.</p>
              </div>
              <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <label className="block font-label-sm text-primary uppercase tracking-widest mb-2 font-semibold">Nama Lengkap</label>
                    <input 
                      name="name"
                      required 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 outline-none py-3.5 px-4 transition-all duration-300 rounded-t" 
                      placeholder="John Doe" 
                      type="text" 
                    />
                  </div>
                  <div>
                    <label className="block font-label-sm text-primary uppercase tracking-widest mb-2 font-semibold">Email</label>
                    <input 
                      name="email"
                      required 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 outline-none py-3.5 px-4 transition-all duration-300 rounded-t" 
                      placeholder="email@example.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block font-label-sm text-primary uppercase tracking-widest mb-2 font-semibold">Pesan</label>
                    <textarea 
                      name="message"
                      required 
                      className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:ring-0 outline-none py-3.5 px-4 transition-all duration-300 h-[134px] resize-none rounded-t" 
                      placeholder="Saya tertarik dengan unit..."
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <button 
                    type="submit" 
                    className="w-full bg-primary text-on-primary py-5 font-label-sm uppercase tracking-[0.2em] font-bold hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer rounded-lg"
                  >
                    Kirim Sekarang
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
