import { Link } from 'react-router-dom';

function LifeScienceAdvisory() {
  return (
    <>
      {/*  TopNavBar  */}

<main className="pt-20">
{/*  Section 1: Hero  */}
<section className="bg-[#EEF1F9] py-24 md:py-32 px-8 overflow-hidden">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
<div className="space-y-8">
<nav className="flex items-center space-x-2 text-sm font-medium text-on-surface-variant/70">
<span>Services</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="text-primary">Life Science Advisory</span>
</nav>
<div>
<span className="label-caps text-sm font-bold text-primary mb-4 block">Life Science Advisory</span>
<h1 className="text-5xl md:text-7xl font-extrabold text-on-surface text-editorial-display mb-6">
                            Finance Expertise Designed for the Complexity of Life Sciences
                        </h1>
<p className="text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                            Navigating the intricate intersection of biotech innovation and financial stewardship requires more than general accounting. Patrick R. Coyle provides high-level strategic advisory focused on the unique regulatory, payer, and commercial dynamics of the life sciences sector.
                        </p>
</div>
<div className="flex flex-wrap gap-4 pt-4">
<Link to="/contact" className="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold text-base shadow-lg hover:shadow-xl transition-all">
                            Schedule a Consultation
                        </Link>
<Link to="/services" className="border border-outline-variant text-on-surface px-8 py-4 rounded-lg font-bold text-base hover:bg-surface-container-high transition-all">
                            View All Services
                        </Link>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl overflow-hidden bg-primary shadow-2xl relative">
<img alt="Minimalist abstract representation of a molecular structure with deep blue accents and professional pharmaceutical laboratory aesthetic" className="w-full h-full object-cover mix-blend-overlay opacity-60" data-alt="Minimalist abstract representation of a molecular structure with deep blue accents and professional pharmaceutical laboratory aesthetic" src="/images/img_15.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
</div>
</div>
</div>
</section>
{/*  Section 2: Who It's For + Challenges  */}
<section className="bg-white py-24 px-8">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
<div className="space-y-10">
<h2 className="text-3xl font-bold text-on-surface flex items-center gap-3">
<span className="w-10 h-1 bg-primary"></span>
                        Who It's For
                    </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<h4 className="font-bold text-on-surface">Biotech CFOs</h4>
<p className="text-on-surface-variant">Strategic partners needing financial frameworks for rapid commercialization.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<h4 className="font-bold text-on-surface">Commercial Leaders</h4>
<p className="text-on-surface-variant">Navigating complex product launches and gross-to-net forecasting.</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<h4 className="font-bold text-on-surface">Market Access Teams</h4>
<p className="text-on-surface-variant">Ensuring payer dynamics and patient access align with financial targets.</p>
</div>
</li>
</ul>
</div>
<div className="space-y-10">
<h2 className="text-3xl font-bold text-on-surface flex items-center gap-3">
<span className="w-10 h-1 bg-tertiary"></span>
                        Common Challenges
                    </h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary mt-1">arrow_forward</span>
<div className="text-on-surface-variant">
                                Extreme <span className="font-bold text-on-surface">GTN Complexity</span> and unpredictable accruals.
                            </div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary mt-1">arrow_forward</span>
<div className="text-on-surface-variant">
                                Eroding <span className="font-bold text-on-surface">Patient Access Control</span> due to payer restrictions.
                            </div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary mt-1">arrow_forward</span>
<div className="text-on-surface-variant">
                                Shifting <span className="font-bold text-on-surface">Payer Dynamics</span> and rebate structures.
                            </div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary mt-1">arrow_forward</span>
<div className="text-on-surface-variant">
                                Scaling financial infrastructure for <span className="font-bold text-on-surface">Commercial Excellence</span>.
                            </div>
</li>
</ul>
</div>
</div>
</section>
{/*  Section 3: What You Get  */}
<section className="bg-surface-container-low py-24 px-8">
<div className="max-w-screen-2xl mx-auto">
<div className="text-center mb-16">
<span className="label-caps text-xs font-bold text-primary tracking-widest mb-4 block">The Deliverables</span>
<h2 className="text-4xl md:text-5xl font-bold text-on-surface">Life Science Advisory Deliverables</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  Cards  */}
<div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] hover:-translate-y-1 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6">analytics</span>
<h3 className="text-xl font-bold mb-4">GTN Optimization</h3>
<p className="text-on-surface-variant leading-relaxed">Developing robust gross-to-net models to ensure accrual accuracy and revenue predictability.</p>
</div>
<div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] hover:-translate-y-1 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6">payments</span>
<h3 className="text-xl font-bold mb-4">Patient Access Economics</h3>
<p className="text-on-surface-variant leading-relaxed">Financial modeling for copay programs, patient assistance, and hub operations.</p>
</div>
<div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] hover:-translate-y-1 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6">account_balance</span>
<h3 className="text-xl font-bold mb-4">Pricing Strategy Support</h3>
<p className="text-on-surface-variant leading-relaxed">Evaluating WAC pricing and net price realizations across varied market segments.</p>
</div>
<div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] hover:-translate-y-1 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6">layers</span>
<h3 className="text-xl font-bold mb-4">Payer Landscape Analysis</h3>
<p className="text-on-surface-variant leading-relaxed">Detailed financial impact assessments of PBM contracts and government pricing mandates.</p>
</div>
<div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] hover:-translate-y-1 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6">handshake</span>
<h3 className="text-xl font-bold mb-4">Commercial Finance Partnership</h3>
<p className="text-on-surface-variant leading-relaxed">Bridging the gap between commercial strategy and financial reporting mandates.</p>
</div>
<div className="bg-surface-container-lowest p-10 rounded-xl shadow-[0_40px_60px_-15px_rgba(31,62,146,0.06)] hover:-translate-y-1 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6">query_stats</span>
<h3 className="text-xl font-bold mb-4">Market Access Financials</h3>
<p className="text-on-surface-variant leading-relaxed">Analyzing pull-through efficiency and the true ROI of market access initiatives.</p>
</div>
</div>
</div>
</section>
{/*  Section 4: Process  */}
<section className="bg-white py-24 px-8 overflow-hidden">
<div className="max-w-screen-2xl mx-auto">
<div className="mb-20">
<h2 className="text-4xl font-bold text-on-surface">Advisory Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-0 relative">
{/*  Connector line  */}
<div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-outline-variant/30"></div>
<div className="relative z-10 space-y-6 pb-12 md:pb-0 md:pr-8">
<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold text-2xl shadow-lg border-8 border-white">1</div>
<div>
<h4 className="font-bold text-lg mb-2">Landscape Assessment</h4>
<p className="text-on-surface-variant text-sm">Deep dive into current financial structures and payer channel data.</p>
</div>
</div>
<div className="relative z-10 space-y-6 pb-12 md:pb-0 md:pr-8">
<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold text-2xl shadow-lg border-8 border-white">2</div>
<div>
<h4 className="font-bold text-lg mb-2">Economic Modeling</h4>
<p className="text-on-surface-variant text-sm">Building custom models to stress-test your commercial assumptions.</p>
</div>
</div>
<div className="relative z-10 space-y-6 pb-12 md:pb-0 md:pr-8">
<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold text-2xl shadow-lg border-8 border-white">3</div>
<div>
<h4 className="font-bold text-lg mb-2">Gap Analysis</h4>
<p className="text-on-surface-variant text-sm">Identifying leaks in gross-to-net and inefficiencies in patient support spend.</p>
</div>
</div>
<div className="relative z-10 space-y-6 pb-12 md:pb-0 md:pr-8">
<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold text-2xl shadow-lg border-8 border-white">4</div>
<div>
<h4 className="font-bold text-lg mb-2">Implementation</h4>
<p className="text-on-surface-variant text-sm">Strategic support for rolling out new financial reporting and governance.</p>
</div>
</div>
<div className="relative z-10 space-y-6">
<div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-on-primary font-bold text-2xl shadow-lg border-8 border-white">5</div>
<div>
<h4 className="font-bold text-lg mb-2">Ongoing Advisory</h4>
<p className="text-on-surface-variant text-sm">Continuous monitoring and recalibration as the market evolves.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Section 5: Featured Insight  */}
<section className="bg-surface-container-low py-24 px-8">
<div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
<div className="md:w-1/3 bg-primary p-12 flex items-center justify-center">
<div className="w-full aspect-[3/4] bg-white rounded shadow-2xl overflow-hidden relative border-4 border-primary">
<img alt="A professional book cover titled Why Pharma Funds Access But Doesn't Control It with a deep blue and white minimalist design" className="w-full h-full object-cover" data-alt="A professional book cover titled Why Pharma Funds Access But Doesn't Control It with a deep blue and white minimalist design" src="/images/img_16.jpg"/>
<div className="absolute inset-0 bg-primary/10"></div>
</div>
</div>
<div className="md:w-2/3 p-12 space-y-6">
<span className="label-caps text-xs font-bold text-primary">Featured Ebook</span>
<h2 className="text-3xl font-bold text-on-surface">Why Pharma Funds Access But Doesn't Control It</h2>
<p className="text-on-surface-variant leading-relaxed">
                        An executive guide to understanding the hidden leaks in patient access financial frameworks and how to regain commercial sovereignty through data-led stewardship.
                    </p>
<Link className="inline-flex items-center gap-2 text-primary font-bold hover:underline" to="/ebook">
                        Download Free Ebook
                        <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
</div>
</section>
{/*  Section 6: Testimonial  */}
<section className="bg-white py-24 px-8">
<div className="max-w-screen-2xl mx-auto">
<div className="border-l-8 border-primary pl-12 py-4">
<blockquote className="text-3xl md:text-4xl font-semibold text-on-surface italic leading-snug mb-8">
                        "Patrick's deep understanding of the pharmaceutical landscape was instrumental in recalibrating our gross-to-net strategy. His advisory provided the clarity we needed to protect margins during a critical product launch."
                    </blockquote>
<div>
<p className="label-caps text-sm font-bold text-on-surface">VP of Commercial Finance</p>
<p className="text-on-surface-variant">Pierre Fabre Pharmaceuticals</p>
</div>
</div>
</div>
</section>
{/*  Section 7: FAQ Accordion  */}
<section className="bg-surface-container-low py-24 px-8">
<div className="max-w-3xl mx-auto space-y-12">
<h2 className="text-4xl font-bold text-center text-on-surface">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="bg-white rounded-lg p-6 shadow-sm">
<Link to="/" className="flex justify-between items-center w-full text-left font-bold text-lg text-on-surface">
                            Do you specialize in specific therapeutic areas?
                            <span className="material-symbols-outlined">expand_more</span>
</Link>
<p className="mt-4 text-on-surface-variant leading-relaxed">Our financial frameworks are therapeutic-area agnostic, focusing on the underlying payer dynamics and commercial structures common to specialty biotech and larger pharma.</p>
</div>
<div className="bg-white rounded-lg p-6 shadow-sm">
<Link to="/" className="flex justify-between items-center w-full text-left font-bold text-lg text-on-surface">
                            Do you work with both branded and generic portfolios?
                            <span className="material-symbols-outlined">expand_more</span>
</Link>
<p className="mt-4 text-on-surface-variant leading-relaxed">While our primary focus is on high-complexity branded assets and biologics, we also consult on the financial stewardship of multi-source generic portfolios.</p>
</div>
<div className="bg-white rounded-lg p-6 shadow-sm">
<Link to="/" className="flex justify-between items-center w-full text-left font-bold text-lg text-on-surface">
                            How do you handle sensitive payer and contract data?
                            <span className="material-symbols-outlined">expand_more</span>
</Link>
<p className="mt-4 text-on-surface-variant leading-relaxed">Confidentiality is our cornerstone. We operate under strict NDAs and utilize secure data environments for all financial modeling and landscape analysis.</p>
</div>
<div className="bg-white rounded-lg p-6 shadow-sm">
<Link to="/services/life-science-advisory" className="flex justify-between items-center w-full text-left font-bold text-lg text-on-surface">
                            Is this advisory role or hands-on implementation?
                            <span className="material-symbols-outlined">expand_more</span>
</Link>
<p className="mt-4 text-on-surface-variant leading-relaxed">It is a hybrid. While we provide the strategic roadmap, we also offer project-based support to ensure models are correctly implemented within your finance systems.</p>
</div>
</div>
</div>
</section>
{/*  Section 8: CTA Band  */}
<section className="bg-primary py-20 px-8">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
<div>
<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Let's Optimize Your Life Sciences Finance Strategy</h2>
<p className="text-on-primary-container text-xl max-w-2xl">Ensure your gross-to-net and patient access models are as innovative as your science.</p>
</div>
<Link to="/contact" className="bg-white text-primary px-10 py-5 rounded-lg font-bold text-lg shadow-xl hover:scale-105 transition-all">
                    Schedule a Free Discovery Call
                </Link>
</div>
</section>
</main>
{/*  Footer  */}
    </>
  );
}

export default LifeScienceAdvisory;
