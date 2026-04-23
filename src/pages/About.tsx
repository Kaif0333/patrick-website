import { Link } from 'react-router-dom';
import SocialSection from '../components/SocialSection';

function About() {
  return (
    <>
      {/*  Header / TopNavBar  */}

<main className="pt-32">
{/*  Section 1: Hero  */}
<section className="pb-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-5 relative">
<div className="relative overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
<img alt="Portrait of Patrick R. Coyle" className="w-full h-[640px] object-cover object-top" src="/founder.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-primary p-8 hidden lg:block">
<div className="text-white font-bold text-4xl leading-none">20+</div>
<div className="text-white/70 text-[10px] uppercase tracking-widest mt-1">Years Clinical Finance</div>
</div>
</div>
<div className="lg:col-span-7 flex flex-col gap-8">
<div className="flex items-center gap-4">
<div className="h-[1px] w-12 bg-primary"></div>
<span className="text-primary font-bold tracking-[0.3em] uppercase text-[11px]">The Sovereign Navigator</span>
</div>
<h1 className="text-5xl md:text-7xl font-black tracking-tight text-on-surface leading-[0.95] text-balance">
                Precision Stewardship at the Intersection of Finance &amp; Science.
            </h1>
<p className="text-xl text-on-surface-variant leading-relaxed font-light max-w-2xl">
                With two decades of executive leadership, including roles as VP &amp; CFO at Eisai Inc., Patrick R. Coyle bridges the gap between complex commercial landscapes and transformative growth for global life science organizations.
            </p>
<div className="pt-4 flex items-center gap-8">
<Link to="/contact" className="bg-primary text-on-primary px-10 py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-opacity-95 transition-all shadow-xl shadow-primary/20">
                    Executive Consultation
                </Link>
<div className="flex flex-col">
<span className="text-[11px] uppercase tracking-widest text-on-surface-variant font-bold">Currently Partnered With</span>
<span className="text-on-surface font-semibold">Baker Tilly Advisory</span>
</div>
</div>
</div>
</section>
{/*  Section 2: Focus Areas  */}
<section className="bg-surface-variant/50 border-y border-outline py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col mb-20">
<span className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] mb-4">Strategic Domains</span>
<h2 className="text-4xl font-black tracking-tighter">Areas of Deep Expertise</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-outline overflow-hidden border border-outline">
{/*  Cards  */}
<div className="bg-surface p-12 hover:bg-primary-container/30 transition-colors group">
<span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">account_balance</span>
<h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Fractional CFO Leadership</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Scalable executive guidance for emerging biotech firms navigating rapid expansion and capital allocation.</p>
</div>
<div className="bg-surface p-12 hover:bg-primary-container/30 transition-colors group">
<span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">biotech</span>
<h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Life Sciences Finance</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Expertise in pharmaceutical R&amp;D, clinical trial budgeting, and navigating the global regulatory compliance landscape.</p>
</div>
<div className="bg-surface p-12 hover:bg-primary-container/30 transition-colors group">
<span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">monitoring</span>
<h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Financial Transformation</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Modernizing legacy systems to create agile, data-driven finance functions that provide real-time strategic clarity.</p>
</div>
<div className="bg-surface p-12 hover:bg-primary-container/30 transition-colors group">
<span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">trending_up</span>
<h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Gross-to-Net Optimization</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Precision modeling for government pricing, rebates, and commercial contracting strategies that protect margins.</p>
</div>
<div className="bg-surface p-12 hover:bg-primary-container/30 transition-colors group">
<span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">handshake</span>
<h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Commercial Finance Partnership</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Bridging the divide between commercial operations and financial performance accountability.</p>
</div>
<div className="bg-surface p-12 hover:bg-primary-container/30 transition-colors group">
<span className="material-symbols-outlined text-primary text-4xl mb-8 group-hover:scale-110 transition-transform">school</span>
<h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Leadership Development</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Mentoring and training the next generation of financial leaders within the high-stakes life sciences ecosystem.</p>
</div>
</div>
</div>
</section>
{/*  Section 3: Strategic Dossier (Timeline)  */}
<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-20">
<div className="lg:col-span-7">
<div className="flex flex-col mb-16">
<span className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] mb-4">Strategic Dossier</span>
<h2 className="text-4xl font-black tracking-tighter">Career &amp; Engagement History</h2>
</div>
<div className="relative pl-12">
<div className="dossier-line"></div>
<div className="relative mb-16">
<div className="absolute -left-[51px] top-1 w-5 h-5 bg-primary border-4 border-white rounded-full z-10"></div>
<div className="text-[11px] font-bold text-primary tracking-widest uppercase mb-2">Current Engagement</div>
<h4 className="text-2xl font-bold text-on-surface">Strategic Executive, Life Sciences</h4>
<div className="text-lg font-medium text-on-surface-variant mb-4">Baker Tilly Advisory</div>
<p className="text-on-surface-variant leading-relaxed">Leading high-stakes advisory for biotech commercialization and financial operations transformation.</p>
</div>
<div className="relative mb-16">
<div className="absolute -left-[51px] top-1 w-5 h-5 bg-slate-300 border-4 border-white rounded-full z-10"></div>
<div className="text-[11px] font-bold text-on-surface-variant tracking-widest uppercase mb-2">Former Executive Role</div>
<h4 className="text-2xl font-bold text-on-surface">Vice President &amp; CFO</h4>
<div className="text-lg font-medium text-on-surface-variant mb-4">Eisai Inc.</div>
<p className="text-on-surface-variant leading-relaxed">Direct financial oversight of multi-billion dollar operations and product launches across North America.</p>
</div>
<div className="relative">
<div className="absolute -left-[51px] top-1 w-5 h-5 bg-slate-300 border-4 border-white rounded-full z-10"></div>
<div className="text-[11px] font-bold text-on-surface-variant tracking-widest uppercase mb-2">Institutional Foundation</div>
<h4 className="text-2xl font-bold text-on-surface">Global Leadership &amp; Advisory</h4>
<div className="text-lg font-medium text-on-surface-variant mb-4">Kite Pharma, Bayer, Novartis, Deloitte</div>
<p className="text-on-surface-variant leading-relaxed">A career-long focus on pharmaceutical excellence, from clinical development to commercial maturity.</p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="bg-on-surface p-12 text-white sticky top-32">
<h3 className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-12 border-b border-white/10 pb-4">Key Metrics</h3>
<div className="space-y-12">
<div>
<div className="text-5xl font-black mb-1">12+</div>
<div className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Successful Life Science Launches</div>
</div>
<div>
<div className="text-5xl font-black mb-1">$B+</div>
<div className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Financial Oversight Managed</div>
</div>
<div>
<div className="text-5xl font-black mb-1">MBA</div>
<div className="text-white/50 text-[10px] uppercase tracking-widest font-bold">Finance — Montclair State University</div>
</div>
<div className="pt-6">
<Link className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:text-white transition-colors" to="/about">
                                View Full Credentials <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION I: INSIGHTS & ACTIVITY */}
<SocialSection />

{/*  Section 4: Operating Philosophy  */}
<section className="bg-on-surface py-32 px-6 overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full bg-grid opacity-5 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col mb-20 text-center items-center">
<span className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] mb-4">Operating Philosophy</span>
<h2 className="text-4xl font-black tracking-tighter text-white">The Navigator's Methodology</h2>
</div>
<div className="grid md:grid-cols-2 gap-12">
<div className="flex gap-8 items-start p-10 border border-white/10 hover:border-primary/50 transition-colors group">
<span className="text-primary text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity">01</span>
<div>
<h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Executive Presence</h3>
<p className="text-white/60 text-base leading-relaxed">Calm, authoritative leadership that stabilizes organizations during transitions and provides deep confidence to boards and stakeholders.</p>
</div>
</div>
<div className="flex gap-8 items-start p-10 border border-white/10 hover:border-primary/50 transition-colors group">
<span className="text-primary text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity">02</span>
<div>
<h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Embedded Partnership</h3>
<p className="text-white/60 text-base leading-relaxed">More than an advisor; Patrick becomes an integral extension of your leadership team, aligning financial strategy with clinical reality.</p>
</div>
</div>
<div className="flex gap-8 items-start p-10 border border-white/10 hover:border-primary/50 transition-colors group">
<span className="text-primary text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity">03</span>
<div>
<h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Accountability</h3>
<p className="text-white/60 text-base leading-relaxed">A relentless focus on KPIs that matter—optimizing cash flow, maximizing ROI, and ensuring fiscal resilience for long-term clinical success.</p>
</div>
</div>
<div className="flex gap-8 items-start p-10 border border-white/10 hover:border-primary/50 transition-colors group">
<span className="text-primary text-6xl font-black opacity-20 group-hover:opacity-100 transition-opacity">04</span>
<div>
<h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wider">Future-Proofing</h3>
<p className="text-white/60 text-base leading-relaxed">Building sustainable financial frameworks designed to survive current cycles and prepare organizations for eventual exit or rapid scaling.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Section 5: Testimonials  */}
<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="flex flex-col mb-20">
<span className="text-primary font-bold tracking-[0.2em] uppercase text-[11px] mb-4">Endorsements</span>
<h2 className="text-4xl font-black tracking-tighter">Strategic Impact Assessments</h2>
</div>
<div className="grid md:grid-cols-3 gap-16">
<div className="flex flex-col">
<div className="text-primary text-6xl font-serif mb-6 opacity-40">“</div>
<p className="text-xl italic font-light leading-relaxed mb-8 text-on-surface">"Patrick's ability to translate complex biotech financial models into actionable strategic insights was pivotal during our Phase III trials. He is a master of his craft."</p>
<div className="mt-auto pt-6 border-t border-outline">
<div className="font-bold uppercase tracking-widest text-xs">Sarah Jenkins</div>
<div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mt-1">Chief Operating Officer, NexGen Bio</div>
</div>
</div>
<div className="flex flex-col">
<div className="text-primary text-6xl font-serif mb-6 opacity-40">“</div>
<p className="text-xl italic font-light leading-relaxed mb-8 text-on-surface">"A rare executive who understands both the granular finance details and the 30,000-foot strategic view. His leadership was transformative for our division."</p>
<div className="mt-auto pt-6 border-t border-outline">
<div className="font-bold uppercase tracking-widest text-xs">Michael Chen</div>
<div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mt-1">Former SVP, Eisai Inc.</div>
</div>
</div>
<div className="flex flex-col">
<div className="text-primary text-6xl font-serif mb-6 opacity-40">“</div>
<p className="text-xl italic font-light leading-relaxed mb-8 text-on-surface">"Patrick is our go-to for gross-to-net optimization. He found efficiencies we hadn't considered, adding significant value to our commercial rollout."</p>
<div className="mt-auto pt-6 border-t border-outline">
<div className="font-bold uppercase tracking-widest text-xs">David Ross</div>
<div className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mt-1">Managing Director, Baker Tilly Advisory</div>
</div>
</div>
</div>
</section>
{/*  Section 6: Speaking / CTA Band  */}
<section className="bg-primary py-32 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">Command Your Financial Future.</h2>
<p className="text-lg text-white/80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Take the first step toward absolute financial clarity. Partner with a veteran who understands the unique trajectory of life sciences and biotech ventures.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:shadow-2xl transition-all">
                    Inquire for Consultation
                </Link>
<Link to="/training" className="bg-transparent border border-white/30 text-white px-12 py-5 rounded-sm font-bold text-xs uppercase tracking-[0.2em] hover:bg-white/10 transition-all">
                    Speaking &amp; Workshops
                </Link>
</div>
</div>
</section>
</main>
{/*  Footer  */}
    </>
  );
}

export default About;
