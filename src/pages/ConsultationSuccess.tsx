import { Link } from 'react-router-dom';

export default function ConsultationSuccess() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20 px-8 relative overflow-hidden">
      {/* Top Right Founder Section */}
      <div className="absolute top-28 right-8 hidden md:flex items-center gap-4 bg-white p-3 rounded-2xl shadow-xl border border-primary/5 animate-in fade-in slide-in-from-right-8 duration-1000">
        <div className="text-right">
          <p className="text-[10px] font-black uppercase tracking-widest text-primary">Personal Navigator</p>
          <p className="text-sm font-bold">Patrick R. Coyle</p>
        </div>
        <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-primary/10">
          <img src="/founder-v2.jpg" alt="Patrick R. Coyle" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(31,62,146,0.15)] border border-primary/5 relative animate-in zoom-in-95 fade-in duration-700">
          {/* Visual Flourish */}
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 group">
            <span className="material-symbols-outlined text-primary text-4xl animate-bounce">check</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface mb-6">
            Congratulations
          </h1>
          <div className="nano-accent mx-auto mb-8"></div>
          <p className="text-xl text-on-surface-variant font-light leading-relaxed max-w-2xl mx-auto mb-16">
            Your consultation request has been successfully registered. We will navigate your next strategic steps together. 
            <br className="hidden md:block" /> Expect a personal outreach within 1-2 business days.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* LinkedIn Button */}
            <Link 
              to="https://www.linkedin.com/in/pcoyle/" 
              target="_blank"
              className="group bg-[#0A66C2] text-white p-6 rounded-2xl hover:shadow-[0_20px_40px_-5px_rgba(10,102,194,0.3)] transition-all hover:-translate-y-1 flex flex-col items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl">share</span>
              <span className="text-xs font-black uppercase tracking-widest">Connect on LinkedIn</span>
            </Link>

            {/* Ebook Platform Button */}
            <Link 
              to="/ebook" 
              className="group bg-primary text-on-primary p-6 rounded-2xl hover:shadow-[0_20px_40px_-5px_rgba(31,62,146,0.3)] transition-all hover:-translate-y-1 flex flex-col items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl">auto_stories</span>
              <span className="text-xs font-black uppercase tracking-widest">Explore Curriculum</span>
            </Link>

            {/* Direct Download Button */}
            <a 
              href="/ebook.pdf" 
              download="Profits-Profitability-Ebook.pdf"
              className="group bg-white border-2 border-primary/10 text-on-surface p-6 rounded-2xl hover:bg-slate-50 transition-all hover:-translate-y-1 flex flex-col items-center gap-3"
            >
              <span className="material-symbols-outlined text-2xl">download</span>
              <span className="text-xs font-black uppercase tracking-widest text-primary">Download Ebook</span>
            </a>
          </div>
        </div>

        <div className="mt-12">
          <Link to="/" className="text-on-surface-variant hover:text-primary transition-colors text-sm font-bold uppercase tracking-[0.3em]">
            Return to Homepage
          </Link>
        </div>
      </div>

      {/* Subtle Background Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 -z-10"></div>
    </main>
  );
}
