import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none border-b border-slate-200/30 font-['Inter'] antialiased tracking-tight">
      <nav className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto h-20">
        <Link to="/" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-slate-50 uppercase">
          Patrick R. Coyle
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link className="text-blue-700 dark:text-blue-400 hover:text-slate-900 transition-colors text-[11px] uppercase tracking-wider font-semibold" to="/">Home</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-colors text-[11px] uppercase tracking-wider font-semibold" to="/about">About</Link>
          <div className="group relative">
            <button className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-colors text-[11px] uppercase tracking-wider font-semibold">
              Services <span className="material-symbols-outlined text-[14px] ml-1">expand_more</span>
            </button>
            <div className="absolute left-0 mt-2 w-64 bg-surface-container-lowest border border-outline-variant shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-lg overflow-hidden">
              <Link className="block px-4 py-3 hover:bg-surface-container-low text-sm font-medium border-b border-outline-variant/30" to="/services/financial-navigation">Financial Navigation</Link>
              <Link className="block px-4 py-3 hover:bg-surface-container-low text-sm font-medium border-b border-outline-variant/30" to="/services/life-science-advisory">Life Science Advisory</Link>
              <Link className="block px-4 py-3 hover:bg-surface-container-low text-sm font-medium" to="/services/financial-transformation">Financial Transformation</Link>
            </div>
          </div>
          <div className="group relative">
            <button className="flex items-center text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-colors text-[11px] uppercase tracking-wider font-semibold">
              Training <span className="material-symbols-outlined text-[14px] ml-1">expand_more</span>
            </button>
            <div className="absolute left-0 mt-2 w-72 bg-surface-container-lowest border border-outline-variant shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 rounded-lg overflow-hidden">
              <Link className="block px-4 py-3 hover:bg-surface-container-low text-sm font-medium border-b border-outline-variant/30" to="/training/patients-profitability">Patients &amp; Profitability™</Link>
              <Link className="block px-4 py-3 hover:bg-surface-container-low text-sm font-medium border-b border-outline-variant/30" to="/training/rising">Rising as a Finance Leader™</Link>
              <Link className="block px-4 py-3 hover:bg-surface-container-low text-sm font-medium" to="/training/fundamentals">Finance Fundamentals for Leaders™</Link>
            </div>
          </div>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-colors text-[11px] uppercase tracking-wider font-semibold" to="/ebook">Ebook</Link>
          <Link className="text-slate-600 dark:text-slate-400 hover:text-slate-900 transition-colors text-[11px] uppercase tracking-wider font-semibold" to="/contact">Contact</Link>
        </div>
        <Link className="hidden md:flex bg-primary-container text-on-primary px-6 py-2.5 rounded-md text-[11px] uppercase tracking-widest font-bold transition-all hover:opacity-90 active:scale-[0.98]" to="/contact">
            Consultation
        </Link>
        <button className="md:hidden text-slate-900 dark:text-slate-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-surface-container-lowest border-t border-outline-variant/30 h-[calc(100vh-5rem)] z-50 overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <div className="p-8 flex flex-col space-y-10">
            <div className="flex flex-col space-y-4">
              <Link className="text-2xl font-black uppercase tracking-tight text-on-surface" onClick={() => setIsMobileMenuOpen(false)} to="/">Home</Link>
              <Link className="text-2xl font-black uppercase tracking-tight text-on-surface" onClick={() => setIsMobileMenuOpen(false)} to="/about">About</Link>
            </div>
            
            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Strategic Services</span>
              <div className="flex flex-col space-y-5 pl-4 border-l-4 border-primary/20">
                  <Link className="text-lg font-black text-on-surface/80" onClick={() => setIsMobileMenuOpen(false)} to="/services/financial-navigation">Financial Navigation</Link>
                  <Link className="text-lg font-black text-on-surface/80" onClick={() => setIsMobileMenuOpen(false)} to="/services/life-science-advisory">Life Science Advisory</Link>
                  <Link className="text-lg font-black text-on-surface/80" onClick={() => setIsMobileMenuOpen(false)} to="/services/financial-transformation">Financial Transformation</Link>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Executive Training</span>
              <div className="flex flex-col space-y-5 pl-4 border-l-4 border-primary/20">
                  <Link className="text-lg font-black text-on-surface/80" onClick={() => setIsMobileMenuOpen(false)} to="/training/patients-profitability">Patients & Profitability™</Link>
                  <Link className="text-lg font-black text-on-surface/80" onClick={() => setIsMobileMenuOpen(false)} to="/training/rising">Rising as a Finance Leader™</Link>
                  <Link className="text-lg font-black text-on-surface/80" onClick={() => setIsMobileMenuOpen(false)} to="/training/fundamentals">Finance Fundamentals™</Link>
              </div>
            </div>

            <div className="flex flex-col space-y-4 pt-4">
              <Link className="text-2xl font-black uppercase tracking-tight text-on-surface" onClick={() => setIsMobileMenuOpen(false)} to="/ebook">Ebook</Link>
              <Link className="text-2xl font-black uppercase tracking-tight text-on-surface" onClick={() => setIsMobileMenuOpen(false)} to="/contact">Contact</Link>
            </div>

            <Link className="w-full bg-primary text-white p-6 rounded-xl font-black uppercase tracking-[0.3em] text-xs text-center shadow-2xl shadow-primary/20" onClick={() => setIsMobileMenuOpen(false)} to="/contact">
              Schedule Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
export default Header;