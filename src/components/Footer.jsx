import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container dark:bg-inverse-surface w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-desktop py-section-gap">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <Link className="font-headline-lg text-headline-lg font-light tracking-widest text-primary dark:text-primary-fixed-dim" to="/">
            AMARTHA VIEW
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container max-w-sm">
            Apartemen berkonsep resort persembahan PT PP Properti Tbk yang mengutamakan harmoni antara hunian modern dan ketenangan alam.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
            <a className="w-10 h-10 rounded-full border border-outline/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="font-label-sm uppercase tracking-widest text-primary">Quick Links</h5>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container">
            <li><Link className="hover:text-primary transition-colors" to="/">Home</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/fasilitas">Facilities</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/tipe-unit">Unit Types</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="font-label-sm uppercase tracking-widest text-primary">Legal</h5>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container">
            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-outline-variant/30 py-8">
        <div className="max-w-container-max mx-auto px-margin-desktop text-center">
          <p className="font-body-md text-body-md text-on-surface-variant">© 2024 Amartha View Luxury Residence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
