import { Link, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

function Contact() {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="Contact & Consultation" 
        description="Schedule a free discovery call with Patrick R. Coyle to discuss your organization's financial navigation, transformation, or life sciences advisory needs."
        keywords="contact Patrick R. Coyle, book CFO consultation, life sciences advisory inquiry, financial transformation discovery call"
      />
      {/*  Header Navigation  */}

<main className="pt-20">
{/*  Section 1: Contact Hero  */}
<section className="bg-surface-container-lowest py-24 px-8 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
{/*  Left Content  */}
<div className="w-full lg:w-[55%]">
<span className="text-primary font-label text-xs font-bold tracking-[0.1em] uppercase mb-4 block">GET IN TOUCH</span>
<h1 className="text-5xl md:text-6xl font-headline font-bold text-on-surface tracking-tight leading-[1.1] mb-8">
                        Let's Start a <br /><span className="text-primary-container">Conversation</span>
</h1>
<p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-xl">
                        Whether you're navigating a financial challenge, exploring a strategic partnership, or looking for the right training program — I'd love to hear from you. I respond to all inquiries personally within 1–2 business days.
                    </p>
<ul className="space-y-6 mb-12">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary font-bold">check_circle</span>
<span className="text-on-surface font-medium">Personal response within 48 hours</span>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary font-bold">check_circle</span>
<span className="text-on-surface font-medium">No hard sell — just an honest conversation</span>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary font-bold">check_circle</span>
<span className="text-on-surface font-medium">20+ years of senior finance leadership behind every engagement</span>
</li>
</ul>
<Link className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300" to="https://www.linkedin.com/in/pcoyle/" target="_blank">
                        Prefer LinkedIn? Connect with Patrick <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
{/*  Right Content: Form Card  */}
<div className="w-full lg:w-[45%]">
<div className="bg-white p-10 rounded-xl border border-outline-variant/30 shadow-[0_32px_64px_-16px_rgba(31,62,146,0.1)]">
<h2 className="text-2xl font-headline font-bold text-on-surface mb-8">Send a Message</h2>
<form onSubmit={(e) => { e.preventDefault(); navigate('/consultation/success'); }} className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] font-bold tracking-wider text-on-surface-variant uppercase">First Name*</label>
<input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="John" type="text" />
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-bold tracking-wider text-on-surface-variant uppercase">Last Name*</label>
<input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="Doe" type="text" />
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-bold tracking-wider text-on-surface-variant uppercase">Email Address*</label>
<input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="john@company.com" type="email" />
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] font-bold tracking-wider text-on-surface-variant uppercase">Company Name</label>
<input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" type="text" />
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-bold tracking-wider text-on-surface-variant uppercase">Your Role / Title</label>
<input className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" type="text" />
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-bold tracking-wider text-on-surface-variant uppercase">Reason for Contact</label>
<select className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface appearance-none">
<option>Financial Navigation</option>
<option>Life Science Advisory</option>
<option>Financial Transformation</option>
<option>Training Inquiry</option>
<option>Ebook</option>
<option>Speaking</option>
<option>General Inquiry</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-bold tracking-wider text-on-surface-variant uppercase">Message*</label>
<textarea className="w-full bg-surface-container-low border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="How can I help you?" rows={4}></textarea>
</div>
<button 
  type="submit" 
  className="bg-primary text-on-primary px-8 py-4 rounded-md font-bold text-lg hover:bg-primary/90 transition-colors cursor-pointer w-full text-center block active:scale-95"
>
  Send Message
</button>
<p className="text-center text-[11px] text-on-surface-variant/70 italic">
                                Your information is kept confidential.
                            </p>
</form>
</div>
</div>
</div>
</section>
{/*  Section 2: Alternative Contact  */}
<section className="bg-surface py-24 px-8">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-headline font-bold text-on-surface mb-12 text-center">Other Ways to Connect</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/*  LinkedIn Card  */}
<div className="bg-surface-container-low p-10 rounded-xl group hover:bg-surface-container-lowest hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>share</span>
</div>
<h3 className="text-xl font-bold mb-2">Connect on LinkedIn</h3>
<p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Patrick R. Coyle, MBA — Baker Tilly US</p>
<Link to="/about" className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                            View Profile <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
{/*  Schedule Card  */}
<div className="bg-surface-container-low p-10 rounded-xl group hover:bg-surface-container-lowest hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
</div>
<h3 className="text-xl font-bold mb-2">Schedule a Call</h3>
<p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Book a free 30-minute discovery call via calendar.</p>
<Link to="/contact" className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                            Book a Time <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
{/*  Speaking Card  */}
<div className="bg-surface-container-low p-10 rounded-xl group hover:bg-surface-container-lowest hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>mic</span>
</div>
<h3 className="text-xl font-bold mb-2">Speaking Engagements</h3>
<p className="text-on-surface-variant mb-8 text-sm leading-relaxed">Available for keynotes and panel discussions.</p>
<Link to="/about" className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                            Inquire About Speaking <span className="material-symbols-outlined text-sm">arrow_forward</span>
</Link>
</div>
</div>
</div>
</section>
{/*  Section 3: Testimonial Snippet  */}
<section className="bg-surface-container-low py-24 px-8 border-y border-outline-variant/20">
<div className="max-w-4xl mx-auto text-center">
<span className="material-symbols-outlined text-primary text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
<blockquote className="text-2xl md:text-3xl font-headline font-light italic leading-relaxed text-on-surface mb-10">
                    "Patrick is very skilled and very smart. He knows the pharmaceutical industry very well... My personal relationship with him has been always extremely positive and it has been a pleasure to work together."
                </blockquote>
<div className="space-y-1">
<p className="text-primary font-bold uppercase tracking-[0.15em] text-xs">EVP &amp; CFO</p>
<p className="text-on-surface-variant font-medium text-sm">Avenzo Therapeutics</p>
</div>
</div>
</section>
{/*  Section 4: Simple CTA  */}
<section className="bg-surface-container-lowest py-24 px-8">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-4xl font-headline font-bold text-on-surface mb-6">Not Sure Where to Start?</h2>
<p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
                    Browse Patrick's services to find the right engagement model for your organization.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<Link to="/services" className="bg-primary-container text-on-primary px-10 py-4 rounded-md font-bold text-sm tracking-widest uppercase hover:shadow-xl transition-all">
                        View Services
                    </Link>
<Link to="/training" className="border-2 border-primary-container text-primary-container px-10 py-4 rounded-md font-bold text-sm tracking-widest uppercase hover:bg-surface-container-low transition-all">
                        Explore Training Programs
                    </Link>
</div>
</div>
</section>
</main>
{/*  Footer  */}
    </>
  );
}

export default Contact;
