import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ebookCover from '../assets/ebook_cover.png';

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the modal has been shown in this session
    const hasBeenShown = sessionStorage.getItem('leadModalShown');
    
    if (!hasBeenShown) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('leadModalShown', 'true');
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    sessionStorage.setItem('leadModalShown', 'true');
    navigate(path);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity duration-500 animate-in fade-in"
        onClick={handleClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-500 animate-in zoom-in-95 fade-in">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-surface-container-high/50 hover:bg-surface-variant flex items-center justify-center text-on-surface-variant transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Left Side: Ebook */}
        <div className="flex-1 p-8 lg:p-12 bg-surface-container-low border-r border-outline-variant/10 flex flex-col items-center text-center">
          <div className="w-48 lg:w-56 executive-shadow rounded-lg overflow-hidden mb-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src={ebookCover} 
              alt="Ebook Cover" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4 max-w-xs">
            <div className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary font-label text-[10px] font-black tracking-widest uppercase rounded">
              Free Insight
            </div>
            <h3 className="text-2xl font-headline font-black text-on-surface tracking-tight leading-tight">
              Strategic Financial Sovereignty
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Download the definitive guide to GTN and profitability control for biotech leaders.
            </p>
            <button 
              onClick={() => handleNavigation('/ebook')}
              className="w-full mt-4 bg-primary text-on-primary py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg active:scale-95"
            >
              Book an Ebook
            </button>
          </div>
        </div>

        {/* Right Side: Consultation */}
        <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center items-center text-center bg-white">
          <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8">
            <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              calendar_month
            </span>
          </div>
          <div className="space-y-4 max-w-xs">
            <div className="inline-flex items-center px-2 py-1 bg-surface-container-high text-on-surface-variant font-label text-[10px] font-black tracking-widest uppercase rounded">
              Confidential Advisory
            </div>
            <h3 className="text-2xl font-headline font-black text-on-surface tracking-tight leading-tight">
              Your Next Critical Decision
            </h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Navigate the complex landscape of Life Sciences with tailored strategic advisory services.
            </p>
            <button 
              onClick={() => handleNavigation('/contact')}
              className="w-full mt-4 bg-on-surface text-surface py-3 rounded-lg font-bold hover:bg-on-surface/90 transition-colors shadow-lg active:scale-95"
            >
              Schedule Consultation
            </button>
          </div>
          <p className="mt-8 text-[10px] text-on-surface-variant/60 font-medium">
            Limited monthly availability for new strategic mandates.
          </p>
        </div>
      </div>
    </div>
  );
}
