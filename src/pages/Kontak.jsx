import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

export default function Kontak() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');
    const text = `Halo Amartha View, saya ${name}.\nNo. HP: ${phone}\nEmail: ${email}\nPesan: ${message}`;
    const url = `https://wa.me/6287894473388?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const text = `Halo Amartha View, saya ingin mendaftarkan email saya (${email}) untuk mendapatkan penawaran eksklusif.`;
    const url = `https://wa.me/6287894473388?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed-dim selection:text-on-primary-fixed pt-20">
      <main className="mt-8">
        {/* Hero Section */}
        <section className="relative min-h-[400px] md:h-[614px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover" 
              src="/images/kontak/kontak1.jpg" 
              alt="Apartment Complex at dusk"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full py-12 md:py-0">
            <div className="max-w-2xl text-white">
              <ScrollReveal>
                <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl mb-4 md:mb-6">Hubungi Kami</h1>
                <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg opacity-90 leading-relaxed">
                  Apartemen Amartha View berada di komplek perumahan Permata Puri (Luas Lahan +/- 80 hektare) Ngaliyan, Semarang Barat. Kawasan yang tumbuh dan berkembang dengan sangat cepat.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Main Content: Contact Grid */}
        <section className="py-12 md:py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter">
            {/* Left: Contact Information */}
            <div className="lg:col-span-5 space-y-10 md:space-y-12">
              <ScrollReveal delay={100}>
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest block mb-4">Informasi Kontak</span>
                  <h2 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg mb-8">Kunjungi Show Unit Kami</h2>
                  <div className="space-y-8">
                    <div className="flex gap-4 md:gap-6 items-start hover:translate-x-1 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">location_on</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-headline-md text-primary mb-1 text-[18px]">Alamat</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">Jl. Bukit barisan no. 57 Permata Puri, Ngaliyan Semarang, Indonesia</p>
                      </div>
                    </div>
                    <div className="flex gap-4 md:gap-6 items-start hover:translate-x-1 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">call</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-headline-md text-primary mb-1 text-[18px]">Telepon / WhatsApp</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">+62 878 9447 3388</p>
                      </div>
                    </div>
                    <div className="flex gap-4 md:gap-6 items-start hover:translate-x-1 transition-transform duration-300">
                      <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-primary">mail</span>
                      </div>
                      <div>
                        <h4 className="font-headline-md text-headline-md text-primary mb-1 text-[18px]">Email</h4>
                        <p className="font-body-md text-body-md text-on-surface-variant">info@amarthaview.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="bg-surface-container p-6 md:p-8 rounded-xl border border-outline-variant/30">
                  <h3 className="font-headline-md text-headline-md mb-4 text-[20px]">Jam Operasional</h3>
                  <div className="space-y-3 font-body-md text-body-md text-on-surface-variant">
                    <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                      <span>Senin - Jumat</span>
                      <span className="font-semibold text-on-surface">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between border-b border-outline-variant/20 pb-2">
                      <span>Sabtu</span>
                      <span className="font-semibold text-on-surface">09:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Minggu / Hari Libur</span>
                      <span className="font-semibold text-on-surface">By Appointment</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={150}>
                <div className="bg-white p-6 md:p-12 shadow-sm border border-outline-variant/30 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 hidden md:block"></div>
                  <h3 className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg mb-8">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-6" id="contactForm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Nama Lengkap</label>
                        <input name="name" required className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:bg-surface-container/50 focus:ring-0 transition-all duration-300 py-4 px-3 font-body-md rounded-t outline-none" placeholder="Masukkan nama Anda" type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Nomor Telepon</label>
                        <input name="phone" required className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:bg-surface-container/50 focus:ring-0 transition-all duration-300 py-4 px-3 font-body-md rounded-t outline-none" placeholder="+62 812..." type="tel" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Email</label>
                      <input name="email" required className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:bg-surface-container/50 focus:ring-0 transition-all duration-300 py-4 px-3 font-body-md rounded-t outline-none" placeholder="email@contoh.com" type="email" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-sm text-label-sm text-on-surface-variant uppercase">Pesan</label>
                      <textarea name="message" required className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-primary focus:bg-surface-container/50 focus:ring-0 transition-all duration-300 py-4 px-3 font-body-md resize-none rounded-t outline-none" placeholder="Bagaimana kami bisa membantu Anda?" rows="4"></textarea>
                    </div>
                    <button className="w-full bg-primary text-on-primary py-4 md:py-5 font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary-container hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 ease-out touch-manipulation cursor-pointer rounded-lg font-semibold shadow-md" type="submit">
                      Kirim Pesan Sekarang
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Map & Location Details */}
        <section className="bg-surface-container-low py-12 md:py-section-gap overflow-hidden">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1">
                <ScrollReveal delay={100}>
                  <div className="rounded-2xl overflow-hidden shadow-xl h-[300px] md:h-[500px] relative map-container border-4 border-white">
                    <img 
                      className="w-full h-full object-cover" 
                      src="/images/kontak/kontak2.jpg" 
                      alt="Map Location"
                    />
                    <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-md flex flex-col gap-2">
                      <button className="material-symbols-outlined text-primary p-1 hover:bg-surface-container active:scale-90 transition-all cursor-pointer">zoom_in</button>
                      <button className="material-symbols-outlined text-primary p-1 hover:bg-surface-container active:scale-90 transition-all border-t border-outline-variant/20 cursor-pointer">zoom_out</button>
                    </div>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg flex items-center gap-2 md:gap-3 whitespace-nowrap">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                      <span className="font-body-md text-body-md font-semibold text-primary">Amartha View Location</span>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
              <div className="order-1 lg:order-2 space-y-6 md:space-y-8">
                <ScrollReveal delay={200}>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">Lokasi Strategis</span>
                  <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl leading-tight">Berada di Jantung Pertumbuhan Semarang Barat</h2>
                  <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed mb-6">
                    Nikmati kemudahan akses di kawasan Ngaliyan yang berkembang pesat. Dikelilingi oleh fasilitas pendidikan, pusat perbelanjaan, dan akses tol yang memudahkan mobilitas Anda setiap hari.
                  </p>
                  <div className="grid grid-cols-2 gap-6 md:gap-8 mb-8">
                    <div className="space-y-1">
                      <h5 className="font-headline-md text-headline-md text-primary text-[18px] md:text-[20px]">5 Menit</h5>
                      <p className="font-body-md text-body-md text-on-surface-variant">Pintu Tol Krapyak</p>
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-headline-md text-headline-md text-primary text-[18px] md:text-[20px]">10 Menit</h5>
                      <p className="font-body-md text-body-md text-on-surface-variant">Bandara A. Yani</p>
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-headline-md text-headline-md text-primary text-[18px] md:text-[20px]">3 Menit</h5>
                      <p className="font-body-md text-body-md text-on-surface-variant">RS Permata Medika</p>
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-headline-md text-headline-md text-primary text-[18px] md:text-[20px]">8 Menit</h5>
                      <p className="font-body-md text-body-md text-on-surface-variant">Pusat Belanja &amp; Kuliner</p>
                    </div>
                  </div>
                  <a href="https://maps.app.goo.gl/v661M8Dipx5dB2ZZ7?g_st=ic" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-primary font-label-sm text-label-sm uppercase tracking-widest group py-2 font-semibold">
                    Buka di Google Maps
                    <span className="material-symbols-outlined transition-transform group-hover:translate-x-2 duration-300">arrow_forward</span>
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-section-gap relative overflow-hidden bg-primary text-white">
          <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <ScrollReveal>
              <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-white mb-6 md:mb-8 font-semibold">Dapatkan Penawaran Eksklusif</h2>
              <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-white/80 max-w-2xl mx-auto mb-10 md:mb-12">
                Jadilah yang pertama tahu mengenai unit terbatas, promo spesial, dan update pembangunan Amartha View.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
                <input name="email" required className="flex-1 px-6 py-4 rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/20 focus:border-white/50 outline-none transition-all duration-300 font-body-md" placeholder="Email Anda" type="email" />
                <button type="submit" className="bg-secondary-container text-on-secondary-container px-8 py-4 font-label-sm text-label-sm uppercase tracking-widest font-bold hover:bg-secondary-container/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-in-out cursor-pointer rounded-lg">
                  Daftar
                </button>
              </form>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </div>
  );
}
