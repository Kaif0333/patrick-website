import { Link } from 'react-router-dom';

function TrainingFundamentals() {
  return (
    <>
      {/*  TopNavBar  */}
<nav className="sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md dark:bg-slate-950/80 border-b border-slate-200/50 dark:border-slate-800/50 shadow-sm shadow-blue-900/5">
<div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
<div className="flex items-center gap-8">
<span className="text-lg font-black tracking-tighter text-slate-900 dark:text-slate-50 uppercase">Patients + Profitability™</span>
<div className="hidden md:flex items-center gap-6 font-sans text-sm tracking-tight font-medium">
<Link className="text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 pb-1 cursor-pointer active:scale-95 transition-all duration-200" to="/training/fundamentals">Programs</Link>
<Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200 cursor-pointer active:scale-95" to="/about">Executive Insights</Link>
<Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200 cursor-pointer active:scale-95" to="/about">Resources</Link>
<Link className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-200 cursor-pointer active:scale-95" to="/contact">Contact</Link>
</div>
</div>
<div className="flex items-center gap-4">
<Link to="/contact" className="bg-primary-container text-on-primary px-6 py-2.5 rounded-md text-sm font-semibold tracking-tight cursor-pointer active:scale-95 transition-all duration-200">
                    Register Now
                </Link>
</div>
</div>
</nav>
<main>
{/*  Section 1: Program Hero  */}
<section className="bg-surface-container-lowest py-20 px-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-7">
<nav className="flex mb-8 text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface-variant/60">
<span>Training</span>
<span className="mx-2">/</span>
<span>Patients &amp; Profitability™</span>
<span className="mx-2">/</span>
<span className="text-primary">Finance Fundamentals for Commercial Leaders™</span>
</nav>
<span className="inline-block bg-primary-container/10 text-primary px-3 py-1 rounded text-[10px] font-bold tracking-widest uppercase mb-6 border border-primary/20">
                        COMMERCIAL FINANCE TRAINING
                    </span>
<h1 className="text-5xl md:text-6xl font-black tracking-tighter text-on-surface leading-[1.1] mb-6">
                        Finance Fundamentals for Commercial Leaders™
                    </h1>
<p className="text-2xl font-medium text-primary mb-8 tracking-tight italic">
                        Financial Fluency for the People Who Drive Revenue
                    </p>
<p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-2xl">
                        Sales directors, marketing managers, market access teams, and commercial leaders make financial decisions every day — without always speaking the language of finance. This practical, jargon-free program closes that gap. Participants leave with the confidence to read a P&amp;L, understand GTN, and have sharper conversations with finance.
                    </p>
<div className="flex flex-wrap gap-4 mb-12">
<Link to="/training" className="bg-primary-container text-on-primary px-8 py-4 rounded-md font-bold tracking-tight hover:bg-primary transition-all duration-200 active:scale-95">
                            Request This Workshop
                        </Link>
<Link to="/ebook" className="border border-outline-variant/40 bg-surface-container-low text-on-surface px-8 py-4 rounded-md font-bold tracking-tight hover:bg-surface-container-high transition-all duration-200 active:scale-95">
                            Download Overview
                        </Link>
</div>
<div className="flex items-center gap-10 border-t border-surface-variant pt-8">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="schedule">schedule</span>
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Half-day Workshop</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="hub">hub</span>
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">In-person or Virtual</span>
</div>
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="groups">groups</span>
<span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Groups of 5–50</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative">
<div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden relative group">
<img alt="Commercial team workshop" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" data-alt="Modern high-end office setting with professional commercial team reviewing financial charts on a large screen in a bright blue-toned room" src="/images/img_23.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
</div>
<div className="absolute -bottom-6 -left-6 bg-primary-container text-on-primary p-8 rounded-lg shadow-2xl max-w-[240px]">
<span className="text-4xl font-black block mb-2">100%</span>
<p className="text-xs font-medium leading-tight opacity-90 uppercase tracking-widest">Tailored to Life Sciences Commercial Realities</p>
</div>
</div>
</div>
</section>
{/*  Section 2: Learning Outcomes  */}
<section className="bg-surface-container-low py-24 px-8">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-20">
<span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Core Competencies</span>
<h2 className="text-4xl font-black tracking-tight text-on-surface">What Commercial Leaders Will Walk Away With</h2>
<div className="w-16 h-1 bg-primary-container mt-6"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Card 1  */}
<div className="bg-surface-container-lowest p-10 rounded-lg hover:shadow-[0_40px_60px_-15px_rgba(31,62,146,0.08)] transition-all duration-300 group">
<div className="w-12 h-12 bg-primary-container/5 rounded flex items-center justify-center mb-8 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-on-primary group-open:text-primary group-open:rotate-45 transition-transform duration-300" data-icon="account_balance_wallet">account_balance_wallet</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">P&amp;L Confidence</h3>
<p className="text-on-surface-variant leading-relaxed">Read, interpret, and discuss a P&amp;L without relying on your finance team.</p>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest p-10 rounded-lg hover:shadow-[0_40px_60px_-15px_rgba(31,62,146,0.08)] transition-all duration-300 group">
<div className="w-12 h-12 bg-primary-container/5 rounded flex items-center justify-center mb-8 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-on-primary group-open:text-primary group-open:rotate-45 transition-transform duration-300" data-icon="monitoring">monitoring</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Budget Fluency</h3>
<p className="text-on-surface-variant leading-relaxed">Understand how budgets are set, why variances matter, and how to defend your spend.</p>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-lowest p-10 rounded-lg hover:shadow-[0_40px_60px_-15px_rgba(31,62,146,0.08)] transition-all duration-300 group">
<div className="w-12 h-12 bg-primary-container/5 rounded flex items-center justify-center mb-8 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-on-primary group-open:text-primary group-open:rotate-45 transition-transform duration-300" data-icon="receipt_long">receipt_long</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">GTN Basics</h3>
<p className="text-on-surface-variant leading-relaxed">Know what gross-to-net means and how it affects the products and programs you manage.</p>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-lowest p-10 rounded-lg hover:shadow-[0_40px_60px_-15px_rgba(31,62,146,0.08)] transition-all duration-300 group">
<div className="w-12 h-12 bg-primary-container/5 rounded flex items-center justify-center mb-8 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-on-primary group-open:text-primary group-open:rotate-45 transition-transform duration-300" data-icon="query_stats">query_stats</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">ROI Thinking</h3>
<p className="text-on-surface-variant leading-relaxed">Apply return-on-investment frameworks to commercial decisions and proposals.</p>
</div>
{/*  Card 5  */}
<div className="bg-surface-container-lowest p-10 rounded-lg hover:shadow-[0_40px_60px_-15px_rgba(31,62,146,0.08)] transition-all duration-300 group">
<div className="w-12 h-12 bg-primary-container/5 rounded flex items-center justify-center mb-8 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-on-primary group-open:text-primary group-open:rotate-45 transition-transform duration-300" data-icon="forum">forum</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Finance Conversations</h3>
<p className="text-on-surface-variant leading-relaxed">Communicate financial impact clearly to finance business partners and CFOs.</p>
</div>
{/*  Card 6  */}
<div className="bg-surface-container-lowest p-10 rounded-lg hover:shadow-[0_40px_60px_-15px_rgba(31,62,146,0.08)] transition-all duration-300 group">
<div className="w-12 h-12 bg-primary-container/5 rounded flex items-center justify-center mb-8 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-primary group-hover:text-on-primary group-open:text-primary group-open:rotate-45 transition-transform duration-300" data-icon="timeline">timeline</span>
</div>
<h3 className="text-xl font-bold mb-4 tracking-tight">Forecast &amp; Planning Basics</h3>
<p className="text-on-surface-variant leading-relaxed">Understand how forecasts are built and how your inputs shape financial outcomes.</p>
</div>
</div>
</div>
</section>
{/*  Section 3: Curriculum Accordion  */}
<section className="bg-surface-container-lowest py-24 px-8">
<div className="max-w-4xl mx-auto">
<div className="mb-16">
<h2 className="text-4xl font-black tracking-tight text-on-surface mb-4">What's Covered</h2>
<p className="text-on-surface-variant">A modular approach designed to be absorbed in a high-intensity half-day session.</p>
</div>
<div className="space-y-4">
{/*  Module 1  */}
<details className="border-b border-surface-variant pb-6 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">
<div className="flex items-center gap-6">
<span className="text-sm font-bold text-primary/40">01</span>
<h4 className="text-xl font-bold text-on-surface group-hover:text-primary group-open:text-primary transition-colors">The Commercial Leader's Finance Toolkit</h4>
</div>
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="add">add</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 ml-16 text-on-surface-variant leading-relaxed">Essential financial concepts every commercial leader needs to know. Focus on the core building blocks of corporate finance in a pharma context.</div>
</details>
{/*  Module 2  */}
<details className="border-b border-surface-variant pb-6 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<div className="flex items-center gap-6">
<span className="text-sm font-bold text-primary/40">02</span>
<h4 className="text-xl font-bold text-on-surface group-hover:text-primary group-open:text-primary transition-colors">Reading the P&amp;L — Without Getting Lost</h4>
</div>
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="add">add</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 ml-16 text-on-surface-variant leading-relaxed">Line-by-line walkthrough of a life sciences P&amp;L. Real examples, no jargon. Learn to spot the story behind the numbers.</div>
</details>
{/*  Module 3  */}
<details className="border-b border-surface-variant pb-6 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<div className="flex items-center gap-6">
<span className="text-sm font-bold text-primary/40">03</span>
<h4 className="text-xl font-bold text-on-surface group-hover:text-primary group-open:text-primary transition-colors">Budgets, Forecasts &amp; Variances</h4>
</div>
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="add">add</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 ml-16 text-on-surface-variant leading-relaxed">How planning works, where forecasts come from, and what happens when numbers change mid-year.</div>
</details>
{/*  Module 4  */}
<details className="border-b border-surface-variant pb-6 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<div className="flex items-center gap-6">
<span className="text-sm font-bold text-primary/40">04</span>
<h4 className="text-xl font-bold text-on-surface group-hover:text-primary group-open:text-primary transition-colors">Gross-to-Net Demystified</h4>
</div>
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="add">add</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 ml-16 text-on-surface-variant leading-relaxed">Plain-language overview of GTN, rebates, chargebacks, and what impacts net price in today's complex market.</div>
</details>
{/*  Module 5  */}
<details className="border-b border-surface-variant pb-6 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<div className="flex items-center gap-6">
<span className="text-sm font-bold text-primary/40">05</span>
<h4 className="text-xl font-bold text-on-surface group-hover:text-primary group-open:text-primary transition-colors">Making the Financial Case</h4>
</div>
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="add">add</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 ml-16 text-on-surface-variant leading-relaxed">How to build a business case, calculate ROI, and win budget approval for your next major initiative.</div>
</details>
{/*  Module 6  */}
<details className="pb-6 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<div className="flex items-center gap-6">
<span className="text-sm font-bold text-primary/40">06</span>
<h4 className="text-xl font-bold text-on-surface group-hover:text-primary group-open:text-primary transition-colors">Working with Finance Partners</h4>
</div>
<span className="material-symbols-outlined text-primary group-open:rotate-45 transition-transform duration-300" data-icon="add">add</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 ml-16 text-on-surface-variant leading-relaxed">How to be a better partner to your finance business partner — and get more from the relationship.</div>
</details>
</div>
</div>
</section>
{/*  Section 4: Who It's For  */}
<section className="bg-surface-container-low py-24 px-8 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
<div className="max-w-2xl">
<h2 className="text-4xl font-black tracking-tight text-on-surface mb-4">This Program Is Designed For...</h2>
<p className="text-on-surface-variant">Tailored content for the unique pressures of pharmaceutical commercial operations.</p>
</div>
<div className="mt-8 md:mt-0 flex flex-col items-end">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary-container/10 px-4 py-2 rounded">No prerequisites required</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-surface-container-lowest p-8 border-l-4 border-primary">
<h5 className="text-lg font-bold mb-3">Sales &amp; Key Account Leaders</h5>
<p className="text-sm text-on-surface-variant leading-relaxed italic">Directors and managers responsible for revenue and customer relationships.</p>
</div>
<div className="bg-surface-container-lowest p-8 border-l-4 border-primary/60">
<h5 className="text-lg font-bold mb-3">Marketing &amp; Brand Teams</h5>
<p className="text-sm text-on-surface-variant leading-relaxed italic">Brand managers and marketing directors who manage budget and promotional spend.</p>
</div>
<div className="bg-surface-container-lowest p-8 border-l-4 border-primary/40">
<h5 className="text-lg font-bold mb-3">Market Access Teams</h5>
<p className="text-sm text-on-surface-variant leading-relaxed italic">Access managers and directors working with GTN, rebates, and payer strategy.</p>
</div>
<div className="bg-surface-container-lowest p-8 border-l-4 border-primary/20">
<h5 className="text-lg font-bold mb-3">Commercial Operations</h5>
<p className="text-sm text-on-surface-variant leading-relaxed italic">Ops leaders supporting field teams and commercial infrastructure decisions.</p>
</div>
</div>
</div>
</section>
{/*  Section 5: Format & Logistics  */}
<section className="bg-surface-container-lowest py-20 px-8">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-primary font-black text-3xl mb-1">4 HRS</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Duration</div>
</div>
<div className="text-center">
<div className="text-primary font-black text-3xl mb-1">HYBRID</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">In-person or virtual</div>
</div>
<div className="text-center">
<div className="text-primary font-black text-3xl mb-1">5–50</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Group Size</div>
</div>
<div className="text-center">
<div className="text-primary font-black text-3xl mb-1">TAILORED</div>
<div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">100% Customization</div>
</div>
</div>
</section>
{/*  Section 6: Testimonial + Ebook  */}
<section className="bg-surface-container-lowest py-24 px-8 border-t border-surface-variant">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
<div className="lg:col-span-7">
<span className="material-symbols-outlined text-primary text-5xl opacity-20 mb-6" data-icon="format_quote">format_quote</span>
<blockquote className="text-3xl font-medium tracking-tight leading-snug mb-8 text-on-surface">
                        "Patrick really impressed us with his unique expertise combining finance, specialty distribution understanding and knowledge of the latest patient access tools."
                    </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-1 bg-primary"></div>
<div className="text-xs font-bold uppercase tracking-[0.2em] text-on-surface">VP, Pierre Fabre Pharmaceuticals</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="bg-surface-container-low p-10 rounded-lg flex gap-8 items-start relative overflow-hidden group">
<div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-all"></div>
<div className="shrink-0 w-32 shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
<img alt="Ebook Cover" className="w-full aspect-[3/4] object-cover" data-alt="Minimalist business ebook cover titled 'Why Pharma Funds Access But Doesn't Control It' with blue abstract geometric shapes" src="/images/img_24.jpg"/>
</div>
<div>
<span className="text-[10px] font-black tracking-widest text-primary uppercase block mb-2">Also Available</span>
<h4 className="text-lg font-bold mb-4 tracking-tight">Free Ebook — 'Why Pharma Funds Access But Doesn't Control It'</h4>
<Link className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest group/link" to="/ebook">
                                Download Free
                                <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
</Link>
</div>
</div>
</div>
</div>
</section>
{/*  Section 7: CTA Band  */}
<section className="bg-primary-container text-on-primary py-24 px-8 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-50"></div>
<div className="relative z-10 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Give Your Commercial Team a Financial Edge</h2>
<p className="text-xl text-on-primary-container mb-12 max-w-2xl mx-auto leading-relaxed">
                    This program is available as a half-day workshop for teams of 5 to 50. Contact Patrick to customize it for your business.
                </p>
<Link to="/training" className="bg-white text-primary px-10 py-5 rounded-md font-black tracking-tight text-lg shadow-xl hover:shadow-2xl transition-all active:scale-95">
                    Request a Workshop
                </Link>
</div>
</section>
</main>
{/*  Footer  */}
    </>
  );
}

export default TrainingFundamentals;
