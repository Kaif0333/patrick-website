import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="w-14 h-14 rounded-full bg-primary-container text-on-primary shadow-2xl flex items-center justify-center hover:bg-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/30 group"
        aria-label="Back to Top"
      >
        <span className="material-symbols-outlined text-3xl font-bold group-hover:animate-bounce-slow">north</span>
      </button>
    </div>
  );
}
