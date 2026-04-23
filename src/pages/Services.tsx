import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Services() {
  return (
    <>
      <SEO 
        title="Strategic Finance Leadership & Advisory" 
        description="Comprehensive fractional CFO, life sciences advisory, and financial transformation services tailored for emerging and global pharmaceutical leaders."
        keywords="fractional CFO services, life sciences advisory, financial transformation, gross-to-net optimization, biotech financial leadership"
      />
      {/*  Header (Shared Component)  */}

<main className="pt-20">
{/*  Section 1: Hero  */}
<section className="relative overflow-hidden py-20 flex flex-col items-center text-center px-8">
<div className="absolute inset-0 hero-pattern -z-10 opacity-40"></div>
<div className="max-w-4xl mx-auto">
<span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-6 block">The Academy of Advisory</span>
<h1 className="text-4xl md:text-6xl font-black tracking-tight text-on-surface mb-8 leading-[1.1]">
                    Strategic Finance Leadership <br className="hidden md:block"/> When It Matters Most
                </h1>
<p className="text-lg md:text-xl text-on-surface font-black max-w-2xl mx-auto mb-12 leading-relaxed opacity-70">
                    Precision stewardship tailored for clinical innovation and institutional evolution. Patrick brings senior-level financial leadership to every engagement.
                </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-md font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20 hover:brightness-110 transition-all">
                        Schedule a Consultation
                    </Link>
<Link to="/about" className="border-2 border-outline text-on-surface px-10 py-5 rounded-md font-black text-sm uppercase tracking-widest hover:bg-surface-container-low transition-all">
                        Executive Process
                    </Link>
</div>
</div>
</section>
{/*  Section 2: Service Cards  */}
<section className="bg-surface-container-lowest py-20 px-8">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-black text-center text-on-surface mb-16 uppercase tracking-tight">Expertise Domains</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
{/*  Card 1  */}
<div className="bg-white p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] flex flex-col h-full border border-surface-variant/30 hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary-container text-3xl">explore</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2">Financial Navigation</h3>
<p className="text-primary-container font-medium text-sm mb-6">For CEOs &amp; CFOs Who Need a Strategic Finance Partner</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Fractional CFO leadership
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Strategic planning
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Capital allocation
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                KPI development
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                FP&amp;A process optimization
                            </li>
</ul>
<div className="pt-6 border-t border-surface-variant/50 mb-6">
<p className="text-xs font-bold uppercase tracking-wider text-outline mb-2">Ideal For</p>
<p className="text-sm text-on-surface-variant italic">Emerging pharma, biotech, and life sciences companies in growth or transition phases</p>
</div>
<Link className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all group" to="/services/financial-navigation">
                            Explore Financial Navigation 
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
{/*  Card 2  */}
<div className="bg-white p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] flex flex-col h-full border border-surface-variant/30 hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary-container text-3xl">science</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2">Life Science Advisory</h3>
<p className="text-primary-container font-medium text-sm mb-6">For Commercial Leaders Navigating Pricing, Access &amp; Margin</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Gross-to-net optimization
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Market access &amp; pricing strategy
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Commercial finance partnership
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Payer landscape analysis
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Patient access program economics
                            </li>
</ul>
<div className="pt-6 border-t border-surface-variant/50 mb-6">
<p className="text-xs font-bold uppercase tracking-wider text-outline mb-2">Ideal For</p>
<p className="text-sm text-on-surface-variant italic">Commercial, market access, and finance teams at pharma and biotech companies</p>
</div>
<Link className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all" to="/services/life-science-advisory">
                            Explore Life Science Advisory 
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
{/*  Card 3  */}
<div className="bg-white p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] flex flex-col h-full border border-surface-variant/30 hover:-translate-y-1 transition-transform duration-300">
<div className="w-14 h-14 bg-surface-container rounded-lg flex items-center justify-center mb-8">
<span className="material-symbols-outlined text-primary-container text-3xl">hub</span>
</div>
<h3 className="text-2xl font-bold text-on-surface mb-2">Financial Transformation</h3>
<p className="text-primary-container font-medium text-sm mb-6">For Organizations Ready to Evolve Their Finance Function</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Finance digital transformation strategy
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                ERP &amp; EPM system selection
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Process automation
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Data governance
                            </li>
<li className="flex items-start gap-3 text-on-surface-variant text-sm">
<span className="material-symbols-outlined text-primary-container text-lg">check_circle</span>
                                Change management
                            </li>
</ul>
<div className="pt-6 border-t border-surface-variant/50 mb-6">
<p className="text-xs font-bold uppercase tracking-wider text-outline mb-2">Ideal For</p>
<p className="text-sm text-on-surface-variant italic">Organizations modernizing finance operations at any stage</p>
</div>
<Link className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all" to="/services/financial-transformation">
                            Explore Financial Transformation 
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
</Link>
</div>
</div>
</div>
</section>
{/*  Section 3: Engagement Options  */}
<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">Flexible Engagement Models</h2>
<p className="text-lg text-on-surface-variant">Every engagement is customized. Here are the most common ways we work together.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
{/*  Option 1  */}
<div className="p-8 bg-surface-container-low rounded-xl text-center border border-transparent hover:border-primary-container/20 transition-all">
<span className="material-symbols-outlined text-4xl text-primary-container mb-4">badge</span>
<h4 className="text-lg font-bold text-on-surface mb-3">Fractional Executive</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Ongoing, part-time leadership integrated into your senior team to drive strategy and execution.</p>
</div>
{/*  Option 2  */}
<div className="p-8 bg-surface-container-low rounded-xl text-center border border-transparent hover:border-primary-container/20 transition-all">
<span className="material-symbols-outlined text-4xl text-primary-container mb-4">query_stats</span>
<h4 className="text-lg font-bold text-on-surface mb-3">Strategic Advisory</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Project-based or retainer-led guidance for specific high-stakes decisions and planning phases.</p>
</div>
{/*  Option 3  */}
<div className="p-8 bg-surface-container-low rounded-xl text-center border border-transparent hover:border-primary-container/20 transition-all">
<span className="material-symbols-outlined text-4xl text-primary-container mb-4">groups</span>
<h4 className="text-lg font-bold text-on-surface mb-3">Workshops &amp; Training</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Focused sessions to upskill finance and commercial teams on gross-to-net and FP&amp;A best practices.</p>
</div>
{/*  Option 4  */}
<div className="p-8 bg-surface-container-low rounded-xl text-center border border-transparent hover:border-primary-container/20 transition-all">
<span className="material-symbols-outlined text-4xl text-primary-container mb-4">bolt</span>
<h4 className="text-lg font-bold text-on-surface mb-3">Transformation Lead</h4>
<p className="text-sm text-on-surface-variant leading-relaxed">Dedicated leadership for major change initiatives, system implementations, or function restructuring.</p>
</div>
</div>
</div>
</section>
{/*  Section 4: Process  */}
<section className="py-24 px-6 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-center text-on-surface mb-20">How We Work Together</h2>
<div className="relative">
{/*  Timeline Bar  */}
<div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-surface-variant -z-10"></div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
{/*  Step 1  */}
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg mb-6 text-primary font-bold text-xl ring-2 ring-primary-container/20">01</div>
<h4 className="text-lg font-bold text-on-surface mb-2">Discovery Call</h4>
<p className="text-sm text-on-surface-variant">Initial alignment to understand your current challenges and organizational goals.</p>
</div>
{/*  Step 2  */}
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg mb-6 text-primary font-bold text-xl ring-2 ring-primary-container/20">02</div>
<h4 className="text-lg font-bold text-on-surface mb-2">Scope &amp; Proposal</h4>
<p className="text-sm text-on-surface-variant">Drafting a tailored roadmap with clear deliverables and success metrics.</p>
</div>
{/*  Step 3  */}
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg mb-6 text-primary font-bold text-xl ring-2 ring-primary-container/20">03</div>
<h4 className="text-lg font-bold text-on-surface mb-2">Kick-Off &amp; Assessment</h4>
<p className="text-sm text-on-surface-variant">Deep dive into data and team dynamics to baseline the current state.</p>
</div>
{/*  Step 4  */}
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg mb-6 text-primary font-bold text-xl ring-2 ring-primary-container/20">04</div>
<h4 className="text-lg font-bold text-on-surface mb-2">Execution &amp; Partnership</h4>
<p className="text-sm text-on-surface-variant">Collaborative implementation of strategies, processes, and leadership.</p>
</div>
{/*  Step 5  */}
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center shadow-lg mb-6 text-primary font-bold text-xl ring-2 ring-primary-container/20">05</div>
<h4 className="text-lg font-bold text-on-surface mb-2">Review &amp; Sustainment</h4>
<p className="text-sm text-on-surface-variant">Ensuring outcomes are met and long-term capability is built.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Section 5: FAQ  */}
<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-center text-on-surface mb-16">Frequently Asked Questions</h2>
<div className="space-y-4">
{/*  FAQ Item 1  */}
<details className="group border border-surface-variant rounded-lg overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-semibold text-on-surface">What industries do you specialize in?</span>
<span className="material-symbols-outlined text-primary transition-transform group-focus:rotate-180 group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
                            While my background is deep in life sciences, biotech, and pharmaceutical manufacturing, the principles of financial stewardship and operational excellence I apply are effective across high-growth, regulated industries.
                        </div>
</details>
{/*  FAQ Item 2  */}
<details className="group border border-surface-variant rounded-lg overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-semibold text-on-surface">What size of companies do you typically work with?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed border-t border-surface-variant/30 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-2">
                             I partner with a diverse range of organizations, from emerging biotech startups navigating their first commercial launches to multi-billion dollar global pharmaceutical firms seeking to optimize complex gross-to-net landscapes and transform their finance functions.
                        </div>
</details>
{/*  FAQ Item 3  */}
<details className="group border border-surface-variant rounded-lg overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-semibold text-on-surface">How does a fractional CFO differ from a traditional consultant?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed border-t border-surface-variant/30 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-2">
                             A traditional consultant often provides a report and leaves. As a Fractional CFO, I become an embedded member of your leadership team, providing ongoing executive-level guidance, taking accountability for financial outcomes, and mentoring your internal talent to build long-term institutional capability.
                        </div>
</details>
{/*  FAQ Item 4  */}
<div className="group border border-surface-variant rounded-lg overflow-hidden">
<Link to="/services/life-science-advisory" className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors">
<span className="font-semibold text-on-surface">Are you available for board advisory or interim roles?</span>
<span className="material-symbols-outlined text-primary">expand_more</span>
</Link>
</div>
{/*  FAQ Item 5  */}
<div className="group border border-surface-variant rounded-lg overflow-hidden">
<Link to="/contact" className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-container-low transition-colors">
<span className="font-semibold text-on-surface">Do you handle operational finance or just strategy?</span>
<span className="material-symbols-outlined text-primary">expand_more</span>
</Link>
</div>
{/*  FAQ Item 6  */}
<details className="group border border-surface-variant rounded-lg overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-semibold text-on-surface">How quickly can we get started?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed border-t border-surface-variant/30 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-2">
                             Engagement velocity is a priority. Following an initial discovery call, we typically move through the scoping and assessment phases within 7-10 business days, allowing us to begin active strategic support or transformation work almost immediately.
                        </div>
</details>
</div>
</div>
</section>
{/*  Section 6: CTA Band  */}
<section className="bg-primary-container py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Let's Build the Right Engagement for You</h2>
<p className="text-on-primary-container text-lg mb-10 max-w-2xl mx-auto">
                    Every organization is unique. Start a conversation today to discover how a customized financial navigation partnership can accelerate your growth and stability.
                </p>
<Link to="/contact" className="bg-white text-primary-container px-10 py-5 rounded-md font-bold text-lg shadow-xl hover:bg-on-primary-container transition-all">
                    Schedule a Free Discovery Call
                </Link>
</div>
</section>
</main>
{/*  Footer (Shared Component)  */}
    </>
  );
}

export default Services;
