import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

function Training() {
  return (
    <>
      <SEO 
        title="Executive Finance Training & Workshops" 
        description="Upskill your finance and commercial teams with specialized training in gross-to-net strategy, leadership development, and finance fundamentals for life sciences."
        keywords="finance leadership training, GTN workshops, biotech finance executive training, finance fundamentals for leaders"
      />
      {/*  TopNavBar  */}

<main className="pt-20">
{/*  Section 1: Hero  */}
<section className="relative min-h-[870px] flex items-center justify-center overflow-hidden bg-surface py-24">
<div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
<div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
<div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-secondary rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
</div>
<div className="container mx-auto px-8 relative z-10 text-center">
<div className="inline-flex items-center px-4 py-1.5 rounded-full bg-surface-container text-primary-container text-[11px] font-bold uppercase tracking-[0.1em] mb-8 animate-fade-in">
                    Patients &amp; Profitability™ Training Programs
                </div>
<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-on-surface mb-8 leading-[1.1]">
                    Where Clinical Impact Meets <br/>
<span className="text-primary-container">Financial Intelligence</span>
</h1>
<p className="max-w-3xl mx-auto text-on-surface-variant text-lg md:text-xl leading-relaxed mb-12">
                    Two specialized training programs designed to bridge the gap between patient outcomes and financial performance — for finance professionals and commercial leaders in life sciences.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<Link to="/training" className="w-full sm:w-auto px-8 py-4 bg-primary-container text-on-primary rounded-md font-bold text-base shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95">
                        Explore Programs
                    </Link>
<Link to="/training" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-primary-container text-primary-container rounded-md font-bold text-base transition-colors hover:bg-surface-container-low active:scale-95">
                        Request a Workshop
                    </Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-16 border-t border-outline-variant/30">
<div className="flex flex-col items-center">
<span className="text-3xl font-black text-on-surface mb-1">2</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Specialized Programs</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-black text-on-surface mb-1">Life Sciences</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Industry Expertise</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl font-black text-on-surface mb-1">Workshops</span>
<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Flexible Delivery</span>
</div>
</div>
</div>
</section>
{/*  Section 2: Program Cards  */}
<section className="bg-surface-container-low py-24">
<div className="container mx-auto px-8 max-w-7xl">
<div className="text-center mb-16">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">Tailored Curriculum</span>
<h2 className="text-4xl font-bold tracking-tight text-on-surface">Choose Your Program</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
{/*  Program 1  */}
<div className="bg-surface-container-lowest p-10 md:p-14 rounded-xl editorial-shadow flex flex-col group transition-all hover:scale-[1.01]">
<div className="flex justify-between items-start mb-10">
<div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-4xl">trending_up</span>
</div>
<span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold uppercase tracking-wider rounded">For Finance Professionals</span>
</div>
<h3 className="text-3xl font-bold mb-6 text-on-surface">Rising as a Finance Leader™</h3>
<p className="text-on-surface-variant mb-10 text-lg">A transformative program for finance professionals stepping into senior roles or seeking to amplify their strategic impact.</p>
<div className="space-y-4 mb-12 flex-grow">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<span className="text-on-surface font-medium">Developing executive presence and influence</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<span className="text-on-surface font-medium">Translating complex data into clinical narratives</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<span className="text-on-surface font-medium">Managing high-stakes C-suite relationships</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<span className="text-on-surface font-medium">Leading cross-functional strategic teams</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-8 border-t border-outline-variant/30 mb-8">
<div>
<span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Duration</span>
<span className="text-sm font-semibold">Half-day or Full-day</span>
</div>
<div>
<span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Format</span>
<span className="text-sm font-semibold">In-person or Virtual</span>
</div>
</div>
<Link to="/services" className="group/btn flex items-center justify-center gap-2 text-primary-container font-bold py-4 border border-primary-container/20 rounded-md hover:bg-primary-container hover:text-on-primary transition-all">
                            Learn More 
                            <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</Link>
</div>
{/*  Program 2  */}
<div className="bg-surface-container-lowest p-10 md:p-14 rounded-xl editorial-shadow flex flex-col group transition-all hover:scale-[1.01]">
<div className="flex justify-between items-start mb-10">
<div className="w-16 h-16 bg-surface-container rounded-lg flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-4xl">finance</span>
</div>
<span className="px-3 py-1 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold uppercase tracking-wider rounded">For Commercial Leaders</span>
</div>
<h3 className="text-3xl font-bold mb-6 text-on-surface">Finance Fundamentals for Commercial Leaders™</h3>
<p className="text-on-surface-variant mb-10 text-lg">A practical, jargon-free program for commercial leaders who need to be fluent in finance without becoming accountants.</p>
<div className="space-y-4 mb-12 flex-grow">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<span className="text-on-surface font-medium">P&amp;L interpretation and impact analysis</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<span className="text-on-surface font-medium">Mastering budgets and forecast logic</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<span className="text-on-surface font-medium">Gross-to-Net (GTN) and margin management</span>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary-container mt-1">check_circle</span>
<span className="text-on-surface font-medium">ROI thinking for commercial investments</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 pt-8 border-t border-outline-variant/30 mb-8">
<div>
<span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Duration</span>
<span className="text-sm font-semibold">Half-day Workshop</span>
</div>
<div>
<span className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Format</span>
<span className="text-sm font-semibold">In-person, Virtual, or Self-paced</span>
</div>
</div>
<Link to="/services" className="group/btn flex items-center justify-center gap-2 text-primary-container font-bold py-4 border border-primary-container/20 rounded-md hover:bg-primary-container hover:text-on-primary transition-all">
                            Learn More 
                            <span className="material-symbols-outlined transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
</Link>
</div>
</div>
</div>
</section>
{/*  Section 3: Why This Training  */}
<section className="bg-surface py-24">
<div className="container mx-auto px-8 max-w-7xl">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-2xl">
<span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">Proven Methodology</span>
<h2 className="text-4xl font-bold tracking-tight text-on-surface">Why Patients &amp; Profitability™?</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="group">
<div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container-low">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Close-up of biotech laboratory equipment with soft blue lighting and professional clinical setting" src="/images/img_19.jpg"/>
</div>
<h4 className="text-xl font-bold mb-4">Built for Life Sciences</h4>
<p className="text-on-surface-variant leading-relaxed">No generic corporate examples. We use real biotech and pharma scenarios that reflect the complex reality of clinical development and commercialization.</p>
</div>
<div className="group">
<div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container-low">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Hands pointing at financial charts and tablets during a high-level executive meeting in a modern office" src="/images/img_20.jpg"/>
</div>
<h4 className="text-xl font-bold mb-4">Immediately Applicable</h4>
<p className="text-on-surface-variant leading-relaxed">Frameworks and tools your team can use Monday morning to make better decisions, drive alignment, and improve profitability.</p>
</div>
<div className="group">
<div className="mb-8 overflow-hidden rounded-lg aspect-video bg-surface-container-low">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Professional business executive leading a workshop in a bright glass-walled conference room" src="/images/img_21.jpg"/>
</div>
<h4 className="text-xl font-bold mb-4">Led by a Real Executive</h4>
<p className="text-on-surface-variant leading-relaxed">Patrick R. Coyle brings 20+ years of biotech finance experience. This isn't academic theory; it's battle-tested leadership insights.</p>
</div>
</div>
</div>
</section>
{/*  Section 4: Testimonial  */}
<section className="bg-surface-container-low py-32">
<div className="container mx-auto px-8 max-w-5xl text-center">
<span className="material-symbols-outlined text-6xl text-primary-container/20 mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<blockquote className="text-3xl md:text-4xl font-light italic leading-snug text-on-surface mb-12">
                    "Patrick is a natural leader beyond being an outstanding people manager. Very few people have such a great combination of <span className="font-bold">skills and human quality</span>."
                </blockquote>
<div className="flex flex-col items-center">
<div className="w-16 h-[1px] bg-primary-container/30 mb-6"></div>
<p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">Global Commercialization Leader</p>
<p className="text-sm text-on-surface-variant mt-1">Cell Therapy | Oncology</p>
</div>
</div>
</section>
{/*  Section 5: About the Trainer  */}
<section className="bg-surface py-32">
<div className="container mx-auto px-8 max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-primary-container/10"></div>
<div className="overflow-hidden rounded-2xl shadow-2xl aspect-[4/5] bg-surface-variant">
<img className="w-full h-full object-cover" data-alt="Professional portrait of a male executive in a navy suit, reflecting confidence and approachability" src="/founder.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-primary-container/10"></div>
</div>
<div>
<span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4 block">Executive Stewardship</span>
<h3 className="text-4xl font-extrabold text-on-surface mb-8 tracking-tight">Meet Your Trainer</h3>
<div className="space-y-6 text-on-surface-variant text-lg leading-relaxed mb-10">
<p>
                                Patrick R. Coyle is a seasoned biotech executive who has spent over two decades navigating the intersection of clinical success and financial sustainability. His career spans leadership roles in some of the most innovative life sciences organizations in the world.
                            </p>
<p>
                                Through <span className="italic">Patients &amp; Profitability™</span>, Patrick decodes the financial complexities of the industry for those on the front lines of commercialization and empowers finance teams to become strategic partners in the pursuit of patient outcomes.
                            </p>
</div>
<Link className="inline-flex items-center gap-3 text-primary font-bold group" to="https://www.linkedin.com/in/pcoyle/" target="_blank">
                            Connect on LinkedIn
                            <span className="w-8 h-8 rounded-full bg-primary-container/5 flex items-center justify-center transition-colors group-hover:bg-primary-container group-hover:text-on-primary">
<span className="material-symbols-outlined text-sm">north_east</span>
</span>
</Link>
</div>
</div>
</div>
</section>
{/*  Section 6: FAQ Accordion  */}
<section className="bg-surface-container-low py-32">
<div className="container mx-auto px-8 max-w-4xl">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold tracking-tight text-on-surface">Common Questions</h2>
<p className="text-on-surface-variant mt-4">Everything you need to know about our training logistics.</p>
</div>
<div className="space-y-4">
{/*  Q1  */}
<div className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden">
<Link to="/training" className="w-full px-8 py-6 text-left flex items-center justify-between group">
<span className="font-bold text-on-surface">Can these programs be delivered virtually?</span>
<span className="material-symbols-outlined text-primary-container transition-transform group-focus:rotate-180">expand_more</span>
</Link>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed">
                            Yes. Both programs are designed for high-impact virtual delivery using interactive whiteboards and breakout rooms, or in-person workshop formats for regional teams.
                        </div>
</div>
{/*  Q2  */}
<div className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden">
<Link to="/training" className="w-full px-8 py-6 text-left flex items-center justify-between group">
<span className="font-bold text-on-surface">What is the ideal group size for a workshop?</span>
<span className="material-symbols-outlined text-primary-container transition-transform group-focus:rotate-180">expand_more</span>
</Link>
<div className="px-8 pb-6 text-on-surface-variant leading-relaxed">
                            To ensure meaningful discussion and hands-on practice, we recommend 12-20 participants per session. However, we can accommodate larger groups for keynote-style sessions.
                        </div>
</div>
{/*  Q3  */}
<details className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-bold text-on-surface">Is the content customizable for our specific therapy area?</span>
<span className="material-symbols-outlined text-primary-container transition-transform group-focus:rotate-180 group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 px-8 pb-6 text-on-surface-variant leading-relaxed">
                            Absolutely. We tailor case studies and examples to your specific modality (e.g., Cell/Gene Therapy, Oncology, Rare Disease) to ensure maximum relevance for your team.
                        </div>
</details>
{/*  Q4  */}
<details className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-bold text-on-surface">How far in advance should we book a session?</span>
<span className="material-symbols-outlined text-primary-container transition-transform group-focus:rotate-180 group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 px-8 pb-6 text-on-surface-variant leading-relaxed">
                            Typically, we require 6-8 weeks lead time to allow for customization and logistics planning, particularly for in-person international workshops.
                        </div>
</details>
{/*  Q5  */}
<details className="bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden group">
<summary className="w-full flex justify-between items-center text-left cursor-pointer outline-none list-none [&::-webkit-details-marker]:hidden">

<span className="font-bold text-on-surface">Are CPE credits available for finance professionals?</span>
<span className="material-symbols-outlined text-primary-container transition-transform group-focus:rotate-180 group-open:rotate-180 transition-transform duration-300">expand_more</span>

</summary>
<div className="hidden group-open:block animate-in fade-in slide-in-from-top-2 px-8 pb-6 text-on-surface-variant leading-relaxed">
                            We can work with your organization's learning &amp; development team to provide the necessary documentation for participants to claim professional education credits.
                        </div>
</details>
</div>
</div>
</section>
{/*  Section 7: CTA Band  */}
<section className="bg-primary-container py-24 text-center">
<div className="container mx-auto px-8 max-w-4xl">
<h2 className="text-4xl font-extrabold text-white mb-6">Ready to Elevate Your Team's Impact?</h2>
<p className="text-white/80 text-xl mb-12">Connect with Patrick directly to discuss your organizational goals and request a custom workshop proposal.</p>
<Link to="/training" className="bg-white text-primary-container px-10 py-5 rounded-md font-black uppercase tracking-widest text-sm hover:bg-white/90 active:scale-95 transition-all shadow-xl">
                    Request a Workshop
                </Link>
</div>
</section>
</main>
{/*  Footer  */}
    </>
  );
}

export default Training;
