import { Link } from 'react-router-dom';
import SocialGlimpse from '../components/SocialGlimpse';

function Home() {
  return (
    <>
      {/*  TOP NAVIGATION SHELL (Preserved)  */}

<main className="mt-20">
{/*  SECTION A: HERO (Preserved Exactly)  */}
<section className="bg-primary-container py-4 md:py-8 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-16 items-center">
<div className="md:col-span-7 z-10">
<span className="inline-block label-md uppercase tracking-[0.2em] text-on-primary/60 font-semibold mb-6">
                    Chief Financial Navigator | Strategic Executive
                </span>
<h1 className="text-2xl md:text-4xl font-light tracking-tighter leading-[1.1] text-on-primary mb-4">
                    Navigating <span className="font-extrabold text-white">Financial Complexity</span>. <br className="hidden md:block" />
                    Delivering <span className="font-extrabold text-white border-b-4 border-primary-fixed/30 inline-block pb-0.5">Measurable Outcomes</span>.
                </h1>
<p className="text-sm md:text-base text-on-primary/80 max-w-md font-light mb-6 leading-relaxed">
                    Helping CEOs, CFOs, and life sciences leaders make smarter financial decisions with precision and clinical authority.
                </p>
<div className="flex flex-wrap gap-4 mb-8">
<Link to="/contact" className="bg-surface-container-lowest text-primary px-6 py-3 rounded-md font-bold transition-all hover:bg-surface-container-high text-sm md:text-base">
                        Schedule a Consultation
                    </Link>
<Link to="/ebook" className="border-2 border-on-primary text-on-primary px-6 py-3 rounded-md font-bold transition-all hover:bg-on-primary/10 text-sm md:text-base">
                        Download Free Ebook
                    </Link>
</div>
</div>
<div className="md:col-span-5 relative">
<div className="relative z-10 rounded-xl overflow-hidden border-[6px] border-white/10 aspect-[4/5] shadow-xl max-w-[240px] mx-auto md:ml-auto">
<img alt="" className="w-full h-full object-cover" data-alt="professional portrait of a distinguished man in his 50s" src="/founder.jpg"/>
</div>
<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full blur-3xl opacity-30 -z-0"></div>
</div>
</div>
</section>
{/*  SECTION B2: TRUSTED BY LEADERS AT  */}
<section className="relative py-24 overflow-hidden bg-surface-container-low">
{/* Subtle topographical background */}
<div className="absolute inset-0 topo-pattern pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="text-center mb-16 space-y-4">
<h2 className="text-[10px] uppercase tracking-[0.2em] text-outline font-bold">Validation</h2>
<p className="text-3xl md:text-4xl font-bold tracking-tight text-on-surface">Trusted by Leaders At</p>
<p className="text-on-surface-variant max-w-2xl mx-auto font-light">Patrick has held roles of increasing responsibility at global corporations spanning strategic planning, market access, and corporate investment.</p>
</div>
{/* Logo Grid */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-surface-variant/30 border border-surface-variant/30 rounded-xl overflow-hidden shadow-[0_40px_40px_0_rgba(31,62,146,0.06)]">
{/* Eisai */}
<div className="group bg-surface-container-lowest p-8 flex items-center justify-center transition-all duration-200 hover:bg-surface-bright">
<img src="/images/logos/eisai.png" alt="Eisai" className="h-12 md:h-16 object-contain transition-transform duration-200 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
</div>
{/* Baker Tilly */}
<div className="group bg-surface-container-lowest p-8 flex items-center justify-center transition-all duration-200 hover:bg-surface-bright">
<img src="/images/logos/bakertilly.jpg" alt="Baker Tilly" className="h-10 md:h-14 object-contain transition-transform duration-200 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
</div>
{/* IQVIA */}
<div className="group bg-surface-container-lowest p-8 flex items-center justify-center transition-all duration-200 hover:bg-surface-bright">
<img src="/images/logos/iqvia.jpg" alt="IQVIA" className="h-10 md:h-14 object-contain transition-transform duration-200 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
</div>
{/* Deloitte */}
<div className="group bg-surface-container-lowest p-8 flex items-center justify-center transition-all duration-200 hover:bg-surface-bright">
<img src="/images/logos/deloitte.png" alt="Deloitte" className="h-10 md:h-14 object-contain transition-transform duration-200 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
</div>
{/* Novartis */}
<div className="group bg-surface-container-lowest p-8 flex items-center justify-center transition-all duration-200 hover:bg-surface-bright">
<img src="/images/logos/novartis.png" alt="Novartis" className="h-10 md:h-14 object-contain transition-transform duration-200 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
</div>
{/* Sun Chemical */}
<div className="group bg-surface-container-lowest p-8 flex items-center justify-center transition-all duration-200 hover:bg-surface-bright">
<img src="/images/logos/sunchemical.png" alt="Sun Chemical" className="h-10 md:h-14 object-contain transition-transform duration-200 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
</div>
{/* Insmed */}
<div className="group bg-surface-container-lowest p-8 flex items-center justify-center transition-all duration-200 hover:bg-surface-bright">
<img src="/images/logos/insmed.png" alt="Insmed" className="h-10 md:h-14 object-contain transition-transform duration-200 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
</div>
{/* Bayer */}
<div className="group bg-surface-container-lowest p-8 flex items-center justify-center transition-all duration-200 hover:bg-surface-bright">
<img src="/images/logos/bayer.png" alt="Bayer" className="h-12 md:h-16 object-contain transition-transform duration-200 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
</div>
</div>
<div className="mt-16 flex justify-center">
<div className="flex items-center gap-4 py-3 px-6 rounded-full bg-surface-container border border-outline-variant/20">
<span className="w-2 h-2 rounded-full bg-tertiary"></span>
<p className="text-sm font-medium text-on-surface-variant">Strategic Advisory for Global Healthcare Innovation</p>
</div>
</div>
</div>
</section>
{/*  SECTION C: SIX WAYS I CREATE VALUE (Redesigned)  */}
<section className="py-32 px-8 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-6">The Value Proposition</span>
<h2 className="text-4xl md:text-6xl font-black tracking-tight text-on-surface leading-[1.1]">Architecting Strategic Financial Advantage</h2>
</div>
<p className="text-on-surface-variant font-light text-lg max-w-sm">Driving institutional evolution through clinical precision and executive stewardship.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-px bg-outline-variant/30 border border-outline-variant/30 rounded-2xl overflow-hidden shadow-sm">
{/*  Grid Items with Asymmetric Feel  */}
<div className="md:col-span-3 lg:col-span-4 bg-white p-10 hover:bg-surface-container-lowest transition-colors group">
<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-2xl" data-weight="fill">transform</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Change Agent</h3>
<p className="text-on-surface-variant leading-relaxed text-sm font-light">Driving structural evolution to adapt your finance organization to shifting market realities with precision.</p>
</div>
<div className="md:col-span-3 lg:col-span-4 bg-white p-10 hover:bg-surface-container-lowest transition-colors group">
<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-2xl" data-weight="fill">shield_person</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Sovereign Guardian</h3>
<p className="text-on-surface-variant leading-relaxed text-sm font-light">Meticulous stewardship of capital and risk to ensure long-term clinical and fiscal sustainability.</p>
</div>
<div className="md:col-span-3 lg:col-span-4 bg-white p-10 hover:bg-surface-container-lowest transition-colors group">
<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-2xl" data-weight="fill">auto_stories</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Financial Narrator</h3>
<p className="text-on-surface-variant leading-relaxed text-sm font-light">Translating complex financial data into compelling stories that win board and investor confidence.</p>
</div>
<div className="md:col-span-3 lg:col-span-4 bg-white p-10 hover:bg-surface-container-lowest transition-colors group">
<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-2xl" data-weight="fill">handshake</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Business Partner</h3>
<p className="text-on-surface-variant leading-relaxed text-sm font-light">Aligning finance operations with R&amp;D and Commercial goals for unified strategic execution.</p>
</div>
<div className="md:col-span-3 lg:col-span-4 bg-white p-10 hover:bg-surface-container-lowest transition-colors group">
<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-2xl" data-weight="fill">hub</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Executive Facilitator</h3>
<p className="text-on-surface-variant leading-relaxed text-sm font-light">Streamlining decision-making processes across global executive teams and stakeholders.</p>
</div>
<div className="md:col-span-3 lg:col-span-4 bg-white p-10 hover:bg-surface-container-lowest transition-colors group">
<div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
<span className="material-symbols-outlined text-2xl" data-weight="fill">school</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Strategic Mentor</h3>
<p className="text-on-surface-variant leading-relaxed text-sm font-light">Cultivating the next generation of finance leaders through structured executive training.</p>
</div>
</div>
</div>
</section>
{/*  SECTION D: HOW I CAN HELP YOU (Redesigned)  */}
<section className="py-32 px-8 bg-slate-50 border-y border-outline-variant/20">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-24">
<h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface uppercase mb-4">Advisory Pillars</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto font-light">High-stakes financial leadership tailored for the Life Sciences sector.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
{/*  Service Card 1  */}
<div className="relative group h-full">
<div className="absolute inset-0 bg-primary translate-x-1 translate-y-1 opacity-0 group-hover:opacity-10 transition-all rounded-xl"></div>
<div className="relative bg-white h-full p-12 border border-outline-variant/30 rounded-xl transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 flex flex-col">
<h3 className="text-2xl font-black mb-8 tracking-tighter text-primary">Financial Navigation</h3>
<div className="flex-grow space-y-6 mb-12">
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Capital Strategy</h4>
<p className="text-sm font-medium">Strategic long-term capital planning and deployment.</p>
</div>
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Board Reporting</h4>
<p className="text-sm font-medium">Board-level financial reporting and transparency.</p>
</div>
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Transaction Advisory</h4>
<p className="text-sm font-medium">M&amp;A financial due diligence and integration.</p>
</div>
</div>
<Link className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all" to="/services/life-science-advisory">
                            Inquire for Advisory <span className="material-symbols-outlined">east</span>
</Link>
</div>
</div>
{/*  Service Card 2  */}
<div className="relative group h-full">
<div className="absolute inset-0 bg-primary translate-x-1 translate-y-1 opacity-0 group-hover:opacity-10 transition-all rounded-xl"></div>
<div className="relative bg-white h-full p-12 border border-outline-variant/30 rounded-xl transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 flex flex-col">
<h3 className="text-2xl font-black mb-8 tracking-tighter text-primary">Life Science Advisory</h3>
<div className="flex-grow space-y-6 mb-12">
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Commercial Launch</h4>
<p className="text-sm font-medium">Launch financial strategy and preparedness.</p>
</div>
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Portfolio ROI</h4>
<p className="text-sm font-medium">R&amp;D portfolio optimization and valuation models.</p>
</div>
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Market Access</h4>
<p className="text-sm font-medium">Patient access pricing models and gross-to-net strategy.</p>
</div>
</div>
<Link className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all" to="/services/life-science-advisory">
                            Inquire for Advisory <span className="material-symbols-outlined">east</span>
</Link>
</div>
</div>
{/*  Service Card 3  */}
<div className="relative group h-full">
<div className="absolute inset-0 bg-primary translate-x-1 translate-y-1 opacity-0 group-hover:opacity-10 transition-all rounded-xl"></div>
<div className="relative bg-white h-full p-12 border border-outline-variant/30 rounded-xl transition-all group-hover:-translate-x-1 group-hover:-translate-y-1 flex flex-col">
<h3 className="text-2xl font-black mb-8 tracking-tighter text-primary">Financial Transformation</h3>
<div className="flex-grow space-y-6 mb-12">
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Org Design</h4>
<p className="text-sm font-medium">Finance organization design and operational agility.</p>
</div>
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Systems &amp; Data</h4>
<p className="text-sm font-medium">Process automation and advanced ERP integration.</p>
</div>
<div className="pb-6 border-b border-slate-100 last:border-0">
<h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Leadership Pipeline</h4>
<p className="text-sm font-medium">Talent development and high-potential leadership training.</p>
</div>
</div>
<Link className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all" to="/services/life-science-advisory">
                            Inquire for Advisory <span className="material-symbols-outlined">east</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION E: WHAT LEADERS SAY (Redesigned)  */}
<section className="py-32 px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
<h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">Executive Testimony</h2>
<span className="text-sm font-bold tracking-[0.2em] text-slate-400 uppercase">Strategic Impact Validated</span>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
{/*  Testimonial 1  */}
<div className="flex flex-col">
<div className="mb-8">
<span className="material-symbols-outlined text-primary-container/20 text-7xl font-light leading-none -ml-4">format_quote</span>
<p className="text-xl italic font-light leading-relaxed -mt-10">"Patrick's ability to bridge the gap between technical finance and strategic execution is unparalleled in the life sciences sector."</p>
</div>
<div className="mt-auto pt-8 border-t border-slate-100">
<p className="font-black text-on-surface uppercase tracking-tight">Senior Executive</p>
<p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mt-1">Hikma Pharmaceuticals</p>
</div>
</div>
{/*  Testimonial 2  */}
<div className="flex flex-col">
<div className="mb-8">
<span className="material-symbols-outlined text-primary-container/20 text-7xl font-light leading-none -ml-4">format_quote</span>
<p className="text-xl italic font-light leading-relaxed -mt-10">"A true navigator who helped our leadership team find clarity during a complex period of rapid international expansion."</p>
</div>
<div className="mt-auto pt-8 border-t border-slate-100">
<p className="font-black text-on-surface uppercase tracking-tight">Chief Executive Officer</p>
<p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mt-1">Avenzo Biotherapeutics</p>
</div>
</div>
{/*  Testimonial 3  */}
<div className="flex flex-col">
<div className="mb-8">
<span className="material-symbols-outlined text-primary-container/20 text-7xl font-light leading-none -ml-4">format_quote</span>
<p className="text-xl italic font-light leading-relaxed -mt-10">"Practical, clinical, and financially astute. His advisory was instrumental in our commercial launch preparedness."</p>
</div>
<div className="mt-auto pt-8 border-t border-slate-100">
<p className="font-black text-on-surface uppercase tracking-tight">VP of Finance</p>
<p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold mt-1">Kite Pharma</p>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION F: EBOOK FEATURE (Refined Integrated Layout)  */}
<section className="py-32 px-8 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch border border-outline-variant/20">
<div className="lg:w-2/5 relative">
<img alt="" className="w-full h-full object-cover" data-alt="professional ebook cover design with a deep blue background titled Why Pharma Funds Access But Does Not Control It" src="/images/img_14.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
</div>
<div className="lg:w-3/5 p-12 md:p-20 flex flex-col justify-center">
<span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-6">Executive Insight Series</span>
<h3 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter leading-tight">Why Pharma Funds Access But Doesn't Control It</h3>
<p className="text-lg text-on-surface-variant mb-12 font-light leading-relaxed">Critical insights for commercial leaders on navigating the complex intersection of patient access and profitability in the modern healthcare ecosystem.</p>
<div className="grid md:grid-cols-2 gap-8 mb-12">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary shrink-0">analytics</span>
<div>
<h4 className="text-sm font-bold mb-1">Hidden Leakage</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Identifying vulnerabilities in patient support systems.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary shrink-0">account_balance_wallet</span>
<div>
<h4 className="text-sm font-bold mb-1">Financial Control</h4>
<p className="text-xs text-on-surface-variant leading-relaxed">Strategies for post-launch fiscal sovereignty.</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-6">
<Link to="/ebook" className="bg-primary-container text-on-primary px-10 py-5 rounded-md font-bold uppercase tracking-widest hover:opacity-90 transition-all flex items-center gap-3">
                            Download PDF <span className="material-symbols-outlined text-lg">download</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION G: TRAINING HIGHLIGHT (High-Value Refinement)  */}
<section className="py-32 px-8 bg-primary-container relative">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
<div className="max-w-3xl">
<span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-black mb-6 block">The Academy of Navigation</span>
<h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-none">Patients &amp; Profitability™ Curriculum</h2>
</div>
<Link to="/training" className="border-2 border-white/20 text-white px-8 py-4 rounded-md font-black hover:bg-white/10 transition-all whitespace-nowrap uppercase tracking-widest text-[11px]">
                    View Curriculum PDF
                </Link>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-xl transition-all hover:bg-white/10 group">
<div className="flex items-center gap-5 mb-10">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
<span className="material-symbols-outlined text-white text-3xl">trending_up</span>
</div>
<h3 className="text-3xl font-black tracking-tighter text-white">Rising as a Finance Leader™</h3>
</div>
<p className="text-white/70 leading-relaxed mb-12 text-lg font-light">Executive-level curriculum designed for directors and high-potential managers stepping into CFO or VP roles in the life sciences sector.</p>
<Link className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all" to="/contact">
                        Request Enrollment Details <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
<div className="bg-white/5 backdrop-blur-sm border border-white/10 p-12 rounded-xl transition-all hover:bg-white/10 group">
<div className="flex items-center gap-5 mb-10">
<div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-all">
<span className="material-symbols-outlined text-white text-3xl">business_center</span>
</div>
<h3 className="text-3xl font-black tracking-tighter text-white">Finance Fundamentals for Leaders™</h3>
</div>
<p className="text-white/70 leading-relaxed mb-12 text-lg font-light">Empowering non-finance commercial leaders with the financial literacy needed to drive profitable organizational growth.</p>
<Link className="text-white font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all" to="/contact">
                        Request Enrollment Details <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
</div>
</div>
</section>
{/* SECTION I: INSIGHTS & ACTIVITY GLIMPSE */}
<SocialGlimpse />

{/*  SECTION H: FINAL CTA (Preserved but Refined)  */}
<section className="py-40 px-8 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-10">Navigate Your Next Critical Decision</h2>
<p className="text-xl text-on-surface-variant mb-16 font-light leading-relaxed max-w-2xl mx-auto">Bring clinical precision to your financial strategy. Schedule a private consultation to discuss your organization's specific challenges.</p>
<Link to="/contact" className="bg-primary-container text-on-primary px-16 py-7 rounded-md text-sm font-black uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-2xl shadow-primary-container/30">
                Book Consultation
            </Link>
</div>
<div className="absolute inset-0 bg-slate-50 opacity-30"></div>
</section>
</main>
{/*  FOOTER (Cleaned & Professional)  */}
    </>
  );
}

export default Home;
