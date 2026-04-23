import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 dark:bg-black text-slate-400 py-24 font-['Inter']">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4">
            <div className="text-2xl font-black text-white tracking-tighter mb-8 uppercase">
                Patrick R. Coyle
            </div>
            <p className="text-sm font-light leading-relaxed mb-10 max-w-sm normal-case">
                Strategic financial navigation for global life sciences leaders. Providing the clinical precision required to bridge the gap between financial stewardship and patient outcomes.
            </p>
            <div className="flex gap-6">
                <a className="w-10 h-10 border border-slate-700 flex items-center justify-center rounded hover:bg-white hover:text-black transition-all" href="#">
                    <img alt="LinkedIn" className="w-5 h-5 opacity-80" src="/founder.jpg" />
                </a>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Advisory</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><Link className="hover:text-amber-500 transition-colors" to="/services/financial-navigation">Navigation</Link></li>
                <li><Link className="hover:text-amber-500 transition-colors" to="/services/financial-transformation">Transformation</Link></li>
                <li><Link className="hover:text-amber-500 transition-colors" to="/services/life-science-advisory">Life Science</Link></li>
                <li><Link className="hover:text-amber-500 transition-colors" to="/services">All Services</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Training</h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
                <li><Link className="hover:text-amber-500 transition-colors" to="/training/patients-profitability">Patients &amp; Profit</Link></li>
                <li><Link className="hover:text-amber-500 transition-colors" to="/training/rising">Leadership</Link></li>
                <li><Link className="hover:text-amber-500 transition-colors" to="/training/fundamentals">Fundamentals</Link></li>
                <li><Link className="hover:text-amber-500 transition-colors" to="/training">All Academy</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Contact &amp; Legal</h4>
            <p className="normal-case text-sm mb-8 font-light">Direct office inquiries for strategic partnerships and speaking engagements.</p>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-widest">
                <Link className="hover:text-white" to="/">Privacy Policy</Link>
                <Link className="hover:text-white" to="/">Terms of Engagement</Link>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                © 2024 Patrick R. Coyle. All Rights Reserved.
            </div>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
                <span className="text-white">Clinical Authority</span>
                <span className="text-white">Fiscal Integrity</span>
            </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;