import { Link, useNavigate } from 'react-router-dom';

function EbookLanding() {
  const navigate = useNavigate();

  return (
    <>
      {/*  TopNavBar  */}

<main className="pt-20">
{/*  Section 1: Hero  */}
<section className="bg-surface-container-lowest py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center px-3 py-1 bg-surface-container-low border-l-4 border-primary text-primary font-label text-xs font-bold tracking-widest uppercase">
                        FREE EBOOK | Patients + Profitability™
                    </div>
<h1 className="text-5xl lg:text-7xl font-headline font-black text-on-surface tracking-tighter leading-[1.1]">
                        Why Pharma Funds Access But Doesn't Control It
                    </h1>
<p className="text-xl text-on-surface-variant leading-relaxed max-w-2xl">
                        Explore the intricate economics of patient access. Understand why traditional funding models are leaking value and how to regain strategic command over your commercial channels.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-on-surface font-medium">Uncover the hidden leakages in Gross-to-Net (GTN) mechanics.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-on-surface font-medium">Analyze the impact of 340B dynamics on your bottom line.</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary mt-1" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-on-surface font-medium">Develop sovereign optimization strategies for market access.</span>
</li>
</ul>
<div className="flex items-center gap-4 pt-6 border-t border-surface-variant max-w-md">
<div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover" data-alt="professional portrait of an executive male in business attire with a confident expression and neutral office background" src="/founder.jpg" />
</div>
<div>
<p className="text-sm font-label font-bold tracking-widest uppercase text-on-surface-variant">Author</p>
<p className="text-lg font-bold text-on-surface">Patrick R. Coyle, MBA</p>
</div>
</div>
<div className="relative group max-w-sm pt-8">
<div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-110 -z-10 group-hover:bg-primary/20 transition-colors"></div>
<img className="rounded-lg executive-shadow border-4 border-white transform hover:-rotate-2 transition-transform duration-500" data-alt="3D professional ebook cover with blue background, bold yellow title 'Why Pharma Funds Access But Doesn't Control It', featuring a stylized dollar bill icon and Patients + Profitability logo" src="/images/img_2.jpg" />
</div>
</div>
<div className="lg:col-span-5">
<div className="bg-surface-container-lowest executive-shadow border border-surface-variant p-10 rounded-xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
<h2 className="text-2xl font-headline font-bold text-on-surface mb-2">Get Your Free Copy</h2>
<p className="text-on-surface-variant mb-8">Join hundreds of biotech leaders mastering the economics of access.</p>
<form onSubmit={(e) => { e.preventDefault(); window.location.href = '/ebook/thank-you'; }} className="space-y-6">
<div>
<label className="block text-xs font-label font-bold tracking-widest uppercase text-on-surface-variant mb-2">First Name (Optional)</label>
<input className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="John Doe" type="text" />
</div>
<div>
<label className="block text-xs font-label font-bold tracking-widest uppercase text-on-surface-variant mb-2">Email Address (Required)</label>
<input className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-md focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="j.doe@pharma.com" required={true} type="email" />
</div>
<div className="flex items-start gap-3">
<input className="mt-1 rounded text-primary focus:ring-primary" id="newsletter" type="checkbox" />
<label className="text-sm text-on-surface-variant leading-tight" htmlFor="newsletter">
                                    Yes, I'd like to receive the Patients + Profitability™ newsletter and tactical pharma insights.
                                </label>
</div>
<Link to="/ebook/thank-you" className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-colors cursor-pointer w-full text-center block">Get the Free Ebook</Link>
</form>
<p className="mt-6 text-center text-xs text-on-surface-variant">
                            We respect your privacy. No spam, ever.
                        </p>
</div>
</div>
</div>
</section>
{/*  Section 2: What You'll Learn  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16 space-y-4">
<h2 className="text-4xl lg:text-5xl font-headline font-black tracking-tight">What's Inside the Ebook</h2>
<div className="h-1 w-20 bg-primary mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Cards  */}
<div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-primary-container transition-all group">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
<h3 className="text-xl font-bold mb-4">Access Paradox</h3>
<p className="text-on-surface-variant leading-relaxed">Deconstructing why increased funding often leads to decreased clinical control and patient outcomes.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-primary-container transition-all">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>calculate</span>
<h3 className="text-xl font-bold mb-4">GTN Mechanics</h3>
<p className="text-on-surface-variant leading-relaxed">A deep dive into Gross-to-Net erosion and how to visualize the leakage points in your current model.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-primary-container transition-all">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
<h3 className="text-xl font-bold mb-4">Access Economics</h3>
<p className="text-on-surface-variant leading-relaxed">Financial modeling of patient pathways and the real cost of 'frictionless' access strategies.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-primary-container transition-all">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>account_tree</span>
<h3 className="text-xl font-bold mb-4">340B Dynamics</h3>
<p className="text-on-surface-variant leading-relaxed">Navigating the complexities of contract pharmacies and the ballooning 340B ecosystem.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-primary-container transition-all">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>trending_up</span>
<h3 className="text-xl font-bold mb-4">Optimization Strategies</h3>
<p className="text-on-surface-variant leading-relaxed">Actionable frameworks to pivot from passive funding to active channel stewardship.</p>
</div>
<div className="bg-surface-container-lowest p-8 rounded-xl border border-transparent hover:border-primary-container transition-all">
<span className="material-symbols-outlined text-primary text-4xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>admin_panel_settings</span>
<h3 className="text-xl font-bold mb-4">Financial Controls</h3>
<p className="text-on-surface-variant leading-relaxed">Implementing governance that protects margins while ensuring patients get the therapies they need.</p>
</div>
</div>
</div>
</section>
{/*  Section 3: Who It's For  */}
<section className="bg-surface-container-lowest py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-4xl lg:text-5xl font-headline font-black tracking-tight mb-6">This Ebook Is For You If...</h2>
<p className="text-xl text-on-surface-variant">The content is specifically curated for leaders in the high-stakes world of life sciences and commercial biotech.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 border-l-2 border-surface-variant bg-surface-container-low hover:bg-white hover:executive-shadow transition-all group">
<p className="text-xs font-label font-black tracking-widest uppercase text-primary mb-4">Executive</p>
<h3 className="text-2xl font-bold mb-4 leading-tight">CFOs</h3>
<p className="text-on-surface-variant">Looking to plug margin leaks and find the hidden profit centers within patient access programs.</p>
</div>
<div className="p-8 border-l-2 border-surface-variant bg-surface-container-low hover:bg-white hover:executive-shadow transition-all group">
<p className="text-xs font-label font-black tracking-widest uppercase text-primary mb-4">Leadership</p>
<h3 className="text-2xl font-bold mb-4 leading-tight">Commercial Leaders</h3>
<p className="text-on-surface-variant">Seeking to balance aggressive launch trajectories with long-term commercial sustainability.</p>
</div>
<div className="p-8 border-l-2 border-surface-variant bg-surface-container-low hover:bg-white hover:executive-shadow transition-all group">
<p className="text-xs font-label font-black tracking-widest uppercase text-primary mb-4">Strategy</p>
<h3 className="text-2xl font-bold mb-4 leading-tight">Market Access</h3>
<p className="text-on-surface-variant">Designing sovereign strategies that don't just rely on high-rebate PBM contracts.</p>
</div>
<div className="p-8 border-l-2 border-surface-variant bg-surface-container-low hover:bg-white hover:executive-shadow transition-all group">
<p className="text-xs font-label font-black tracking-widest uppercase text-primary mb-4">Operations</p>
<h3 className="text-2xl font-bold mb-4 leading-tight">Finance Partners</h3>
<p className="text-on-surface-variant">Tasked with calculating the ROI of complex distribution and specialty pharmacy networks.</p>
</div>
</div>
</div>
</section>
{/*  Section 4: About Author  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-square bg-surface-variant rounded-xl overflow-hidden shadow-2xl">
<img className="w-full h-full object-cover" data-alt="professional editorial headshot of Patrick R. Coyle in a modern architectural setting, natural lighting, wearing a navy blazer, high-end business portrait style" src="/founder.jpg" />
</div>
<div className="absolute -bottom-6 -right-6 editorial-gradient p-8 rounded-lg shadow-xl hidden md:block">
<p className="text-white font-headline font-bold text-2xl">15+ Years</p>
<p className="text-primary-fixed text-sm uppercase tracking-widest font-label font-bold">Biotech Experience</p>
</div>
</div>
<div className="space-y-8">
<h3 className="text-4xl font-headline font-black tracking-tight text-on-surface">About the Author</h3>
<div className="space-y-4 text-lg text-on-surface-variant leading-relaxed">
<p>
                                Patrick R. Coyle, MBA, is a recognized expert in pharmaceutical market access and the architect behind the **Patients + Profitability™** framework. He has spent over 15 years navigating the complex intersection of finance and commercial operations in the life sciences sector.
                            </p>
<p>
                                His work focuses on transforming passive funding models into active channel stewardship, helping biotech firms recover lost margins without compromising patient outcomes. He is a frequent speaker and advisor to emerging pharmaceutical companies.
                            </p>
</div>
<Link className="inline-flex items-center gap-3 bg-surface-container-highest text-on-surface font-bold px-8 py-4 rounded-md hover:bg-surface-variant transition-colors group" to="https://www.linkedin.com/in/pcoyle/" target="_blank">
<span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">person_add</span>
                            Connect on LinkedIn
                        </Link>
</div>
</div>
</div>
</section>
{/*  Section 6: Testimonial  */}
<section className="bg-surface-container-lowest py-24">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="material-symbols-outlined text-primary/20 text-8xl mb-8">format_quote</span>
<blockquote className="text-3xl lg:text-4xl font-headline font-bold text-on-surface leading-tight italic mb-10">
                    "Patrick provides a unique, highly specialized lens on the economics of access that is often missing in traditional commercial discussions. This ebook is essential reading for anyone serious about Gross-to-Net optimization."
                </blockquote>
<div className="space-y-1">
<p className="font-label font-black tracking-widest uppercase text-primary">Vice President</p>
<p className="text-xl font-bold text-on-surface">Pierre Fabre Pharmaceuticals</p>
</div>
</div>
</section>
{/*  Section 7: FAQ  */}
<section className="bg-surface-container-low py-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-headline font-black text-center mb-16">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="bg-surface-container-lowest border border-surface-variant rounded-lg overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-bold text-lg">Who is this ebook specifically designed for?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed border-t border-surface-variant/30 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-2">
It is designed for leaders in the high-stakes world of life sciences and commercial biotech.
</div>
</details>
<details className="bg-surface-container-lowest border border-surface-variant rounded-lg overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-bold text-lg">Is this purely about financial modeling?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed border-t border-surface-variant/30 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-2">
No, it focuses on actionable frameworks for channel strategy and active distribution network stewardship.
</div>
</details>
<details className="bg-surface-container-lowest border border-surface-variant rounded-lg overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-bold text-lg">How long is the ebook?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed border-t border-surface-variant/30 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-2">
It is a comprehensive 45-page executive briefing designed to be absorbed in a single reading.
</div>
</details>
<details className="bg-surface-container-lowest border border-surface-variant rounded-lg overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-bold text-lg">Are there real-world case studies inside?</span>
<span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed border-t border-surface-variant/30 pt-4 hidden group-open:block animate-in fade-in slide-in-from-top-2">
Yes, the ebook contains multiple anonymized case studies demonstrating Gross-to-Net margin recovery in action.
</div>
</details>
</div>
</div>
</section>
{/*  Section 5: High-Contrast Opt-in  */}
<section className="py-24 px-6 bg-surface-container-low">
<div className="max-w-6xl mx-auto">
<div className="bg-primary rounded-3xl p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
{/* Decorative background elements */}
<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -ml-24 -mb-24"></div>

<div className="relative z-10 space-y-10">
<h2 className="text-4xl lg:text-6xl font-headline font-black text-white leading-tight tracking-tighter">
                        Regain Control of Your <br className="hidden md:block" /> Patient Access Strategy
                    </h2>
<p className="text-white/80 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Download the free ebook today and start applying the Patients + Profitability™ framework to your commercial model.
                    </p>

<div className="max-w-3xl mx-auto">
<form 
  onSubmit={(e) => { 
    e.preventDefault(); 
    navigate('/ebook/thank-you'); 
  }} 
  className="flex flex-col md:flex-row gap-4"
>
<input 
  className="flex-grow px-8 py-5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder:text-white/50 focus:ring-4 focus:ring-white/20 focus:border-white transition-all outline-none text-lg" 
  placeholder="Your executive email" 
  required={true}
  type="email" 
/>
<button 
  type="submit"
  className="bg-white text-primary px-10 py-5 rounded-xl font-black text-lg hover:bg-slate-50 transition-all uppercase tracking-widest flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
>
  Get Access <span className="material-symbols-outlined font-bold">arrow_forward</span>
</button>
</form>
<p className="text-white/40 text-sm mt-8 font-label uppercase tracking-widest">
  Join 1,200+ pharma executives receiving these insights.
</p>
</div>
</div>
</div>
</div>
</section>
</main>
{/*  Footer  */}
    </>
  );
}

export default EbookLanding;