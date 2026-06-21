import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-inverse-surface w-full">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Brand & Logo */}
          <div className="md:col-span-6 space-y-6">
            <Link to="/" className="inline-block transition-transform hover:scale-[1.02] active:scale-[0.98]">
              <img 
                src="/images/logo.png" 
                alt="Amartha View Logo" 
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container max-w-md leading-relaxed">
              Apartemen berkonsep resort persembahan PT PP Properti Tbk yang mengutamakan harmoni antara hunian modern dan ketenangan alam.
            </p>
          </div>

          {/* Middle Column: Quick Links */}
          <div className="md:col-span-3 space-y-6 md:pl-8">
            <h5 className="font-label-sm uppercase tracking-widest text-primary font-bold text-[14px]">
              QUICK LINKS
            </h5>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container">
              <li>
                <Link className="hover:text-primary transition-colors duration-300 block py-0.5" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-300 block py-0.5" to="/fasilitas">
                  Facilities
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-300 block py-0.5" to="/tipe-unit">
                  Unit Types
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors duration-300 block py-0.5" to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Column: Contact */}
          <div className="md:col-span-3 space-y-6">
            <h5 className="font-label-sm uppercase tracking-widest text-primary font-bold text-[14px]">
              CONTACT
            </h5>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant dark:text-on-tertiary-container">
              <li>
                <a 
                  className="flex items-center gap-3 hover:text-primary transition-colors duration-300 py-0.5" 
                  href="https://wa.me/6287894473388" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.275-3.844l.366.217c1.558.928 3.347 1.417 5.168 1.419 5.736.002 10.402-4.666 10.405-10.41.002-2.783-1.08-5.399-3.046-7.368C17.159 2.046 14.549 9.66 11.766 9.66c-5.738 0-10.406 4.667-10.41 10.413-.001 1.84.489 3.639 1.42 5.197l.239.397L1.93 22.09l1.692.443c1.517.397 2.668-2.377 2.71-2.377zm11.385-4.654c-.312-.156-1.85-.913-2.138-1.018-.288-.105-.497-.156-.706.156-.209.312-.807 1.018-.989 1.226-.182.208-.364.234-.676.078-.312-.156-1.318-.486-2.51-1.549-.928-.827-1.554-1.849-1.737-2.161-.182-.312-.02-.481.136-.636.141-.14.312-.364.469-.546.156-.182.208-.312.312-.52.105-.208.052-.39-.026-.546-.078-.156-.706-1.7-.967-2.327-.254-.61-.513-.526-.706-.536-.182-.01-.39-.011-.598-.011-.208 0-.546.078-.832.39-.286.312-1.092 1.066-1.092 2.6 0 1.534 1.118 3.016 1.274 3.224.156.208 2.2 3.36 5.33 4.716.745.322 1.325.515 1.78.659.749.238 1.431.205 1.97.124.601-.09 1.85-.756 2.11-1.455.26-.699.26-1.3.182-1.455-.078-.156-.286-.247-.598-.403z"/>
                  </svg>
                  <span>Whats App</span>
                </a>
              </li>
              <li>
                <a 
                  className="flex items-center gap-3 hover:text-primary transition-colors duration-300 py-0.5" 
                  href="https://instagram.com/amarthaview" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                  </svg>
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a 
                  className="flex items-center gap-3 hover:text-primary transition-colors duration-300 py-0.5" 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a 
                  className="flex items-center gap-3 hover:text-primary transition-colors duration-300 py-0.5" 
                  href="mailto:info@amarthaview.com"
                >
                  <svg className="w-5 h-5 transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <path d="M22 6l-10 7L2 6"/>
                  </svg>
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Line: Copyright */}
        <div className="mt-16 text-center">
          <p className="font-body-md text-body-md text-primary font-medium">
            © 2024 Amartha View Apartment. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
