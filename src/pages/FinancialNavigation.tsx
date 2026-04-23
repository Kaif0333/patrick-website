import { Link } from 'react-router-dom';


function FinancialNavigation() {
  return (
    <>
      {/*  TopNavBar  */}

<main className="pt-20">
{/*  Service Hero  */}
<section className="relative px-8 py-24 md:py-32 max-w-screen-2xl mx-auto overflow-hidden">
<div className="flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-[55%]">
<nav className="flex mb-6 text-xs font-label uppercase tracking-widest text-on-surface-variant font-semibold">
<span>Services</span>
<span className="mx-2">/</span>
<span className="text-primary">Financial Navigation</span>
</nav>
<p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Financial Navigation</p>
<h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-8 text-on-surface">
                        Strategic CFO Leadership <br/><span className="text-primary">Without</span> the Full-Time Commitment
                    </h1>
<p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                        High-growth biotech and life science enterprises require sophisticated financial oversight. Our Fractional CFO services provide clinical precision in wealth management and operational strategy.
                    </p>
<div className="flex flex-wrap gap-4">
<Link to="/contact" className="bg-primary-container text-on-primary px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider shadow-lg shadow-primary/20">
                            Schedule a Consultation
                        </Link>
<Link to="/services" className="border border-outline-variant/30 text-on-surface px-8 py-4 rounded-md font-bold text-sm uppercase tracking-wider hover:bg-surface-container-low transition-colors">
                            View All Services
                        </Link>
</div>
</div>
<div className="md:w-[45%] relative">
<div className="aspect-square rounded-2xl overflow-hidden executive-shadow bg-surface-container-low">
<img alt="Professional financial dashboard with data visualization" className="w-full h-full object-cover mix-blend-multiply opacity-80" data-alt="Modern professional office setting with a blurred high-end financial dashboard displayed on a sleek glass monitor, sophisticated cool lighting" src="/images/img_5.jpg"/>
<div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
</div>
{/*  Decorative Element  */}
<div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-xl executive-shadow hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container/10 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">trending_up</span>
</div>
<div>
<p className="text-xs font-label uppercase tracking-widest text-on-surface-variant font-bold">Performance Delta</p>
<p className="text-xl font-black text-on-surface">+32% Efficiency</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/*  Who It's For + Challenges  */}
<section className="bg-surface-container-low py-24 md:py-32">
<div className="max-w-screen-2xl mx-auto px-8 grid md:grid-cols-2 gap-16">
{/*  Who it's for  */}
<div>
<h2 className="text-3xl font-bold tracking-tight mb-12 text-on-surface">Who It's For</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
</div>
<div>
<h4 className="font-bold text-lg text-on-surface">Visionary CEOs</h4>
<p className="text-on-surface-variant">Leaders who need a strategic partner to translate complex goals into financial roadmaps.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
</div>
<div>
<h4 className="font-bold text-lg text-on-surface">Biotech Innovators</h4>
<p className="text-on-surface-variant">Early and growth-stage life science firms managing high burn rates and R&amp;D capital allocation.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
</div>
<div>
<h4 className="font-bold text-lg text-on-surface">M&amp;A Ready Entities</h4>
<p className="text-on-surface-variant">Companies preparing for exit, acquisition, or significant institutional investment rounds.</p>
</div>
</li>
</ul>
</div>
{/*  Challenges  */}
<div>
<h2 className="text-3xl font-bold tracking-tight mb-12 text-on-surface">Challenges We Solve</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4 p-6 bg-white rounded-lg executive-shadow">
<div className="mt-1 text-tertiary">
<span className="material-symbols-outlined text-[32px]">warning</span>
</div>
<div>
<h4 className="font-bold text-lg text-on-surface">Reactive Finance</h4>
<p className="text-on-surface-variant">Moving from "historical recording" to proactive predictive modeling and risk mitigation.</p>
</div>
</li>
<li className="flex items-start gap-4 p-6 bg-white rounded-lg executive-shadow">
<div className="mt-1 text-tertiary">
<span className="material-symbols-outlined text-[32px]">analytics</span>
</div>
<div>
<h4 className="font-bold text-lg text-on-surface">Manual FP&amp;A</h4>
<p className="text-on-surface-variant">Replacing fragile spreadsheets with robust, automated financial planning and analysis systems.</p>
</div>
</li>
<li className="flex items-start gap-4 p-6 bg-white rounded-lg executive-shadow">
<div className="mt-1 text-tertiary">
<span className="material-symbols-outlined text-[32px]">emergency</span>
</div>
<div>
<h4 className="font-bold text-lg text-on-surface">No KPI Clarity</h4>
<p className="text-on-surface-variant">Establishing the vital signs of your business with data-driven performance indicators.</p>
</div>
</li>
</ul>
</div>
</div>
</section>
{/*  What's Included  */}
<section className="py-24 md:py-32 px-8 max-w-screen-2xl mx-auto">
<div className="text-center mb-20">
<p className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Precision Services</p>
<h2 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">What's Included in Financial Navigation</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
{/*  Card 1  */}
<div className="bg-surface-container-low p-10 rounded-lg border border-transparent hover:border-primary-container/20 hover:bg-white hover:executive-shadow transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">architecture</span>
<h3 className="text-xl font-bold mb-4">Strategic Financial Planning</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Multi-year forecasting and capital structure optimization tailored for biotech scaling cycles.</p>
</div>
{/*  Card 2  */}
<div className="bg-surface-container-low p-10 rounded-lg border border-transparent hover:border-primary-container/20 hover:bg-white hover:executive-shadow transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">show_chart</span>
<h3 className="text-xl font-bold mb-4">Board &amp; Investor Reporting</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Institutional-grade reporting packages that build trust and command authority in the boardroom.</p>
</div>
{/*  Card 3  */}
<div className="bg-surface-container-low p-10 rounded-lg border border-transparent hover:border-primary-container/20 hover:bg-white hover:executive-shadow transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">handshake</span>
<h3 className="text-xl font-bold mb-4">FP&amp;A Partnership</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Deep integration with your management team to drive financial planning and analysis excellence.</p>
</div>
{/*  Card 4  */}
<div className="bg-surface-container-low p-10 rounded-lg border border-transparent hover:border-primary-container/20 hover:bg-white hover:executive-shadow transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">query_stats</span>
<h3 className="text-xl font-bold mb-4">Decision Support</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Quantitative modeling for "What-If" scenarios, M&amp;A evaluations, and product launches.</p>
</div>
{/*  Card 5  */}
<div className="bg-surface-container-low p-10 rounded-lg border border-transparent hover:border-primary-container/20 hover:bg-white hover:executive-shadow transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">dashboard</span>
<h3 className="text-xl font-bold mb-4">KPI &amp; Metrics Framework</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Defining and tracking the unit economics and operational metrics that matter most.</p>
</div>
{/*  Card 6  */}
<div className="bg-surface-container-low p-10 rounded-lg border border-transparent hover:border-primary-container/20 hover:bg-white hover:executive-shadow transition-all duration-300">
<span className="material-symbols-outlined text-primary text-4xl mb-6">groups</span>
<h3 className="text-xl font-bold mb-4">Team Development</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">Mentoring your internal finance staff to elevate performance and accuracy across the board.</p>
</div>
</div>
</section>
{/*  Process  */}
<section className="bg-surface-container-low py-24 md:py-32">
<div className="max-w-screen-2xl mx-auto px-8">
<div className="mb-20">
<h2 className="text-4xl font-black tracking-tight text-on-surface">The Financial Navigation Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-0">
{/*  Step 1  */}
<div className="group relative pb-12 md:pb-0">
<div className="text-8xl font-black text-primary/5 absolute -top-8 left-0 select-none">01</div>
<div className="relative z-10 pt-12">
<h4 className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-4">Discovery</h4>
<p className="text-on-surface-variant text-sm pr-6">Deep dive into current financial hygiene, systems, and long-term business objectives.</p>
</div>
<div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-primary-container rounded-full translate-y-[-50%] z-20 shadow-[0_0_0_8px_rgba(59,87,171,0.1)]"></div>
</div>
{/*  Step 2  */}
<div className="group relative pb-12 md:pb-0">
<div className="text-8xl font-black text-primary/5 absolute -top-8 left-0 select-none">02</div>
<div className="relative z-10 pt-12 md:pl-6">
<h4 className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-4">Strategic Blueprint</h4>
<p className="text-on-surface-variant text-sm pr-6">Developing a custom roadmap for financial operations and capital management.</p>
</div>
<div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-primary-container rounded-full translate-y-[-50%] z-20 shadow-[0_0_0_8px_rgba(59,87,171,0.1)]"></div>
</div>
{/*  Step 3  */}
<div className="group relative pb-12 md:pb-0">
<div className="text-8xl font-black text-primary/5 absolute -top-8 left-0 select-none">03</div>
<div className="relative z-10 pt-12 md:pl-6">
<h4 className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-4">Embedded Partnership</h4>
<p className="text-on-surface-variant text-sm pr-6">Active integration into your leadership team, managing day-to-day strategic finance.</p>
</div>
<div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-primary-container rounded-full translate-y-[-50%] z-20 shadow-[0_0_0_8px_rgba(59,87,171,0.1)]"></div>
</div>
{/*  Step 4  */}
<div className="group relative pb-12 md:pb-0">
<div className="text-8xl font-black text-primary/5 absolute -top-8 left-0 select-none">04</div>
<div className="relative z-10 pt-12 md:pl-6">
<h4 className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-4">Reporting &amp; Governance</h4>
<p className="text-on-surface-variant text-sm pr-6">Implementation of high-frequency reporting cycles and rigorous financial controls.</p>
</div>
<div className="hidden md:block absolute top-1/2 -right-2 w-4 h-4 bg-primary-container rounded-full translate-y-[-50%] z-20 shadow-[0_0_0_8px_rgba(59,87,171,0.1)]"></div>
</div>
{/*  Step 5  */}
<div className="group relative">
<div className="text-8xl font-black text-primary/5 absolute -top-8 left-0 select-none">05</div>
<div className="relative z-10 pt-12 md:pl-6">
<h4 className="text-sm font-label uppercase tracking-widest text-primary font-bold mb-4">Continuous Improvement</h4>
<p className="text-on-surface-variant text-sm">Ongoing optimization of margins, capital efficiency, and strategic scalability.</p>
</div>
</div>
</div>
</div>
</section>
{/*  Testimonial  */}
<section className="py-24 px-8 max-w-5xl mx-auto">
<div className="bg-white p-12 md:p-16 rounded-lg executive-shadow border-l-[12px] border-primary flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<span className="material-symbols-outlined text-primary/20 text-6xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<blockquote className="text-2xl md:text-3xl font-medium text-on-surface leading-tight mb-8">
                        "Patrick's expertise in Hyperion Planning and process reengineering was transformative. He didn't just manage our finances; he built a navigation system that allowed us to scale with confidence."
                    </blockquote>
<div>
<p className="text-sm font-label uppercase tracking-widest text-primary font-bold">Chief Financial Officer</p>
<p className="text-xl font-black text-on-surface">Counterplay Games</p>
</div>
</div>
<div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 bg-surface-container">
<img alt="CFO Portrait" className="w-full h-full object-cover" data-alt="Close-up portrait of a professional male executive in a blue suit, neutral studio background, soft cinematic lighting" src="/images/img_6.jpg"/>
</div>
</div>
</section>
{/*  FAQ  */}
<section className="bg-surface-container-low py-24 md:py-32 px-8">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl font-black tracking-tight text-on-surface mb-16 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
{/*  FAQ 1  */}
<details className="group bg-white rounded-lg executive-shadow overflow-hidden" open={true}>
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-bold text-lg text-on-surface">How long is a typical engagement?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 text-on-surface-variant border-t border-surface-variant/30">
                            Most strategic navigation engagements are long-term partnerships ranging from 12-24 months. However, we also offer project-based sprints for M&amp;A preparation or system implementations.
                        </div>
</details>
{/*  FAQ 2  */}
<details className="group bg-white rounded-lg executive-shadow overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-bold text-lg text-on-surface">How many hours per week is the CFO allocated?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 text-on-surface-variant border-t border-surface-variant/30">
                            Allocation is based on your specific needs, typically ranging from 5 to 20 hours per week. We focus on results and strategic impact rather than just hourly tracking.
                        </div>
</details>
{/*  FAQ 3  */}
<details className="group bg-white rounded-lg executive-shadow overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-bold text-lg text-on-surface">Is this a replacement for my current bookkeeper?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 text-on-surface-variant border-t border-surface-variant/30">
                            No. Financial Navigation provides high-level strategic leadership. We oversee your existing accounting team or bookkeepers to ensure their work aligns with executive objectives.
                        </div>
</details>
{/*  FAQ 4  */}
<details className="group bg-white rounded-lg executive-shadow overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-bold text-lg text-on-surface">How do you integrate with our internal team?</span>
<span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
</summary>
<div className="p-6 pt-0 text-on-surface-variant border-t border-surface-variant/30">
                            We embed directly into your Slack, email, and meeting cadences. To your employees and investors, we are a core part of your executive leadership team.
                        </div>
</details>
</div>
</div>
</section>
{/*  CTA BAND  */}
<section className="bg-primary-container py-24 px-8 text-center text-on-primary">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Ready to Steer Your Financial Future?</h2>
<p className="text-xl text-primary-fixed-dim/80 mb-10">
                    Schedule a free discovery call to discuss how Financial Navigation can provide the precision and leadership your biotech firm needs to thrive.
                </p>
<Link to="/contact" className="bg-white text-primary px-10 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-primary-fixed transition-colors">
                    Schedule a Free Discovery Call
                </Link>
</div>
</section>
</main>
{/*  Footer  */}
    </>
  );
}

export default FinancialNavigation;
