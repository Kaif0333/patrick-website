import { Link } from 'react-router-dom';
import SocialGlimpse from '../components/SocialGlimpse';
import SEO from '../components/SEO';

function Home() {
  return (
    <>
      <SEO 
        title="Command Your Financial Future" 
        description="Precision stewardship and battle-tested advisory for C-suite leaders and Life Sciences innovators. Partner with Patrick R. Coyle, the Chief Financial Navigator."
        keywords="CFO advisory, life sciences finance, financial navigation, biotech CFO, GTN strategy, Patrick R. Coyle"
      />
      {/*  TOP NAVIGATION SHELL (Preserved)  */}

<main className="mt-16">
{/*  SECTION A: HERO */}
<section className="bg-primary py-8 relative overflow-hidden">
<div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4"></div>
</div>
<div className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-12 items-center relative z-10">
<div className="md:col-span-7">
<div className="inline-flex items-center px-4 py-1.5 rounded bg-white/10 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 border border-white/20 backdrop-blur-md">
    CHIEF FINANCIAL NAVIGATOR
</div>
<h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white mb-4 leading-[1.05]">
    Command Your <br/>
    <span className="text-primary-fixed-dim">Financial Future.</span>
</h1>
<div className="nano-accent mb-8 bg-white/40"></div>
<p className="text-xl md:text-2xl text-white max-w-xl font-black mb-6 leading-relaxed opacity-90">
    Precision stewardship and battle-tested advisory for C-suite leaders and Life Sciences innovators.
</p>
<div className="flex flex-col sm:flex-row gap-6">
<Link to="/contact" className="bg-white text-primary px-12 py-6 rounded-md font-black text-sm uppercase tracking-widest shadow-2xl shadow-black/20 hover:bg-slate-50 active:scale-95 transition-all text-center">
    Book Consultation
</Link>
<Link to="/ebook" className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-md font-black text-sm uppercase tracking-widest hover:bg-white/10 active:scale-95 transition-all text-center">
    Executive Ebook
</Link>
</div>
</div>
<div className="md:col-span-4 md:col-start-9 relative max-w-[360px] mx-auto md:mx-0 translate-x-[10px]">
<div className="relative z-10 rounded-2xl overflow-hidden border-[8px] border-white/10 aspect-square shadow-2xl bg-surface-container">
<img alt="Patrick R. Coyle" className="w-full h-full object-cover" src="/founder-hero.png"/>
</div>
<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-white/20 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>

{/*  SECTION: STRATEGIC SOLUTIONS (Below Hero) - CLEAN EXECUTIVE LIGHT THEME */}
<section className="py-20 bg-surface-container-lowest relative">
{/* Subtle decorative grid background */}
<div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>

<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
<div className="max-w-3xl">
<span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6 block">The Academy of Navigation</span>
<h2 className="text-5xl md:text-7xl font-black tracking-tight text-on-surface leading-[1.1]">
            Strategic <br/>
<span className="text-primary">Financial Solutions.</span>
</h2>
</div>
<div className="max-w-sm">
<p className="text-on-surface font-black text-sm uppercase tracking-widest leading-relaxed mb-8 opacity-60">
            Precision stewardship for clinical innovation and institutional evolution.
        </p>
<Link to="/contact" className="inline-flex items-center gap-4 text-primary font-black text-xs uppercase tracking-[0.3em] hover:gap-6 transition-all group">
            Inquire for Consultation <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform font-black">east</span>
        </Link>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-12">
{[
{ 
        title: 'Financial Navigation', 
        tagline: 'Capital Strategy',
        desc: 'Navigating complex commercial landscapes through high-stakes capital planning and battle-tested board reporting.',
        icon: 'explore',
        link: '/services/financial-navigation'
    },
{ 
        title: 'Life Science Advisory', 
        tagline: 'Clinical ROI',
        desc: 'Optimizing the intersection of clinical development and commercial success with precision GTN strategy.',
        icon: 'biotech',
        link: '/services/life-science-advisory'
    },
{ 
        title: 'Financial Transformation', 
        tagline: 'Org Agility',
        desc: 'Architecting modern finance functions that deliver real-time strategic clarity for global leadership teams.',
        icon: 'rebase_edit',
        link: '/services/financial-transformation'
    }
].map((service, index) => (
<div 
        key={index} 
        className="group relative p-12 rounded-3xl bg-white border-2 border-outline/5 hover:border-primary/20 transition-all duration-500 flex flex-col justify-between min-h-[480px] shadow-2xl shadow-primary/5 hover:shadow-primary/10 hover:-translate-y-2"
    >
<div>
<div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500">
<span className="material-symbols-outlined text-primary text-3xl font-black group-hover:text-white transition-colors">{service.icon}</span>
</div>
<span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary mb-3 block">{service.tagline}</span>
<h3 className="text-3xl font-black mb-6 text-on-surface uppercase tracking-tight leading-none">
            {service.title}
        </h3>
<p className="text-on-surface font-black text-sm leading-relaxed mb-10 opacity-70">
            {service.desc}
        </p>
</div>

<Link 
        to="/contact" 
        className="w-full py-5 rounded-xl bg-on-surface text-white font-black text-[10px] uppercase tracking-[0.2em] text-center shadow-xl shadow-on-surface/10 hover:bg-primary transition-all duration-500"
    >
        Schedule Executive Briefing
    </Link>
</div>
))}
</div>
</div>
</section>

{/*  SECTION B2: TRUSTED BY LEADERS AT  */}
<section className="relative py-20 overflow-hidden bg-white border-y-2 border-outline/5">
{/* Subtle background decorative elements */}
<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

<div className="max-w-7xl mx-auto px-8 relative z-10">
<div className="text-center mb-24">
<span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Institutional Trust</span>
<h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-6">Validated Industry Expertise</h2>
<p className="text-lg text-on-surface font-black max-w-2xl mx-auto opacity-70 leading-relaxed">
    Patrick has delivered strategic value for global pharmaceutical leaders and elite advisory firms, bridging the gap between clinical innovation and fiscal stewardship.
</p>
</div>

{/* Infinite Logo Slider */}
<div className="relative w-full overflow-hidden">
{/* Fading gradients on the edges for a smoother look */}
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

<div className="flex w-fit animate-marquee hover:[animation-play-state:paused] py-4">
{/* First set of logos */}
{[
{ name: 'Eisai', src: '/images/logos/eisai.png' },
{ name: 'Baker Tilly', src: '/images/logos/bakertilly.jpg' },
{ name: 'IQVIA', src: '/images/logos/iqvia.jpg' },
{ name: 'Deloitte', src: '/images/logos/deloitte.png' },
{ name: 'Novartis', src: '/images/logos/novartis.png' },
{ name: 'Sun Chemical', src: '/images/logos/sunchemical.png' },
{ name: 'Insmed', src: '/images/logos/insmed.png' },
{ name: 'Bayer', src: '/images/logos/bayer.png' }
].concat([
{ name: 'Eisai', src: '/images/logos/eisai.png' },
{ name: 'Baker Tilly', src: '/images/logos/bakertilly.jpg' },
{ name: 'IQVIA', src: '/images/logos/iqvia.jpg' },
{ name: 'Deloitte', src: '/images/logos/deloitte.png' },
{ name: 'Novartis', src: '/images/logos/novartis.png' },
{ name: 'Sun Chemical', src: '/images/logos/sunchemical.png' },
{ name: 'Insmed', src: '/images/logos/insmed.png' },
{ name: 'Bayer', src: '/images/logos/bayer.png' }
]).map((logo, index) => (
<div key={index} className="flex-shrink-0 mx-4 w-48 md:w-64 h-32 md:h-40 bg-surface-container-low border-2 border-outline/5 rounded-2xl flex items-center justify-center p-8 transition-all hover:bg-white hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 group cursor-default">
<img 
                            src={logo.src} 
                            alt={logo.name} 
                            className="w-full h-full object-contain transition-all duration-500 group-hover:scale-110" 
                        />
</div>
))}
</div>
</div>

<div className="mt-24 flex justify-center">
<div className="inline-flex items-center gap-4 py-4 px-8 rounded-full bg-surface-container-low border-2 border-outline/5 shadow-xl shadow-outline/5">
<span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
<p className="text-xs font-black text-on-surface uppercase tracking-widest">Global Healthcare Innovation Advisory</p>
</div>
</div>
</div>
</section>
{/*  SECTION C: SIX WAYS I CREATE VALUE (Redesigned)  */}
<section className="py-20 px-8 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-6">The Value Proposition</span>
<h2 className="text-4xl md:text-6xl font-black tracking-tight text-on-surface leading-[1.1]">Architecting Strategic Financial Advantage</h2>
</div>
<p className="text-on-surface-variant font-light text-lg max-w-sm">Driving institutional evolution through clinical precision and executive stewardship.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{[
{ icon: 'transform', title: 'Change Agent', desc: 'Driving structural evolution to adapt your finance organization to shifting market realities.' },
{ icon: 'shield_person', title: 'Sovereign Guardian', desc: 'Meticulous stewardship of capital and risk to ensure long-term clinical and fiscal sustainability.' },
{ icon: 'auto_stories', title: 'Financial Narrator', desc: 'Translating complex financial data into compelling stories that win board and investor confidence.' },
{ icon: 'handshake', title: 'Business Partner', desc: 'Aligning finance operations with R&D and Commercial goals for unified strategic execution.' },
{ icon: 'hub', title: 'Executive Facilitator', desc: 'Streamlining decision-making processes across global executive teams and stakeholders.' },
{ icon: 'school', title: 'Strategic Mentor', desc: 'Cultivating the next generation of finance leaders through structured executive training.' }
].map((item, i) => (
<div key={i} className="p-10 border-2 border-outline/5 rounded-2xl hover:border-primary/20 transition-all group bg-surface-container-low shadow-xl shadow-outline/5">
<div className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-primary/20">
<span className="material-symbols-outlined font-black text-3xl">{item.icon}</span>
</div>
<h3 className="text-xl font-black mb-4 text-on-surface uppercase tracking-tight">{item.title}</h3>
<p className="text-on-surface font-black text-sm leading-relaxed opacity-70">{item.desc}</p>
</div>
))}
</div>
</div>
</section>
{/*  SECTION D: HOW I CAN HELP YOU (Redesigned)  */}
<section className="py-20 px-8 bg-white border-y border-outline-variant/20">
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
<Link className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all" to="/services/financial-navigation">
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
<Link className="inline-flex items-center gap-2 font-bold text-primary group-hover:gap-4 transition-all" to="/services/financial-transformation">
                            Inquire for Advisory <span className="material-symbols-outlined">east</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION E: WHAT LEADERS SAY (Redesigned)  */}
<section className="py-20 px-8 bg-white">
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
<section className="py-12 px-8 bg-surface-container-low">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch border border-outline-variant/20">
<div className="lg:w-1/3 relative min-h-[300px]">
<img alt="" className="w-full h-full object-cover" data-alt="professional ebook cover design with a deep blue background titled Why Pharma Funds Access But Does Not Control It" src="/images/img_14.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
</div>
<div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
<span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4">Executive Insight Series</span>
<h3 className="text-2xl md:text-4xl font-black mb-4 tracking-tighter leading-tight">Why Pharma Funds Access But Doesn't Control It</h3>
<p className="text-base text-on-surface-variant mb-8 font-light leading-relaxed">Critical insights for commercial leaders on navigating the complex intersection of patient access and profitability in the modern healthcare ecosystem.</p>
<div className="grid md:grid-cols-2 gap-6 mb-8">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary shrink-0 text-xl">analytics</span>
<div>
<h4 className="text-sm font-bold mb-1">Hidden Leakage</h4>
<p className="text-[10px] text-on-surface-variant leading-relaxed">Identifying vulnerabilities in patient support systems.</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary shrink-0 text-xl">account_balance_wallet</span>
<div>
<h4 className="text-sm font-bold mb-1">Financial Control</h4>
<p className="text-[10px] text-on-surface-variant leading-relaxed">Strategies for post-launch fiscal sovereignty.</p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-6">
<Link to="/ebook" className="bg-primary-container text-on-primary px-8 py-4 rounded-md font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all flex items-center gap-3">
                            Download PDF <span className="material-symbols-outlined text-base">download</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/*  SECTION G: TRAINING HIGHLIGHT (High-Value Refinement)  */}
<section className="py-20 px-8 bg-primary-container relative">
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
