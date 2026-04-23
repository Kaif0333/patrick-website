import { Link } from 'react-router-dom';


function FinancialTransformation() {
  return (
    <>
      {/*  Header Navigation  */}

<main>
{/*  Section 1: Hero  */}
<section className="bg-primary-container text-white py-24 md:py-32">
<div className="max-w-screen-2xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-[55%]">
<nav className="flex items-center gap-2 mb-6 text-sm text-white/80">
<span>Services</span>
<span className="material-symbols-outlined text-xs">chevron_right</span>
<span className="font-medium text-white">Financial Transformation</span>
</nav>
<p className="label-md uppercase tracking-[0.2em] font-bold text-white/90 mb-4">FINANCIAL TRANSFORMATION</p>
<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
                        Transform Your Finance Function Into a Strategic Engine
                    </h1>
<p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
                        Navigate the complexities of enterprise-scale finance modernization. We align your data architecture, technology stack, and human capital to drive agile, predictive decision-making across the organization.
                    </p>
<div className="flex flex-wrap gap-4">
<Link to="/services/financial-transformation" className="bg-surface-container-lowest text-primary font-bold px-8 py-4 rounded-md shadow-lg hover:bg-surface transition-colors active:scale-95">
                            Start Your Transformation
                        </Link>
<Link to="/about" className="border border-white/30 text-white font-bold px-8 py-4 rounded-md hover:bg-white/10 transition-colors active:scale-95">
                            See Case Approach
                        </Link>
</div>
</div>
<div className="w-full md:w-[45%]">
<div className="relative rounded-xl overflow-hidden aspect-square shadow-2xl">
<img className="w-full h-full object-cover" data-alt="abstract digital data visualization with blue and white glowing lines representing financial connectivity and digital transformation in a modern office aesthetic" src="/images/img_7.jpg"/>
<div className="absolute inset-0 bg-primary/20 backdrop-overlay"></div>
</div>
</div>
</div>
</section>
{/*  Section 2: Audience & Challenges  */}
<section className="py-24 bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-24">
<div className="space-y-8">
<h2 className="text-3xl font-bold tracking-tight text-on-surface">Who It's For</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<span className="material-symbols-outlined text-primary-container font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-lg text-on-surface-variant font-medium">CFOs &amp; COOs leading organizational pivots</span>
</li>
<li className="flex gap-4">
<span className="material-symbols-outlined text-primary-container font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-lg text-on-surface-variant font-medium">Finance teams burdened by manual reconciliations</span>
</li>
<li className="flex gap-4">
<span className="material-symbols-outlined text-primary-container font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-lg text-on-surface-variant font-medium">Firms evaluating ERP/EPM migrations</span>
</li>
<li className="flex gap-4">
<span className="material-symbols-outlined text-primary-container font-bold" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
<span className="text-lg text-on-surface-variant font-medium">High-growth companies scaling operations</span>
</li>
</ul>
</div>
<div className="space-y-8 border-l border-surface-variant pl-12">
<h2 className="text-3xl font-bold tracking-tight text-on-surface">Common Challenges</h2>
<ul className="space-y-6">
<li className="flex gap-4 items-center">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
<span className="text-lg text-on-surface-variant">Data preparation consuming 80% of team time</span>
</li>
<li className="flex gap-4 items-center">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
<span className="text-lg text-on-surface-variant">Disconnected systems creating "multiple truths"</span>
</li>
<li className="flex gap-4 items-center">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
<span className="text-lg text-on-surface-variant">Poor forecast accuracy impacting investor confidence</span>
</li>
<li className="flex gap-4 items-center">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
<span className="text-lg text-on-surface-variant">Backward-looking reporting lacking strategic insight</span>
</li>
<li className="flex gap-4 items-center">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
<span className="text-lg text-on-surface-variant">History of failed digital initiatives</span>
</li>
</ul>
</div>
</div>
</section>
{/*  Section 3: Deliverables  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="mb-16">
<h2 className="text-4xl font-bold tracking-tight text-on-surface mb-4">Financial Transformation Deliverables</h2>
<div className="w-24 h-1 bg-primary"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/*  Card 1  */}
<div className="bg-surface-container-lowest p-10 rounded-lg group hover:shadow-2xl transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">map</span>
<h3 className="text-xl font-bold mb-4">Technology Roadmap</h3>
<p className="text-on-surface-variant leading-relaxed">A comprehensive multi-year strategy aligning business goals with a scalable architecture of ERP, EPM, and BI tools.</p>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-lowest p-10 rounded-lg group hover:shadow-2xl transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">settings_input_component</span>
<h3 className="text-xl font-bold mb-4">ERP &amp; EPM Implementation</h3>
<p className="text-on-surface-variant leading-relaxed">Expert guidance through the full lifecycle of SAP, Oracle, and Planful deployments to ensure project ROI.</p>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-lowest p-10 rounded-lg group hover:shadow-2xl transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">robot_2</span>
<h3 className="text-xl font-bold mb-4">Process Automation</h3>
<p className="text-on-surface-variant leading-relaxed">Streamlining close cycles and FP&amp;A workflows through RPA and intelligent automation frameworks.</p>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-lowest p-10 rounded-lg group hover:shadow-2xl transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">database</span>
<h3 className="text-xl font-bold mb-4">Data Architecture &amp; Governance</h3>
<p className="text-on-surface-variant leading-relaxed">Establishing a single source of truth with rigorous master data management and integration protocols.</p>
</div>
{/*  Card 5  */}
<div className="bg-surface-container-lowest p-10 rounded-lg group hover:shadow-2xl transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">diversity_3</span>
<h3 className="text-xl font-bold mb-4">Change Management</h3>
<p className="text-on-surface-variant leading-relaxed">Structured methodologies to ensure organizational buy-in and minimize disruption during major transitions.</p>
</div>
{/*  Card 6  */}
<div className="bg-surface-container-lowest p-10 rounded-lg group hover:shadow-2xl transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">psychology</span>
<h3 className="text-xl font-bold mb-4">Team Enablement</h3>
<p className="text-on-surface-variant leading-relaxed">Upskilling finance professionals to transition from transactional processors to strategic business partners.</p>
</div>
</div>
</div>
</section>
{/*  Section 4: Process  */}
<section className="py-24 bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto px-8">
<h2 className="text-4xl font-bold tracking-tight text-on-surface mb-20 text-center">Transformation Methodology</h2>
<div className="relative">
<div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-surface-variant -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 relative z-10">
<div className="bg-surface-container-lowest text-center">
<div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">1</div>
<h3 className="font-bold text-lg mb-4">Current State Assessment</h3>
<p className="text-on-surface-variant text-sm">Auditing existing systems, silos, and operational bottlenecks.</p>
</div>
<div className="bg-surface-container-lowest text-center">
<div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">2</div>
<h3 className="font-bold text-lg mb-4">Future State Design</h3>
<p className="text-on-surface-variant text-sm">Visualizing a frictionless, data-driven finance environment.</p>
</div>
<div className="bg-surface-container-lowest text-center">
<div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">3</div>
<h3 className="font-bold text-lg mb-4">Vendor Selection &amp; Scoping</h3>
<p className="text-on-surface-variant text-sm">Identifying the right software partners for your specific needs.</p>
</div>
<div className="bg-surface-container-lowest text-center">
<div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">4</div>
<h3 className="font-bold text-lg mb-4">Implementation Leadership</h3>
<p className="text-on-surface-variant text-sm">Hands-on project steering from kick-off to deployment.</p>
</div>
<div className="bg-surface-container-lowest text-center">
<div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-xl">5</div>
<h3 className="font-bold text-lg mb-4">Go-Live &amp; Sustainment</h3>
<p className="text-on-surface-variant text-sm">Continuous optimization and governance post-launch.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Section 5: Testimonial  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-screen-xl mx-auto px-8">
<div className="bg-white p-12 md:p-20 rounded-2xl shadow-xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
<span className="material-symbols-outlined text-primary-container text-6xl mb-8 opacity-20">format_quote</span>
<p className="text-2xl md:text-3xl font-medium text-on-surface leading-snug mb-12 italic">
                        "Patrick's visionary leadership in financial systems is unparalleled. His track record with enterprise SAP and Oracle deployments has fundamentally reshaped how our teams interact with data, moving us from reactive reporting to proactive strategy."
                    </p>
<div className="flex items-center gap-6">
<div className="w-16 h-16 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" data-alt="professional portrait of a senior director in a tailored suit, soft studio lighting, professional corporate aesthetic" src="/images/img_8.jpg"/>
</div>
<div>
<p className="font-bold text-lg text-on-surface">Senior Director</p>
<p className="text-primary font-semibold label-md tracking-wider">RGP ADVISORY</p>
</div>
</div>
</div>
</div>
</section>
{/*  Section 6: Tools & Platforms  */}
<section className="py-24 bg-surface-container-lowest">
<div className="max-w-screen-2xl mx-auto px-8 text-center">
<h2 className="text-3xl font-bold text-on-surface mb-12">Systems &amp; Platforms Experience</h2>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<span className="px-8 py-3 bg-surface-container-low rounded-full font-bold text-on-surface border border-surface-variant/50">SAP</span>
<span className="px-8 py-3 bg-surface-container-low rounded-full font-bold text-on-surface border border-surface-variant/50">Oracle</span>
<span className="px-8 py-3 bg-surface-container-low rounded-full font-bold text-on-surface border border-surface-variant/50">Planful</span>
<span className="px-8 py-3 bg-surface-container-low rounded-full font-bold text-on-surface border border-surface-variant/50">Hyperion</span>
<span className="px-8 py-3 bg-surface-container-low rounded-full font-bold text-on-surface border border-surface-variant/50">Workday Adaptive</span>
<span className="px-8 py-3 bg-surface-container-low rounded-full font-bold text-on-surface border border-surface-variant/50">Power BI</span>
<span className="px-8 py-3 bg-surface-container-low rounded-full font-bold text-on-surface border border-surface-variant/50">Tableau</span>
<span className="px-8 py-3 bg-surface-container-low rounded-full font-bold text-on-surface border border-surface-variant/50">Excel</span>
</div>
<p className="text-on-surface-variant font-medium text-lg italic">"Platform-agnostic advisory – choosing the right tool for the unique organizational context."</p>
</div>
</section>
{/*  Section 7: FAQ  */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-screen-lg mx-auto px-8">
<h2 className="text-3xl font-bold text-on-surface mb-12 text-center">Transformation FAQs</h2>
<div className="space-y-4">
<div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-variant/20">
<Link to="/services/financial-transformation" className="flex items-center justify-between w-full text-left font-bold text-lg text-on-surface">
<span>How long does a typical transformation take?</span>
<span className="material-symbols-outlined">expand_more</span>
</Link>
<div className="mt-4 text-on-surface-variant leading-relaxed">
                            While dependending on complexity, most foundational transformations range from 6 to 18 months, with quick-win results appearing within the first 90 days.
                        </div>
</div>
<details className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-variant/20 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span>What are the primary reasons these projects fail?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 text-on-surface-variant leading-relaxed">
                            Failure often stems from poor data governance, lack of executive buy-in, or attempting to automate broken manual processes without first redesigning them.
                        </div>
</details>
<details className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-variant/20 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span>Can you rescue a stalled implementation?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 text-on-surface-variant leading-relaxed">
                            Yes. We conduct recovery audits to identify friction points—whether technical, vendor-related, or cultural—and pivot the strategy toward successful completion.
                        </div>
</details>
<details className="bg-surface-container-lowest p-6 rounded-lg shadow-sm border border-surface-variant/20 group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span>How do you handle software selection?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 mt-4 text-on-surface-variant leading-relaxed">
                            We use a neutral, requirements-driven matrix to evaluate vendors based on your specific scalability needs, technical stack, and budget constraints.
                        </div>
</details>
</div>
</div>
</section>
{/*  Section 8: CTA Band  */}
<section className="py-20 bg-primary-container text-white">
<div className="max-w-screen-2xl mx-auto px-8 text-center">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-10">Ready to Transform Your Finance Function?</h2>
<Link to="/contact" className="bg-white text-primary font-bold px-10 py-5 rounded-md text-lg shadow-xl hover:bg-surface transition-colors active:scale-95">
                    Schedule a Discovery Call
                </Link>
</div>
</section>
</main>
{/*  Footer  */}
    </>
  );
}

export default FinancialTransformation;
